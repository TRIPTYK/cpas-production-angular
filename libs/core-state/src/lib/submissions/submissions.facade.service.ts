import { Injectable } from '@angular/core';
import { SubmissionsService } from '@cpas/core-data';
import { Submission } from '@cpas/api-interface';
@Injectable({
  providedIn: 'root',
})
export class SubmissionsFacade {
  constructor(private submissionsService: SubmissionsService) {}
  loadSubmissions() {
    return this.submissionsService.all();
  }
  saveSubmission(submission) {
    if (submission.id) {
      return this.updateSubmission(submission);
    } else {
      return this.createSubmission(submission);
    }
  }
  createSubmission(submission: Submission) {
    return this.submissionsService.create(submission);
  }

  updateSubmission(submission: Submission) {
    return this.submissionsService.update(submission);
  }

  deleteSubmission(submission: Submission) {
    return this.submissionsService.delete(submission);
  }
}
