import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
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
            <select name="revDay" id="revDay" #revDay #revDayvalue  (change)="setPeriod.emit(revDay.selectedIndex)">
              <option *ngFor="let period of stayPeriod"  (change)="changeStayDate.emit($event.target.value)"
                [value]="period.value">{{ period.key }}</option>
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
  stayid: number;

  firstDayOfWeek = 7;

  selectedDate: NgbDateStruct;

  checkInDate: NgbDateStruct;

  today: Date = new Date();
  @Input() stayDate = new EventEmitter();
  @Input() stayPeriod;
  @Input() periodid: number;
  @Output() changeDate = new EventEmitter();
  @Output() setPeriod = new EventEmitter();
  @Output() setPeriodValue = new EventEmitter();
  @Output() changeStayDate = new EventEmitter();

  constructor(public stateviewService: StateviewService,
              private http: HttpClient) { }

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

  // stayDate(value: number) {
  //   console.log(value);
  // }
}

