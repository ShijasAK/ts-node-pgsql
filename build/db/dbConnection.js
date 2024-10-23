"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const db_1 = __importDefault(require("../config/db"));
const dbConfig = db_1.default.database;
const pool = new pg_1.Pool({
    user: dbConfig.user,
    host: dbConfig.host,
    database: dbConfig.name,
    password: dbConfig.password,
    port: dbConfig.port,
});
exports.default = pool;
