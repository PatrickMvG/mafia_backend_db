import express from "express"
import { getRegions } from "../controller/region.controller.js"


export const router = new express.Router()

router.get("/region", getRegions)