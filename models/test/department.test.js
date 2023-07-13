const Department = require('../department.model.js');
const expect = require('chai').expect;

describe('Department', () => {
  it('should throw an error if no "name" arg', () => {
    const department = new Department({});

    department.validate((err) => {
      expect(err.errors.name).to.exist;
    });
  });
  it('should throw an error if "name" is not a string', () => {
    const cases = [{}, []];
    for(let name of cases){
      const department = new Department({name});

      department.validate((err) => {
        expect(err.errors.name).to.exist;
      });
    }
  });
  it('should throw an error if "name" is too short or too long', () => {
    const cases = ['Abc', 'Lorem ipsum dolor sit amet'];
    for(let name of cases){
      const department = new Department({name});

      department.validate((err) => {
        expect(err.errors.name).to.exist;
      });
    }
  });
  it('should not throw an error if "name" is okay', () => {
    const cases = ['Management', 'Marketing'];
    for(let name of cases){
      const department = new Department({name});

      department.validate((err) => {
        expect(err).to.not.exist;
      });
    }
  });
});