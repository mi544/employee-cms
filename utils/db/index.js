const client = require('./client')

module.exports = {
  async getAllASC() {
    const result = await client.query(
      'SELECT * FROM employee_main ORDER BY "Full Name" ASC'
    )
    return { data: result.rows, columns: Object.keys(result.rows[0]) }
  },
  async getManagers() {
    const result = await client.query(
      'SELECT id, "Full Name", "Role", "Department" FROM employee_main ORDER BY "Full Name" ASC'
    )
    return { data: result.rows, columns: Object.keys(result.rows[0]) }
  },
  async getRoles() {
    const result = await client.query('SELECT * FROM role_main ORDER BY "Department" ASC')
    return { data: result.rows, columns: Object.keys(result.rows[0]) }
  },
  async addEmployee(...data) {
    const result = await client.query(
      'INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)',
      data
    )
    return result
  }
}
