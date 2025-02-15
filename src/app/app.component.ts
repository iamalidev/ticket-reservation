import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTimepickerModule } from '@angular/material/timepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  providers: [provideNativeDateAdapter()],
  imports: [
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatSelectModule,
    MatButtonModule,
    MatDatepickerModule,
    MatTimepickerModule,
    ReactiveFormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  private _snackBar = inject(MatSnackBar);
  private fb = inject(FormBuilder);

  form: FormGroup = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', Validators.required],
    country: ['', Validators.required],
    city: ['', Validators.required],
    date: ['', Validators.required],
    time: ['', Validators.required],
  });

  countries = [
    { value: '0', viewValue: 'USA' },
    { value: '1', viewValue: 'Germany' },
    { value: '2', viewValue: 'China' },
    { value: '3', viewValue: 'France' },
    { value: '4', viewValue: 'Italy' },
    { value: '5', viewValue: 'Turkey' },
    { value: '6', viewValue: 'UAE' },
    { value: '7', viewValue: 'Thailand' },
    { value: '8', viewValue: 'Malaysia' },
    { value: '9', viewValue: 'Uzbekistan' },
  ];

  submitForm() {
    if (this.form.invalid) {
      return;
    }

    console.log('Form Data:', this.form.value);

    this._snackBar.open('Submitted Successfully', 'Close', {
      duration: 3000,
    });
  }
}
