import { TuiAppBar } from "@taiga-ui/layout";
import { NG_EVENT_PLUGINS } from "@taiga-ui/event-plugins";
import { TuiRoot } from "@taiga-ui/core";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ...TuiAppBar,
    TuiRoot,
    BrowserAnimationsModule,
  ],
  providers: [NG_EVENT_PLUGINS],
  bootstrap: [AppComponent],
})
export class AppModule {}
