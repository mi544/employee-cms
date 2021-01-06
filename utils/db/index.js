const client = require('./client')

module.exports = {
  async getAllASC() {
    const result = await client.query(
      'SELECT * FROM employee_main ORDER BY "Full Name" ASC'
    )
    return { data: result.rows, columns: Object.keys(result.rows[0]) }
  }
}
