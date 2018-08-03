import {Dob} from '../src/dob';

describe ('Dob', function() {
  let birthdate;
  let sampleBirthday;
  let sampleNow;


  beforeEach(function() {
    birthdate = new Dob("05 October 2011 14:48 UTC");
    sampleBirthday = new Date("05 October 2011 14:48 UTC");
    sampleNow = new Date()
  });


  it ('should make a new birthday based on user input', function() {
    expect(birthdate.birthday()).toEqual(sampleBirthday);
  });

  it ('should make a new instance of time', function() {
    expect(birthdate.now()).toEqual(sampleNow);
  });

  it ('should find the elapsed time between two dates', function() {
    expect(birthdate.timeElapsed()).toEqual(((sampleNow.getTime() - sampleBirthday.getTime())/31556900000).toFixed(3));
  });

  it ('should find the amount of years old in Mercury years', function() {
    expect(birthdate.mercuryYears()).toEqual(6.829 * .24);
  });

});
