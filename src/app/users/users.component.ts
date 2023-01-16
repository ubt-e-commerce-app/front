import { Component, OnInit } from '@angular/core';
import { IUser } from '../models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  userSetttings: IUser = {
    firstName: 'Eris',
    lastName: 'Idrizi',
    email: '',
    notes: ''
  };

  userSettingsCopy: IUser = {...this.userSetttings}

  constructor() { }

  ngOnInit(): void {
  }

}
