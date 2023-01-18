import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/model/Student.model';
import { CommonserviceService } from 'src/app/shared/commonservice.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  constructor(private s:CommonserviceService) { }

  ngOnInit(): void {}
  stu1:Student[]=this.s.stu;
}
