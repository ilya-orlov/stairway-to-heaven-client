import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { TuiAppBarModule } from '@taiga-ui/addon-mobile';
import { TuiButtonModule } from '@taiga-ui/core';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, MainRoutingModule, TuiAppBarModule, TuiButtonModule],
})
export class MainModule {}
