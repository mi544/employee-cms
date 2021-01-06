CREATE VIEW employee_main AS
  SELECT
    e.id,
    CONCAT(e.first_name, ' ', e.last_name) AS "Full Name",
    r.name AS "Role",
    r.salary AS "Salary",
    d.name AS "Department",
    CASE
      WHEN e2.first_name IS NULL THEN 'None'
      ELSE e2.first_name || ' ' || e2.last_name
    END 
    AS "Manager"
    
  FROM employee AS e
  
  LEFT JOIN role AS r
  ON e.role_id = r.id
  
  LEFT JOIN department AS d
  ON r.department_id = d.id
  
  LEFT JOIN employee AS e2
  ON e.manager_id = e2.id;


CREATE VIEW role_main AS
  SELECT
    r.id,
    r.name AS "Role",
    r.salary AS "Salary",
    d.name AS "Department"

  FROM role AS r

  LEFT JOIN department AS d
  ON r.department_id = d.id;