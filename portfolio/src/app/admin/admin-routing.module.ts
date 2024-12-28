import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
     path: '', component: AdminComponent, children: [
       {
         path: 'content', component: HomeComponent
       },
       {
         path: '', redirectTo: 'content', pathMatch: 'full'
       }
     ]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
