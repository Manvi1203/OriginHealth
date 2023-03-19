// import { Injectable } from '@angular/core';
// import { BehaviorSubject, of } from 'rxjs';
// import { Image } from '../_models/image';
// import { Observable } from 'rxjs';
// import { timer } from 'rxjs';
// import { mapTo } from 'rxjs/operators';

// import { Store } from '@ngrx/store';
// import { ImageState, getImages, imageActions } from '../reducers/user.reducer';

// @Injectable({
//   providedIn: 'root'
// })

// export class ImageService {
//   private images = [
//     { id: 1, src: 'assets/images/cat1.jpg', labels: ['cat', 'cute'] },
//     { id: 2, src: 'assets/images/cat2.jpg', labels: ['cat', 'cute'] },
//     { id: 3, src: 'assets/images/cat3.jpg', labels: ['cat'] },
//     { id: 4, src: 'assets/images/cat4.jpg', labels: ['cat'] },
//     { id: 5, src: 'assets/images/cat5.jpg', labels: ['cat'] },
//     { id: 6, src: 'assets/images/dog1.jpg', labels: ['dog'] },
//     { id: 7, src: 'assets/images/dog2.jpg', labels: ['dog'] },
//     { id: 8, src: 'assets/images/dog3.jpg', labels: ['dog'] },
//     { id: 9, src: 'assets/images/dog4.jpg', labels: ['dog'] },
//     { id: 10, src: 'assets/images/horse1.jpg', labels: ['horse'] },
//     { id: 11, src: 'assets/images/horse2.jpg', labels: ['horse'] },
//     { id: 12, src: 'assets/images/horse3.jpg', labels: ['horse'] },
//   ];

//   private labels = ['cat', 'dog', 'horse'];
//   timer$ = timer(2000,1000);
//   labels1=[{id:1, labeled:['cat']},{id:2, labeled:['dog']},{id:3, labeled:['horse']}];
//   getLabels(){
//     const labels=['cat', 'dog', 'horse'];
//     return timer(1000).pipe(     //faking http request
//       mapTo(labels));
//   }

//   addLabels( labeled:string ) {
//     return timer(2000).pipe(
//       mapTo({id: Math.random(), labeled, completed: false}))
//   }

//   private filteredImagesSubject = new BehaviorSubject<Image[]>(this.images);
//   filteredImages$ = this.filteredImagesSubject.asObservable();

//   constructor() { }

//   assignLabel(image: Image, label: string) {
//     if (!image.labels.includes(label)) {
//       image.labels.push(label);
//     }
//     this.filterImages();
//   }

  

//   removeLabel(image: Image, label: string) {
//     image.labels = image.labels.filter(l => l !== label);
//     this.filterImages();
//   }

//   private filterImages() {
//     const filteredImages = this.images.filter(image => {
//       const hasAnyLabel = image.labels.some(label => this.labels.includes(label));
//       return hasAnyLabel;
//     });
//     this.filteredImagesSubject.next(filteredImages);
//   }

//   // addLabelToList(label: string): Observable<string> {
//   //   newLabel: label;
//   //   this.labels.push(newLabel);
//   //   this.filterImages();
//   //   return of(newLabel);
    
//   // }

//   addLabelToList(label: string): Observable<string> {
//     const newLabelId = Math.random().toString();
//     this.labels.push(label);
//     this.filterImages();
//     return of(newLabelId);
//   }

//   updateImageLabels(image: Image, labels: string[]) {
//     image.labels = labels;
//     this.filterImages();
//   }

// }

import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { Image } from '../_models/image';
import { Observable } from 'rxjs';
import { timer } from 'rxjs';
import { map, mapTo, tap } from 'rxjs/operators';

import { Store } from '@ngrx/store';
import { ImageState, getImages, imageActions, getLabels } from '../reducers/user.reducer';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private images = [
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
  ];
  public labels: string[] = []; // define labels as a public property

  timer$ = timer(2000,1000);
  labels1=[{id:1, labeled:['cat']},{id:2, labeled:['dog']},{id:3, labeled:['horse']}];

  getLabels(): Observable<string[]> {
    return timer(1000).pipe(
      map(() => {
        const labels = this.images.reduce((acc: string[], image) => {
          image.labels.forEach(label => {
            if (!acc.includes(label)) {
              acc.push(label);
            }
          });
          return acc;
        }, []);
        this.labels = labels;
        return this.labels;
      })
    );
  }
  //   return this.store.select(getLabels);
  // }
  // getLabels(): Observable<string[]> {
  //   return this.store.select(getLabels);
  // }
  // addLabels( labeled:string ) {
  //   const newLabel = { id: Math.random(), labeled, completed: false };
  //   this.store.dispatch(imageActions.addLabel({ label: newLabel }));
  //   return timer(2000).pipe(mapTo(newLabel));
  // }
  addLabels(labeled: string) {
    const newLabel = { id: Math.random(), labeled, completed: false };
    this.store.dispatch(imageActions.addLabel({ label: newLabel }));
    return timer(2000).pipe(
      mapTo(newLabel),
      tap(() => this.filterImages()) // call filterImages after adding the new label
    );
  }

  private filteredImagesSubject = new BehaviorSubject<Image[]>(this.images);
  filteredImages$ = this.filteredImagesSubject.asObservable();

  // constructor(private store: Store<ImageState>) { }
  constructor(private store: Store<ImageState>) {
    this.getLabels().subscribe(labels => {
      this.store.dispatch(imageActions.setLabels({ labels }));
    });
  }

  assignLabel(image: Image, label: string) {
    if (!image.labels.includes(label)) {
      image.labels.push(label);
    }
    this.filterImages();
  }

  removeLabel(image: Image, label: string) {
    image.labels = image.labels.filter(l => l !== label);
    this.filterImages();
  }

  private filterImages() {
    // const filteredImages = this.images.filter(image => {
    //   const hasAnyLabel = image.labels.some(label => this.labels.includes(label));
    //   return hasAnyLabel;
    // });
    // this.filteredImagesSubject.next(filteredImages);
    // // Update the list of labels in the ImageState
    // this.store.dispatch(imageActions.setLabels({ labels: this.labels }));
    const filteredImages = this.images.filter(image => {
      const hasAnyLabel = image.labels.some(label => this.labels.includes(label));
      return hasAnyLabel;
    });
    this.filteredImagesSubject.next(filteredImages);
  }
  }
