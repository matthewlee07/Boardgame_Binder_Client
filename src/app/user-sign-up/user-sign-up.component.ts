import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-sign-up',
  templateUrl: './user-sign-up.component.html',
  styleUrls: ['./user-sign-up.component.css']
})
export class UserSignUpComponent implements OnInit {
  age = Array.from(Array(83).keys()).map(i => i + 18);
  constructor() { }

  ngOnInit() {
  }

}
