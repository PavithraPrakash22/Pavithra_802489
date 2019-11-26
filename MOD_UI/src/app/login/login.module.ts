import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserloginComponent } from './userlogin/userlogin.component';
import { MentorloginComponent } from './mentorlogin/mentorlogin.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule, MatToolbarModule, MatListModule, MatMenuModule, MatInputModule, MatIconModule, MatButtonModule } from '@angular/material';
import { UserComponent } from '../user/user.component';



@NgModule({
  declarations: [UserloginComponent,MentorloginComponent],
  imports: [
    CommonModule,
    CommonModule,
    FormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forChild([
      { path: 'login', component: LoginComponent ,children:[ { path: 'userlogin', component: UserloginComponent,children:[{path:'user',component:UserComponent}] },
    { path: 'mentorlogin', component: MentorloginComponent }
      
  ]}
  ])
  ]
})
export class LoginModule { }
