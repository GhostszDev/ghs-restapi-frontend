import { Component } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from 'rxjs';
import {User, UserData} from "./user-data.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  get currentUser(): UserData {
    return this._currentUser;
  }

  set currentUser(value: UserData) {
    this._currentUser = value;
  }
  title = 'ghs-restapi-frontend';
  users: any;
  tempUsers: any;
  tempUser: any;
  // baseUrl = "http://localhost:3000/";
  baseUrl = "https://ghs-rest-api-test.herokuapp.com/";
  selectedID: any;
  private _currentUser!: UserData;

  headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');

  constructor(private http: HttpClient) {

    this.http.get(this.baseUrl+ "api/getUsers", { 'headers': this.headers }).subscribe(data=> {
      this.tempUsers = data;
      this.users = this.tempUsers.users;
    });
  }

  getUserById(id:any) {
    const body = {
      id: id
    };
    this.http.post<UserData>(this.baseUrl +"api/sendID", body,{'headers':this.headers , observe: 'response'}).subscribe(($:any)=>{
      this.currentUser = $.body;
      console.log(this.currentUser.firstName);
    });
  }
}
