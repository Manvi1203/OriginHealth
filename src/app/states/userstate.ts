// {
//     images: [
//       { id: 1, src: 'image1.jpg', category: 'Nature', labels: ['sunset', 'mountains'] },
//       { id: 2, src: 'image2.jpg', category: 'Food', labels: ['pizza', 'cheese'] },
//       { id: 3, src: 'image3.jpg', category: 'Travel', labels: ['beach', 'ocean'] },
//       ...
//     ],
//     filteredImages: [],
//     selectedLabels: []
// }
  
export interface Image {
    id: number;
    src: string;
    labels: string[];
  }
  
  export interface State {
    images: Image[];
    filteredImages: Image[];
    selectedLabels: string[];
  }
  
  export const userState: State = {
    images: [
        { id: 1, src: 'assets/images/cat1.jpg', labels: ['cat', 'cute'] },
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
      // add more images as needed
    ],
    filteredImages: [],
    selectedLabels: []
  };