import { Component } from '@angular/core';
import { User } from '../models/user';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users-list-observable',
  standalone: true,
  imports: [],
  templateUrl: './users-list-observable.component.html',
  styleUrl: './users-list-observable.component.css'
})
export class UsersListObservableComponent {
  public users: User[] = [];
  

  constructor(private userService: UsersService){
    
  }

  ngOnInit(){
    this.userService.getUsers().subscribe((data) =>{
      this.users = data;
    });
  }

}
