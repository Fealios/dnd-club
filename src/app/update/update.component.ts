import { Component, Input, OnInit} from '@angular/core';
import { CharacterService } from '../character.service';
import { character } from '../character.model';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
  providers: [CharacterService]
})
export class UpdateComponent implements OnInit {
  @Input() selectedCharacter;
  constructor(characterService: CharacterService) { }

  ngOnInit() {
  }


}
