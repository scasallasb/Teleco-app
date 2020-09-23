import { Component, OnInit } from '@angular/core';
import {AuthService} from './../../services/auth.service';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public submitted: Boolean = false;
  public error: {code: number, message: string} = null;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router:Router
    ) {
      this.buidldForm();
      
    }

  ngOnInit() {
  }


  private buidldForm(){
    this.loginForm = this.formBuilder.group(
      {  
        username: ['',[Validators.required]],
        password: ['',[Validators.required]]
      } )

  }
    submitLogin(event: Event){
      event.preventDefault();
      if (this.loginForm.valid) {
        this.authService.login(this.loginForm.value.username, this.loginForm.value.password).subscribe(
          data => {
            this.authService.guardarToken(data.jwt);
            this.router.navigate(['/informacion']); 

          },
          error => this.error = JSON.parse(error._body)
        )
      }  
    }
  
  
}
