import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainlayoutComponent } from './shared/mainlayout/mainlayout.component';
import { JobComponent } from './container/usermodal/job/job.component';
import { JobOverviewComponent } from './container/usermodal/job-overview/job-overview.component';
import { JobApplyComponent } from './container/usermodal/job-apply/job-apply.component';
import { SignInComponent } from './shared/sign-in/sign-in.component';
import { SubmissionConfirmationComponent } from './container/usermodal/submission-confirmation/submission-confirmation.component';
import { HomeComponent } from './container/usermodal/home/home.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "home", // Redirect to the careers path
    pathMatch: "full" // Ensure that the full path is matched for redirection
  },
  {
    path: "",
    component: MainlayoutComponent,
    children: [
      {
        path: "sign-in",
        component: SignInComponent
      },
      {
        path: "home",
        component: HomeComponent
      },
      {
        path: "careers",
        component: JobComponent
      },
      {
        path: "careers-overview/:id",
        component: JobOverviewComponent
      },
      {
        path: "careers-overview",
        component: JobOverviewComponent
      },
      {
        path: "job-form",
        component: JobApplyComponent
      },
      {
        path: "submission-confirmation",
        component: SubmissionConfirmationComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
