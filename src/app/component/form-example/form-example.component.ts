import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-example',
  templateUrl: './form-example.component.html',
  styleUrls: ['./form-example.component.css']
})
export class FormExampleComponent implements OnInit {
 name="pranali";
//  nameFormControl =new FormControl('gawade',[Validators.required]);
//  phoneFormControl =new FormControl('',[Validators.maxLength(5)]);
 nameFormControl = new FormControl('', [
  Validators.required
]);
phoneFormControl = new FormControl('', [
  Validators.pattern(/^(\+\d{1,3}[- ]?)?\d{10}$/)
]);
emailFormControl = new FormControl('', [
  Validators.required,
  Validators.email, //abc@domai.com
]);
genderFormControl = new FormControl('', []);

userList: any[] = [];
  constructor() { }

  ngOnInit(): void {
    // this.nameFromControl.valueChanges.subscribe((data))=>
    // console.log(data);
  }
  // buttonClick(){
  //   console.log(this.name);
  //   console.log(this.phoneFormControl);
  //   console.log(this.phoneFormControl);

  // }
  // print(){
  //   console.log(this.name);
  // }


  save() {
    if (this.nameFormControl.valid && this.emailFormControl.valid && this.phoneFormControl.valid) {
      let user = {
        name: this.nameFormControl.value,
        phone: this.phoneFormControl.value,
        gender: this.genderFormControl.value,
        email: this.emailFormControl.value,
      }

      this.userList.push(user);
      this.reset();
    } else {
      this.nameFormControl.markAsTouched();
      this.emailFormControl.markAsTouched();
      this.phoneFormControl.markAsTouched();
    }
  }
  reset() {
    this.nameFormControl.reset();
    this.phoneFormControl.reset();
    this.genderFormControl.reset();
    this.emailFormControl.reset();
  }




}
