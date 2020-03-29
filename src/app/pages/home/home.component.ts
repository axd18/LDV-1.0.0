import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data-db.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  contactForm: FormGroup;
  Swal = 'sweetAlert';

  // tslint:disable-next-line:max-line-length
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(private dbData: DataService) {
  this.contactForm = this.createFormGroup();
  }

  get fname() { return this.contactForm.get('fname'); }
  get lname() { return this.contactForm.get('lname'); }
  get email() { return this.contactForm.get('email'); }
  get message() { return this.contactForm.get('message'); }

  createFormGroup() {
    return new FormGroup({
      fname: new FormControl('', [Validators.required, Validators.minLength(4)]),
      lname: new FormControl('', [Validators.minLength(4)]),
      email: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]),
      subject: new FormControl(''),
      message: new FormControl('', [Validators.required, Validators.minLength(10)]),
    });
  }

  ngOnInit(): void {
  }

  onResetForm() {
    this.contactForm.reset();
  }

  onSaveForm() {
    if (this.contactForm.valid) {
      this.dbData.saveMessage(this.contactForm.value);
      this.onResetForm();
      console.log('Valid');
    } else {
      console.log('Not valid');
    }
  }

  showModal() {
    Swal.fire(
      'Message sended!',
      'Thank you! We will reply shortly.',
      'success'
    );
  }


}
