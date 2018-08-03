import {Dob} from '../src/dob';

describe ('Dob', function() {
  let birthdate;
  let sampleBirthday;
  let sampleNow;


  beforeEach(function() {
    birthdate = new Dob();
    sampleBirthday = new Date("05 October 2011 14:48 UTC");
    sampleNow = new Date()
  });


  it ('should make a new birthday based on user input', function() {
    let dob = new Dob("05 October 2011 14:48 UTC");
    console.log(dob);
    expect(dob.birthday()).toEqual(sampleBirthday);
  });

  it ('should make a new instance of time', function() {
    let presentDate = new Dob();
    console.log(presentDate);
    expect(presentDate.now()).toEqual(sampleNow);
  });

  it ('should find the elapsed time between two dates', function() {
    birthdate = new Dob("05 October 2011 14:48 UTC");
    console.log(birthdate.birthday());
    expect(birthdate.timeElapsed()).toEqual(sampleBirthday + sampleNow);
  });

});
