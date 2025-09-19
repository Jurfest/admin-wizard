import { ChangeDetectionStrategy, Component } from '@angular/core';
import { InputComponent, Button, Logo } from '@admin-wizard/ui-design-system';

@Component({
  selector: 'app-register',
  imports: [InputComponent, Button, Logo],
  templateUrl: './register.html',
  styleUrl: './register.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Register {}
