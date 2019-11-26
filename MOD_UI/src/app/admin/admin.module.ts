import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule, MatToolbarModule, MatListModule, MatButtonModule, MatIconModule, MatInputModule, MatMenuModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminuserComponent } from './adminuser/adminuser.component';
import { AdminComponent } from './admin.component';
import { AdminmentorComponent } from './adminmentor/adminmentor.component';
import { AdmintechnologyComponent } from './admintechnology/admintechnology.component';
import { AdmintrainingComponent } from './admintraining/admintraining.component';
import { AdminpaymentComponent } from './adminpayment/adminpayment.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
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
      { path: 'admin', component:AdminComponent  ,children:[ { path: 'adminuser', component: AdminuserComponent },
    { path: 'adminmentor', component: AdminmentorComponent }, { path: 'admintechnology', component: AdmintechnologyComponent },
    { path: 'admintraining', component: AdmintrainingComponent }, { path: 'adminpayment', component: AdminpaymentComponent }
     
  ]}
  ])
  ]
})
export class AdminModule { }
