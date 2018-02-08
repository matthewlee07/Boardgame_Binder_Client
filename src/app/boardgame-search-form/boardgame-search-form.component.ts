import { Component } from '@angular/core';

@Component({
  selector: 'app-boardgame-search-form',
  templateUrl: './boardgame-search-form.component.html',
  styleUrls: ['./boardgame-search-form.component.css']
})
export class BoardgameSearchFormComponent {
  counter = Array.from(Array(20).keys());
  ratings = Array.from(Array(21).keys()).map(i => i / 2);

  minplayers = 2;
  maxplayers = 5;
  minplayingtime = 15;
  maxplayingtime = 60;
  minrating = 7.5;
  maxrating = 10;

  submitted = false;
  onSubmit() { this.submitted = true; }
  search() {

  }
}

