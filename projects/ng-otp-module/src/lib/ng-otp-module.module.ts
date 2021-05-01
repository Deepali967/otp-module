import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgOtpModuleComponent } from './ng-otp-module.component';

@NgModule({
  declarations: [NgOtpModuleComponent],
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  exports: [NgOtpModuleComponent],
})
export class NgOtpModuleModule {}
