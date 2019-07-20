import { Component, OnInit } from '@angular/core';
import { GpsInfo } from '../gpsInfo.model';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { GpsService } from '../gps.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-gps-edit',
  templateUrl: './gps-edit.component.html',
  styleUrls: ['./gps-edit.component.css']
})
export class GpsEditComponent implements OnInit {

  originalGpsInfo: GpsInfo;
  gpsInfo: GpsInfo;
  editMode = false;
  id: number;

  constructor(private route: ActivatedRoute,
    private gpsService: GpsService,
    private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          if (!this.id) {
            this.editMode = false;
            return;
          }
          this.originalGpsInfo = this.gpsService.getGpsInfo(this.id);

          if (!this.originalGpsInfo) {
            return;
          }
          this.editMode = true;
          this.gpsInfo = JSON.parse(JSON.stringify(this.originalGpsInfo));

        });
  }

  onSubmit(form: NgForm) {
    let value = form.value;
    let newGpsInfo = new GpsInfo(0, 2, 1,  value.gpsFile, value.location, value.date);
    if (this.editMode === true) {
      this.gpsService.updateGpsInfo(this.originalGpsInfo, newGpsInfo);
    } else {
      this.gpsService.addGpsInfo(newGpsInfo);
    }
    this.router.navigate(['/gpsInfo']);
  }

  onCancel() {
    this.router.navigate(['/gpsInfo']);
  }

  isInvalidGpsInfo(newGpsInfo: GpsInfo) {
    if (!newGpsInfo) {
      return true;
    }

    if (newGpsInfo.id === this.gpsInfo.id) {
      return true;
    }
    return false;
  }

}
