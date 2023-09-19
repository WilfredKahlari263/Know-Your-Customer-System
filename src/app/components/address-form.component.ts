import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css'],
})

export class AddressFormComponent {
  myForm: FormGroup;
  formData: any = {
    country: '',
    city: '',
    postalCode: '',
    addressLine1: '',
    addressLine2: '',
    addressLine3: '',
    addressType: '',
  };

  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient) {
    this.myForm = this.formBuilder.group({
      country: ['', Validators.required],
      city: ['', Validators.required],
      postalCode: ['', Validators.required],
      addressLine1: ['', Validators.required],
      addressLine2: [''],
      addressLine3: [''],
      addressType: ['', Validators.required],
    });
  }

  // Accessors for form controls
  get country() {
    return this.myForm.get('country');
  }

  get city() {
    return this.myForm.get('city');
  }

  get postalCode() {
    return this.myForm.get('postalCode');
  }

  get addressLine1() {
    return this.myForm.get('addressLine1');
  }

  get addressLine2() {
    return this.myForm.get('addressLine2');
  }

  get addressLine3() {
    return this.myForm.get('addressLine3');
  }

  get addressType() {
    return this.myForm.get('addressType');
  }

  // Method to call a POST API endpoint
  callPostApi() {
    const requestData = this.myForm.value;

    this.httpClient
      .post('https://api.swiftrapidpay.com/swagger/post-endpoint', requestData)
      .subscribe(
        (response) => {
          console.log('POST Response:', response);
          this.myForm.reset();
        },
        (error) => {
          console.error('POST Error:', error);
        }
      );
  }

  // Method to call a DELETE API endpoint
  callDeleteApi() {
    this.httpClient
      .delete('https://api.swiftrapidpay.com/swagger/delete-endpoint')
      .subscribe(
        (response) => {
          console.log('DELETE Response:', response);
        },
        (error) => {
          console.error('DELETE Error:', error);
        }
      );
  }

  // Method to call a GET API endpoint
  callGetApi() {
    this.httpClient
      .get('https://api.swiftrapidpay.com/swagger/get-endpoint')
      .subscribe(
        (response) => {
          console.log('GET Response:', response);
        },
        (error) => {
          console.error('GET Error:', error);
        }
      );
  }

  // Method to call a PUT API endpoint
  callPutApi() {
    const requestData = this.myForm.value;

    this.httpClient
      .put('https://api.swiftrapidpay.com/swagger/put-endpoint', requestData)
      .subscribe(
        (response) => {
          console.log('PUT Response:', response);
          this.myForm.reset();
        },
        (error) => {
          console.error('PUT Error:', error);
        }
      );
  }

  // Method to call a PATCH API endpoint
  callPatchApi() {
    const requestData = this.myForm.value;

    this.httpClient
      .patch('https://api.swiftrapidpay.com/swagger/patch-endpoint', requestData)
      .subscribe(
        (response) => {
          console.log('PATCH Response:', response);
        },
        (error) => {
          console.error('PATCH Error:', error);
        }
      );
  }

  // Another GET API endpoint
  callAnotherGetApi() {
    this.httpClient
      .get('https://api.swiftrapidpay.com/swagger/another-get-endpoint')
      .subscribe(
        (response) => {
          console.log('Another GET Response:', response);
        },
        (error) => {
          console.error('Another GET Error:', error);
        }
      );
  }
}
