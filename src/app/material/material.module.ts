import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule, MatButtonModule, MatIconModule, MatListModule, MatDialogModule, MatTabsModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    MatTabsModule
  ],
  declarations: [],
  exports: [
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    MatTabsModule
  ]
})
export class MaterialModule { }
