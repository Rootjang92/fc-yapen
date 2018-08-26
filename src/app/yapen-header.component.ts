import { Component, Input } from '@angular/core';
import { Router } from '../../node_modules/@angular/router';

@Component({
  selector: 'app-yapen-header',
  template: `

    <app-yapen-login (loginView)="loginView($event)" [(visible)]="visible"></app-yapen-login>
    <app-yapen-signup [(visible2)]="visible2"></app-yapen-signup>
    <div class="yapenHeader" id="yapenHeader">
      <input type="text" name="" style="display:none;" />
        <div class="topLayer">
          <app-yapen-nav></app-yapen-nav>
        </div>
        <app-yapen-searchbar></app-yapen-searchbar>
        <app-slide></app-slide>
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
  @Input() visible: boolean;
  @Input() visible2: boolean;

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
