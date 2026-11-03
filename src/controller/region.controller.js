import { allRegions } from "../service/region.service.js"

export async function getRegions(req, res){
    const region = await allRegions()
    res.status(200).json(region)
}