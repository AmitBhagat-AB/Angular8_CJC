import { Injectable } from '@angular/core';
import { Student } from '../model/Student.model';

@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {

  stu:Student[]=
  [
    {id:1,name:"Amit",address:"Pune"},
    {id:2,name:"VarshaPriya",address:"Banglore"}
  ]

  constructor() { }
}
