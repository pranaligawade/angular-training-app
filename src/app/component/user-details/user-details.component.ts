import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  UserDetails:any=[

    {
      name:'pranali',
      age:23,
      gender:'female',
      address:'at nimbavi'

    }
  ];
  name:string='';
  age:number=0;
  gender:string='';
  address: string='';

  constructor() { }

  ngOnInit(): void {
  }
  addUserToList(){
    let user={
      name:this.name,
      age:this.age,
     address  :this.address

    };
    this.UserDetails.push(user)
    this.name='';
    this.age=0;
    this.address ='';
  }
reset(){
  let user1={
    name:this.name,
    age:this.age,
   address  :this.address

  }
  this.UserDetails.pop(user1)
  this.name='';
  this.age=0;
  this.address ='';
}

}
