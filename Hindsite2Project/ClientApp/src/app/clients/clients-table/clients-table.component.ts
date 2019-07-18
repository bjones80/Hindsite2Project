import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { GpsInfo } from '../gpsInfo.model';
import { Client } from '../client.model';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-clients-table',
  templateUrl: './clients-table.component.html',
  styleUrls: ['./clients-table.component.css']
})
export class ClientsTableComponent implements OnInit {

  subscription: Subscription;
  clients: Client[] = [];
  gpsInfo: GpsInfo[] = [];
  term: string;

  constructor(private clientService: ClientService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.clientService.getClients();
    this.subscription = this.clientService.clientChangedEvent
      .subscribe(
        (clientList: Client[]) => {
          this.clients = clientList;
        });
  }

  onAddWorkOrder() {
    this.router.navigate(['add'], { relativeTo: this.route });
  }

  onKeyPress(value: string){
    this.term = value;
  }

  ngOnDestory(): void {
    this.subscription.unsubscribe();
  }
}
