// Create Parentclass School
class School {
    constructor(name, level, numberOfStudents) {
      this._name = name;
      this._level = level;
      this._numberOfStudents = numberOfStudents;
    }
  
    get name() {
      return this._name;
    }
  
    get level() {
      return this._level;
    }
  
    get numberOfStudents() {
      return this._numberOfStudents;
    }
  
    set numberOfStudents(x) {
      if (typeof x === 'number') {
        this._numberOfStudents = x
      } else {
        return 'Invalid input: numberOfStudents must be set to a number.'
      }
    }
  
    quickFacts() {
      console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`)
    }
  
    static pickSubstituteTeacher(substituteTeachers) {
      const randomTeacherNum = Math.floor(Math.random()*(substituteTeachers.length));
      return substituteTeachers[randomTeacherNum];
    }
  };
  
  //Create Childclass Primary
  class Primary extends School {
    constructor(name, numberOfStudents, pickUpPolicy) {
      super(name, 'primary', numberOfStudents);
      this._pickUpPolicy = pickUpPolicy;
    }
  
    get pickUpPolicy() {
      return this._pickUpPolicy;
    }
  };
  
  //Create Childclass Middle
  class Middle extends School {
    constructor(name, numberOfStudents) {
      super(name, 'middle', numberOfStudents)
    }
  };
  
  //Create Childclass High
  class High extends School {
    constructor(name, numberOfStudents, sportsTeams) {
      super(name, 'high', numberOfStudents)
      this._sportsTeams = sportsTeams
    }
  
    get sportsTeams() {
      return this._sportsTeams
    }
  };
  
  //Creating Instance Lorraine Hansbury Primary School
  
  const lorraineHansbury = new Primary('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over age of 13.')
  
  lorraineHansbury.quickFacts();
  
  //Picking out substitute teacher
  const substituteTeachers = ['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli'];
  
  console.log(School.pickSubstituteTeacher(substituteTeachers));
  
  //Create instance Al E. Smith High School
  const alSmith = new High('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
  
  console.log(alSmith.sportsTeams);