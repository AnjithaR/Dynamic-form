import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  JsonData: any;
  constructor() {}
  public setJsonData(JsonData: any) {
  this.JsonData= JsonData;
  }

  public getJsonData() {
    console.log("ins ervice",this.JsonData);
    return this.JsonData?this.JsonData:undefined;
  }
}
