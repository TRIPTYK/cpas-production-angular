import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Submission } from '@cpas/api-interface';
@Injectable({
  providedIn: 'root',
})
export class SubmissionsService {
  model = 'submissions';
  endPoint = 'http://localhost:3001/';
  constructor(private http: HttpClient) {}

  all() {
    return this.http.get<Submission[]>(this.getUrl());
  }
  find(id: string) {
    return this.http.get<Submission>(this.getUrlWithId(id));
  }
  create(submission: Submission) {
    return this.http.post(this.getUrl(), submission);
  }
  update(submission: Submission) {
    return this.http.put(this.getUrlWithId(submission.id), submission);
  }
  delete(submission: Submission) {
    return this.http.delete(this.getUrlWithId(submission.id));
  }
  private getUrl() {
    return `${this.endPoint}${this.model}`;
  }

  private getUrlWithId(id) {
    return `${this.getUrl()}/${id}`;
  }
}
