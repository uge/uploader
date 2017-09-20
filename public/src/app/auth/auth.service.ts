import { Injectable } from '@angular/core';
import { AUTH_CONFIG } from './auth0-variables';
import { Router } from '@angular/router';
import { Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import * as auth0 from 'auth0-js';

@Injectable()
export class AuthService {
  userProfile: any;
  auth0 = new auth0.WebAuth({
    clientID: AUTH_CONFIG.clientID,
    domain: AUTH_CONFIG.domain,
    responseType: 'token id_token',
    audience: `https://${AUTH_CONFIG.domain}/userinfo`,
    redirectUri: 'http://localhost:4200/callback',
    scope: 'openid profile'
  });

  constructor(public router: Router,private http: Http) {}

  public login(): void {
    this.auth0.authorize();
  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.setSession(authResult);
        this.router.navigate(['/home']);


      } else if (err) {
  
        this.router.navigate(['/home']);
        console.log(err);
        alert(`Error: ${err.error}. Check the console for further details.`);
      }
    });
  }

  private setSession(authResult): void {
    // Set the time that the access token will expire at
   
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    localStorage.setItem('email', authResult.idTokenPayload.nickname+'@gmail.com');


   
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    // Go back to the home route
    this.router.navigate(['/']);
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // access token's expiry time

    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  
   

  }

  public getProfile(cb): void {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      throw new Error('Access token must exist to fetch profile');
    }
  
    this.auth0.client.userInfo(accessToken, (err, profile) => {
      if (profile) {
        this.userProfile = profile;
      }
      cb(err, profile);
    });
  
  }
addRecord(profile)
{
  profile.token_id=localStorage.getItem('id_token');
  var headers=new Headers();
  headers.append('Content-Type','application/json');
  return this.http.post('http://localhost:3000/upload',profile,{headers})
  .map(res=>res.json());
}
admin_login(user_info)
{
  var headers=new Headers();
  headers.append('Content-Type','application/json');
  return this.http.post('http://localhost:3000/admin_login',user_info,{headers})
  .map(res=>res.json());
}

getuser()
{
    return this.http.get('http://localhost:3000/userlist')
    .map(res=>res.json());
}
getdata()
{
    return this.http.get('http://localhost:3000/imglist')
    .map(res=>res.json());
}
saveImageByEmail(model: any){
  var headers=new Headers();
  headers.append('Content-Type','application/json');
  return this.http.post('http://localhost:3000/saveImageByEmail', {model:model},{headers})
    .map(res=>res.json()); 
}
}
