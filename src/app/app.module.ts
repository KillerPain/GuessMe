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
import { JoinService } from './join/join.service';
import { FileComponent } from './file/file.component';
import { AwsService } from './aws.service';
import { ProfileService } from './profile/profile.service';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    ProfileComponent,
    CreateComponent,
    FormComponent,
    GameComponent,
    JoinComponent,
    FileComponent
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
  providers: [AuthService, CreateComponentService, GameComponentService, JoinService, AwsService, ProfileService],
  bootstrap: [AppComponent],
  entryComponents: [FormComponent, FileComponent]
})
export class AppModule { }
