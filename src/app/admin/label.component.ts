import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
@Component({
  selector: 'label',
  template: `
    <li>{{label.labeled}}</li>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LabelComponent {
  @Input() label: any;
}