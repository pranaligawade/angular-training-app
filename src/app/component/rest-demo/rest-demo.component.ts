import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rest-demo',
  templateUrl: './rest-demo.component.html',
  styleUrls: ['./rest-demo.component.css']
})
export class RestDemoComponent implements OnInit {
  userDetail: any[] = [];
  constructor() { }

  ngOnInit(): void {
    fetch('https://reqres.in/api/users?page=2', {
      method:'GET'
    })
      .then(res => res.json())
      .then((res) => {
        this.userDetail = res.data;
        console.log(this.userDetail);

      }, (err) => { console.log(err); });
  }
}
