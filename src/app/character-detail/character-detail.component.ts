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
  characterId: number;
  characterToDisplay: character;

  constructor(private route: ActivatedRoute, private location: Location, private characterService: CharacterService) { }

  ngOnInit() {

    this.route.params.forEach((urlParameters) => {
      this.characterId = parseInt(urlParameters['id']);
    });
    this.characterService.getCharacterById(this.characterId).subscribe(dataLastEmittedFromObserver => {
      this.characterToDisplay = dataLastEmittedFromObserver;
    });
  }

}
