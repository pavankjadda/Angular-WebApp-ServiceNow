import {HttpHeaders} from "@angular/common/http";
import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {SERVER_API_URL} from "../../app.constants";
import {AuthService} from "../../core/auth/auth.service";
import {RegisterUser} from "./register-user";
import {RegisterService} from "./register.service";
import {confirmPasswordValidator, passwordValidator, usernameValidator} from "./registerform-validator";

@Component( {
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
} )
export class RegisterComponent implements OnInit
{
  registerForm: FormGroup;
  returnUrl: string;
  submitted: boolean;

  constructor(private formBuilder:FormBuilder,private route:ActivatedRoute,private router:Router, private authService:AuthService, private registerService:RegisterService)
  {
    this.authService.logout();
  }

  // convenience getter for easy access to form fields
  get formControls()
  {
    return this.registerForm.controls;
  }

  ngOnInit()
  {
    this.registerForm=this.formBuilder.group(
      {
        username: ['', [Validators.required, Validators.minLength( 4 ), Validators.maxLength( 16 ), Validators.nullValidator, usernameValidator()]],
        email: ['',[Validators.required,Validators.email,Validators.nullValidator]],
        password: ['', [Validators.required, Validators.minLength( 4 ), Validators.maxLength( 16 ), Validators.nullValidator, passwordValidator()]],
        confirmPassword: ['', [Validators.required, Validators.minLength( 4 ),
          Validators.maxLength(16),Validators.nullValidator,confirmPasswordValidator()]],
      },{validator: this.checkIfMatchingPasswords('password', 'confirmPassword')});
    this.returnUrl=this.route.snapshot.queryParams['returnUrl'] || '/';
  }


  onSubmit()
  {
    //console.warn(this.registerForm.value);
    this.submitted=true;
    let registerUser=new RegisterUser();
    registerUser.username=this.formControls.username.value;
    registerUser.email=this.formControls.email.value;
    registerUser.password=this.formControls.password.value;

    let url=SERVER_API_URL+'register';
    const httpOptions = {
      headers: new HttpHeaders(
        {
          'Content-Type':  'application/json'
        })};

    this.registerService.registerUser(url,registerUser,httpOptions).subscribe(
      response =>
      {
          console.log('User Registration Completed  '+response);
          this.router.navigate(['/home']);
      },
      error => console.log('error: '+error),
      ()=>console.log('User Registration Completed ')
    );

  }

  private checkIfMatchingPasswords(password: string, confirmPassword: string)
  {
    return (group: FormGroup) =>
    {
      let passwordInput = group.controls[password],
        passwordConfirmationInput = group.controls[confirmPassword];
      if (passwordInput.value !== passwordConfirmationInput.value)
      {
        return passwordConfirmationInput.setErrors({passwordsMatched: false});
      }
      else
        {
        return passwordConfirmationInput.setErrors(null);
      }
    };
  }
}
