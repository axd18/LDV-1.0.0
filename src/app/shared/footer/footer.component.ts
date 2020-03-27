import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data-db.service';
import { FormControl, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  newsLetter: FormGroup;
  Swal = 'sweetAlert';

  createFormGroup() {
    return new FormGroup({
      email: new FormControl('')
    });
  }

  constructor(private dbData: DataService) {
    this.newsLetter = this.createFormGroup();
   }
  ngOnInit(): void {
  }

  onResetForm() {
    this.newsLetter.reset();
  }

  onSaveForm() {
    console.log('saved');
    this.dbData.saveMessage(this.newsLetter.value);
  }

  showModal() {
    Swal.fire(
      'E-mail sended!',
      'Thank you! You will soon receive our newsletters.',
      'success'
    );
  }

}
