import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'lib-button',
  imports: [MatButtonModule],
  templateUrl: './button.html',
  styleUrl: './button.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Button {
  variant = input<'primary' | 'secondary'>('primary');
  buttonClickEvent = output<void>();

  sendClickEvent(): void {
    this.buttonClickEvent.emit();
  }
}
