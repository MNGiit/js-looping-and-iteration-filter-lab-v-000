// Code your solution in this file





findMatching()
returns all drivers that match the passed in name ‣
ReferenceError: findMatching is not defined
    at Context.<anonymous> (test/indexTest.js:8:7)const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
expect(findMatching(drivers, 'Bobby')).to.eql(['Bobby', 'Bobby']);
expect(findMatching(drivers, 'Sammy')).to.eql(['Sammy']);