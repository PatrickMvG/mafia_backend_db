// BusinessLayer Geschäftslogik

import { getAllCats, insertNewCat} from "../repository/cat.repository.js";

export async function allCats(){
    const cat = await getAllCats()
    return cat
}

export async function createNewDon(cat){
    cat.cat_rank_id = 10
    cat.avatar_url = "https://mafiacats.onrender.com/cats/11"
    return await insertNewCat(cat)
}

