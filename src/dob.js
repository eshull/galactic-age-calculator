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
    let difference = (present.getTime() - past.getTime())
    difference = (difference/31556900000).toFixed(3);
    return difference
  }

  mercuryYears(){
    let yearsConversion = ((this.timeElapsed()) * .24)
    return yearsConversion
  }

  venusYears(){
    let yearsConversion = ((this.timeElapsed()) * .62)
    return yearsConversion
  }

  marsYears(){
    let yearsConversion = ((this.timeElapsed()) * 1.88)
    return yearsConversion
  }

  jupiterYears(){
    let yearsConversion = ((this.timeElapsed()) * 11.86)
    return yearsConversion
  }


}
