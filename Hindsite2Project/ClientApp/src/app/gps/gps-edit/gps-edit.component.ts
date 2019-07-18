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
          this.id = params['id'];
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
    let newGpsInfo = new GpsInfo(0, value.location, value.client.clientId, value.employee.employeeId, value.date, value.gpsFile);
    if (this.editMode === true) {
      this.gpsService.updateGpsInfo(this.originalGpsInfo, newGpsInfo);
    } else {
      this.gpsService.addGpsInfo(newGpsInfo);
    }
    this.router.navigate(['/gps']);
  }

  onCancel() {
    this.router.navigate(['/gps']);
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
