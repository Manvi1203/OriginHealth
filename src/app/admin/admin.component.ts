import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { filter, map, switchMap, catchError } from 'rxjs/operators';

import { User } from '../_models';
import { UserService } from '../_services';
import { Store } from '@ngrx/store';
import { Observable } from "rxjs";

import { getLabels, addLabels } from '../reducers/admin.reducers';
import { AdminEffects } from '../effects/admin.effects';
import { ADD_LABELS_SUCCESS } from '../reducers/admin.reducers';
import { Image } from '../_models';
import { ImageService } from '../_services';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  // loading = false;
  // users: User[] = [];

  // constructor(private userService: UserService) { }

  // ngOnInit() {
  //     this.loading = true;
  //     this.userService.getAll().pipe(first()).subscribe(users => {
  //         this.loading = false;
  //         this.users = users;
  //     });
  // }
  // labels$ : Observable<any>;
  // addLabelSuccess$ : Observable<any>;

  // constructor(
  //   private store : Store<any>,
  //   private adminEffects : AdminEffects
  // ) {
  //   this.store.dispatch(getLabels());  // effects will be triggered
  //   this.labels$ = store.select("labels");
  //   this.addLabelSuccess$ = this.adminEffects.addLabels$.pipe(filter(
  //     ({type}) => type === ADD_LABELS_SUCCESS
  //   ));
  // }

  // addLabel( label: string ) {
  //   this.store.dispatch(addLabels(label)); // effects will be triggered
  // }

  labels!: string[];

  constructor(private imageService: ImageService) {}

  ngOnInit() {
    this.imageService.getLabels().subscribe(labels => {
      this.labels = labels;
    });
  }
  
  addNewLabel(label: string) {
    this.imageService.addLabels(label).subscribe(newLabelId => {
      this.labels.push(label);
    });
  }
}
