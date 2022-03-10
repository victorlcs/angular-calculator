import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  calCtrl:string[][] = [['AC','=','%','/'],
                        ['7','8','9','*'],
                        ['4','5','6','-'],
                        ['1','2','3','+'],
                        ['0',',','=']];
  public displayTxt:string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onClick(item:string) {
    if (item === '=') {
      let total = Function(`return ${this.displayTxt}`);
      this.displayTxt = total();
    }else if (item === 'AC') {
      this.displayTxt = '';
    }
    else {
      if(!this.displayTxt && ['%','/','*','-','+'].includes(item)){
        this.displayTxt = '0';
      }
      this.displayTxt = this.displayTxt? 
      this.displayTxt + item : item;
    }
  }
}
