import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { FirebaseObjectObservable } from 'angularfire2';
import { character } from './character.model';

@Injectable()
export class CharacterService {
  characters: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.characters = angularFire.database.list('characters');
  }

  getCharacters() {
    return this.characters;
  }
}