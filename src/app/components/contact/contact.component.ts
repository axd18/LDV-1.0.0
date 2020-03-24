import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data-db.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;


  createFormGroup() {
    return new FormGroup({
      fname: new FormControl(''),
      lname: new FormControl(''),
      email: new FormControl(''),
      subject: new FormControl(''),
      message: new FormControl(''),
    });
  }



  constructor(private dbData: DataService) {
    this.contactForm = this.createFormGroup();
   }

  ngOnInit(): void {
  }

  onResetForm() {
    this.contactForm.reset();
  }

  onSaveForm() {
    console.log('saved');
    const newContact = {
      fname: 'adrian',
      lname: 'fernandez',
      email: 'adri@gmail.com',
      subject: 'consulta',
      message: '10% building 0/1 modules 1 active'
    };

    this.dbData.saveMessage(newContact);
  }

}
