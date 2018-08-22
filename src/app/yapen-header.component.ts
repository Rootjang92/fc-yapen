import { Component, Input } from '@angular/core';
import { Router } from '../../node_modules/@angular/router';

@Component({
  selector: 'app-yapen-header',
  template: `
    <a routerLink="/main">main   </a><a> | </a>
    <app-yapen-login (loginView)="loginView($event)" [(visible)]="visible"></app-yapen-login>
    <app-yapen-signup [(visible2)]="visible2"></app-yapen-signup>
    <button *ngIf="!token" (click)="visible=!visible"> login </button><a>
    <a *ngIf="token" routerLink="/main" (click)="logout()">로그아웃</a></a> |
    <button (click)="visible2=!visible2">  signup</button><a> | </a>
    `,
  styles: [
  ]
})
export class YapenHeaderComponent {
  @Input() visible: boolean = false;
  @Input() visible2: boolean = false;

  token = localStorage.getItem('key');

  constructor(private router: Router) {  }

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
    console.log(event);
  }

}
