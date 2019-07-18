import { Subject } from "rxjs";
import { GpsInfo } from "./gpsInfo.model";
import { HttpClient, HttpHeaders } from '@angular/common/http';



export class GpsService {
  gpsInfoChangedEvent = new Subject<GpsInfo[]>();
  gpsInfos: GpsInfo[] = [];
  maxId: number;
  currentId: number;
  maxGpsInfoId: number;
  gpsInfosListClone: GpsInfo[] = [];
  id: string;

  constructor(private http: HttpClient) {
    this.maxId = this.getMaxId();
  }

  storeGpsInfos(gpsInfos: GpsInfo[]) {
    let json = JSON.stringify(gpsInfos);
    let header = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http.put('http://localhost:3000/api/gpsInfo', json, { headers: header })
      .subscribe((response: Response) => {
        this.gpsInfoChangedEvent.next(gpsInfos.slice());
      })
  }

  getGpsInfos() {
    this.http.get<{ message: string, gpsInfos: GpsInfo[] }>('http://localhost:3000/api/gpsInfo')
      .subscribe(
        (responseData) => {
          this.gpsInfos = responseData.gpsInfos;
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

    this.http.post('http://localhost:3000/api/gpsInfo', strGpsInfo, { headers: headers })
      .subscribe(
        (gpsInfos: GpsInfo[]) => {
          this.gpsInfos = gpsInfos;
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

    this.http.put('http://localhost:3000/api/gpsInfo' + originalGpsInfo.id
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
    this.http.delete('http://localhost:3000/api/gpsInfo' + gpsInfo.id)
      .subscribe(
        (gpsInfos: GpsInfo[]) => {
          this.gpsInfos = gpsInfos;
          this.gpsInfoChangedEvent.next(this.gpsInfos.slice());
        }
      )
  }
}

