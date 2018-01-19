import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileComponent } from './profile/profile.component';
import { CreateComponent } from './create/create.component';
import { FormComponent } from './form/form.component';

import { AuthService } from './auth/auth.service';
import { CreateComponentService } from './create/create-component.service';
import { GameComponent } from './game/game.component';
import { GameComponentService } from './game/game-component.service';
import { JoinComponent } from './join/join.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    ProfileComponent,
    CreateComponent,
    FormComponent,
    GameComponent,
    JoinComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [AuthService, CreateComponentService, GameComponentService],
  bootstrap: [AppComponent],
  entryComponents: [FormComponent]
})
export class AppModule { }
