import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageHomeRoutingModule } from './page-home-routing.module';
import { PageHomeComponent } from './page-home/page-home.component';

import {FilterListPipe} from '../../core/pip/filter-list.pipe';

@NgModule({
  declarations: [
    FilterListPipe,
    PageHomeComponent
  ],
  imports: [
    CommonModule,
    PageHomeRoutingModule,
  ]
})
export class PageHomeModule { }
