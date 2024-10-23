const db = require('../config/db');

exports.getSummary = (req, res) => {
  db.all('SELECT type, SUM(amount) as total FROM transactions GROUP BY type', [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });

    const summary = { total_income: 0, total_expenses: 0, balance: 0 };

    rows.forEach((row) => {
      if (row.type === 'income') {
        summary.total_income = row.total;
      } else if (row.type === 'expense') {
        summary.total_expenses = row.total;
      }
    });

    summary.balance = summary.total_income - summary.total_expenses;
    res.json(summary);
  });
};
