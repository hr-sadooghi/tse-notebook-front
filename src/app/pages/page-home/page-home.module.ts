import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageHomeRoutingModule } from './page-home-routing.module';
import { PageHomeComponent } from './page-home/page-home.component';

import {FilterListPipe} from '../../core/pip/filter-list.pipe';
import { SetBuyComponent } from './components/set-buy/set-buy.component';
import { SetSellComponent } from './components/set-sell/set-sell.component';
import { SetLinkComponent } from './components/set-link/set-link.component';
import { SetFileComponent } from './components/set-file/set-file.component';
import { SetDescriptionComponent } from './components/set-description/set-description.component';
import { SetPictureComponent } from './components/set-picture/set-picture.component';
import { NamadInfoComponent } from './components/namad-info/namad-info.component';
import { NamadEventListComponent } from './components/namad-event-list/namad-event-list.component';

@NgModule({
  declarations: [
    FilterListPipe,
    PageHomeComponent,
    SetBuyComponent,
    SetSellComponent,
    SetLinkComponent,
    SetFileComponent,
    SetDescriptionComponent,
    SetPictureComponent,
    NamadInfoComponent,
    NamadEventListComponent
  ],
  imports: [
    CommonModule,
    PageHomeRoutingModule,
  ]
})
export class PageHomeModule { }
