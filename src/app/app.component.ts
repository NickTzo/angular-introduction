import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { Person } from './interfaces/person';


// import { PersonComponent } from './person/person.component';
// import { PersonAltComponent } from './person-alt/person-alt.component';
// import { EventBindComponent } from './event-bind/event-bind.component';
// import { OutputDemoComponent } from './output-demo/output-demo.component';
// import { PersonCardComponent } from './person-card/person-card.component';
// import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
// import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
// import { AppService } from './app.service';
// import { CrudDemoComponent } from './crud-demo/crud-demo/crud-demo.component';
import { ApplicationLayoutComponent } from './application-layout/application-layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ApplicationLayoutComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
