import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLower: string = 'daniel';
  public nameUpper: string = 'DANIEL';
  public fullName: string = 'daNieL eSTebAn';

  public customDate = new Date();

}
