import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { MentorComponent } from './mentor/mentor.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { UserloginComponent } from './login/userlogin/userlogin.component';
import { MentorloginComponent } from './login/mentorlogin/mentorlogin.component';
import { SignupComponent } from './signup/signup.component';
import { UsersignupComponent } from './signup/usersignup/usersignup.component';
import { MentorsignupComponent } from './signup/mentorsignup/mentorsignup.component';
import { MnotificationsComponent } from './mentor/mnotifications/mnotifications.component';
import { McurrenttrainingsComponent } from './mentor/mcurrenttrainings/mcurrenttrainings.component';
import { McompletedtrainingsComponent } from './mentor/mcompletedtrainings/mcompletedtrainings.component';
import { MlogoutComponent } from './mentor/mlogout/mlogout.component';
import { UlogoutComponent } from './user/ulogout/ulogout.component';
import { UnotificationsComponent } from './user/unotifications/unotifications.component';
import { UcurrenttrainingsComponent } from './user/ucurrenttrainings/ucurrenttrainings.component';
import { UcompletedtrainingsComponent } from './user/ucompletedtrainings/ucompletedtrainings.component';
import { MeditprofileComponent } from './mentor/meditprofile/meditprofile.component';
import { ExploreComponent } from './explore/explore.component';
import { AdminuserComponent } from './admin/adminuser/adminuser.component';
import { AdmintrainingComponent } from './admin/admintraining/admintraining.component';
import { AdminpaymentComponent } from './admin/adminpayment/adminpayment.component';
import { AdmintechnologyComponent } from './admin/admintechnology/admintechnology.component';
import { AdminmentorComponent } from './admin/adminmentor/adminmentor.component';
import { SearchComponent } from './search/search.component';


const routes: Routes = [
  {path : "", component : HomeComponent},
  {path : "user", component : UserComponent},
  {path : "mentor", component : MentorComponent},
  {path : "admin", component : AdminComponent},
  {path : "explore", component : ExploreComponent},
  {path : "login", component : LoginComponent},
  {path : "userlogin", component : UserloginComponent},
  {path : "mentorlogin", component : MentorloginComponent}, 
  {path : "signup", component : SignupComponent},
  {path : "usersignup", component : UsersignupComponent},
  {path : "mentorsignup", component : MentorsignupComponent},
  {path : "mnotifications", component : MnotificationsComponent},
  {path : "mcurrenttrainings", component : McurrenttrainingsComponent},
  {path : "mcompletedtrainings", component : McompletedtrainingsComponent},
  {path : "meditprofile", component : MeditprofileComponent},
  {path : "meditprofile", component : MlogoutComponent},
  {path : "unotifications", component : UnotificationsComponent},
  {path : "ucurrenttrainings", component : UcurrenttrainingsComponent},
  {path : "ucompletedtrainings", component : UcompletedtrainingsComponent},
  {path : "adminuser", component : AdminuserComponent},
  {path : "adminmentor", component : AdminmentorComponent},
  {path : "admintechnology", component : AdmintechnologyComponent},
  {path : "admintraining", component : AdmintrainingComponent},
  {path : "adminpayment", component : AdminpaymentComponent},
  {path : "search", component : SearchComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
