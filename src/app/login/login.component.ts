import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form:FormGroup;
  
  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      userName : new FormControl(null,{validators:Validators.required}),
      passWord : new FormControl(null,{validators:Validators.required})
    });
  }

  onSubmit(){
    console.log(this.form.value);
  }
}
