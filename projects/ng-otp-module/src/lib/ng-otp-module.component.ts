import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: `
  .otp-content {
  display: flex;
  justify-content: space-around;
  width: 100%;
  overflow: hidden;
  height: 100%;
  margin-top: 2rem;
  padding-top: 2rem;
  .otp {
    height: 2rem;
    width: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    input {
      width: 100%;
      padding: 0;
      height: 100%;
      text-align: center;
    }
  }
}`,
  template: `
    <div class="otp-content">
      <div class="otp" *ngFor="let value of values">
        <input
          class="input-box"
          (keyup)="handleKeyUpEvent($event, value)"
          id="{{ value }}"
          [(ngModel)]="otpCode[value]"
          [ngModelOptions]="{ standalone: true }"
          minlength="1"
          maxlength="1"
          autocomplete="off"
        />
      </div>
    </div>
  `,
  styles: [],
})
export class NgOtpModuleComponent implements OnInit {
  @Input() fields = 4;
  @Input() pattern: any;
  values: any[] = [];
  otpCode: any[] = [];
  oldCodeValue: any;

  @Output() otpValue: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {
    for (var i: any = 0; i < this.fields; i++) {
      this.values.push(i);
    }
    console.log(this.values);
  }

  handleKeyUpEvent($event: any, i: any) {
    if ($event.keyCode !== 8) {
      if (
        this.otpCode[i].length === $event.target['maxLength'] &&
        this.pattern.test(this.otpCode[i])
      ) {
        this.otpCode[i] = $event.target.value;
        if (i !== this.values.length - 1) {
          this.getInputElement(parseInt(i))?.focus();
        } else {
          this.otpValue.emit(this.otpCode.join(''));
          this.getInputElement(parseInt(i))?.blur();
        }
      } else {
        this.otpCode[i] = '';
      }
    } else {
      this.otpCode[i] = '';
      if (i !== 0) {
        this.getInputElement(parseInt(i) - 1)?.focus();
      }
    }
  }

  getInputElement(index: any) {
    return document.getElementById(index);
  }
}
