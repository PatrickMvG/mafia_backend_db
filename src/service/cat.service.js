// BusinessLayer Geschäftslogik

import { getAllCats } from "../repository/cat.repository.js";

export async function allCats(){
    const cat = await getAllCats()
    return cat
}