import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Submission } from '@cpas/api-interface';

@Component({
  selector: 'cpas-submissions-list',
  templateUrl: './submissions-list.component.html',
  styleUrls: ['./submissions-list.component.scss'],
})
export class SubmissionsListComponent implements OnInit {
  @Input() submissions: Submission[] = [];
  @Output() selected = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}
