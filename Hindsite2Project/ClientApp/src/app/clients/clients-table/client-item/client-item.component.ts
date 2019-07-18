import { Component, OnInit, Input } from '@angular/core';
import { Client } from '../../client.model';
import { GpsInfo } from '../../gpsInfo.model'

@Component({
  selector: 'app-client-item',
  templateUrl: './client-item.component.html',
  styleUrls: ['./client-item.component.css']
})
export class ClientItemComponent implements OnInit {

  @Input() client: Client;
  @Input() gpsInfo: GpsInfo;

  ngOnInit() {
  }

}
