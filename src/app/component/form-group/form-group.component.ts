import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css']
})
export class FormGroupComponent implements OnInit {

  userForm = new FormGroup({
    title:new FormControl('', [Validators.required ]),

    firstName: new FormControl('', [
    Validators.required
  ]),
  lastname: new FormControl('', [ Validators.minLength(2), Validators.maxLength(50),Validators.required]),
  phone: new FormControl('', [
    // Validators.pattern(/^(\+\d{1,3}[- ]?)?\d{10}$/)
  ]),
  email :new FormControl('', [

    Validators.email, //abc@domai.com
  ]),
  genderFormControl :new FormControl('', []),
  Date:new FormControl(new Date(),[]),
});

  constructor() { }

  ngOnInit(): void {
  }

  save() {

 console.log(this.userForm.value);
 this.reset();
    }

  reset() {
 this.userForm.reset();
  }
  }
