import { Component, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';
import { AuthState } from './shared/states/auth-state';
import { AppComponent } from './app/app.component';


bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(NgxsModule.forRoot([AuthState]))],
});
