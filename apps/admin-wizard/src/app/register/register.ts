import { ChangeDetectionStrategy, Component } from '@angular/core';
import { InputComponent, Button } from '@admin-wizard/ui-design-system';

@Component({
  selector: 'app-register',
  imports: [InputComponent, Button],
  templateUrl: './register.html',
  styleUrl: './register.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Register {}
