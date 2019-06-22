import { Injectable } from '@angular/core';
import {ApiCoreService} from '../api-core/api-core.service';

@Injectable({
  providedIn: 'root'
})
export class NamadListService {

  constructor(private apiCoreService: ApiCoreService) { }


  public getNamadList() {
    return this.apiCoreService.getRequest(this.apiCoreService.apiUrl + 'companies/favorites');
  }

  public favoriteNamad(id: number) {
    // const body = JSON.stringify({company_id: id});
    const body = '';
    const url = this.apiCoreService.apiUrl + 'users/favorites/companies/' + id;
    return this.apiCoreService.postRequest(url, body);
  }


}
