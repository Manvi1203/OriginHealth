// import { createReducer, on } from '@ngrx/store';
// import { Image } from '../_models/image';
// import * as actions from '../actions/useractions';

// export interface UserDashboardState {
//   images: Image[];
//   filteredImages: Image[];
//   selectedLabels: string[];
// }

// const initialState: UserDashboardState = {
//   images: [],
//   filteredImages: [],
//   selectedLabels: []
// };

// export const userDashboardReducer = createReducer(
//   initialState,
//   on(actions.addLabel, (state, { imageId, label }) => {
//     const images = state.images.map(image => {
//       if (image.id === imageId && !image.labels.includes(label)) {
//         return {
//           ...image,
//           labels: [...image.labels, label]
//         };
//       }
//       return image;
//     });
//     return { ...state, images };
//   }),
//   on(actions.removeLabel, (state, { imageId, label }) => {
//     const images = state.images.map(image => {
//       if (image.id === imageId) {
//         return {
//           ...image,
//           labels: image.labels.filter(l => l !== label)
//         };
//       }
//       return image;
//     });
//     return { ...state, images };
//   }),
//   on(actions.filterImages, (state, { labels }) => {
//     const filteredImages = state.images.filter(image => {
//       return labels.every(label => image.labels.includes(label));
//     });
//     return { ...state, filteredImages, selectedLabels: labels };
//   })
// );

import { createSelector } from '@ngrx/store';

import { Action, createReducer, on } from '@ngrx/store';
import { Image } from '../_models/image';
import { setFilteredImages, setImages, setLabels, setSelectedLabel, addLabel } from '../actions/useractions';

export interface ImageState {
  // labels: ({id: number, labeled: string})[];
  images: Image[];
  filteredImages: Image[];
  // labels: string[];
  selectedLabel: string;
  labels: string[];
}

export const initialState: ImageState = {
  images: [
    { id: 1, src: 'assets/images/cat1.jpg', labels: ['cat'] },
        { id: 2, src: 'assets/images/cat2.jpg', labels: ['cat', 'cute'] },
        { id: 3, src: 'assets/images/cat3.jpg', labels: ['cat'] },
        { id: 4, src: 'assets/images/cat4.jpg', labels: ['cat'] },
        { id: 5, src: 'assets/images/cat5.jpg', labels: ['cat'] },
        { id: 6, src: 'assets/images/dog1.jpg', labels: ['dog'] },
        { id: 7, src: 'assets/images/dog2.jpg', labels: ['dog'] },
        { id: 8, src: 'assets/images/dog3.jpg', labels: ['dog'] },
        { id: 9, src: 'assets/images/dog4.jpg', labels: ['dog'] },
        { id: 10, src: 'assets/images/horse1.jpg', labels: ['horse'] },
        { id: 11, src: 'assets/images/horse2.jpg', labels: ['horse'] },
        { id: 12, src: 'assets/images/horse3.jpg', labels: ['horse'] },
  ],
  filteredImages: [],
  labels: [],
  selectedLabel: ''
};

const imageReducer = createReducer(
  initialState,
  on(setImages, (state, { images }) => ({ ...state, images })),
  on(setFilteredImages, (state, { filteredImages }) => ({ ...state, filteredImages })),
  // on(setLabels, (state, { labels }) => ({ ...state, labels })),
  on(setSelectedLabel, (state, { selectedLabel }) => ({ ...state, selectedLabel })),
  // on(addLabel,(state, { label }) => {
  //   return {
  //     ...state,
  //     labels: [...state.labels, label],
  //   };
  // }),
  on(addLabel, (state, { label }) => {
    return {
      ...state,
      labels: [...state.labels, label.labeled],
    };
  }),

 );

export function reducer(state: ImageState | undefined, action: Action): ImageState {
  return imageReducer(state, action);
}

export const getImages = (state: ImageState) => state.images;
export const getFilteredImages = (state: ImageState) => state.filteredImages;
export const getSelectedLabel = (state: ImageState) => state.selectedLabel;
export const getLabels = (state: ImageState) => state.labels;
// export const getLabels = createSelector(
//   (state: ImageState) => state.labels,
//   labels => labels.map(label => label.labeled)
// );
// export const getLabels = createSelector(
//   (state: ImageState) => state.labels,
//   labels => labels.map(label => label.labeled).filter(label => typeof label === 'string')
// );
// export const getLabels = createSelector(
//   (state: ImageState) => state.labels,
//   labels => Array.isArray(labels) ? labels.filter(label => typeof label === 'string') as string[] : []
// );
// export const getLabels = createSelector(
//   (state: ImageState) => state.labels,
//   labels => labels.filter(label => typeof label.labeled === 'string').map(label => label.labeled)
// );

export const imageActions = {
  setImages,
  setFilteredImages,
  setLabels,
  setSelectedLabel,
  addLabel
};

export const imageFeatureKey = 'images';
