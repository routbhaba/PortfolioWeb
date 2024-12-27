import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [NotFoundComponentComponent, AuthComponent, LoginComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
  ]
})
export class AuthModule { }
