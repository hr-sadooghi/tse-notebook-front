import { Component, OnInit } from '@angular/core';
import {NamadListService} from '../../../core/services/namad-list/namad-list.service';



@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.scss']
})
export class PageHomeComponent implements OnInit {


  Namad: Array<{
    favorite: any;
    id: number;
    name: string;
    symbol: string;
  }>;


  constructor(private namadListService: NamadListService) { }


  ngOnInit() {
    this.getNamadList();
  }


  private getNamadList() {
    this.namadListService.getNamadList().subscribe(
      (companies: any) => {this.Namad = companies; }
    );
  }

  favorite(id: number) {

    if (id) {
      this.namadListService.unfavouriteNamad(id).subscribe(
        (data) => {
          console.warn(data);
          this.getNamadList();
          alert('ok');
        }
      );

    } else {
      this.namadListService.favoriteNamad(id).subscribe(
        (data) => {
          console.warn(data);
          this.getNamadList();
          alert('ok');
        }
      );
    }


  }

}
