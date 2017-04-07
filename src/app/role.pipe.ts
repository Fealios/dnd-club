// import { Pipe, PipeTransform } from '@angular/core';
// import { character } from './character.model';
// import { CharacterService} from './character.service';
//
// @Pipe({
//   name: 'role',
//   pure: false
// })
// export class RolePipe implements PipeTransform {
//
//   readableCharList:character[] = [];
//   constructor(private characterService: CharacterService){}
//
//   transform(input, args) {
//     var output: character[] = [];
//     this.characterService.getCharacters().subscribe(dataLastEmittedFromObserver => {
//       this.readableCharList = dataLastEmittedFromObserver;
//     })
//     console.log(input);
//     if(args !== "All"){
//       for(let i = 0; i<this.readableCharList.length; i++){
//         if(args === "Ranged DPS" && this.readableCharList.length.role === "Ranged DPS"){
//           output.push(this.readableCharList.length);
//         }
//         else if(args === "Melee DPS" && this.readableCharList.length.role === "Melee DPS"){
//           output.push(this.readableCharList.length);
//         }
//         else if(args === "Tank" && this.readableCharList.length.role === "Tank"){
//           output.push(this.readableCharList.length);
//         }
//         else if(args === "Support" && this.readableCharList.length.role === "Support"){
//           output.push(this.readableCharList.length);
//         }
//       }
//       return output;
//     }
//     else{
//       return input;
//     }
//   }
//
// }
