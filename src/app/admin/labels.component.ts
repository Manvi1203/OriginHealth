import {Component, ChangeDetectionStrategy, Input} from '@angular/core';

@Component({
  selector: 'labels',
  template: `
    <p *ngIf="labels.pending">Loading...</p>
    <label [label]="label"
      *ngFor="let label of labels.data">
    </label>
    <p *ngIf="labels.error">{{labels.error}}</p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LabelsComponent {
  @Input() labels: any;
}