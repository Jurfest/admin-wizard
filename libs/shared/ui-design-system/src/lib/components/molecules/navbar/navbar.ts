import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

import { Button } from '../../atoms/button/button';
import { Logo } from '../../atoms/logo/logo';

@Component({
  selector: 'lib-navbar',
  imports: [Logo, Button, MatToolbarModule, MatButtonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Navbar {
  onLogoClick(): void {
    console.log('Logo clicked - navigate to home');
  }
}
