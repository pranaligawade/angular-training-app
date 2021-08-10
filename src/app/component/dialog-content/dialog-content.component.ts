import { Component, OnInit,Inject} from '@angular/core';
//import {MatDatepickerModule} from '@angular/material/datepicker';
import { FormControl, Validators } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-dialog-content',
  templateUrl: './dialog-content.component.html',
  styleUrls: ['./dialog-content.component.css']
})
export class DialogContentComponent implements OnInit {
 gender= new FormControl('', []);
 title= new FormControl('', [Validators.required ]);
 name= new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]);
 lastname= new FormControl('', [ Validators.minLength(2), Validators.maxLength(50),Validators.required]);
 email = new FormControl('', [
Validators.required,
  Validators.email, //abc@domai.com
]);
 phone= new FormControl('', [Validators.pattern(/^(\+\d{1,3}[- ]?)?\d{10}$/)]);


  constructor(
    public ref :MatDialogRef<DialogContentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

    }

    ngOnInit(): void {
    }

  onNoClick(): void {
    this.ref.close();
   }
onsave(){
  this.ref.close({

title:this.title.value,
  name:this.name.value,
  lastname: this.lastname.value,
  email:this.email.value,
  gender: this.gender.value,
  phone: this.phone.value,
}


)}

}
