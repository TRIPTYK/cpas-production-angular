import { Component, OnInit } from '@angular/core';
import { Submission } from '@cpas/api-interface';
import { SubmissionsService } from '@cpas/core-data';
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

  constructor(private submissionService: SubmissionsService) {}

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
    this.submissions$ = this.submissionService.all();
  }
  selectSubmission(submission: Submission) {
    if (!submission) {
      console.log('rrrr');
      this.resetForm();
    } else {
      this.selectedSubmission = submission;
    }
  }

  saveSubmission(submission: Submission) {
    if (submission.id) {
      this.updateSubmission(submission);
    } else {
      this.createSubmission(submission);
    }
  }

  createSubmission(submission: Submission) {
    this.submissionService
      .create(submission)
      .subscribe((result) => this.reset());
  }

  updateSubmission(submission: Submission) {
    this.submissionService
      .update(submission)
      .subscribe((result) => this.reset());
  }
  deleteSubmission(submission) {
    this.submissionService
      .delete(submission)
      .subscribe((result) => this.reset());
  }
}
