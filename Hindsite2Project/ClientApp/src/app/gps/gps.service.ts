import { Subject } from "rxjs";
import { GpsInfo } from "./gpsInfo.model";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GpsService {
  gpsInfoChangedEvent = new Subject<GpsInfo[]>();
  gpsInfos: GpsInfo[] = [];
  maxId: number;
  currentId: number;
  maxGpsInfoId: number;
  gpsInfosListClone: GpsInfo[] = [];
  id: string;

  constructor(private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string) {
    this.maxId = this.getMaxId();
  }

  storeGpsInfos(gpsInfos: GpsInfo[]) {
    let json = JSON.stringify(gpsInfos);
    let header = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http.put(this.baseUrl + 'api/GpsInfoes', json, { headers: header })
      .subscribe((response: Response) => {
        this.gpsInfoChangedEvent.next(gpsInfos.slice());
      })
  }

  getGpsInfos() {
    this.http.get<GpsInfo[]>(this.baseUrl + 'api/GpsInfoes')
      .subscribe(
        (gpsInfos) => {
          this.gpsInfos = gpsInfos;
          this.gpsInfos.sort((a, b) => a.locations > b.locations ? 1 : b.locations > a.locations ? -1 : 0);
          this.gpsInfoChangedEvent.next(this.gpsInfos.slice());
        }
      );
  }


  getGpsInfo(id: number): GpsInfo {
    for (let i = 0; i < this.gpsInfos.length; i++) {
      if (this.gpsInfos[i].id === id) {
       return this.gpsInfos[i];
      }
    }
  }

  addGpsInfo(gpsInfo: GpsInfo) {
    if (!gpsInfo) {
      return;
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    gpsInfo.id = 0;
    const strGpsInfo = JSON.stringify(gpsInfo);

    this.http.post(this.baseUrl + 'api/GpsInfoes', strGpsInfo, { headers: headers })
      .subscribe(
        (gpsInfo: GpsInfo) => {
          this.gpsInfos.push(gpsInfo);
          this.gpsInfoChangedEvent.next(this.gpsInfos.slice());
        }
      )
  }

  getMaxId(): number {
    this.gpsInfos.forEach(gpsInfo => {
      this.currentId = gpsInfo.id;
      if (this.currentId > this.maxId)
        this.maxId = this.currentId;
    });
    return this.maxId;
  }

  updateGpsInfo(originalGpsInfo: GpsInfo, newGpsInfo: GpsInfo) {
    if (!originalGpsInfo || !newGpsInfo) {
      return;
    }

    const pos = this.gpsInfos.findIndex(c => c.id === originalGpsInfo.id)
    if (pos < 0) {
      return;
    }
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    newGpsInfo.id = originalGpsInfo.id;
    this.http.put(this.baseUrl + 'api/GpsInfoes/' + originalGpsInfo.id
      , newGpsInfo, { headers: headers })
      .subscribe(
        (response: Response) => {
          this.gpsInfos[pos] = newGpsInfo;
          this.gpsInfoChangedEvent.next(this.gpsInfos.slice());
        });
  }


  deleteGpsInfo(gpsInfo: GpsInfo) {
    if (!gpsInfo) {
      return;
    }
    this.http.delete(this.baseUrl + 'api/GpsInfoes/' + gpsInfo.id)
      .subscribe(
        (gpsInfos: GpsInfo[]) => {
          this.gpsInfos = gpsInfos;
          this.gpsInfoChangedEvent.next(this.gpsInfos.slice());
        }
      )
  }
}

