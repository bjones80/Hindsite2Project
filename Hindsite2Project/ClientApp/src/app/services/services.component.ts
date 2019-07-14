import { Component, OnInit, Injectable } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})

@Injectable({
  providedIn: 'root',
})
export class ServicesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
