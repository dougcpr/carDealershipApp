import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
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
