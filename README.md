# Personal Expense Tracker

## Objective

Develop a RESTful API for managing personal financial records. Users can record their income and expenses, retrieve past transactions, and get summaries by category or time period.

### Tools and Technologies

- **Backend Framework**: Node.js with Express.js
- **Database**: SQLite

## Project Structure

expense-tracker/ │ app.js │ package.json │ .env │ README.md │ ├───config/ │ db.js │ ├───database/ │ migrations/ │ createTables.js │ ├───controllers/ │ transactionController.js │ summaryController.js │ categoryController.js │ ├───routes/ │ transactionRoutes.js │ summaryRoutes.js │ categoryRoutes.js


## API Endpoints

- **POST** `/api/transactions`: Add a new transaction
- **GET** `/api/transactions`: Get all transactions
- **GET** `/api/transactions/:id`: Get a single transaction by ID
- **PUT** `/api/transactions/:id`: Update a transaction by ID
- **DELETE** `/api/transactions/:id`: Delete a transaction by ID
- **GET** `/api/summary`: Get summary (total income, expenses, balance)
- **POST** `/api/categories`: Add a new category
- **GET** `/api/categories`: Get all categories
