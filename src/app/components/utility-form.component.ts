import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-utility-form',
  templateUrl: './utility-form.component.html',
  styleUrls: ['./utility-form.component.css'],
})

export class UtilityFormComponent {
  myForm: FormGroup;
  formData: any = {
    walletStatus: '',
    availableBalance: null,
    reservations: null,
    walletCurrency: '',
    walletName: '',
    currentBalance: null,
    walletDescription: '',
  };

  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient) {
    this.myForm = this.formBuilder.group({
      walletStatus: ['', Validators.required],
      availableBalance: [null, Validators.required],
      reservations: [null, Validators.required],
      walletCurrency: ['', Validators.required],
      walletName: ['', Validators.required],
      currentBalance: [null, Validators.required],
      walletDescription: ['', Validators.required],
    });
  }

  // Accessors for form controls
  get walletStatus() {
    return this.myForm.get('walletStatus');
  }

  get availableBalance() {
    return this.myForm.get('availableBalance');
  }

  get reservations() {
    return this.myForm.get('reservations');
  }

  get walletCurrency() {
    return this.myForm.get('walletCurrency');
  }

  get walletName() {
    return this.myForm.get('walletName');
  }

  get currentBalance() {
    return this.myForm.get('currentBalance');
  }

  get walletDescription() {
    return this.myForm.get('walletDescription');
  }

  // Method to call a GET API endpoint 1
  callGetApi1() {
    this.httpClient
      .get('https://api.swiftrapidpay.com/swagger/get-endpoint-1')
      .subscribe(
        (response) => {
          console.log('GET Endpoint 1 Response:', response);
        },
        (error) => {
          console.error('GET Endpoint 1 Error:', error);
        }
      );
  }

  // Method to call a GET API endpoint 2
  callGetApi2() {
    this.httpClient
      .get('https://api.swiftrapidpay.com/swagger/get-endpoint-2')
      .subscribe(
        (response) => {
          console.log('GET Endpoint 2 Response:', response);
        },
        (error) => {
          console.error('GET Endpoint 2 Error:', error);
        }
      );
  }

  // Method to call a GET API endpoint 3
  callGetApi3() {
    this.httpClient
      .get('https://api.swiftrapidpay.com/swagger/get-endpoint-3')
      .subscribe(
        (response) => {
          console.log('GET Endpoint 3 Response:', response);
        },
        (error) => {
          console.error('GET Endpoint 3 Error:', error);
        }
      );
  }

  // Method to call a GET API endpoint 4
  callGetApi4() {
    this.httpClient
      .get('https://api.swiftrapidpay.com/swagger/get-endpoint-4')
      .subscribe(
        (response) => {
          console.log('GET Endpoint 4 Response:', response);
        },
        (error) => {
          console.error('GET Endpoint 4 Error:', error);
        }
      );
  }

  // Method to call a GET API endpoint 5
  callGetApi5() {
    this.httpClient
      .get('https://api.swiftrapidpay.com/swagger/get-endpoint-5')
      .subscribe(
        (response) => {
          console.log('GET Endpoint 5 Response:', response);
        },
        (error) => {
          console.error('GET Endpoint 5 Error:', error);
        }
      );
  }
}

