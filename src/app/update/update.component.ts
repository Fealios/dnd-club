import { Component, Input, OnInit} from '@angular/core';
import { CharacterService } from '../character.service';
import { character } from '../character.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
  providers: [CharacterService]
})
export class UpdateComponent implements OnInit {
  @Input() selectedCharacter;

  constructor(private characterService: CharacterService, private router: Router) { }

  ngOnInit() {
  }

  editThisCharacter(character){
    this.characterService.updateCharacter(character);
    this.router.navigate(['']);
  }
}
