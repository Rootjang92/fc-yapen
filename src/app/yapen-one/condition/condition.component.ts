import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StateviewService } from '../stateview.service';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, filter, scan, tap } from 'rxjs/operators';
import { forEach } from '@angular/router/src/utils/collection';
import { MomentModule } from 'angular2-moment';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-condition',
  template: `
  <div class="reserveLayer">
  <ul>
    <li style="width:260px" class="first-li" (click)="toggle('local')">
      <img src="../assets/glyphicons_free/glyphicons/png/glyphicons-39-plane.png" alt="지역" class="first-img">
      <div id="schLocationText">{{ res }}</div> <!-- 클릭하면 데이터가 바뀌도록  -->
      <input type="hidden" name="schLoaction" id="schLoaction" [value]="res">
      <input type="hidden" name="schLoactionCode" id="schLoactionCode" [value]="resid">
      <img src="../assets/glyphicons_free/glyphicons/png/glyphicons-602-chevron-down.png" alt="펼치기/닫기" class="arrowToggle last-img">
    </li>
    <li style="width:250px" (click)="toggle('calendar')">
      <img src="../assets/glyphicons_free/glyphicons/png/glyphicons-46-calendar.png" alt="날짜" class="first-img">

      <div id="schStartDateText">{{ searchDate() }} ({{ stayDate }})</div>
      <input type="hidden" name="schStartDate" id="schStartDate" [value]="searchDate()">
      <input type="hidden" name="schEndDate" id="schEndDate" [value]="getNextDate()">

      <img src="../assets/glyphicons_free/glyphicons/png/glyphicons-602-chevron-down.png" alt="펼치기/닫기" class="arrowToggle last-img">
    </li>
    <li style="width:260px" (click)="toggle('people')">
      <img src="../assets/glyphicons_free/glyphicons/png/glyphicons-500-family.png" alt="인원" class="first-img">
      <div id="schPeopleText">{{ people }}명</div>
      <input type="hidden" name="schPeople" id="schPeople" [value]="people">
      <img src="../assets/glyphicons_free/glyphicons/png/glyphicons-602-chevron-down.png" alt="펼치기/닫기" class="arrowToggle last-img">
      </li>
    <li style="width:260px" (click)="toggle('theme')">
      <img src="../assets/glyphicons_free/glyphicons/png/glyphicons-6-car.png" alt="테마" class="first-img">
      <div>테마 & 가격선택</div>
      <img src="../assets/glyphicons_free/glyphicons/png/glyphicons-602-chevron-down.png" alt="펼치기/닫기" class="arrowToggle last-img">
      </li>
    <li style="width:182px; background-color:#ff6559; height: 42px;" class="last-li"
          (click)="searchRoom()">
      <img src="../assets/glyphicons_free/glyphicons/png/glyphicons-28-search.png" alt="찾기" class="first-img">
      <div>빈방찾기</div>
    </li>
  </ul>
</div>
  `,
  styleUrls: [`./condition.css`]
})
export class ConditionComponent implements OnInit {
  @Input() res: any[];
  @Input() resid: number;
  @Input() people = '전체';
  @Input() periodid: number;
  @Input() priceid: number;
  @Input() themeid: string;
  @Input() seletedDate;
  @Input() stayDate;
  @Input() basicPrice;
  @Input() selectPrice;
  @Input() stayPeriod;
  @Input() stayDatevalue;
  @Input() setThemeValue;
  @Input() PriceValue;
  @Input() Themes;
  @Input() setTheme;
  @Input() basicTheme;
  location = [];


  constructor(public stateviewService: StateviewService,
              private http: HttpClient,
              calendar: NgbCalendar) { }

  ngOnInit() {
    // this.date = this.seletedDate.day;
    // this.date.setDate( this.date.getDate() + this.stayDatevalue );
    // console.log(this.date);
  }

  toggle(state: string) {
    if (this.stateviewService.state === state) {
      this.stateviewService.state = '';
    } else {
      this.stateviewService.state = state;
    }
  }


  searchDate() {
    const dateS = `${this.seletedDate.year}-${this.seletedDate.month }-${ this.seletedDate.day }`;
    // console.dir(this.seletedDate.day);
    return dateS;
  }

  getNextDate() {
    const nextDay = new Date(this.searchDate());
    nextDay.setDate(nextDay.getDate() + this.stayDatevalue);
    const next = `${nextDay.getFullYear()}/${nextDay.getMonth() + 1}/${nextDay.getDate()}`;
    // console.log(next);
    return next;
  }

  searchRoom() {
    const conditionSearchUrl = 'https://api.pmb.kr/search/button_search/?'
      + 'sub_location_no=' + this.resid + '&max_num_people=' + this.people +
        '&price_range=' + this.basicPrice.value + '&checkin_date=' + this.searchDate() + '&'
        + 'stay_day_num=' + this.stayDatevalue + '&theme=' + this.themeid;
    console.log(conditionSearchUrl);
    this.http.get<any[]>(conditionSearchUrl)
      .subscribe( res => {
        this.stateviewService.roomlist = res;
      });
  }
}
