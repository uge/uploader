import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth/auth.service';
@Component({
  selector: 'app-img-records',
  templateUrl: './img-records.component.html',
  styleUrls: ['./img-records.component.css']
})
export class ImgRecordsComponent implements OnInit {

  imgls="";
  constructor(public auth: AuthService) {
    
  }

  ngOnInit() {
    this.auth.getdata()
    .subscribe(img=>{
      this.imgls=img;
      console.log(img);
    });
  }

}
