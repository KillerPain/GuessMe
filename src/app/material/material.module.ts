import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// tslint:disable-next-line:max-line-length
import { MatInputModule, MatButtonModule, MatIconModule, MatListModule, MatDialogModule, MatTabsModule, MatStepperModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    MatTabsModule,
    MatStepperModule
  ],
  declarations: [],
  exports: [
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    MatTabsModule,
    MatStepperModule
  ]
})
export class MaterialModule { }
