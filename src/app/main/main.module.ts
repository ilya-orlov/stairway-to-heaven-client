import { TuiSidebar } from "@taiga-ui/addon-mobile";
import { TuiAppBar } from "@taiga-ui/layout";
import { TuiActiveZone } from "@taiga-ui/cdk";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { TUI_BUTTON_OPTIONS, TuiLink, TuiButton } from '@taiga-ui/core';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    ...TuiAppBar,
    TuiButton,
    ...TuiSidebar,
    TuiActiveZone,
    TuiLink,
  ],
  providers: [
    {
      provide: TUI_BUTTON_OPTIONS,
      useValue: {
        appearance: 'flat',
        size: 'm',
        shape: 'rounded',
      },
    },
  ],
})
export class MainModule {}
