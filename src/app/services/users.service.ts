import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url = 'https://jsonplaceholder.typicode.com/users';
  private users: User[] = [];

  constructor(private http: HttpClient) {

    

  }


  public getUsers(): Observable<User[]>{

    //initialize list of users if not aviable

    return this.http.get<any[]>(this.url).pipe(
      map(data => data.map(item => this.mapToUser(item)))
    );

  }

  private mapToUser(item: any): User {
    return new User(
      item.id,
      item.name,
      item.username,
      item.email
      // Map other properties as needed
    );
  }
}
