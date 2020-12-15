import { SubmissionsService } from '@cpas/core-data';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Submission } from '@cpas/api-interface';
import { SubmissionsFacade } from '@cpas/core-state';

@Component({
  selector: 'cpas-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  allSubmissions$: Observable<Submission[]> = this.submissionsFacade
    .allSubmissions$;
  constructor(private submissionsFacade: SubmissionsFacade) {}

  ngOnInit(): void {
    this.loadSubmissions();
  }
  loadSubmissions() {
    this.submissionsFacade.loadSubmissions();
  }
}
