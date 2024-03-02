import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  missionName: string = "Angular Program";
  techName: string = "Angular4";
  carriername: string ="Full Stack Web Development"
}
