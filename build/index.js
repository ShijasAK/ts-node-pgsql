"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT;
app.use(express_1.default.json());
const router = express_1.default.Router();
router.get("/", (req, res) => {
    res.send("hello world");
});
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
exports.default = app;
