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
    return birthday;
  }

  timeElapsed(){
    let past = this.birthday()
    let present = this.now()
    let difference = (present.getTime() - past.getTime())
    difference = (difference/31556900000).toFixed(3);
    return difference;
  }

  mercuryYears(){
    let yearsConversion = ((this.timeElapsed()) * .24)
    return yearsConversion;
  }

  venusYears(){
    let yearsConversion = ((this.timeElapsed()) * .62)
    return yearsConversion;
  }

  marsYears(){
    let yearsConversion = ((this.timeElapsed()) * 1.88)
    return yearsConversion;
  }

  jupiterYears(){
    let yearsConversion = ((this.timeElapsed()) * 11.86)
    return yearsConversion;
  }

  lifeExpectancy(sex){
    let age = Math.floor(this.timeElapsed());
    let expectancy = 76
    let yearsLeft = expectancy - age

    if (sex == "female") {
      if (yearsLeft < 0) {
        return age - (expectancy + 6)
      } else {
        return yearsLeft = yearsLeft + 6
      }
    } else if (sex == "male") {
      if (yearsLeft < 0) {
        return age - expectancy
      } else {
        return yearsLeft
      }
    }

    if (yearsLeft < 0) {
      return age - expectancy
    }
  }

}
