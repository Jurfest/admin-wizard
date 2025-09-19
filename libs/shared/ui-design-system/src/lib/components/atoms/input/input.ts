import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  input,
} from '@angular/core';
import {
  FormsModule,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

export enum InputType {
  button = 'button',
  checkbox = 'checkbox',
  color = 'color',
  date = 'date',
  datetimelocal = 'datetime-local',
  email = 'email',
  file = 'file',
  hidden = 'hidden',
  image = 'image',
  month = 'month',
  number = 'number',
  password = 'password',
  radio = 'radio',
  range = 'range',
  reset = 'reset',
  search = 'search',
  submit = 'submit',
  tel = 'tel',
  text = 'text',
  time = 'time',
  url = 'url',
  week = 'week',
}

type OnChange = (value: string) => void;
type OnTouch = () => void;

@Component({
  selector: 'lib-input',
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './input.html',
  styleUrl: './input.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => InputComponent),
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent {
  inputType = input<InputType | keyof typeof InputType>(InputType.text);
  placeholder = input<string>('');
  label = input<string>('Pesquisar');

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChange: OnChange = () => {};
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onTouch: OnTouch = () => {};

  set value(val: string) {
    this.onChange(val);
    this.onTouch();
  }

  writeValue(obj: string): void {
    this.value = obj;
  }

  registerOnChange(fn: OnChange): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: OnTouch): void {
    this.onTouch = fn;
  }
}
