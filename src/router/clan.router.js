import express from "express"
import { getRegions } from "../controller/cat.controller.js"


export const router = new express.Router()

router.get("/region", getRegions)