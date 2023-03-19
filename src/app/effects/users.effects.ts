// import { Injectable } from '@angular/core';
// import { Actions, createEffect, ofType } from '@ngrx/effects';
// import { filterImages } from '../actions/useractions';
// import { tap } from 'rxjs/operators';
// import { Store } from '@ngrx/store';
// import { userState } from '../states/userstate';

// @Injectable()
// export class UserDashboardEffects {

//   updateFilteredImages$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(filterImages),
//       tap(({ labels }) => {
//         this.store.dispatch(filterImages({ labels }));
//       })
//     ),
//     { dispatch: false }
//   );

//   constructor(
//     private actions$: Actions,
//     private store: Store<typeof userState>
//   ) {}
// }
