import { Button } from '@admin-wizard/ui-design-system';
import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  viewChild,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { BreakpointObserver } from '@angular/cdk/layout';
import {
  MatStepper,
  MatStepperModule,
  StepperOrientation,
} from '@angular/material/stepper';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    Button,
  ],
  templateUrl: './register.html',
  styleUrl: './register.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Register {
  private readonly fb = inject(FormBuilder);
  private breakpointObserver = inject(BreakpointObserver);

  readonly stepper = viewChild.required<MatStepper>('stepper');

  readonly personalInfoForm = this.fb.group({
    fullName: ['', [Validators.required, Validators.minLength(2)]],
    dateOfBirth: ['', Validators.required],
    cpf: [
      '',
      [Validators.required, Validators.pattern(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/)],
    ],
    phone: [
      '',
      [Validators.required, Validators.pattern(/^\(\d{2}\)\s\d{4,5}-\d{4}$/)],
    ],
  });

  readonly residentialInfoForm = this.fb.group({
    address: ['', Validators.required],
    neighborhood: ['', Validators.required],
    zipCode: ['', [Validators.required, Validators.pattern(/^\d{5}-\d{3}$/)]],
    city: ['', Validators.required],
    state: ['', Validators.required],
  });

  readonly professionalInfoForm = this.fb.group({
    profession: ['', Validators.required],
    company: ['', Validators.required],
    salary: ['', [Validators.required, Validators.min(0)]],
  });

  private readonly fieldLabels = {
    fullName: 'Nome completo',
    cpf: 'CPF',
    phone: 'Telefone',
    address: 'Endereço',
    neighborhood: 'Bairro',
    zipCode: 'CEP',
    city: 'Cidade',
    state: 'Estado',
    profession: 'Profissão',
    company: 'Empresa',
    salary: 'Salário',
  } as const;

  readonly isFormValid = computed(
    () =>
      this.personalInfoForm.valid &&
      this.residentialInfoForm.valid &&
      this.professionalInfoForm.valid
  );

  // UI control
  stepperOrientation: Observable<StepperOrientation>;

  constructor() {
    this.stepperOrientation = this.breakpointObserver
      .observe('(min-width: 65.625rem)')
      .pipe(map(({ matches }) => (matches ? 'horizontal' : 'vertical')));
  }

  nextStep(): void {
    this.stepper().next();
  }

  previousStep(): void {
    this.stepper().previous();
  }

  getErrorMessage(form: FormGroup, field: string): string {
    const control = form.get(field);
    if (!control?.errors || !control.touched) return '';

    const fieldLabel =
      (this.fieldLabels as Record<string, string>)[field] || field;

    if (control.hasError('required')) return `${fieldLabel} é obrigatório`;
    if (control.hasError('minlength')) {
      const requiredLength = control.errors['minlength'].requiredLength;
      return `${fieldLabel} deve ter pelo menos ${requiredLength} caracteres`;
    }
    if (control.hasError('pattern'))
      return `${fieldLabel} tem formato inválido`;
    if (control.hasError('min')) return `${fieldLabel} deve ser maior que zero`;

    return '';
  }

  onSubmit(): void {
    if (this.isFormValid()) {
      const formData = {
        ...this.personalInfoForm.value,
        ...this.residentialInfoForm.value,
        ...this.professionalInfoForm.value,
      };
      console.log('Registration data:', formData);
    }
  }
}
