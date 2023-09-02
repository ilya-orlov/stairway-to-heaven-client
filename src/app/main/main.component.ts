import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  isSidebarOpen = false;

  toggleSidebar(value: boolean): void {
    this.isSidebarOpen = value;
  }
}
