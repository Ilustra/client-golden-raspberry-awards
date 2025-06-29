import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Menu } from './menu/menu';
import { Dashboard } from './dashboard/dashboard';
import { ListAllMovie } from './list-all-movie/list-all-movie';
import { HttpClientModule, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    Menu,
    Dashboard,
    ListAllMovie,
    MatTableModule,
    MatSortModule,
    MatMenuModule
  ]
})
export class AppModule { }
