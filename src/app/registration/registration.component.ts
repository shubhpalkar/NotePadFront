import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {User} from "../registration/User"
import { UserService } from '../service/user.service';
 
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor (private service: UserService){}

  RegistrationForm: FormGroup;
  notmatch = false;
  submitted = false;

  ngOnInit(): void {

this.RegistrationForm = new FormGroup({
  userid: new FormControl (null, [Validators.required, Validators.email]),
  username: new FormControl (null, [Validators.required]),
  psword: new FormControl (null, [Validators.required, Validators.minLength(8)]),
  cnfPsword: new FormControl (null,[Validators.required, Validators.minLength(8)])

}, {validators: this.pswdmatching})
  }

  onSave(){
    console.log(this.RegistrationForm.value);
    this.submitted = true;
  }

  pswdmatching(fg: FormGroup): Validators{
return fg.get('psword').value === fg.get('cnfPsword').value ? null : {notmatch : true}
  }

  getUser(){
    this.service.getRegistration().subscribe (data => {
      console.log (data);
    })
  }


  //Getter Methods

  get userid(){
    return this.RegistrationForm.get('userid') as FormGroup;
  }

  get username(){
    return this.RegistrationForm.get('username') as FormGroup;
  }

  get psword(){
    return this.RegistrationForm.get('psword') as FormGroup;
  }

  get cnfPsword(){
    return this.RegistrationForm.get('cnfPsword') as FormGroup;
  }

}
