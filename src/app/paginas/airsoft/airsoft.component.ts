import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-airsoft',
  templateUrl: './airsoft.component.html',
  styleUrls: ['./airsoft.component.css']
})
export class AirsoftComponent {

  constructor(private readonly router: Router
  ) {
  }

  IrAirsoft(): void {
  }

}
