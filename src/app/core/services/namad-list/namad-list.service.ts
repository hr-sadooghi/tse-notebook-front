import { Injectable } from '@angular/core';
import {ApiCoreService} from '../api-core/api-core.service';

@Injectable({
  providedIn: 'root'
})
export class NamadListService {

  constructor(private apiCoreService: ApiCoreService) { }


  public getNamadList() {
    return this.apiCoreService.getRequest(this.apiCoreService.apiUrl + '');
  }


}
