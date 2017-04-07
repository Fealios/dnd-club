import { Component, OnInit } from '@angular/core';
import { character } from '../character.model';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css'],
  providers: [CharacterService]
})
export class CharacterListComponent implements OnInit {
  characters = this.characterService.characters;

  constructor(private characterService: CharacterService) { }

  ngOnInit() {
  }

}
