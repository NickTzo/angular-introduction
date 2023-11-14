import { Component, ElementRef, EventEmitter, Inject, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Person } from 'src/app/interfaces/person';
import { AppService } from 'src/app/app.service';
import { HttpClient } from '@angular/common/http';
import { CrudUserSearchComponent } from '../../utils/crud-user-search/crud-user-search.component';
import { PersonCardComponent } from 'src/app/person-card/person-card.component';
import { DangerAreYouSureComponent } from '../../utils/danger-are-you-sure/danger-are-you-sure.component';

@Component({
  selector: 'app-delete-user',
  standalone: true,
  imports: [CommonModule, CrudUserSearchComponent, PersonCardComponent, DangerAreYouSureComponent],
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent {
  @Output() userDeleted = new EventEmitter();
  foundUser: Person | undefined;
  userNotFound = false;
  @ViewChild('userId') userIdInput!: ElementRef<HTMLInputElement>;

  constructor(
    private appService: AppService = Inject(AppService), //το κανεουμε emit στο σε μια κεντρικη class και τα διαχειριζομαστε απο εκει
    private http: HttpClient = Inject(HttpClient) //το κανουμε κατευθειαν inject μεσα στον http client
  ) { }


  onClick() {
    const id = this.userIdInput.nativeElement.value;
    // this.appService.deleteUser(parseInt(id)).subscribe({
    //   next: (user) => {
    //     this.userNotFound = false;
    //     this.userDeleted.emit();
    //   },
    //   error: (error) => {
    //     this.userNotFound = true;
    //     console.log(error)
    //   },
    //   complete: () => console.log("Deleted completed")
    // });
    this.http.delete<Person>(`https://localhost:3000/users/${id}`).subscribe({
      next: (user) => {
        this.userNotFound = false;
        this.userDeleted.emit();
      },
      error: (error) => {
        this.userNotFound = true;
        console.log(error)
      },
      complete: () => console.log("Deleted completed")
    });
  }

  onUserFound(user: Person | undefined) {
    if (user) {
      this.foundUser = user;
    }
  }

  onConfirm(iamSure: boolean) {
    if (iamSure && this.foundUser) {
      const id = this.foundUser.id ?? -1; //με τα ?? λεμε οτι αν ειναι undifiend τοτε θα παρει την τιμη -1
      this.appService.deleteUser(id).subscribe({
        next: (user) => {
          this.userNotFound = false;
          this.userDeleted.emit();
        },
        error: (error) => {
          this.userNotFound = true;
          console.log(error)
        },
        complete: () => console.log("Deleted completed")
      });
    } else {
      this.foundUser = undefined;
    }
  }
}
