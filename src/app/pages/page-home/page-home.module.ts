import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageHomeRoutingModule } from './page-home-routing.module';
import { PageHomeComponent } from './page-home/page-home.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatCardModule, MatDividerModule, MatIconModule, MatInputModule, MatTableModule} from '@angular/material';

@NgModule({
  declarations: [PageHomeComponent],
  imports: [
    CommonModule,
    PageHomeRoutingModule,
    MatGridListModule,
    MatListModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatDividerModule,
    MatCardModule,
    MatToolbarModule
  ]
})
export class PageHomeModule { }
