import { Component } from '@angular/core';
// import { first } from 'rxjs/operators';

// import { User } from '../_models';
// import { UserService, AuthenticationService } from '../_services';
import { Image } from '../_models';
import { ImageService } from '../_services';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // loading = false;
  // user: User;
  // userFromApi!: User;

  // constructor(
  //     private userService: UserService,
  //     private authenticationService: AuthenticationService
  // ) {
  //     this.user = this.authenticationService.userValue;
  // }

  // ngOnInit() {
  //     this.loading = true;
  //     this.userService.getById(this.user.id!).pipe(first()).subscribe(user => {
  //         this.loading = false;
  //         this.userFromApi = user;
  //     });
  // }

  
  images!: Image[];
  filteredImages!: Image[];
  labels: string[] = [];
  selectedLabel: string = '';

  constructor(private imageService: ImageService) { 
  }

  ngOnInit() {
    this.imageService.filteredImages$.subscribe(images => {
      this.images = images;
      this.filteredImages = images;
      this.updateLabels()
    });
  }

  filterImages() {
    if (this.selectedLabel) {
      this.filteredImages = this.images.filter(image => image.labels.includes(this.selectedLabel));
    } else {
      this.filteredImages = this.images;
    }
  }

  assignLabel(image: Image, label: string) {
    if (!image.labels.includes(label)) {
      image.labels.push(label);
      this.imageService.assignLabel(image, label); // move the service call inside the if block
      this.filterImages();
    }
  }

  removeLabel(image: Image, label: string) {
    this.imageService.removeLabel(image, label);
  }

  private updateLabels() {
    const allLabels = this.images.flatMap(image => image.labels);
    const uniqueLabels = Array.from(new Set(allLabels)).sort();
    this.labels = [''].concat(uniqueLabels);
  }

}
