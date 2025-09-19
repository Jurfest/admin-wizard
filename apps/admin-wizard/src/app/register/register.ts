import { ChangeDetectionStrategy, Component } from '@angular/core';
import { InputComponent } from '@admin-wizard/ui-design-system';

@Component({
  selector: 'app-register',
  imports: [InputComponent],
  templateUrl: './register.html',
  styleUrl: './register.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Register {}
