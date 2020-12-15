npx create-nx-workspace cpas-production-angular --appName=dashboard --preset=angular --npmScore=cpas --linter=eslint --style=scss --nx-cloud=false
cd cpas-production-angular
yarn nx g lib core-data --parent-module=apps/dashboard/src/app/app.module.ts --routing -style=scss
yarn nx g lib core-data --parent-module=apps/dashboard/src/app/app.module.ts --routing tyle=scss
yarn nx g lib core-state --parent-module=apps/dashboard/src/app/app.module.ts --routing tyle=scss
yarn nx g lib material --parent-module=apps/dashboard/src/app/app.module.ts --routing --style=scss
yarn nx g
yarn nx g s services/submissions --project=core-data
yarn nx g m routing --flat=true -m=app.module.ts -d
yarn nx g m routing --flat=true -m=app.module.ts
yarn nx g c submissions -m app.module.ts --style=scss
yarn nx g c submissions/submissions-list -m app.module.ts --style=scss
yarn nx g c submissions/submissions-details -m app.module.ts --style=scss
yarn nx g c home -m app.module.ts --style=scss
yarn nx start
yarn start

---

## yarn nx add @angular/material

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

exports: [
MatAutocompleteModule,
MatButtonModule,
MatButtonToggleModule,
MatCardModule,
MatCheckboxModule,
MatDialogModule,
MatExpansionModule,
MatFormFieldModule,
MatGridListModule,
MatIconModule,
MatInputModule,
MatListModule,
MatMenuModule,
MatProgressBarModule,
MatRadioModule,
MatSelectModule,
MatSidenavModule,
MatSliderModule,
MatSnackBarModule,
MatTableModule,
MatTabsModule,
MatToolbarModule,
MatTooltipModule,
MatStepperModule,
],

---

## Create base app

## First the routing

const routes: Routes = [
{ path: '', component: HomeComponent },
{ path: 'submissions', component: SubmissionsComponent },
{ path: '**', redirectTo: '/' },
];

@NgModule({
declarations: [],
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule],
})

---

## add routing in the app

<router-outlet></router-outlet>

## Let's add some content

## CSS see file

import { Component } from '@angular/core';

@Component({
selector: 'cpas-production-angular-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.scss'],
})
export class AppComponent {
links = [
{ path: '/', icon: 'home', title: 'home' },
{ path: '/submissions', icon: 'view_list', title: 'submissions' },
];
}

## Submissions

<div class="component-container">
  <div class="list-component">
    <cpas-submissions-list></cpas-submissions-list>
  </div>
  <div class="details-components">
    <cpas-submissions-list></cpas-submissions-list>
  </div>
</div>

---

yarn add -D json-server json-server-auth
create server/db.jon

add these entries
{
"submissions": [
{
"id": "1",
"name": "gilles Bertrand",
"message": "Demande renseignementrs lorem"
},
{
"id": "2",
"name": "anthony Bertrand",
"message": "demande de renseige her kjdf dshgzerhzeqj rhsejqhgzljhef"
},
{
"id": "3",
"name": "Bliss Bertrand",
"message": "demande de renseige her kjdf dshgzerhzeqj rhsejqhgzljhef"
}
]
}

adapt package.json
"api:mock": "json-server-auth server/db.json "

launch concurrently

yarn add concurrently -D
"start": "concurrently \"ng serve\" \"yarn api:mock\"",

## Create data-services

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

---

## Add service into component

## Into Home first

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
submissions\$: Observable<Submission[]>;
constructor(private submissionsService: SubmissionsService) {}

ngOnInit(): void {
this.loadSubmissions();
}
loadSubmissions() {
this.submissions\$ = this.submissionsService.all();
}
}
in template

---

 <pre>{{ submissions$ | async | json }}</pre>

---

<mat-list-item \*ngFor="let submission of submissions">
<span matLine>{{ submission.name }} </span>
<button mat-icon-button type="button" color="warn">
<mat-icon>clear</mat-icon>
</button>
</mat-list-item>

---

## Add Event Emit

<mat-card>
  <mat-card-title> Submissions </mat-card-title>
  <mat-card-content>
    <mat-list data-cy="widgets-list">
      <mat-list-item
        *ngFor="let submission of submissions"
        (click)="selected.emit(submission)"
      >
        <span matLine>{{ submission.name }} </span>
        <button mat-icon-button type="button" color="warn">
          <mat-icon>clear</mat-icon>
        </button>
      </mat-list-item>
    </mat-list>
  </mat-card-content>
</mat-card>
---
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Submission } from '@cpas/api-interface';

@Component({
selector: 'cpas-submissions-list',
templateUrl: './submissions-list.component.html',
styleUrls: ['./submissions-list.component.scss'],
})
export class SubmissionsListComponent implements OnInit {
@Input() submissions: Submission[] = [];
@Output() selected = new EventEmitter();
constructor() {}

ngOnInit(): void {}
}

---

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
submissions\$: Observable<Submission[]>;
selectedSubmission: Submission;
constructor(private submissionService: SubmissionsService) {}

ngOnInit(): void {
this.loadSubmissions();
this.selectSubmission(null);
}
loadSubmissions() {
this.submissions\$ = this.submissionService.all();
}
selectSubmission(submission: any) {
console.log(submission);
this.selectedSubmission = submission;
}
}

---

<div class="component-container">
  <div class="list-component">
    <cpas-submissions-list
      [submissions]="submissions$ | async"
      (selected)="selectSubmission($event)"
    ></cpas-submissions-list>
  </div>
  <div class="details-components">
    <cpas-submissions-details></cpas-submissions-details>
  </div>
</div>
---

## In the details components

