import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UnsavedChangesGuard } from '../Services/unsaved-changes-guard';
import { EditUserComponent } from '../editusercomponent/editusercomponent';
import { Home } from '../home/home';
import { About } from '../about/about';
import { Course } from '../course/course';
const routes: Routes = [
  { path: '', component: Home },
  { path: 'Home', component: Home },
  { path: 'About', component: About, canDeactivate: [UnsavedChangesGuard] },
  { path: 'About/Course/:id', component: Course },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutesModule {}
