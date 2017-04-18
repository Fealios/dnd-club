import { Pipe, PipeTransform } from '@angular/core';
import { character } from './character.model';
import { CharacterService} from './character.service';

@Pipe({
  name: 'role',
  pure: false
})
export class RolePipe implements PipeTransform {

  constructor(private characterService: CharacterService){}

  transform(input, args) {
    var output: character[] = [];
    if(args !== "All"){
      for(let i = 0; i<input.length; i++){
        if(input[i].role === args){
          output.push(input[i]);
        }
      }
      return output;
    }
    else{
      return input;
    }
  }

}
