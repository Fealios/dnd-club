import { Component, OnInit, Output } from '@angular/core';
import { CharacterService } from '../character.service';
import { character } from '../character.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [CharacterService]
})
export class AdminComponent {
  characters: character[] = [];
  constructor(private characterService: CharacterService) { }

  ngOnInit() {
  }

}
