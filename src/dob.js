export class Dob {
  constructor(birthdate) {
    this.birthdate = birthdate
    }

  now(){
    let now = new Date();
    return now;
  }

  birthday(){
    let birthday = new Date(this.birthdate)
    return birthday
  }

  timeElapsed(){
    let past = this.birthday()
    let present = this.now()
    return (past + present)
  }
}
