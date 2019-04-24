import { Component } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { CountState } from './app.state';

@Component({
  selector: 'my-result',
  template: `
    <h1>Count is {{count$ | async}}</h1>
  `
})
export class ResultComponent  {

  @Select(CountState) count$: Observable<number>;


  constructor(private store: Store) {}
  
}
