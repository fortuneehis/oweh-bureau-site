"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
require("colors");
var express_ejs_layouts_1 = __importDefault(require("express-ejs-layouts"));
var app = (0, express_1.default)();
// Set EJS as the view engine
app.use(express_ejs_layouts_1.default);
app.set('view engine', 'ejs');
app.use(express_1.default.static('public'));
app.use(function (req, res, next) {
    console.log("".concat(req.method, " | ").concat(req.url).yellow);
    next();
});
var render = function (req, res, page, options) {
    console.log("".concat(req.path, "->"), page);
    res.render(page, __assign({ pageTitle: "Oweh Bureau | ".concat((options === null || options === void 0 ? void 0 : options.description) || page), path: req.path, layout: './layout', params: req.params, query: req.query }, options));
};
app.get('/', function (req, res) {
    render(req, res, 'index', {
        description: 'Security and Profiling Agency'
    });
});
app.get('/careers', function (req, res) { render(req, res, 'careers'); });
app.get('/application', function (req, res) { render(req, res, 'application'); });
app.get('/contact', function (req, res) { render(req, res, 'contact'); });
app.get('/appointment', function (req, res) { render(req, res, 'appointment'); });
app.get('/profile-details', function (req, res) { render(req, res, 'profile-details'); });
app.get('/quote', function (req, res) { render(req, res, 'quote'); });
app.use(function (req, res) {
    render(req, res, '404', {
        description: 'Lost But Found'
    });
});
var PORT = process.env['PORT'] || 3000;
app.listen(PORT, function () {
    console.log('listening on port', PORT);
});
// export const handler = serverless(app);
