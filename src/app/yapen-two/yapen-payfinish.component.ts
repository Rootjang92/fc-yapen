import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-yapen-payfinish',
  template: `
    <div class="pay-finish-page">
      <h2 class="header">결제가 완료되었습니다!</h2>
      <section class="payment-info">
        <h3 class="header-table">결제 정보</h3>
        <table class="table table-bordered">
          <tbody>

            <!-- 예약자 이름 -->
            <tr>
              <th scope="row">예약자 이름</th>
              <td>
                <span>
                  {{ subscriber }}
                </span>
              </td>
            </tr>
            <!-- 예약자 이름 -->

            <!-- 예약기간 -->
            <!--
            <tr>
              <th scope="row">예약 기간</th>
              <td>
                <span>
                  {{ myStayNum }}
                </span>
              </td>
            </tr>
            -->
            <!-- 예약기간 -->

            <!-- 예약 날짜 -->
            <!--
            <tr>
              <th scope="row">예약 날짜</th>
              <td>
                <span>
                  {{ myCheckInDate }}
                </span>
              </td>
            </tr>
            -->
            <!-- 예약 날짜 -->

            <!-- 결제수단 -->
            <tr>
              <th scope="row">결제수단</th>
              <td>
                <span>
                  {{ payType }}
                </span>
              </td>
            </tr>
            <!-- 결제수단 -->

            <!-- 결제금액 -->
            <!--
            <tr>
              <th scope="row">결제금액</th>
              <td>
                <span>
                  {{ myTotalPrice }}
                </span>
              </td>
            </tr>
            -->
            <!-- 결제금액 -->

          </tbody>
        </table>
      </section>
    </div>
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
