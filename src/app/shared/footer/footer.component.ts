import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data-db.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  newsLetter: FormGroup;

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

}
