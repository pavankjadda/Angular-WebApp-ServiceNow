import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {NgxSpinnerService} from 'ngx-spinner';
import {AuthService} from '../auth/auth.service';
import {SERVER_API_URL, USER_INFO_URL} from '../../app.constants';
import {HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit
{
  message: string;
  loginForm: FormGroup;
  submitted=false;
  returnUrl: string;
  loginFailed: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private spinner: NgxSpinnerService
  )
  {
    // redirect to home if already logged in
    if(this.authService.currentUserValue)
    {
      this.router.navigate( ['/home'] );
    }
  }


  ngOnInit()
  {
    this.loginForm=this.formBuilder.group( {
      username: ['', Validators.required],
      password: ['', Validators.required]
    } );

    // get return url from route parameters or default to '/'
    this.returnUrl=this.route.snapshot.queryParams['returnUrl']||'/';
    //Logout user if already logged in
    this.logout();
  }

  // convenience getter for easy access to form fields
  get f()
  {
    return this.loginForm.controls;
  }

  oauth2Login()
  {
    this.spinner.show();
    this.authService.oauthLogin( this.f.username.value, this.f.password.value ).subscribe(
      response=>
      {
        if (response['access_token'])
        {
          this.router.navigate(['/home']);

          //login successful if there's a Spring Session token in the response
          if (response && response['access_token'])
          {
            //store user details and Spring Session OAuth token refreshes
            localStorage.setItem('access_token', response['access_token']);
            localStorage.setItem('refresh_token', response['access_token']);
            localStorage.setItem('token_type', response['token_type']);
            localStorage.setItem('scope', response['scope']);
            localStorage.setItem('isLoggedIn', 'true');

            this.getUserInfoUsingOAuth2Token(response['access_token']);
          }
        }
        else
        {
          this.router.navigate(['/login']);
        }
      },
      error =>
      {
        console.log(error);
        this.loginFailed=true;
        this.spinner.hide();
      },
      () =>
      {
        this.spinner.hide();
      } );
  }

  logout()
  {
    this.authService.logout();
    this.setMessage();
  }

  isUserLoggedIn()
  {

  }
  private setMessage()
  {
    this.message='Logged '+(AuthService.isUserLoggedIn() ? 'in' : 'out');
  }

  private getUserInfoUsingOAuth2Token(accessToken: string)
  {
    const userInfoUrl=SERVER_API_URL + USER_INFO_URL;
    const httpOptions={
      headers: new HttpHeaders(
        {
          'Accept':'application/json',
          'Authorization': 'Bearer ' + accessToken
        })
    };
    this.authService.getUserInfoUsingOAuth2Token(userInfoUrl).subscribe(
      userObject =>
      {
        this.router.navigate(['/home']);
        console.log('userObject' + userObject);
      },
      error =>
      {
        localStorage.removeItem('currentUser');
        this.router.navigate(['/login']);
        console.log('Error occurred while fetching user info');
      }
    );
  }
}
