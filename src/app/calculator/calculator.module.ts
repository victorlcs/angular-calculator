import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorComponent } from './calculator.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';

const routes:Routes = [
  {path:'',component:CalculatorComponent}
]

@NgModule({
  declarations: [
    CalculatorComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})

export class CalculatorModule { }
