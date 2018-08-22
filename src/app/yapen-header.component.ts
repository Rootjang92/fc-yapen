import { Component, Input } from '@angular/core';
import { Router } from '../../node_modules/@angular/router';

@Component({
  selector: 'app-yapen-header',
  template: `
    <app-yapen-login (loginView)="loginView($event)" [(visible)]="visible"></app-yapen-login>
    <app-yapen-signup [(visible2)]="visible2"></app-yapen-signup>

    <div class="yapenGuideHead">
      <div class="headLayer">
      <a (click)="visible2=!visible2">
          <img src="https://img.yapen.co.kr/pension/images/web/join_text.png" alt="회원가입" />
        </a>
        <a *ngIf="!token" (click)="visible=!visible">
          <img src="https://img.yapen.co.kr/pension/images/web/login_text.png" alt="로그인" />
        </a>
        <a *ngIf="token" routerLink="/main" (click)="logout()">
          <img src="https://img.yapen.co.kr/pension/images/web/logout_text.png" alt="로그아웃" />
        </a>
      </div>
    </div>
    <div class="yapenHeader" id="yapenHeader">
      <input type="text" name="" style="display:none;" />
        <div class="topLayer">
        <a routerLink="/main">
          <img src="http://image2.yanolja.com/pension/new/yapen.png" alt="야놀자펜션" class="yapenLogo" /></a>
        </div>
    `,
  styles: [`
  .yapenHeader .topLayer {
    color: #333;
    position: relative;
    text-align: center;
    width: 1220px;
    margin: 50px auto;
}`
  ]
})
export class YapenHeaderComponent {
  @Input() visible: boolean = false;
  @Input() visible2: boolean = false;

  token = localStorage.getItem('key');

  constructor(private router: Router) { }

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

}
