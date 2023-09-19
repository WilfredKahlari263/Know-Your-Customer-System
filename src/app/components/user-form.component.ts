import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})

export class UserFormComponent {
  myForm: FormGroup;
  formData: any = {
    passportNumber: '',
    passportExpiry: '',
    dateOfBirth: '',
    email: '',
    firstName: '',
    middleName: '',
    lastName: '',
    phoneNumber: '',
    gender: '',
    maritalStatus: '',
    birthCountry: '',
    birthCity: '',
    nationality: '',
  };

  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient) {
    this.myForm = this.formBuilder.group({
      passportNumber: ['', Validators.required],
      passportExpiry: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      email: ['', Validators.required],
      firstName: ['', Validators.required],
      middleName: [''],
      lastName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      gender: ['', Validators.required],
      maritalStatus: ['', Validators.required],
      birthCountry: ['', Validators.required],
      birthCity: ['', Validators.required],
      nationality: ['', Validators.required],
    });
  }

  // Accessors for form controls

  // Method to call a POST API endpoint for user
  callPostUserApi(requestData: any) {
    this.httpClient
      .post('https://api.swiftrapidpay.com/swagger/post-user', requestData)
      .subscribe(
        (response) => {
          console.log('POST User Response:', response);
          this.myForm.reset();
        },
        (error) => {
          console.error('POST User Error:', error);
        }
      );
  }

  // Method to call a PUT API endpoint for user
  callPutUserApi(requestData: any) {
    this.httpClient
      .put('https://api.swiftrapidpay.com/swagger/put-user', requestData)
      .subscribe(
        (response) => {
          console.log('PUT User Response:', response);
          this.myForm.reset();
        },
        (error) => {
          console.error('PUT User Error:', error);
        }
      );
  }

  // Method to call a PATCH API endpoint for user
  callPatchUserApi(requestData: any) {
    this.httpClient
      .patch('https://api.swiftrapidpay.com/swagger/patch-user', requestData)
      .subscribe(
        (response) => {
          console.log('PATCH User Response:', response);
          this.myForm.reset();
        },
        (error) => {
          console.error('PATCH User Error:', error);
        }
      );
  }

  // Method to call a DELETE API endpoint for user
  callDeleteUserApi() {
    this.httpClient
      .delete('https://api.swiftrapidpay.com/swagger/delete-user')
      .subscribe(
        (response) => {
          console.log('DELETE User Response:', response);
        },
        (error) => {
          console.error('DELETE User Error:', error);
        }
      );
  }

  // Method to call a GET API endpoint for user
  callGetUserApi() {
    this.httpClient
      .get('https://api.swiftrapidpay.com/swagger/get-user')
      .subscribe(
        (response) => {
          console.log('GET User Response:', response);
        },
        (error) => {
          console.error('GET User Error:', error);
        }
      );
  }
}

