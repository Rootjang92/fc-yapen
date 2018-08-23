import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-yapen-payfinish',
  template: `
  `,
  styles: [`
    .pay-finish-page{
      margin: 20px 20px 20px 20px;
    }
    .header{
      text-align: center;
    }
    .payment-info{
      margin-top: 30px;
    }
    .payment-info th{
      background: #f7f7f7;
      width: 20%;
    }
    .header-table{
      font-size: 16px;
      color: #ff6559;
      font-weight: bold;
    }
  `]
})
export class YapenPayfinishComponent implements OnInit {

  urlPay = '​https://api.pmb.kr/reservation/pay/​';

  @Input() subscriber;
  @Input() payType;

  // mySubscriber;
  // myStayNum;
  // myCheckInDate;
  // myPayType;
  // myTotalPrice;

  constructor(private http: HttpClient) {

   }

  ngOnInit() {
    // this.http.get(this.urlPay)
      // .subscribe(myInfo => {
      //   // if myInfo = {pk: 1, checkin_date: "2018-08-22", ... } -> object

      //   // this.mySubscriber = myInfo.subscriber // "maro's_friends"
      //   // this.myStayNum = myInfo.stay_day_num // 2
      //   // this.myCheckInDate = myInfo.checkin_date // "2018-08-22"
      //   // this.myPayType = myInfo.method_of_payment // "카드간편결제"
      //   // this.myTotalPrice = myInfo.total_price // 4000000
      // });
  }


}
