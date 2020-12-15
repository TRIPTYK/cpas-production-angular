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
  allSubmissions$: Observable<Submission[]> = this.submissionsFacade
    .allSubmissions$;

  selectedSubmission$: Observable<Submission> = this.submissionsFacade
    .selectedSubmissions$;

  constructor(private submissionsFacade: SubmissionsFacade) {}

  ngOnInit(): void {
    this.reset();
    this.submissionsFacade.mutations$.subscribe((_) => this.reset());
  }
  reset() {
    this.loadSubmissions();
    this.selectSubmission(null);
    this.resetForm();
  }
  resetForm() {
    // this.selectedSubmission = emptySubmission;
    this.selectSubmission(null);
  }
  loadSubmissions() {
    this.submissionsFacade.loadSubmissions();
  }
  selectSubmission(submission: Submission) {
    this.submissionsFacade.selectSubmission(submission);
  }

  saveSubmission(submission: Submission) {
    this.submissionsFacade.saveSubmission(submission);
  }

  deleteSubmission(submission) {
    this.submissionsFacade.deleteSubmission(submission);
  }
}
