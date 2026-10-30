import { allCats, allRegions } from "../service/cat.service.js";

// Hier werden die http request und response behandelt
export async function getCats(req, res){
    const cats = await allCats()
    res.status(200).json(cats)
}

export async function getRegions(req, res){
    const region = await allRegions()
    res.status(200).json(region)
}