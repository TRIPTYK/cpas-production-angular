import { Injectable } from '@angular/core';
import { SubmissionsService } from '@cpas/core-data';
import { Submission } from '@cpas/api-interface';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class SubmissionsFacade {
  private allSubmissions = new Subject<Submission[]>();
  private selectedSubmission = new Subject<Submission>();
  private mutations = new Subject();

  allSubmissions$ = this.allSubmissions.asObservable();
  selectedSubmissions$ = this.selectedSubmission.asObservable();
  mutations$ = this.mutations.asObservable();

  constructor(private submissionsService: SubmissionsService) {}
  reset() {
    this.mutations.next(true);
  }
  selectSubmission(submission: Submission) {
    this.selectedSubmission.next(submission);
  }
  loadSubmissions() {
    this.submissionsService
      .all()
      .subscribe((submissions: Submission[]) =>
        this.allSubmissions.next(submissions)
      );
  }
  saveSubmission(submission) {
    if (submission.id) {
      this.updateSubmission(submission);
    } else {
      this.createSubmission(submission);
    }
  }
  createSubmission(submission: Submission) {
    this.submissionsService.create(submission).subscribe((_) => this.reset());
  }

  updateSubmission(submission: Submission) {
    this.submissionsService.update(submission).subscribe((_) => this.reset());
  }

  deleteSubmission(submission: Submission) {
    this.submissionsService.delete(submission).subscribe((_) => this.reset());
  }
}
