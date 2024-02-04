import { User } from './../../models/user';
import { UserService } from 'src/app/shared/services/user.service';
import { Component } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  providers: [UserService],
})
export class UserListComponent {
  users!: User[];
  constructor(private userService: UserService) {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe((users: User[]) => {
      this.users = users;
    });
  }
}
