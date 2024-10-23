"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../models/user");
const getUserById = async (id) => {
    const user = await user_1.User.findOne({ where: { id } });
    return user;
};
exports.default = { getUserById };
