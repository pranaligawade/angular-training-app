import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  title:string='Calculator App';
  divNum:number=0;
  num:number=0;
  numb:number=0;
  add(){
    this.numb = this.divNum + this.num;
// alert('hi')
     }
     sub(){
       this.numb = this.divNum - this.num;
     }
     mul(){
      this.numb = this.divNum * this.num;
    }
    div(){
      this.numb = this.divNum / this.num;
    }
   
    squar(){
      this.numb = this.divNum**2;
    }


  constructor() { }

  ngOnInit(): void {
  }

}
