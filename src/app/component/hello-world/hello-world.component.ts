import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {
   name:string=" pranali gawade";
   divId:number=342344565465;
click(){
  alert('welcome to the hello word component')
}

  constructor() { }

  ngOnInit(): void {
  }

}
