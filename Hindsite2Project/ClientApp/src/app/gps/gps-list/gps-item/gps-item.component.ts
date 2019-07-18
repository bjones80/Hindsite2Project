import { Component, OnInit, Input } from '@angular/core';
import { GpsInfo } from '../../gpsInfo.model';
import { GpsService } from '../../gps.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-gps-item',
  templateUrl: './gps-item.component.html',
  styleUrls: ['./gps-item.component.css']
})
export class GpsItemComponent implements OnInit {

  @Input() gpsInfo: GpsInfo;
  id: number;

  constructor(private gpsService: GpsService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          this.gpsInfo = this.gpsService.getGpsInfo(this.id);
        })
  }

  onDelete() {
    this.gpsService.deleteGpsInfo(this.gpsInfo);
    this.router.navigate(['/gps']);
  }

}
