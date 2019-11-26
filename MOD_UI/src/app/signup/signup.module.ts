import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { MentorsignupComponent } from './mentorsignup/mentorsignup.component';
import { RouterModule } from '@angular/router';
import { SignupComponent } from './signup.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatToolbarModule, MatSidenavModule, MatListModule, MatButtonModule, MatIconModule, MatInputModule, MatMenuModule, MatAutocompleteModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { UserloginComponent } from '../login/userlogin/userlogin.component';



@NgModule({
  declarations: [UsersignupComponent,MentorsignupComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatAutocompleteModule,
    BrowserAnimationsModule,
    RouterModule.forChild([
      { path: 'signup', component: SignupComponent ,children:[ { path: 'usersignup', component: UsersignupComponent },
    { path: 'mentorsignup', component: MentorsignupComponent }, { path: 'userlogin', component: UserloginComponent }
      
  ]}
  ])
]
})
export class SignupModule { }
