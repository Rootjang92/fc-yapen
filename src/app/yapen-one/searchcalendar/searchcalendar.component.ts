import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { StateviewService } from '../stateview.service';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, filter, scan, tap } from 'rxjs/operators';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';


@Component({
  selector: 'app-searchcalendar',
  template: `
  <div class="revCalWrapper" id="revCalWrapper" [@state]="stateviewService.state === 'calendar'">
    <div class="revCalTbl">
      <div>
        <div class="stayDay">숙박일수
          <div>
            <select name="revDay" id="revDay">
              <option value="1">1박2일</option>
              <option value="2">2박3일</option>
              <option value="3">3박4일</option>
              <option value="4">4박5일</option>
              <option value="5">5박6일</option>
              <option value="6">6박7일</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <ngb-datepicker #dp (select)="changeDate.emit($event)"
      class="date-picker"
      [firstDayOfWeek]="firstDayOfWeek"
      [markDisabled]="isDisabled"
      [dayTemplate]="t">
    </ngb-datepicker>

  <ng-template #t let-date="date" let-currentMonth="currentMonth"
    let-disabled="disabled">

    <span class="custom-day"
      [style.background-color]="(isDarked(date) ? '#CCC' : '')"
      [class.hidden]="date.month !== currentMonth"
      >
      {{ date.day }}
    </span>
  </ng-template>
</div>
  `,
  styleUrls: [`./searchcalendar.css`],
  animations: [
    trigger('state', [
      state('false' , style({
        transform: 'scaleY(0)',
        display: 'none'
      })),
      state('true',   style({
        transform: 'scaleY(1)',
        display: 'block'
      })),
      transition('false => true', animate('200ms ease-in')),
      transition('true => false', animate('100ms ease-out'))
    ])
  ]
})
export class SearchcalendarComponent implements OnInit {

  firstDayOfWeek = 7;

  selectedDate: NgbDateStruct;

  checkInDate: NgbDateStruct;

  today: Date = new Date();

  @Output() changeDate = new EventEmitter();

  constructor(public stateviewService: StateviewService,
              private http: HttpClient,
              calendar: NgbCalendar) {}
              // { this.selectedDate = calendar.getToday(); }

  ngOnInit() {
  }

  // get new date
  getEachDate(date: NgbDateStruct) {
    return new Date(date.year, date.month - 1, date.day + 1);
    // return eachDate;
  }

  // Make the dates before today color dark such as gray
  isDarked(date: NgbDateStruct) {
    return this.getEachDate(date).getTime() < this.today.getTime();
  }

  // Disable the dates bofre today & the months that are NOT current month
  isDisabled(date: NgbDateStruct, current: {month: number}) {
    const eachDate = new Date(date.year, date.month - 1, date.day + 1);
    const todayDate = new Date().getTime();
    return eachDate.getTime() < todayDate || date.month !== current.month;
  }
  // // when selecting a date, change to the date selected and to room status
  // onDateSelection(date: NgbDateStruct) {
  //   this.selectedDate = date;
  //   this.checkInDate = date;
  // }


}

