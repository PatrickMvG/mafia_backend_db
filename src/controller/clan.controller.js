import { allClans, newClan } from "../service/clan.service.js"

export async function getClans(req, res){
    const clans = await allClans()
    res.status(200).json(clans)
}

export async function createNewClan(req, res){
    try{
        const result = await newClan(req.body)
        res.status(201).json(result)
    }catch(err){
        res.sendStatus(500)
    }
}