"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    database: {
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'postgres',
        password: process.env.DB_PASSWORD || 'password',
        name: process.env.DB_NAME || 'my_database',
        port: Number(process.env.DB_PORT) || 5432,
    },
};
