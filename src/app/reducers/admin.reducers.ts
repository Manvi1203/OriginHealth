import { Action } from '@ngrx/store';

export const GET_LABELS = "GET_LABELS";
export const GET_LABELS_SUCCESS = "GET_LABELS_SUCCESS";
export const GET_LABELS_ERROR = "GET_LABELS_ERROR";
export const ADD_LABELS = 'ADD_LABELS';
export const ADD_LABELS_SUCCESS = "ADD_LABELS_SUCCESS";
export const ADD_LABELS_ERROR = "ADD_LABELS_ERROR";

interface Label {
    labeled: string;
  }
  
  export interface LabelsState {
    data: Label[];
    pending: boolean;
    error: string | null;
  }
  
  const initialState: LabelsState = {
    data: [],
    pending: false,
    error: null
  };

export function labels( state = initialState, { type, payload }: { type: string; payload?: any; }): LabelsState{
  switch( type ) {
    case GET_LABELS:
      return Object.assign({}, state, {pending: true, error: null});
    case GET_LABELS_SUCCESS:
      return Object.assign({}, state, {data: payload, pending: false});
    case GET_LABELS_ERROR:
      return Object.assign({}, state, {pending: false, error: "Error"});

    case ADD_LABELS_SUCCESS:
      return Object.assign({}, state, {data: [...state.data, payload]});
    case ADD_LABELS_ERROR:
      return Object.assign({}, state, {pending: false, error: "Error"});

    default:
      return state;
  }
}

export function getLabels() {
  return {
    type: GET_LABELS
  }
}

export function addLabels(labeled: string) {
  return {
    type: ADD_LABELS,
    payload: {
      labeled
    }
  }
}
