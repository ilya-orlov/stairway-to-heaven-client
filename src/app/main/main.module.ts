import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { TuiAppBarModule, TuiSidebarModule } from '@taiga-ui/addon-mobile';
import { TUI_BUTTON_OPTIONS, TuiButtonModule } from '@taiga-ui/core';
import { TuiActiveZoneModule } from '@taiga-ui/cdk';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    TuiAppBarModule,
    TuiButtonModule,
    TuiSidebarModule,
    TuiActiveZoneModule,
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
