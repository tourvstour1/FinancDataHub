SELECT 
employee_login
 FROM b_employee
 WHERE employee_login =':user'
 AND employee_password = md5(':password')
 AND employee_active = '1'
 limit 1