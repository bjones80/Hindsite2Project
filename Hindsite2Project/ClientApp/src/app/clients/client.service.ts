import { Injectable } from "@angular/core";
import { Client } from "./client.model";
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { GpsInfo } from "./gpsInfo.model";


export class ClientService {

  clientChangedEvent = new Subject<Client[]>();
  gpsInfoChangedEvent = new Subject<GpsInfo[]>();
  clients: Client[] = [];
  gpsInfo: GpsInfo[] = [];
  maxId: number;
  currentId: number;
  maxClientId: number;
  maxGpsInfoId: number;
  clientListClone: Client[] = [];
  gpsInfoListClone: GpsInfo[] = [];
  id: number;

  constructor(private http: HttpClient) {
    this.maxId = this.getMaxId();
  }

  getClients() {
    this.http.get<{ message: string, clients: Client[] }>('http://localhost:3000/api/gpsInfo'')
      .subscribe(
        (responseData) => {
          this.clients = responseData.clients;
          this.clients.sort((a, b) => a.companyName > b.companyName ? 1 : b.companyName > a.companyName ? -1 : 0);
          this.clientChangedEvent.next(this.clients.slice());
        });
  }

  getClient(id: string): Client {
    for (let i = 0; i < this.clients.length; i++) {
      if (this.clients[i].id === id) {
        return this.clients[i];
      }
    }
  }
  addClient(client: Client) {
    if (!client) {
      return;
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    client.id = '';
    const strClient = JSON.stringify(client);

    this.http.post('http://localhost:3000/api/clients', strClient, { headers: headers })
      .subscribe(
        (clients: Client[]) => {
          this.clients = clients;
          this.clientChangedEvent.next(this.clients.slice());
        }
      )
  }

  getMaxId(): number {
    this.clients.forEach(client => {
      this.currentId = +client.id;
      if (this.currentId > this.maxId)
        this.maxId = this.currentId;
    });
    return this.maxId;
  }

  updateClient(originalClient: Client, newClient: Client) {
    if (!originalClient || !newClient) {
      return;
    }

    const pos = this.clients.indexOf(originalClient)
    if (pos < 0) {
      return;
    }
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const strClient = JSON.stringify(newClient);
    //TODO: call .post method
    this.http.put('http://localhost:3000/api/clients/' + originalClient.id
      , strClient, { headers: headers })
      .subscribe(
        (clients: Client[]) => {
          this.contacts = contacts;
          this.contactChangedEvent.next(this.contacts.slice());
        });
  }


  deleteContact(contact: Contact) {
    if (!contact) {
      return;
    }
    // const pos = this.contacts.findIndex(c => c.id === contact.id);

    // if (pos < 0) {
    //   return;
    // }
    // TODO: call node service using .delete method of http
    this.http.delete('http://localhost:3000/contacts/' + contact.id)
      .subscribe(
        (contacts: Contact[]) => {
          this.contacts = contacts;
          this.contactChangedEvent.next(this.contacts.slice());
        }
      )
  }
}
