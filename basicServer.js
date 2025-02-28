"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 3002;
//to fetch req bodies tht comes with content type - application.json
app.use(express_1.default.json());
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
