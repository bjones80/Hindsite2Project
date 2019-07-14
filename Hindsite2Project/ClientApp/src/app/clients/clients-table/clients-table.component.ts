import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients-table',
  templateUrl: './clients-table.component.html',
  styleUrls: ['./clients-table.component.css']
})
export class ClientsTableComponent implements OnInit {

  term: string;
  constructor() { }

  ngOnInit() {
  }

  onKeyPress(value: string){
    this.term = value;
  }

}
