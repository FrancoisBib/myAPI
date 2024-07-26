"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const hono_1 = require("hono");
const drizzle_config_1 = __importDefault(require("../drizzle.config"));
const User_1 = require("../models/User");
const app = new hono_1.Hono();
// Route pour obtenir tous les utilisateurs
app.get('/users', (c) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield drizzle_config_1.default.query(User_1.User).findAll();
        return c.json(users);
    }
    catch (error) {
        return c.json({ error: 'Erreur lors de la récupération des utilisateurs' }, 500);
    }
}));
// Route pour créer un nouvel utilisateur
app.post('/users', (c) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, email, password } = yield c.req.json();
        const newUser = yield drizzle_config_1.default.query(User_1.User).create({ username, email, password });
        return c.json(newUser);
    }
    catch (error) {
        return c.json({ error: 'Erreur lors de la création de l\'utilisateur' }, 500);
    }
}));
app.fire();
