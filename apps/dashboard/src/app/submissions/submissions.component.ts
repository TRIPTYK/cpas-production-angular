import { Component, OnInit } from '@angular/core';
import { Submission } from '@cpas/api-interface';
import { SubmissionsFacade } from '@cpas/core-state';
import { Observable } from 'rxjs';

const emptySubmission: Submission = {
  id: null,
  name: '',
  message: '',
};
@Component({
  selector: 'cpas-production-angular-submissions',
  templateUrl: './submissions.component.html',
  styleUrls: ['./submissions.component.scss'],
})
export class SubmissionsComponent implements OnInit {
  submissions$: Observable<Submission[]>;
  selectedSubmission: Submission;

  constructor(private submissionsFacade: SubmissionsFacade) {}

  ngOnInit(): void {
    this.reset();
  }
  reset() {
    this.loadSubmissions();
    this.selectSubmission(null);
    this.resetForm();
  }
  resetForm() {
    this.selectedSubmission = emptySubmission;
  }
  loadSubmissions() {
    this.submissions$ = this.submissionsFacade.loadSubmissions();
  }
  selectSubmission(submission: Submission) {
    if (!submission) {
      this.resetForm();
    } else {
      this.selectedSubmission = submission;
    }
  }

  saveSubmission(submission: Submission) {
    this.submissionsFacade
      .saveSubmission(submission)
      .subscribe((result) => this.reset());
  }

  deleteSubmission(submission) {
    this.submissionsFacade
      .deleteSubmission(submission)
      .subscribe((result) => this.reset());
  }
}
