import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yapen-footer',
  template: `
<div class="yapenTailLayer">
  <table cellpadding="0" cellspacing="0">
      <tr>
          <td style="text-align: right; width:360px;">
              <img src="http://img.yapen.co.kr/pension/web/intro/yanoljaTravel.png" style="height:100px;" alt="야놀자트래블" />
          </td>
          <td style="padding-left:35px; text-align:left;">
              <a href="/rules/terms?tab=1" target="_blank">이용약관</a> | <b><a href="/rules/terms?tab=2"
                target="_blank">개인정보 처리방침</a></b> | <a href="/rules/terms?tab=3" target="_blank">개인정보 제3자 제공</a> |
              <a href="/rules/terms?tab=4" target="_blank">위치기반 서비스 이용약관</a><br /><br />
              (주)야놀자트래블 (대표이사 구본길)<br />
              주소: 서울특별시 강남구 테헤란로 427<br />
              고객센터: 1644-4816 (pension@yanolja.com)<br />
              사업자등록번호: 261-81-03988<br />
              통신판매업신고: 제2013-서울강남-03081호<br />
              관광사업등록: 제2016-24호(서울특별시 강남구)<br />
              <b>ⓒ</b> <label style="color:#FF6559;">YanoljaTravel</label> Corp.
          </td>
      </tr>
  </table>
</div>

  `,
  styles: [

  ]
})
export class YapenFooterComponent implements OnInit {

  constructor() { }


  ngOnInit() {}
}
