import { Component, OnInit } from '@angular/core';
import { Submission } from '@cpas/api-interface';
import { SubmissionsService } from '@cpas/core-data';
import { Observable } from 'rxjs';

@Component({
  selector: 'cpas-production-angular-submissions',
  templateUrl: './submissions.component.html',
  styleUrls: ['./submissions.component.scss'],
})
export class SubmissionsComponent implements OnInit {
  submissions$: Observable<Submission[]>;
  selectedSubmission: Submission;
  constructor(private submissionService: SubmissionsService) {}

  ngOnInit(): void {
    this.loadSubmissions();
    this.selectSubmission(null);
  }
  loadSubmissions() {
    this.submissions$ = this.submissionService.all();
  }
  selectSubmission(submission: any) {
    console.log(submission);
    this.selectedSubmission = submission;
  }
}
