import {TriggerType} from "../enums/trigger-type";


export class TriggerDataPoint {
 date: Date;
 value: TriggerType;

 constructor(date: Date, value: TriggerType) {
  this.date = date;
  this.value = value;
 }
}
