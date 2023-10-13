import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Person } from '../interfaces/person';

@Component({
  selector: 'app-person',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {
  // person = {                   1η φαση
  //   givenName: 'Nick',
  //   surName: 'Tzortzis',
  //   age: '29',
  //   email: 'nicktzortziss@gmail.com'
  // };
  // person = {                  2η φαση
  //   givenName: {{name}},
  //   surName: {{lastname}},
  //   age: {{age}},
  //   email: {{email}}
  // };
  // person: Person = {           // 3η φαση
  //   givenName: 'Nick',
  //   surName: 'Tzortzis',
  //   age: 29,
  //   email: 'nicktzortziss@gmail.com',
  //   address: "Athens, Greece"
  // };
  @Input() person: Person = {
    givenName: "The person's given name",
    surName: "The person's lastname",
    age: 0,
    email: "example@gmail.com",
    address: "The person's address"
  }
}
