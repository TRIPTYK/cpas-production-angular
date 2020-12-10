import { Component, Input, OnInit } from '@angular/core';
import { Submission } from '@cpas/api-interface';

@Component({
  selector: 'cpas-submissions-details',
  templateUrl: './submissions-details.component.html',
  styleUrls: ['./submissions-details.component.scss'],
})
export class SubmissionsDetailsComponent implements OnInit {
  @Input() submission: Submission;
  constructor() {}

  ngOnInit(): void {}
}
