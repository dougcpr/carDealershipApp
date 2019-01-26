import { Pipe, PipeTransform } from '@angular/core';
@Pipe({name: 'camelToHuman'})
export class CamelToHumanPipe implements PipeTransform {
  words;
  transform(value: string): string {
    this.words = value.match(/[A-Za-z][a-z]*/g) || [];

    return this.words.map(this.capitalize).join(' ');
  }
  capitalize(word) {
    return word.charAt(0).toUpperCase() + word.substring(1);
  }
}
