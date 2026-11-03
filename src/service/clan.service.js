import { getAllClans, createNewClan } from "../repository/clan.repository.js"

export async function allClans(){
    const clan = await getAllClans()
    return clan
}

export async function newClan(data){
    const [cat, clan] = data
    cat.rank = 10
    cat.avatar = "https://mafiacats.onrender.com/cats/3"
    clan.fische = 1000
    return await createNewClan(clan, cat)
}