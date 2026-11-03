import { getAllRegions } from "../repository/region.repository.js"

export async function allRegions(){
    const region = await getAllRegions()
    return region
}