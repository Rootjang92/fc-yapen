
import { Component, OnInit, Output, setTestabilityGetter } from '@angular/core';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';

interface Area {
  name: string;
  pensions_length: number;
  sub_location_no: string;
}

interface Themeinterface {
  key: string;
  value: string;
  checked: boolean;
}

interface Stay {
  key: string;
  value: number;
}

interface Price {
  key: string;
  value: number;
}
// s
@Component({
  selector: 'app-yapen-searchbar',
  template: `
  <app-condition [res]="res" [resid]="resid" [people]="people" [seletedDate]="seletedDate" [stayDate]="stayDate.key"
    [stayDatevalue]="stayDate.value" [basicPrice]="basicPrice" [selectPrice]="selectPrice"
      [setTheme]="setTheme" [setThemeValue]="basicTheme.value"
      [periodid]="periodid" [priceid]="priceid" [themeid]="themeid"></app-condition>
  <app-local (changeArea)="changeArea($event)"></app-local>
  <app-people (changePeople)="changePeople($event)" [peoplePercent]="peoplePercent"></app-people>
  <app-searchcalendar [stayPeriod]="stayPeriod" (changeDate)="onDateSelection($event)"
    (changeStayDate)="changeStayDate($event)" (setPeriod)="setPeriod($event)"></app-searchcalendar>
  <app-theme [selectPrice]="selectPrice" [setTheme]="setTheme"
    (setPrice)="setPrice($event)" (setThemeValue)="setThemeValue($event)"
    (changeTheme)="changeTheme($event)"></app-theme>
  <!-- 클릭 후 서치바 추가하기. -->
  <!-- 달력 넣기-->
  `,
  styleUrls: [`./yapen-searchbar.css`]
})
export class YapenSearchbarComponent {
  res = '양평';
  resid = '1.001010';
  people: any = '전체';
  peoplePercent = 0;

  periodid = 1;
  priceid = 0;
  themeid = '스파/월풀';
  @Output() stayDate;
  @Output() stayDatevalue;
  @Output() stayPeriod: any[];
  @Output() basicPrice;
  @Output() selectPrice: any[];
  @Output() seletedDate: NgbDateStruct;
  @Output() setTheme: any[];
  @Output() basicTheme;


  constructor(calendar: NgbCalendar) {
    this.seletedDate = calendar.getToday();
    this.stayPeriod = [
      { key: '1박 2일', value: 1},
      { key: '2박 3일', value: 2},
      { key: '3박 4일', value: 3},
      { key: '4박 5일', value: 4},
      { key: '5박 6일', value: 5},
      { key: '6박 7일', value: 6}
    ];
    this.stayDate = this.stayPeriod[0];
    this.stayDatevalue = this.stayPeriod[0];

    this.selectPrice = [
      { key: '가격전체', value: 0},
      { key: '5만원 이하', value: 1},
      { key: '5만원 ~ 10만원', value: 2},
      { key: '10만원 ~ 15만원', value: 3},
      { key: '15만원 ~ 20만원', value: 4},
      { key: '20만원 ~ 25만원', value: 5},
      { key: '25만원 ~ 30만원', value: 6},
      { key: '30만원 ~ 35만원', value: 7},
      { key: '35만원 ~ 40만원', value: 8},
      { key: '40만원 이상', value: 9}
    ];
    this.basicPrice = this.selectPrice[0];

    this.setTheme = [
      { key: '스파/월풀', value: '스파/월풀', checked: false},
      { key: '개별바베큐', value: '개별바베큐', checked: false},
      { key: '독채펜션', value: '독채펜션', checked: false},
      { key: '복층', value: '복층', checked: false},
      { key: '수영장', value: '수영장', checked: false},
      { key: '카페', value: '카페', checked: false}
    ];
    this.basicTheme = this.setTheme[0];
   }

    setThemeValue(index: number) {
      this.basicTheme = this.setTheme[index];
    }

    setPeriodValues(index: number) {
      this.stayDatevalue = this.stayPeriod[index];
    }

    setPriceValue(index: number) {
      this.basicPrice = this.selectPrice[index];
    }

    setPeriod(index: number) {
      this.stayDate = this.stayPeriod[index];
    }

    setPrice(index: number) {
      this.basicPrice = this.selectPrice[index];
    }

    stayDateValue() {
     this.periodid = this.stayDate.value;
    }

    PriceValue() {
      this.priceid = this.basicPrice.value;
    }

    Themes() {
      this.themeid = this.basicTheme.value;
    }

   changeStayDate(stay: Stay) {
    this.periodid = stay.value;
    console.log(this.stayDate);
   }

   changePrice(price: Price) {
     this.priceid = price.value;
   }

   changeTheme(themes: string) {
     this.themeid = themes;
   }

  //  changeArea(area: Area) {
  //    this.res = area.name;
  //    this.resid = area.sub_location_no;
  //  }

   changePeople(peo: string) {
    let p = +peo;
    if (p > 100) {
      p = 100;
      alert('100명 이하로 입력하세요.');
    } else if (p < 0) {
      p = 0;
    }
    this.people = p ;

    if (p === 0) {
      this.people = '전체';
    }
    this.peoplePercent = p * 10.02;
    console.log(peo);
  }

    onDateSelection(date: NgbDateStruct) {
      this.seletedDate = date;
      const calendarSelectedDate = `${date.year}-0${date.month}-${date.day}`; // 2018-08-22
    }

  // checkTheme(value: string) {
  //   console.log(value);
  // }
}
