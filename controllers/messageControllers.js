const db = require("../db")

exports.createMessage = (req, res) => {
  const {name, email, message} = req.body
  if(!name || !email || !message) {
    return res.status (400).json({error: "All fields required."})
  }

  const sql = " INSERT INTO messages (name, email, message) VALUES (?,?,?)"
  db.query(sql, [name, email, message], (err, result) => {
    if (err) return res.status(500).json({error:err.message})
      return res.status(201).json({message: "Message sent succeslly"})
  })
}