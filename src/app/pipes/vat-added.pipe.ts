import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vatAdded',
})
export class VatAddedPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    let text_other_teil = value.split(' ')[0];
    let textFirstLetter = text_other_teil.charAt(0).toUpperCase();
    text_other_teil = text_other_teil.replace(
      text_other_teil[0],
      textFirstLetter
    );
    value = text_other_teil;
    return value;
  }
}
