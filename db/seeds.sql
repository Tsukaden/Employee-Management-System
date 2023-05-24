USE Workers;

INSERT INTO department (name) VALUES ('Engineering');
INSERT INTO department (name) VALUES ('Sales');
INSERT INTO department (name) VALUES ('Marketing');

INSERT INTO role (title, salary, department_id) VALUES ('Software Engineer', 80000, 1);
INSERT INTO role (title, salary, department_id) VALUES ('Sales Manager', 90000, 2);
INSERT INTO role (title, salary, department_id) VALUES ('Marketing Specialist', 70000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Kaden', 'Inskeep', 1, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('George', 'Washington', 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('David', 'Cho', 3, 1);
