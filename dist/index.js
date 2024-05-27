"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const morgan_1 = __importDefault(require("morgan"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 9000;
// View Engine
app.set('view engine', 'ejs');
app.set('views', path_1.default.join(process.cwd(), 'src', 'views'));
// Morgan
app.use((0, morgan_1.default)('dev'));
// Static Files
app.use(express_1.default.static(path_1.default.join(process.cwd(), 'public')));
app.get('/', (req, res) => {
    res.render('index');
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
//# sourceMappingURL=index.js.map