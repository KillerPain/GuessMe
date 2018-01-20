import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material';
import { FileComponent } from '../file/file.component';
import { AwsService } from '../aws.service';
import { ProfileService } from './profile.service';

@Component({
  selector: 'gm-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  fileNameDialogRef: MatDialogRef<FileComponent>;
  profile: any = {};
  photo: string;

  constructor(private service: AwsService, private dialog: MatDialog, private profileService: ProfileService) { }

  ngOnInit() {
  }

  uploadImage() {
    this.fileNameDialogRef = this.dialog.open(FileComponent);
    this.fileNameDialogRef.componentInstance.username = this.profile.email;
  }
}
