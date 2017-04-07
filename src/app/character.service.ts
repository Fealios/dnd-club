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

  getCharacterById(id){
      return this.angularFire.database.object('characters/' + id);
  }

  addNewCharacter(newCharacter: character){
    this.characters.push(newCharacter);
  }

  updateCharacter(localCharacter){
    var characterInFirebase = this.getCharacterById(localCharacter.$key);
    characterInFirebase.update({
      name: localCharacter.name,
      allignment: localCharacter.allignment,
      characterclass: localCharacter.characterclass,
      race: localCharacter.race,
      role: localCharacter.role,
      level: localCharacter.level
    })
  }
}
