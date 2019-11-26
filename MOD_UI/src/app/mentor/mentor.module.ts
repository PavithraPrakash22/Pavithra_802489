import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MnotificationsComponent } from './mnotifications/mnotifications.component';
import { MlogoutComponent } from './mlogout/mlogout.component';
import { McompletedtrainingsComponent } from './mcompletedtrainings/mcompletedtrainings.component';
import { McurrenttrainingsComponent } from './mcurrenttrainings/mcurrenttrainings.component';
import { MeditprofileComponent } from './meditprofile/meditprofile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule, MatSidenavModule, MatListModule, MatButtonModule, MatIconModule, MatInputModule, MatMenuModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MentorComponent } from './mentor.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [MnotificationsComponent, MlogoutComponent, McompletedtrainingsComponent, McurrenttrainingsComponent, MeditprofileComponent],
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
    BrowserAnimationsModule,
    RouterModule.forChild([
      { path: 'mentor', component: MentorComponent ,children:[ { path: 'mnotifications', component: MnotificationsComponent },
    { path: 'mlogout', component: MlogoutComponent }, { path: 'mcompletedtrainings', component: McompletedtrainingsComponent },
    { path: 'mcurrenttrainings', component: McurrenttrainingsComponent },{ path: 'meditprofile', component: MeditprofileComponent }
      
  ]}
  ])
  ]
})
export class MentorModule { }
