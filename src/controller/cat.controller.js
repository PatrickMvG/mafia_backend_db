import { allCats } from "../service/cat.service.js";

// Hier werden die http request und response behandelt
export async function getCats(req, res){
    const cats = await allCats()
    res.status(200).json(cats)
}