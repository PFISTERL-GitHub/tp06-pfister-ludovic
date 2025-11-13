import { Component, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';
import { AuthState } from './shared/states/auth-state';
import { LoginComponent } from './app/login/login.component';


export class App {
  name = 'Angular';
}

bootstrapApplication(App, {
  providers: [importProvidersFrom(NgxsModule.forRoot([AuthState]))],
});
