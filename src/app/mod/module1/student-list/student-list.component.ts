import { Component, OnInit } from '@angular/core';
import {Student} from 'src/app/model/Student.model';
import { CommonserviceService } from 'src/app/shared/commonservice.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  constructor(private s1:CommonserviceService) { }

  ngOnInit(): void {}
    stu1:Student[]=this.s1.stu;
}
