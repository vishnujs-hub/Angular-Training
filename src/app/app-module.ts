import {
  NgModule,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Welcome } from './welcome/welcome';
import { UserStyle } from './user-style/user-style';

@NgModule({
  declarations: [App, Welcome, UserStyle],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
  ],
  bootstrap: [App],
})
export class AppModule {}
