import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-rxjs-demo',
  templateUrl: './rxjs-demo.component.html',
  styleUrls: ['./rxjs-demo.component.css']
})
export class RxjsDemoComponent implements OnInit {
 counter=1;
  constructor() { }

  ngOnInit(): void {
    this.counter=2;

// native==============================================================================
    // this.TakeTime();
    // this.printCounter();
    //===============================================



  // Promise Way
    // this.TakeTime().then(data => {
    //   this.printCounter();
    // })



    // rxjs way ===================================================================
     this.TakeTime().subscribe(data => {
        this.printCounter();
       })
  }
   TakeTime(){
  //      ////native method
    //  setTimeout(()=>{
    //  this.counter++;},5000);

   //promise way===================================================================
    //  return new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     this.counter++;
    //     resolve(this.counter);
    //   }, 5000);
    // })
  //==========================================================================
  //obserable-way
  return new Observable(observer => {
    setTimeout(() => {
      this.counter++;
      observer.next(this.counter);
    }, 5000);

    setInterval(() => {
      this.counter++;
      observer.next(this.counter);
    }, 5000);
  })
}
//====================================================================================
   printCounter(){
     let div =document.createElement('div')
     div.innerHTML = `Value of Counter ${this.counter}`;
     document.getElementById('wrapper')?.append(div);

   }
  }
