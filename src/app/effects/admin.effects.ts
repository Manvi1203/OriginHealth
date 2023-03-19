import { Injectable } from "@angular/core";
import { Actions, ofType } from "@ngrx/effects";
import { Observable, of } from "rxjs";
import { catchError, map, switchMap } from 'rxjs/operators';
import { createEffect } from '@ngrx/effects';



import { 
  GET_LABELS, GET_LABELS_SUCCESS, GET_LABELS_ERROR,
  ADD_LABELS, ADD_LABELS_SUCCESS, ADD_LABELS_ERROR
} from "../reducers/admin.reducers";
import { ImageService } from "../_services/image.service";

@Injectable()
export class AdminEffects {
  constructor( 
    private actions$ : Actions, 
    private imageService : ImageService 
  ) {}

  // to label our property getLABELs$ as an effect 
  // that will be triggered when we dispatch actions with the store.
  // getLabels$ = createEffect(() =>
  // this.actions$.pipe(
  //   ofType(GET_LABELS),
  //   switchMap(() =>
  //     this.imageService.getLabels().pipe(
  //       map((labels: { id: number; labeled: string[]; }[]) => ({type: GET_LABELS_SUCCESS, payload: labels})),
  //       catchError(() => of({type: GET_LABELS_ERROR}))
  //     )
  //   )
  // )
// );
    
addLabels$ = createEffect(() =>
this.actions$.pipe(
  ofType(ADD_LABELS),
  switchMap((action:any) =>
    this.imageService.addLabels(action.payload.labeled).pipe(
        map(LABEL => ({type: ADD_LABELS_SUCCESS, payload: LABEL})),
        catchError(() => of({type: ADD_LABELS_ERROR}))
    )
  )
)
);
}

