import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class UtilitiesModule {

  dateFromTimestamp(timestamp: string, creationDateValue: any): string{
    let dateFormat = new Date(parseInt(!!timestamp ? timestamp : creationDateValue));
    return `${dateFormat.getDate()}.${dateFormat.getMonth()+1}.${dateFormat.getFullYear()}`
  }

 }
