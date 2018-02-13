import { Component, OnInit, Input } from '@angular/core';
import { Boardgame } from '../boardgameModel';

@Component({
  selector: 'app-boardgame-info',
  templateUrl: './boardgame-info.component.html',
  styleUrls: ['./boardgame-info.component.css']
})
export class BoardgameInfoComponent implements OnInit {
  showDetails = false;
  @Input() game: Boardgame;
  constructor() { }

  ngOnInit() {
  }

}
