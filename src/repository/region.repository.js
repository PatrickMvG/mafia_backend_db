import { pool } from "../util/db.js"

export async function getAllRegions(){
    const db = await pool.getConnection()
    try{
        const [rows, haus] = await db.query("select * from region limit 2")
        console.log(haus);
        return rows
    }catch(error){
        throw error
    }finally{
        db.release()
    }
}