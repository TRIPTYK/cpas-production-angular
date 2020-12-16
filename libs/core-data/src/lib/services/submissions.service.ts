import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubmissionsService {
<<<<<<< Updated upstream
=======
  model = 'submissions';
  endPoint = 'http://localhost:3000/';
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
>>>>>>> Stashed changes

  constructor() { }
}
