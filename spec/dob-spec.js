import {Dob} from '../src/dob';

describe ('Dob', function() {
  let birthdate;
  let sample;


  beforeEach(function() {
    birthdate = new Dob();
    sample = new Date("September 13, 2000 00:00:00");

  });


  it ('should make a new birthday based on user input', function() {
    // sample = "Date 2000-09-13T07:00:00.000Z";
    let dob = new Dob("September 13, 2000 00:00:00");
    expect(dob.getFullYear()).toEqual(sample);
  });
});
