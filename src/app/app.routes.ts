import { Routes } from "@angular/router";
import { WelcomeComponent } from "./welcome/welcome.component";
import { EventBindComponent } from "./event-bind/event-bind.component";
import { OutputDemoComponent } from "./output-demo/output-demo.component";
import { PersonComponent } from "./person/person.component";
import { PersonAltComponent } from "./person-alt/person-alt.component";
import { PersonCardComponent } from "./person-card/person-card.component";
import { ReactiveFormComponent } from "./reactive-form/reactive-form.component";
import { TemplateDrivenFormComponent } from "./template-driven-form/template-driven-form.component";
import { CreateUserComponent } from "./crud-demo/crud/create-user/create-user.component";
import { UpdateUserComponent } from "./crud-demo/crud/update-user/update-user.component";
import { ReadUserComponent } from "./crud-demo/crud/read-user/read-user.component";
import { DeleteUserComponent } from "./crud-demo/crud/delete-user/delete-user.component";
import { ListUsersComponent } from "./crud-demo/utils/list-users/list-users.component";
import { LoginFormComponent } from "./login-form/login-form.component";

export const routes: Routes = [
  { path: "home", component: WelcomeComponent },
  { path: "event-bind", component: EventBindComponent },
  { path: "login", component: LoginFormComponent },
  { path: "output-demo", component: OutputDemoComponent },
  { path: "person", component: PersonComponent },
  { path: "person-alt", component: PersonAltComponent },
  { path: "person-card", component: PersonCardComponent },
  { path: "reactive-form", component: ReactiveFormComponent },
  { path: "template-driven-form", component: TemplateDrivenFormComponent },

  { path: "crud-demo/create", component: CreateUserComponent },
  { path: "crud-demo/read", component: ReadUserComponent },
  { path: "crud-demo/update", component: UpdateUserComponent },
  { path: "crud-demo/delete", component: DeleteUserComponent },
  { path: "crud-demo/list", component: ListUsersComponent }
]