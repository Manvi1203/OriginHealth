import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'add-label',
  template: `
    <input type="text" 
      placeholder="Add label.." 
      [formControl]="control">
    <button (click)="add.next(control.value)">Add</button>
`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddLabelComponent {
  control : FormControl = new FormControl("");
  @Output() add = new EventEmitter();

  @Input()
  public set reset( action: any ) {
    action && this.control.reset();
  }
}