import { SubmissionsService } from '@cpas/core-data';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Submission } from '@cpas/api-interface';

@Component({
  selector: 'cpas-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  submissions$: Observable<Submission[]>;
  constructor(private submissionsService: SubmissionsService) {}

  ngOnInit(): void {
    this.loadSubmissions();
  }
  loadSubmissions() {
    this.submissions$ = this.submissionsService.all();
  }
}
