import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path:'login',
        children: [
          {
            path:'',
            loadChildren: () => import('../login/login.module').then(m => m.LoginPageModule)
          }
        ]
      },
      {
        path:'signup',
        children: [
          {
            path:'',
            loadChildren: () => import('../signup/signup.module').then(m => m.SignupPageModule)
          }
        ]
      },
      {
        path:'about',
        children: [
          {
            path:'',
            loadChildren: () => import('../about/about.module').then(m => m.AboutPageModule)
          }
        ]
      },
      {
        path:'profile',
        children: [
          {
            path:'',
            loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule)
          }
        ]
      }, 
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
