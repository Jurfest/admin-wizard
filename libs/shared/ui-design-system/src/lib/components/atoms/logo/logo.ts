import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'lib-logo',
  imports: [NgOptimizedImage],
  templateUrl: './logo.html',
  styleUrl: './logo.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Logo {
  title = input<string>('Admin Wizard');
  logoClick = output<void>();

  onLogoClick(): void {
    this.logoClick.emit();
  }
}
