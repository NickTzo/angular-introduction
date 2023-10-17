import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Person } from './interfaces/person';


import { PersonComponent } from './person/person.component';
import { PersonAltComponent } from './person-alt/person-alt.component';
import { EventBindComponent } from './event-bind/event-bind.component';
import { OutputDemoComponent } from './output-demo/output-demo.component';
import { PersonCardComponent } from './person-card/person-card.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { AppService } from './app.service';
import { CrudDemoComponent } from './crud-demo/crud-demo/crud-demo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PersonComponent, PersonAltComponent, EventBindComponent, OutputDemoComponent, PersonCardComponent, TemplateDrivenFormComponent, ReactiveFormComponent, CrudDemoComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name: string = "Nick";
  lastname: string = "Tzortzis";
  person: Person = {           // 3η φαση
    givenName: 'Nick',
    surName: 'Tzortzis',
    age: 29,
    email: 'nicktzortziss@gmail.com',
    address: "Athens, Greece"
  };
  person2: Person = {
    givenName: 'asdf',
    surName: 'fas',
    age: 24,
    email: 'dfsa@gmail.com',
    address: "fafds, fas"
  };
  users: Person[] = [];
  constructor(private appService: AppService = Inject(AppService)) { }

  ngOnInit(): void {
    this.appService.getAllUser().subscribe((users) => {
      this.users = users
      console.log(this.users);
    })
  }

  sentUser: Person | undefined;

  onDeleteUser(i: number) {
    this.users.splice(i, 1)
  }
  onSendUser(user: Person) {
    this.sentUser = user;
  }

  onNewPerson(person: Person) {
    this.users.push(person);
  }
}
