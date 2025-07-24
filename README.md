# Express Server with TypeScript and Mongoose

This project is a boilerplate for building an Express.js server with TypeScript and Mongoose. It is designed for scalability, readability, and ease of development. The setup includes modern tools and best practices to kickstart your backend development.

## Features

- **TypeScript** for type-safe JavaScript development.
- **Express.js** for building robust RESTful APIs.
- **Mongoose** for MongoDB object modeling.
- **Environment Variables** using `dotenv`.
- **CORS** support for cross-origin requests.
- Development tools like `ts-node-dev` and `nodemon` for hot-reloading.

## Installation

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/)

### Getting Started

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-name>

2. Install dependencies::
   ```bash
   npm install express typescript ts-node @types/node @types/express dotenv cors mongoose --save
   npm install nodemon --save-dev
   npm i ts-node-dev --save-dev

3. Install dependencies::
   ```bash
   MONGO_URI=your-mongodb-uri
   PORT=5000

## Folder Structure

### A typical top-level directory layout

    .
    ├── build                   # Compiled files (alternatively `dist`)
    ├── docs                    # Documentation files (alternatively `doc`)
    ├── src                     # Source files (alternatively `lib` or `app`)
    ├── test                    # Automated tests (alternatively `spec` or `tests`)
    ├── tools                   # Tools and utilities
    ├── LICENSE
    └── README.md



## Package.json Configuration

Below is the `package.json` configuration for this project:

```json
{
  "name": "y",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "start": "node ./dist/server.js",
    "dev": "ts-node-dev --respawn --transpile-only ./src/server.ts",
    "build": "tsc",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "description": "",
  "devDependencies": {
    "@types/cors": "^2.8.17",
    "@types/express": "^5.0.0",
    "@types/node": "^22.10.6",
    "eslint-config-prettier": "^10.0.1",
    "express": "^4.21.2",
    "nodemon": "^3.1.9",
    "ts-node": "^10.9.2",
    "ts-node-dev": "^2.0.0",
    "typescript": "^5.7.3"
  },
  "dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^16.4.7",
    "mongoose": "^8.9.5"
  }
}

Unknown command: "cho"

To see a list of supported npm commands, run:
  npm help
