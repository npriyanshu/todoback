import express  from "express";
import { getMyProfile, login,logout,register } from "../controllers/users.js";
import { isAuthenticated } from "../middlewares/auth.js";
const router = express.Router();

router.get('/',(req,res)=>{
    res.send("hellow")
});

router.post('/new',register);
router.post('/login',login);
router.get('/logout',logout);
router.get('/me', isAuthenticated ,getMyProfile);

export default router;