import { pool } from "../util/db.js"


export async function getAllClans(){
    const db = await pool.getConnection()
    try{
        const [rows, haus] = await db.query("select * from clan limit 2")
        console.log(haus);
        return rows
    }catch(error){
        throw error
    }finally{
        db.release()
    }
}

export async function createNewClan(clan, cat){
    const conn = await pool.getConnection()
    try{
        await conn.beginTransaction()
        // 1. Katze anlegen als Don
        const [catRes] = await conn.execute("insert into cat (cat_name, cat_rank_id,avatar_url) values (:name, :rank, :avatar)", cat)
        
        clan.don_id = catRes.insertId
        // 2. Clan anlegen
        const [clanRes] = await conn.execute("Insert into clan(clan_name, don_id, fische) values (:name, :don_id, :fische)", clan)
        const clanId = clanRes.insertId
        // 3. Katze updaten
        await conn.execute("update cat set clan_id = ? where id = ?", [clanId, clan.don_id])

        await conn.commit()
        return {catId: clan.don_id, clanId}
    }catch(err){
        await conn.rollback()
        throw err
    }finally{
        conn.release()
    }
}