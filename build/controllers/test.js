"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = void 0;
const userService_1 = __importDefault(require("../services/userService"));
const getUser = async (req, res) => {
    const user = await userService_1.default.getUserById(req.params.id);
    res.json(user);
};
exports.getUser = getUser;
