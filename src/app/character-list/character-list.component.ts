import { Component, OnInit, Input } from '@angular/core';
import { character } from '../character.model';
import { CharacterService } from '../character.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css'],
  providers: [CharacterService]
})
export class CharacterListComponent {
  characters = this.characterService.characters;
  filterByRole: string = "All";

  constructor(private router: Router, private characterService: CharacterService) { }

  onChange(role) {
    // console.log(this.characters);
    this.filterByRole = role;
  }

  goToDetails(clickedCharacter){
    console.log(clickedCharacter);
    this.router.navigate(['character', clickedCharacter.$key])
  }
}
