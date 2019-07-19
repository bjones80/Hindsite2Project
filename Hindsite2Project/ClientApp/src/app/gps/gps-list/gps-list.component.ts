import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { GpsInfo } from '../gpsInfo.model';
import { GpsService } from '../gps.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gps-list',
  templateUrl: './gps-list.component.html',
  styleUrls: ['./gps-list.component.css']
})
export class GpsListComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  gpsInfos: GpsInfo[] = [];
  term: string;


  constructor(private gpsService: GpsService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.gpsService.gpsInfoChangedEvent
      .subscribe(
        (gpsInfoList: GpsInfo[]) => {
          this.gpsInfos = gpsInfoList;
        });
    this.gpsService.getGpsInfos();
  }

  onNewGpsInfo() {
    this.router.navigate(['add'], { relativeTo: this.route });
  }

  onKeyPress(value: string) {
   this.term = value;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
