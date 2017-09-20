import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { CallbackComponent } from './callback/callback.component';
import { AuthService } from './auth/auth.service';
import { ProfileComponent } from './profile/profile.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { UserlistComponent } from './userlist/userlist.component';
import { ImgRecordsComponent } from './img-records/img-records.component';
import { FbxComponent } from './fbx/fbx.component';
import { PanoramaEquirectangularComponent } from './panorama-equirectangular/panorama-equirectangular.component';
import { Home2Component } from './home2/home2.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    CallbackComponent,
    ProfileComponent,
    AdminLoginComponent,
    AdminHomeComponent,
    NavbarComponent,
    AdminNavComponent,
    UserlistComponent,
    ImgRecordsComponent,
    FbxComponent,
    PanoramaEquirectangularComponent,
    Home2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        component: NavbarComponent
      },
      {
        path: 'userlist',
        component: UserlistComponent
      },
      {
        path: 'imgrecords',
        component: ImgRecordsComponent
      },
      {
        path: 'home',
        component: Home2Component
      },
      {
        path: 'upload',
        component: HomeComponent
      },
      {
        path: 'callback',
        component: CallbackComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'admin',
        component: AdminLoginComponent
      },
      {
        path: 'admin-home',
        component: AdminHomeComponent
      }

    ])
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
