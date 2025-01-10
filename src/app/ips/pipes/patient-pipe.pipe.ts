import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'patientPipe',
})
export class PatientPipePipe implements PipeTransform {
  transform(value: string[]): string {
    var name = '';
    value.map((x) => {
      name += x + ' ';
    });
    return name;
  }
}
