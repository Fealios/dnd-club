import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { CharacterService } from '../character.service';
import { character } from '../character.model';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css'],
  providers: [CharacterService]
})

export class CharacterDetailComponent implements OnInit {
  characterId: string;
  characterToDisplay: character;

  constructor(private route: ActivatedRoute, private location: Location, private characterService: CharacterService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.characterId = urlParameters['id'];
      console.log(this.characterId);
    });
    this.characterService.getCharacterById(this.characterId).subscribe(dataLastEmittedFromObserver => {
      this.characterToDisplay = dataLastEmittedFromObserver;
    });
    console.log(this.characterToDisplay);
  }

}
