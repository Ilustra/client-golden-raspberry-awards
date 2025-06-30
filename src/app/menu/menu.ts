import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-menu',
  imports: [MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class Menu {

}
