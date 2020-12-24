import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Loginform: FormGroup;
  submitted = false;

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {

    // this.Loginform = this.fb.group({
    //   userid: ['', [Validators.email, Validators.required]],
    //   psword: ['', [Validators.minLength(8), Validators.required]]

    // })

    this.Loginform = new FormGroup({
      userid: new FormControl (null, [Validators.required, Validators.email]),
      psword: new FormControl(null, [Validators.required, Validators.minLength(8)])
    });
  }

    onSubmit(){
      console.log(this.Loginform.value);
      this.submitted = true;
      
    }


    //Getter Method

    get userid(){
      return this.Loginform.get('userid') as FormGroup;
    }

    get psword(){
      return this.Loginform.get('psword') as FormGroup;
    }

}
