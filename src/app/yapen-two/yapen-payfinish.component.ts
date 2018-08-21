import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yapen-payfinish',
  template: `
    <div>
      <h2>결제가 완료되었습니다!</h2>
      <section class="payment-info">
        <h3>결제 정보</h3>
        <table class="table table-bordered">
          <tbody>

            <!-- 예약자 이름 -->
            <tr>
              <th scope="row">예약자 이름</th>
              <td>
                <span>
                  홍길동
                </span>
              </td>
            </tr>
            <!-- 예약자 이름 -->

            <!-- 펜션 이름 -->
            <tr>
              <th scope="row">펜션 이름</th>
              <td>
                <span>
                  가평 폴라리스펜션[17.11월리모델링]
                </span>
              </td>
            </tr>
            <!-- 펜션 이름 -->

            <!-- 방 이름 -->
            <tr>
              <th scope="row">방 이름</th>
              <td>
                <span>
                  스콜피오(전갈자리)
                </span>
              </td>
            </tr>
            <!-- 방 이름 -->

            <!-- 결제금액 -->
            <tr>
              <th scope="row">결제금액</th>
              <td>
                <span>
                  400000원
                </span>
              </td>
            </tr>
            <!-- 결제금액 -->

          </tbody>
        </table>
      </section>
    </div>
  `,
  styles: []
})
export class YapenPayfinishComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
