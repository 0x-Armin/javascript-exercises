function getYearsLived(personA, personB) {
  numALivedYears = (personA.yearOfDeath ?? new Date().getFullYear()) - personA.yearOfBirth;
  numBLivedYears = (personB.yearOfDeath ?? new Date().getFullYear()) - personB.yearOfBirth;

  if (numALivedYears > numBLivedYears) return personA;
  else return personB;
}

const findTheOldest = function(people) {
  return people.reduce(getYearsLived);
};

// Do not edit below this line
module.exports = findTheOldest;
