import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnotificationsComponent } from './unotifications/unotifications.component';
import { UcurrenttrainingsComponent } from './ucurrenttrainings/ucurrenttrainings.component';
import { UcompletedtrainingsComponent } from './ucompletedtrainings/ucompletedtrainings.component';
import { UlogoutComponent } from './ulogout/ulogout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule, MatSidenavModule, MatListModule, MatButtonModule, MatIconModule, MatInputModule, MatMenuModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserComponent } from './user.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [UnotificationsComponent, UcurrenttrainingsComponent, UcompletedtrainingsComponent, UlogoutComponent],
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
      { path: 'user', component: UserComponent ,children:[ { path: 'unotifications', component: UnotificationsComponent },
    { path: 'ueditprofile', component: UlogoutComponent }, { path: 'ucompletedtrainings', component: UcompletedtrainingsComponent },
    { path: 'ucurrenttrainings', component: UcurrenttrainingsComponent }
      
  ]}
  ])
  ]
})
export class UserModule { }
