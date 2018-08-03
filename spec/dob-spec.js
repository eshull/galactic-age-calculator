import {Dob} from '../src/dob';

describe ('Dob', function() {
  let birthdate;
  let sampleBirthday;
  let sampleNow;


  beforeEach(function() {
    birthdate = new Dob();
    sampleBirthday = new Date("September 13, 2000 00:00:00");
    sampleNow = new Date()
  });


  it ('should make a new birthday based on user input', function() {
    let dob = new Dob("September 13, 2000 00:00:00");
    console.log(dob);
    expect(dob.birthday()).toEqual(sampleBirthday);
  });

  it ('should make a new instance of time', function() {
    let presentDate = new Dob();
    console.log(presentDate);
    expect(presentDate.now()).toEqual(sampleNow);
  });

  it ('should find the elapsed time between two dates', function() {
    
    expect(birthdate.timeElapsed()).toEqual(sampleBirthday + sampleNow);
  });

});
