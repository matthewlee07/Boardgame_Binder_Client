import { Component } from '@angular/core';

@Component({
  selector: 'app-boardgame-search-form',
  templateUrl: './boardgame-search-form.component.html',
  styleUrls: ['./boardgame-search-form.component.css']
})
export class BoardgameSearchFormComponent {
  counter = Array.from(Array(20).keys());
  // time = Array.from(Array(20).keys()).map(i => (i + 1) * 5);
  ratings = Array.from(Array(21).keys()).map(i => i / 2);


  playersMin = 1;
  playersMax = 20;
  playingTimeMin = 0;
  playingTimeMax = 120;
  ratingMin = 0;
  ragingMax = 10;

  submitted = false;
  onSubmit() { this.submitted = true; }

}

