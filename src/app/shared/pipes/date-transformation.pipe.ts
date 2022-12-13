import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateTransformation'
})
export class DateTransformationPipe implements PipeTransform {

  transform(value: string): string {
    const dateFormat = new Date(parseInt(value));
    return `${dateFormat.getDate()}.${dateFormat.getMonth()+1}.${dateFormat.getFullYear()}`;
  }

}
