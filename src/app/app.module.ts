import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TuiAppBarModule } from '@taiga-ui/addon-mobile';
import { TuiRootModule } from '@taiga-ui/core';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, TuiAppBarModule, TuiRootModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
