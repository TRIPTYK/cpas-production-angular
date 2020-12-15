import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreDataModule } from '@cpas/core-data';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromSubmissions from './submissions/submissions.reducer';
import { SubmissionsEffects } from './submissions/submissions.effects';
import { SubmissionsFacade } from './submissions/submissions.facade';

@NgModule({
  imports: [
    CommonModule,
    CoreDataModule,
    StoreModule.forFeature(
      fromSubmissions.SUBMISSIONS_FEATURE_KEY,
      fromSubmissions.reducer
    ),
    EffectsModule.forFeature([SubmissionsEffects]),
  ],
  providers: [SubmissionsFacade],
})
export class CoreStateModule {}
