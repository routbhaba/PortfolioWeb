import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponentComponent } from './auth/not-found-component/not-found-component.component';


const routes: Routes = [
  { path: 'home', loadChildren: () => import(`./admin/admin.module`).then(m => m.AdminModule) },
  { path: 'auth', loadChildren: () => import(`./auth/auth.module`).then(m => m.AuthModule) },
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  {path: '404', component: NotFoundComponentComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
