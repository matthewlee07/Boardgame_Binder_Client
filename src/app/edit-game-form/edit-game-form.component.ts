import { Component, OnInit, Input } from '@angular/core';
import { EditGameForm } from '../edit-boardgame-Model';


@Component({
  selector: 'app-edit-game-form',
  templateUrl: './edit-game-form.component.html',
  styleUrls: ['./edit-game-form.component.css']
})
export class EditGameFormComponent implements OnInit {
  @Input() game: EditGameForm;
  constructor() { }
  counter = Array.from(Array(20).keys());
  ratings = Array.from(Array(21).keys()).map(i => i / 2);
  onClear() {
  }

  ngOnInit() {
  }
}
