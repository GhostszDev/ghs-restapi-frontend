export interface UserData {

  id: Number
  firstName: String,
  lastName: String,
  DOB: Date

}

export class User implements UserData {
  id: Number = 0;
  firstName: String = "";
  lastName: String = "";
  DOB: Date = new Date();
}
