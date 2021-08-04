import { Component, OnInit } from '@angular/core';
import { FormControl,Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-example',
  templateUrl: './form-example.component.html',
  styleUrls: ['./form-example.component.css']
})
export class FormExampleComponent implements OnInit {
 name="pranali";
 nameFromControl =new FormControl('gawade',[Validators.required]);
  constructor() { }

  ngOnInit(): void {
  }

}
