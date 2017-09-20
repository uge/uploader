import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from './../auth/auth.service';
import { Router } from '@angular/router';
import {users} from './users';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
user:String;
password:any;
status:number=0;
text="";
userls=""
  constructor(public auth: AuthService,public router: Router) {
  

   }
  admin_login()
  {
   
    const user_info={
      user_name:this.user,
      password: this.password
    }
    this.auth.admin_login(user_info)
    .subscribe(u=>{
    this.text=u;
    this.router.navigate(['/admin-home']);
    });
 
  }
  ngOnInit() {
  }

}
