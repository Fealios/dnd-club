import { Component, Input, OnInit} from '@angular/core';
import { CharacterService } from '../character.service';
import { character } from '../character.model';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  @Input() childSelectedCharacter: character;
  constructor(characterService: CharacterService) { }

  ngOnInit() {
  }

  editCharacter(name: string, allignment: string, characterclass: string, race; string, role: string, level: number){
    
  }

}
