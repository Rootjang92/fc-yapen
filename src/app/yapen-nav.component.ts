import { Component, OnInit } from '@angular/core';
import { StateviewService } from './yapen-one/stateview.service';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, filter, scan, tap } from 'rxjs/operators';
import { forEach } from '@angular/router/src/utils/collection';
import { Input } from '@angular/core';
import { Router } from '../../node_modules/@angular/router';

@Component({
  selector: 'app-yapen-nav',
  template: `
  <app-yapen-login (loginView)="loginView($event)" [(visible)]="visible"></app-yapen-login>
  <app-yapen-signup [(visible2)]="visible2"></app-yapen-signup>

  <div class="yapenGuideHead" style="width: 1260px; left: 43px;">
    <div class="navLayer">
      <ul class="nav justify-content-end">
        <div class="nav-li">
          <li class="nav-item">
            <a class="nav-link" (click)="visible2=!visible2">
              <img src="https://img.yapen.co.kr/pension/images/web/join_text.png" alt="회원가입" />
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" *ngIf="!token" (click)="visible=!visible">
              <img src="https://img.yapen.co.kr/pension/images/web/login_text.png" alt="로그인" />
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" *ngIf="token" routerLink="/main" (click)="logout()" (click)="visible=!visible">
              <img src="https://img.yapen.co.kr/pension/images/web/logout_text.png" alt="로그아웃" />
            </a>
          </li>
        </div>
        <div class="searchbar">
          <img src="../assets/glyphicons_free/glyphicons/png/glyphicons-28-search.png" alt="지역" class="first-img">
          <input type="text" class="sbText" autocomplete="off" autocorrect="off"
            spellcheck="false" id="sbText" value placeholder="업체 / 지역 / 펜션명" #searchBox (keyup.enter)="search(searchBox.value)">
        </div>
      </ul>
    </div>
  </div>
  <a routerLink="/main" (click)="searchyame()">
    <img src="http://image2.yanolja.com/pension/new/yapen.png" alt="야놀자펜션" class="yapenLogo" />
  </a>
  `,
  styleUrls: [`./nav.css`]
})
export class YapenNavComponent implements OnInit {
  @Input() visible: boolean = false;
  @Input() visible2: boolean = false;

  token = localStorage.getItem('key');

  constructor(
    public stateviewService: StateviewService,
    private http: HttpClient,
    private router: Router) { }

  ngOnInit() {
  }

  logout() {
    if (this.token === null || this.token === '') {
      alert('로그인 상태가 아닙니다.');
      return;
    }

    alert('로그아웃 되었습니다.');
    this.router.navigate(['/main']);
    localStorage.removeItem('key');
    this.token = localStorage.getItem('key');
    console.log(this.token);
  }

  loginView(event) {
    localStorage.setItem('key', event);
    this.token = localStorage.getItem('key');
  }
  search(value: string) {
    console.log(value);
    const baseUrl = 'https://api.pmb.kr/search/keyword_search/?search=' + value;

    this.http.get<any[]>(baseUrl)
    .subscribe( res => {
      this.stateviewService.pensionList = res;
    });
  }

  searchyame() {
    const baseUrl = 'https://api.pmb.kr/search/keyword_search/?search=';

    this.http.get<any[]>(baseUrl)
    .subscribe( res => {
      this.stateviewService.pensionList = res;
    });
  }
}
