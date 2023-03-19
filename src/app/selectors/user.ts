import { createSelector } from '@ngrx/store';
import { ImageState } from '../reducers/user.reducer';

export const selectImages = (state: ImageState) => state.images;
export const selectFilteredImages = (state: ImageState) => state.filteredImages;
export const selectSelectedLabels = (state: ImageState) => state.selectedLabel;

export const selectVisibleImages = createSelector(
  selectImages,
  selectFilteredImages,
  (images, filteredImages) => filteredImages.length ? filteredImages : images
);