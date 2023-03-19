// import { createAction, props } from '@ngrx/store';
import { Image } from '../_models/image';

// export const removeLabel = createAction('[User Dashboard] Remove Label', props<{ imageId: number, label: string }>());
// export const filterImages = createAction('[User Dashboard] Filter Images', props<{ labels: string[] }>());
import { createAction, props } from '@ngrx/store';

export const setImages = createAction('[Image] Set Images', props<{ images: Image[] }>());
export const setFilteredImages = createAction('[Image] Set Filtered Images', props<{ filteredImages: Image[] }>());
export const setLabels = createAction('[Image] Set Labels', props<{ labels: string[] }>());
export const setSelectedLabel = createAction('[Image] Set Selected Label', props<{ selectedLabel: string }>());
// export const addNewLabel = createAction('[Image] Set Selected Label', props<{ selectedLabel: string }>());
export const addLabel = createAction(
    '[User] Add Label',
    props<{ label: { id: number; labeled: string;} }>()
  );