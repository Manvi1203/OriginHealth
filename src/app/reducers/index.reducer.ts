import { ActionReducerMap } from '@ngrx/store';
import {labels, LabelsState} from './admin.reducers';
import {ImageState, reducer} from './user.reducer';

interface AppState {
    labelState: LabelsState;
    imageState: ImageState;
  }
export const reducers: ActionReducerMap<AppState> = {
    labelState: labels,
    imageState: reducer
  };