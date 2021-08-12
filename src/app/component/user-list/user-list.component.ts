import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  displayedColumns: string[]=['picture','id','title','name','email'];
data:any[]=[];
showloader:boolean=true;
  constructor() { }

  ngOnInit(): void {
  }

}
