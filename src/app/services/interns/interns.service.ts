import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

import {Content} from '../../contentpage/content';
import {CONTENTS} from '../../contentpage/mock-content';

@Injectable({
  providedIn: 'root'
})
export class InternsService {

  constructor() { }

  getInterns(): Observable<Content[]> {
    return of(CONTENTS);
  }
}
