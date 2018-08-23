import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { StateviewService } from '../stateview.service';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-theme',
  template: `
  <div class="revThemeLayer" id="revThemeLayer" [@state]="stateviewService.state==='theme'">
  <table cellpadding="0" cellspacing="0" class="revThemeTbl">
    <tbody>
      <tr>
        <th>가격선택</th>
        <td>
          <select name="schPrice" id="schPrice" #schPrice (change)="setPrice.emit(schPrice.selectedIndex)">
            <option *ngFor="let price of selectPrice" [value]="price.value">{{ price.key }}</option>
          </select>
        </td>
      </tr>
      <tr>
        <th>객실시설/테마</th>
        <td>
          <ul>
            <li *ngFor="let themes of setTheme">
              <input type="checkbox" name="schTheme" [value]="themes.value" [checked]="themes.checked"
                (change)="checkTheme.emit($event.target.value)" (change)="checkValueTheme.emit($event.target.value)"
                 (change)="changeTheme.emit($event.target.value)" (change)="checkedTheme.emit($event.target.value)">
              <label for="themes{{ themes.value }}">{{ themes.key }}</label>
            </li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
</div>
  `,
  styleUrls: [`./theme.css`],
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
export class ThemeComponent implements OnInit {
  @Output() setPrice = new EventEmitter();
  @Input() selectPrice;
  @Input() seletedTheme;
  @Input() setTheme;
  @Output() changePrice = new EventEmitter();
  @Output() changeTheme = new EventEmitter();
  @Output() checkedTheme = new EventEmitter();
  @Output() checkTheme = new EventEmitter();
  @Output() checkValueTheme = new EventEmitter();

  constructor(public stateviewService: StateviewService) { }

  ngOnInit() {
  }

  check(value) {
    console.log(value);
  }
}
