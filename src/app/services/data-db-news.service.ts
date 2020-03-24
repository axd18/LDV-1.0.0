import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { MessageII } from '../models/newsLetter.interface';

@Injectable({
  providedIn: 'root'
})
export class DataDbNewsService {
  private contactCollection: AngularFirestoreCollection<MessageII>;
  constructor(afs: AngularFirestore) {
    this.contactCollection = afs.collection<MessageII>('contacts');
   }

   saveMessage(newContact: MessageII): void {
    this.contactCollection.add(newContact);
  }
}
