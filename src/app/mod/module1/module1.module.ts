import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentListComponent } from './student-list/student-list.component';

@NgModule({
  declarations: [StudentDetailsComponent, StudentListComponent],
  imports: [
    CommonModule
  ],
  exports:[StudentDetailsComponent, StudentListComponent]
})
export class Module1Module { }
