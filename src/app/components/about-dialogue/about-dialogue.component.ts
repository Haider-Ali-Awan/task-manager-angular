import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-about-dialogue',
  templateUrl: './about-dialogue.component.html',
  styleUrls: ['./about-dialogue.component.scss']
})
export class AboutDialogueComponent implements OnInit {


  constructor(private dialogRef: MatDialogRef<AboutDialogueComponent>) { }
  onClose() {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }



}
