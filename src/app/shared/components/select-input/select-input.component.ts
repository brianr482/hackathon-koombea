import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ProductFilterOption } from '@core/enums';

@Component({
  selector: 'app-select-input',
  templateUrl: './select-input.component.html',
  styleUrls: ['./select-input.component.scss']
})
export class SelectInputComponent implements OnInit {
  public activeMenu: boolean;
  @Input() selectedOption: ProductFilterOption | null;
  @Input() options: any[];
  @Output() optionEvent = new EventEmitter<string | null>();
  constructor() { }

  ngOnInit() {
  }

  toggleMenu() {
    this.activeMenu = !this.activeMenu;
  }

  selectOption(option: string) {
    this.activeMenu = false;
    if (option !== this.selectedOption) {
      this.optionEvent.emit(option);
    }
  }

}
