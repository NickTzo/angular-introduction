import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Person } from 'src/app/interfaces/person';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-list-users',
  standalone: true,
  imports: [CommonModule, ListUsersComponent],
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  users: Person[] = []
  constructor(private service: AppService = Inject(AppService)) { }

  ngOnInit(): void {
    this.service.getAllUsers().subscribe((users) => {
      this.users = users;
    }
    );
  }
}
