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
  characters = this.characterService.characters;
  clickedCharacter: character = null;

  constructor(private characterService: CharacterService) { }

  ngOnInit() {
  }

  formSubmit(name, allignment, characterclass, race, role, level){
    var newCharacter: character = new character(name, allignment, characterclass, race, role, level);
    this.characterService.addNewCharacter(newCharacter);
  }

  selectedCharacterForEdit(character){
    this.clickedCharacter = character;
  }

}
