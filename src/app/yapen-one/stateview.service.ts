import { Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';


@Injectable({
  providedIn: 'root'
})

export class StateviewService {
  public state = '';
  public data: any = {};
  public res: any[];
  pensionList: any[];
  roomlist: any[];
  baseUrl = 'https://pmb.kr/search/keyword_search/';
  queryUrl = '?search=';
  url = 'https://api.pmb.kr/location/location-name';
  location = [];

  constructor(private http: HttpClient) { }

  getLocation() {
    this.http.get<any[]>(this.url)
      .subscribe( res => {
        // console.log(res);
        this.res = res;
          res.filter((pension, i) => {
            if ( pension.name === '가평' || pension.name === '경기') {
                this.location.push(pension.sublocations);
                console.log(this.location);
          }
      });
    });
  }
}
