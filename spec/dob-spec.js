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

  it ('should find the amount of years old in Venus years', function() {
    expect(birthdate.venusYears()).toEqual(6.829 * .62);
  });

  it ('should find the amount of years old in Mars years', function() {
    expect(birthdate.marsYears()).toEqual(6.829 * 1.88);
  });

  it ('should find the amount of years old in Jupiter years', function() {
    expect(birthdate.jupiterYears()).toEqual(6.829 * 11.86);
  });

  it ('should determine life expectancy based on users age and female sex', function() {
    expect(birthdate.lifeExpectancy("female")).toEqual(76);
  });

  it ('should determine life expectancy based on users age and male sex', function() {
    expect(birthdate.lifeExpectancy("male")).toEqual(70);
  });

  it ('should return amount of years over life expectancy if older than life expectancy', function() {
    birthdate = new Dob("05 October 1911 14:48 UTC");
    console.log(Math.floor(birthdate.timeElapsed()));
    expect(birthdate.lifeExpectancy("male")).toEqual(30);
  });

});
