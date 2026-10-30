// BusinessLayer Geschäftslogik

import { getAllCats, getAllRegions } from "../repository/cat.repository.js";

export async function allCats(){
    const cat = await getAllCats()
    return cat
}

export async function allRegions(){
    const cat = await getAllRegions()
    return cat
}