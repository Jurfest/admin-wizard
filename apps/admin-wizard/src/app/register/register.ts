import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { InputComponent, Button } from '@admin-wizard/ui-design-system';

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
  ],
  templateUrl: './register.html',
  styleUrl: './register.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Register {
  private fb = inject(FormBuilder);

  personalInfoForm: FormGroup = this.fb.group({
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

  residentialInfoForm: FormGroup = this.fb.group({
    address: ['', Validators.required],
    neighborhood: ['', Validators.required],
    zipCode: ['', [Validators.required, Validators.pattern(/^\d{5}-\d{3}$/)]],
    city: ['', Validators.required],
    state: ['', Validators.required],
  });

  professionalInfoForm: FormGroup = this.fb.group({
    profession: ['', Validators.required],
    company: ['', Validators.required],
    salary: ['', [Validators.required, Validators.min(0)]],
  });

  onSubmit(): void {
    if (
      this.personalInfoForm.valid &&
      this.residentialInfoForm.valid &&
      this.professionalInfoForm.valid
    ) {
      const formData = {
        ...this.personalInfoForm.value,
        ...this.residentialInfoForm.value,
        ...this.professionalInfoForm.value,
      };
      console.log('Registration data:', formData);
    }
  }
}
