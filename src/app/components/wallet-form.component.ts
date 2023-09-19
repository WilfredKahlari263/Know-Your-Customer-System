import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-wallet-form',
  templateUrl: './wallet-form.component.html',
  styleUrls: ['./wallet-form.component.css'],
})

export class WalletFormComponent {
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

  // Accessors for form controls (similar to address form)

  // Method to call a POST API endpoint for wallet
  onSubmit() {
    if (this.myForm.valid) {
      const requestData = this.myForm.value;

      // You can choose to call different API endpoints based on the form data
      switch (requestData.walletStatus) {
        case 'active':
          this.callPostActiveWalletApi(requestData);
          break;
        case 'inactive':
          this.callPostInactiveWalletApi(requestData);
          break;
        case 'suspended':
          this.callPostSuspendedWalletApi(requestData);
          break;
        default:
          // Handle other cases or errors
          break;
      }
    } else {
      // Form is invalid, display error messages or take other actions as needed
    }
  }

  // Method to call a POST API endpoint for an active wallet
  callPostActiveWalletApi(requestData: any) {
    this.httpClient
      .post('https://api.swiftrapidpay.com/swagger/post-active-wallet', requestData)
      .subscribe(
        (response) => {
          console.log('POST Active Wallet Response:', response);
          this.myForm.reset();
        },
        (error) => {
          console.error('POST Active Wallet Error:', error);
        }
      );
  }

  // Method to call a POST API endpoint for an inactive wallet
  callPostInactiveWalletApi(requestData: any) {
    this.httpClient
      .post('https://api.swiftrapidpay.com/swagger/post-inactive-wallet', requestData)
      .subscribe(
        (response) => {
          console.log('POST Inactive Wallet Response:', response);
          this.myForm.reset();
        },
        (error) => {
          console.error('POST Inactive Wallet Error:', error);
        }
      );
  }

  // Method to call a POST API endpoint for a suspended wallet
  callPostSuspendedWalletApi(requestData: any) {
    this.httpClient
      .post('https://api.swiftrapidpay.com/swagger/post-suspended-wallet', requestData)
      .subscribe(
        (response) => {
          console.log('POST Suspended Wallet Response:', response);
          this.myForm.reset();
        },
        (error) => {
          console.error('POST Suspended Wallet Error:', error);
        }
      );
  }

  // Method to call a GET API endpoint for wallet data
  callGetWalletApi() {
    this.httpClient
      .get('https://api.swiftrapidpay.com/swagger/get-wallet-data')
      .subscribe(
        (response) => {
          console.log('GET Wallet Data Response:', response);
        },
        (error) => {
          console.error('GET Wallet Data Error:', error);
        }
      );
  }

  // Additional methods for other API endpoints related to wallets (PUT, PATCH, etc.)
}
