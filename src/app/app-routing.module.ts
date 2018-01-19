import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { ProfileComponent } from './profile/profile.component';
import { CreateComponent } from './create/create.component';
import { GameComponent } from './game/game.component';
import { JoinComponent } from './join/join.component';


const routes: Routes = [
  {
    path: '',
    component: AuthComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: 'game',
    component: GameComponent
  },
  {
    path: 'join',
    component: JoinComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
