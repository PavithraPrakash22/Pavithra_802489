import * as platformBrowser from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { MentorComponent } from './mentor/mentor.component';
import { AdminComponent } from './admin/admin.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { UserloginComponent } from './login/userlogin/userlogin.component';
import { MentorloginComponent } from './login/mentorlogin/mentorlogin.component';
import { MentorsignupComponent } from './signup/mentorsignup/mentorsignup.component';
import { UsersignupComponent } from './signup/usersignup/usersignup.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { ExploreComponent } from './explore/explore.component'
import { MnotificationsComponent } from './mentor/mnotifications/mnotifications.component';
import { McompletedtrainingsComponent } from './mentor/mcompletedtrainings/mcompletedtrainings.component';
import { McurrenttrainingsComponent } from './mentor/mcurrenttrainings/mcurrenttrainings.component';
import { MlogoutComponent } from './mentor/mlogout/mlogout.component';
import { MeditprofileComponent } from './mentor/meditprofile/meditprofile.component';
import { UnotificationsComponent } from './user/unotifications/unotifications.component';
import { UcompletedtrainingsComponent } from './user/ucompletedtrainings/ucompletedtrainings.component';
import { UcurrenttrainingsComponent } from './user/ucurrenttrainings/ucurrenttrainings.component';
import { UlogoutComponent } from './user/ulogout/ulogout.component';
import { MatButtonModule, MatIconModule, MatInputModule, MatListModule, MatSidenavModule, MatToolbarModule, MatMenuModule, MatTableModule, MatAutocompleteModule} from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SignupModule } from './signup/signup.module';
import { LoginModule } from './login/login.module';
import { PasswordValidatorDirective } from './password-validator.directive';
import { UserService } from './Services/user.service';
import { MentorService } from './Services/mentor.service';
import { LoginService } from './Services/login.service';
import { MentorModule } from './mentor/mentor.module';
import { AdminuserComponent } from './admin/adminuser/adminuser.component';
import { AdminmentorComponent } from './admin/adminmentor/adminmentor.component';
import { AdmintechnologyComponent } from './admin/admintechnology/admintechnology.component';
import { AdminpaymentComponent } from './admin/adminpayment/adminpayment.component';
import { AdmintrainingComponent } from './admin/admintraining/admintraining.component';
import { SearchComponent } from './search/search.component';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';
import { PaymentComponent } from './payment/payment.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    MentorComponent,
    AdminComponent, 
    SignupComponent,
    LoginComponent,
    ExploreComponent,
    //UsersignupComponent,
    //MentorsignupComponent,
    // UserloginComponent,
    // MentorloginComponent,
    // MnotificationsComponent,
    // McompletedtrainingsComponent,
    // McurrenttrainingsComponent,
    // MlogoutComponent,
    // MeditprofileComponent,
    // UnotificationsComponent,
    // UcompletedtrainingsComponent,
    // UcurrenttrainingsComponent,
    // UlogoutComponent,
    ExploreComponent,
    PasswordValidatorDirective,
    AdminuserComponent,
    AdminmentorComponent,
    AdmintechnologyComponent,
    AdminpaymentComponent,
    AdmintrainingComponent,
    SearchComponent,
    PaymentComponent
  ],
  imports: [
    platformBrowser.BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    SignupModule,
    LoginModule,
    MentorModule,
    AdminModule,
    UserModule,
    MatAutocompleteModule,
    ReactiveFormsModule
    
  ],
  providers: [UserService,MentorService,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
