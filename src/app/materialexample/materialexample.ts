import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'materialexample',
  standalone: false,
  templateUrl: './materialexample.html',
  styleUrl: './materialexample.css',
})
export class Materialexample {
  country: string[] = ['India', 'Singapore', 'Malaysia', 'Dubai'];

  builder = inject(FormBuilder);

  customerForm = this.builder.group({
    name: this.builder.control('', Validators.required),
    email: this.builder.control('', [Validators.required, Validators.email]),
    contact: this.builder.control('', Validators.required),
    country: this.builder.control('India'),
    address: this.builder.control('', Validators.required),
    gender: this.builder.control('Male'),
  });
  saveCustomer() {
    if (this.customerForm.invalid) {
      alert('Please fill out all required fields correctly.');
      return;
    }

    console.log('save', this.customerForm.value);
    alert('Form Submitted successfully');
  }
  reset() {
    this.customerForm.reset();
  }
}
