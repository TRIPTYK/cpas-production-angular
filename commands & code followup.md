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
