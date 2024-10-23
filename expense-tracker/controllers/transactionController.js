const db = require('../config/db');

exports.addTransaction = (req, res) => {
  const { type, category, amount, date, description } = req.body;
  const sql = 'INSERT INTO transactions (type, category, amount, date, description) VALUES (?, ?, ?, ?, ?)';
  db.run(sql, [type, category, amount, date, description], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Transaction added successfully', transactionId: this.lastID });
  });
};

exports.getAllTransactions = (req, res) => {
  db.all('SELECT * FROM transactions', [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
};

exports.getTransactionById = (req, res) => {
  const { id } = req.params;
  db.get('SELECT * FROM transactions WHERE id = ?', [id], (err, row) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!row) return res.status(404).json({ message: 'Transaction not found' });
    res.json(row);
  });
};

exports.updateTransactionById = (req, res) => {
  const { id } = req.params;
  const { type, category, amount, date, description } = req.body;
  const sql = 'UPDATE transactions SET type = ?, category = ?, amount = ?, date = ?, description = ? WHERE id = ?';
  db.run(sql, [type, category, amount, date, description, id], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    if (this.changes === 0) return res.status(404).json({ message: 'Transaction not found' });
    res.json({ message: 'Transaction updated successfully' });
  });
};

exports.deleteTransactionById = (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM transactions WHERE id = ?';
  db.run(sql, [id], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    if (this.changes === 0) return res.status(404).json({ message: 'Transaction not found' });
    res.json({ message: 'Transaction deleted successfully' });
  });
};
