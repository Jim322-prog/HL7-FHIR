import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genderPipe',
})
export class GenderPipePipe implements PipeTransform {
  transform(value: string): unknown {
    switch (value) {
      case 'male':
        return 'Masculino';
      case 'female':
        return 'Femenino';
      default:
        return 'Otro';
    }
  }
}
