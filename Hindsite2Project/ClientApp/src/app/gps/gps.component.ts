import { Component, OnInit, Injectable } from '@angular/core';

@Component({
  selector: 'app-gps',
  templateUrl: './gps.component.html',
  styleUrls: ['./gps.component.css']
})

@Injectable({
  providedIn: 'root',
})

export class GpsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
