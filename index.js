const inquirer = require('inquirer');
const consoleTable = require('console.table');
const DB = require('./db/db.js');

const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'list',
        name: 'action',
        message: 'What would you like to do?',
        choices: [
          'View all departments',
          'View all roles',
          'View all workers',
          'Add a department',
          'Add a role',
          'Add an employee',
          'Update an employee role',
          'Exit'
        ]
      }
    ]);
  };

  const handleAction = (action) => {
    switch (action) {
      case 'View all departments':
        viewDepartments();
        break;
      case 'View all roles':
        viewRoles();
        break;
      case 'View all workers':
        viewWorkers();
        break;
      case 'Add a department':
        addDepartment();
        break;
      case 'Add a role':
        addRole();
        break;
      case 'Add an employee':
        addEmployee();
        break;
      case 'Update an employee role':
        updateEmployee();
        break;
      case 'Exit':
        console.log('Goodbye!');
        return;
    }
  
  
    // promptUser().then(({ action }) => {
    //     handleAction(action);
    //   });
    };

  const viewDepartments = () => {
    DB.getDepartments()
      .then((departments) => {
        console.table(departments); 
        promptUser().then(({ action }) => {
          handleAction(action);
        });
      })
      .catch((err) => {
        console.error('Error retrieving departments:', err);
      });
  };
  
  const viewRoles = () => {
    DB.getRoles()
      .then((roles) => {
        console.table(roles); 
        promptUser().then(({ action }) => {
          handleAction(action);
        });
      })
      .catch((err) => {
        console.error('Error retrieving roles:', err);
      });
  };

const viewWorkers = () => {
  DB.getWorkers()
    .then((Workers) => {
      console.table(Workers);
      promptUser().then(({ action }) => {
        handleAction(action);
      });
    })
    .catch((err) => {
      console.error('Error retrieving workers:', err);
    });
};

const addDepartment = () => {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Enter the name of the department:',
      },
    ])
    .then(({ name }) => {
      DB.insertDepartment(name)
        .then(() => {
          console.log('Department added successfully!');
          promptUser().then(({ action }) => {
            handleAction(action);
          });
        })
        .catch((err) => {
          console.error('Error adding department:', err);
        });
    });
};

const addRole = () => {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'title',
          message: 'Enter the title of the role:',
        },
        {
          type: 'input',
          name: 'salary',
          message: 'Enter the salary of the role:',
        },
        {
          type: 'input',
          name: 'department_id',
          message: 'Enter the department ID for the role:',
        },
      ])
      .then(({ title, salary, departmentId }) => {
        const role = {
          title: title,
          salary: salary,
          department_id: departmentId,
        };
        DB.insertRole(role)
        // .then(() => {
        //     console.log('Role added successfully!');
        //     promptUser().then(({ action }) => {
        //       handleAction(action);
        //     });
        //   })
      })
      .catch((err) => {
        console.error('Error adding role:', err);
      });
  };
  
  const addEmployee = () => {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'first_name',
          message: "Enter the employee's first name:",
        },
        {
          type: 'input',
          name: 'last_name',
          message: "Enter the employee's last name:",
        },
        {
          type: 'input',
          name: 'role_id',
          message: "Enter the employee's role ID:",
        },
        {
          type: 'input',
          name: 'manager_id',
          message: "Enter the employee's manager ID:",
        },
      ])
      .then(({ first_name, last_name, role_id, manager_id }) => {
        const employee = { first_name, last_name, role_id, manager_id };
        DB.insertEmployee(employee)
          .then(() => {
            console.log('Employee added successfully!');
            promptUser().then(({ action }) => {
              handleAction(action);
            });
          })
          .catch((err) => {
            console.error('Error adding employee:', err);
          });
      });
  };
  
  
  const updateEmployee = () => {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'employee_id',
          message: "Enter the employee's ID:",
        },
        {
          type: 'input',
          name: 'role_id',
          message: "Enter the new role ID for the employee:",
        },
      ])
      .then(({ employee_id, role_id }) => {
        DB.updateEmployeeRole(employee_id, role_id)
          .then(() => {
            console.log('Employee role updated successfully!');
            promptUser().then(({ action }) => {
              handleAction(action);
            });
          })
          .catch((err) => {
            console.error('Error updating employee role:', err);
          });
      });
  };

const init = () => {
    console.log('Employee Management System');
    promptUser()
      .then(({ action }) => {
        handleAction(action);
      })
      .catch((err) => {
        console.error('Error occurred:', err);
      });
  };
  
  init();