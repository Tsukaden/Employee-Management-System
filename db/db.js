const connection = require('./connection');

class DB {
  constructor(connection) {
    this.connection = connection;
  }

  getDepartments() {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM department';
      this.connection.query(query, (err, departments) => {
        if (err) {
          reject(err);
        } else {
          resolve(departments);
        }
      });
    });
    // return this.connection.promise().query(query)
  }

  getRoles() {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM role';
      this.connection.query(query, (err, roles) => {
        if (err) {
          reject(err);
        } else {
          resolve(roles);
        }
      });
    });
  }

  getWorkers() {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM employee';
      this.connection.query(query, (err, Workers) => {
        if (err) {
          reject(err);
        } else {
          resolve(Workers);
        }
      });
    });
  }

  insertDepartment(department) {
    return new Promise((resolve, reject) => {
      const query = 'INSERT INTO department SET ?';
      this.connection.query(query, department, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }

  insertRole(role) {
    return new Promise((resolve, reject) => {
      const query = 'INSERT INTO role SET ?';
      this.connection.query(query, role, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }

  insertEmployee(employee) {
    return new Promise((resolve, reject) => {
      const query = 'INSERT INTO employee SET ?';
      this.connection.query(query, employee, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }

  updateEmployeeRole(employeeId, roleId) {
    return new Promise((resolve, reject) => {
      const query = 'UPDATE employee SET role_id = ? WHERE id = ?';
      this.connection.query(query, [roleId, employeeId], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }
}

module.exports = new DB (connection);