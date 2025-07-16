// unsaved-changes.guard.ts
import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

import { About } from '../about/about';

@Injectable({
  providedIn: 'root',
})
export class UnsavedChangesGuard implements CanDeactivate<About> {
  canDeactivate(
    component: About
  ): Observable<boolean> | Promise<boolean> | boolean {
    return component.canExit();
  }
}