Import FormsModule in AppModule
<mat-card>
<mat-card-title>Submission </mat-card-title>

  <form>
    <mat-card-content>
      <mat-form-field class="full-width">
        <input
          matInput
          placeholder="name"
          type="text"
          name="name"
          required
          [(ngModel)]="submission.name"
        />
      </mat-form-field>
      <mat-form-field class="full-width">
        <textarea
          matInput
          placeholder="Message"
          type="text"
          name="message"
          rows="15"
          required
          [(ngModel)]="submission.message"
        ></textarea>
      </mat-form-field>
    </mat-card-content>
    <mat-card-actions>
      <button type="submit" mat-button color="primary">Save</button>
      <button type="button" mat-button>Cancel</button>
    </mat-card-actions>
  </form>
</mat-card>
----

## update the details

first create empty Widget for errors management
const emptySubmission: Submission = {
id: null,
name: '',
message: '',
};
selectSubmission(submission: any) {
if (!submission) {
this.selectedSubmission = emptySubmission;
} else {
this.selectedSubmission = submission;
}
}

### Create submission

in submissions.components add
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
submissions\$: Observable<Submission[]>;
selectedSubmission: Submission;

constructor(private submissionService: SubmissionsService) {}

ngOnInit(): void {
this.reset();
}
reset() {
this.loadSubmissions();
this.selectSubmission(null);
}
loadSubmissions() {
this.submissions\$ = this.submissionService.all();
}
selectSubmission(submission: any) {
if (!submission) {
this.selectedSubmission = emptySubmission;
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
}

### in submissions details add

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Submission } from '@cpas/api-interface';

@Component({
selector: 'cpas-submissions-details',
templateUrl: './submissions-details.component.html',
styleUrls: ['./submissions-details.component.scss'],
})
export class SubmissionsDetailsComponent implements OnInit {
originalTitle = 'Add a submission';
currentSubmission: Submission;
@Input() set submission(value: Submission) {
if (value) this.originalTitle = value.name;
this.currentSubmission = { ...value };
}
@Output() saved = new EventEmitter();
constructor() {}

ngOnInit(): void {}
}

### Reset form

details component

<form
    #form
    (submit)="saved.emit(currentSubmission)"
    (reset)="form.reset(); reset.emit()"
  >

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Submission } from '@cpas/api-interface';

@Component({
selector: 'cpas-submissions-details',
templateUrl: './submissions-details.component.html',
styleUrls: ['./submissions-details.component.scss'],
})
export class SubmissionsDetailsComponent implements OnInit {
originalTitle = 'Add a submission';
currentSubmission: Submission;
@Input() set submission(value: Submission) {
if (value) this.originalTitle = value.name;
this.currentSubmission = { ...value };
}
@Output() saved = new EventEmitter();
@Output() reset = new EventEmitter();
constructor() {}

ngOnInit(): void {}
}

submission component

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
submissions\$: Observable<Submission[]>;
selectedSubmission: Submission;

constructor(private submissionService: SubmissionsService) {}

ngOnInit(): void {
this.reset();
}
reset() {
this.loadSubmissions();
this.selectSubmission(null);
}
resetForm() {
this.selectedSubmission = emptySubmission;
}
loadSubmissions() {
this.submissions\$ = this.submissionService.all();
}
selectSubmission(submission: any) {
if (!submission) {
this.selectedSubmission = emptySubmission;
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
}

### delete submission

in Submission list html
<mat-card>
<mat-card-title> Submissions </mat-card-title>
<mat-card-content>
<mat-list data-cy="widgets-list">
<mat-list-item
\*ngFor="let submission of submissions"
(click)="selected.emit(submission)" >
<span matLine>{{ submission.name }} </span>
<button
mat-icon-button
type="button"
color="warn"
(click)="deleted.emit(submission.id)" >
<mat-icon>clear</mat-icon>
</button>
</mat-list-item>
</mat-list>
</mat-card-content>
</mat-card>

in submission list TS
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Submission } from '@cpas/api-interface';

@Component({
selector: 'cpas-submissions-list',
templateUrl: './submissions-list.component.html',
styleUrls: ['./submissions-list.component.scss'],
})
export class SubmissionsListComponent implements OnInit {
@Input() submissions: Submission[] = [];
@Output() selected = new EventEmitter();
@Output() deleted = new EventEmitter();

constructor() {}

ngOnInit(): void {}
}

in submission ts

deleteSubmission(submission) {
this.submissionService
.delete(submission)
.subscribe((result) => this.reset());
}

in submission in html
(deleted)="deleteSubmission(\$event)"

### create facade

yarn nx g service submissions/submissions.facade --project=core-state

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
return this.submissionsService.update(submission);
} else {
return;
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

### update service files

import core-data module in statemodule

export the facade in index.ts
export { CoreStateModule } from './lib/core-state.module';
export { SubmissionsFacade } from './lib/submissions/submissions.facade.service';

## update project with facade

### update facade with subject

## update facade file

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
mutations\$ = this.mutations.asObservable();

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
this.submissionsService.create(submission).subscribe((\_) => this.reset());
}

updateSubmission(submission: Submission) {
this.submissionsService.update(submission).subscribe((\_) => this.reset());
}

deleteSubmission(submission: Submission) {
this.submissionsService.delete(submission).subscribe((\_) => this.reset());
}
}

## change home component

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

<div class="component-container">
  <div class="list-component">
    <cpas-submissions-list
      [submissions]="allSubmissions$ | async"
    ></cpas-submissions-list>
  </div>
  <!-- <pre>{{ submissions$ | async | json }}</pre> -->
</div>

## change submissions component TS

## change submissions component HTML
