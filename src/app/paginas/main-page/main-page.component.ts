import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  [x: string]: any;

  element1 = true;

  constructor(public router: Router) { }

  info: any;

  ngOnInit(): void {
    this.info = localStorage.getItem('currentUser');
    console.log(this.info);
    if (this.info == null) {
      this.element1 = true;
    } else {
      this.element1 = false;
    }
  }
}
