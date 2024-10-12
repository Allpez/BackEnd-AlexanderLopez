import { Router } from "express";
import {allUser,userByRol} from "../controllers/users/read.js"

const router = Router()

router.get('/all', allUser)
router.get('/role/:rol', userByRol)

export default router