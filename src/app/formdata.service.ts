import { Injectable } from '@angular/core';

@Injectable()
export class FormdataService {

  arrayList:any[]=[];

  constructor() { }

  addData(data:any){

    this.arrayList.unshift(data);

  }

  getData(){
    return this.arrayList;
  }



}
