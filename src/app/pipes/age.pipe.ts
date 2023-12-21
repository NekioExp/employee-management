import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age',
  standalone: true
})
export class AgePipe implements PipeTransform {
  transform(birthdate: Date): number {
    const currentDate = new Date();
    const differenceInYears = currentDate.getFullYear() - birthdate.getFullYear();
    return differenceInYears;
  }
}
