import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth/auth.service';
@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
userls="";
  constructor(public auth: AuthService) {
    
  }

  ngOnInit() {
    this.auth.getuser()
    .subscribe(users=>{
      this.userls=users;
      console.log(users);
    });
  }

}
