INSERT INTO department
  (name)
VALUES
  ('Software Development'),
  ('Quality Assurance'),
  ('Accounting'),
  ('Education');

INSERT INTO role
  (name, salary, department_id)
VALUES
  ('Full Stack Developer', 75000, 1),
  ('Accounting Manager', 60000, 3),
  ('Junior accountant', 52500, 3),
  ('Back End Developer', 75000, 1),
  ('QA Engineer', 65000, 2),
  ('Front End Developer', 75000, 1),
  ('Most Senior Instructor', 75000, 1);

INSERT INTO employee
  (first_name, last_name, role_id, manager_id)
VALUES
  ('Bryan', 'Yunis', 6, null),
  ('Han', 'Yan', 1, null),
  ('Maksim', 'Verkhoturov', 1, 1),
  ('Sarah', 'Cullen', 7, null),
  ('Paul', 'Ijames', 1, 4);
