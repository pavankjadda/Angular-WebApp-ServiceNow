import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {OAUTH2_ACCESS_TOKEN_URI, OAUTH2_CLIENT_ID, OAUTH2_CLIENT_SECRET} from '../../app.constants';
import {User} from '../user/model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService
{
  constructor(private httpClient: HttpClient)
  {
    this.currentUserSubject=new BehaviorSubject<User>( JSON.parse( localStorage.getItem( 'currentUser' ) ) );
    this.currentUser=this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User
  {
    return this.currentUserSubject.value;
  }

  redirectUrl: string;
  public currentUser: Observable<User>;
  public currentUserSubject: BehaviorSubject<User>;

  static isUserLoggedIn(): boolean
  {
    return localStorage.getItem( 'isLoggedIn' )==='true';
  }

  oauthLogin(username: string, password: string)
  {
    const httpOptions={
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/x-www-form-urlencoded',
          authorization: 'Basic '+btoa( OAUTH2_CLIENT_ID+':'+OAUTH2_CLIENT_SECRET )
        })
    };

    const body = new HttpParams()
      .set('grant_type', 'password')
      .set('username', username)
      .set('password', password);

    return this.httpClient.post<any>(OAUTH2_ACCESS_TOKEN_URI, body.toString(), httpOptions);
  }

  getUserInfoUsingOAuth2Token(userInfoUrl: string, httpOptions: { headers: HttpHeaders })
  {
    return this.httpClient.get<User>(userInfoUrl,httpOptions)
               .pipe(map(user =>
               {
                 if (user)
                 {
                   localStorage.setItem('currentUser', JSON.stringify(user));
                   localStorage.setItem('isLoggedIn', 'true');
                   this.currentUserSubject.next(user);
                 }
                 return user;
               }));
  }

  logout()
  {
    localStorage.setItem('access_token', null);
    localStorage.setItem('refresh_token', null);
    localStorage.setItem('token_type', null);
    localStorage.setItem('scope', null);

    localStorage.removeItem( 'currentUser' );
    this.currentUserSubject.next( null );
    localStorage.setItem( 'isLoggedIn', 'false' );
  }


}
