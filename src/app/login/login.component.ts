import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form:FormGroup;
  
  constructor(private route:Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      userName : new FormControl(null,{validators:Validators.required}),
      passWord : new FormControl(null,{validators:Validators.required})
    });
  }

  onSubmit(){
    this.route.navigate(['calculator']);
  }
}
