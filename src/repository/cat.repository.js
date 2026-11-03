// Hier Datenzugriffschicht Kommunikation 
// import { connection } from "../util/db.js"
import { pool } from "../util/db.js"

export async function getAllCats(){
    const db = await pool.getConnection()
    try{
        const [rows, haus] = await db.query("select * from cat limit 2")
        console.log(haus);
        return rows
    }catch(error){
        throw error
    }finally{
        db.release()
    }
}

export async function insertNewCat(cat) {
    const [result] = await pool.execute("Insert into cat (cat_name, cat_rank_id, avatar_url) values (:name, :cat_rank_id, :avatar_url)", cat)
    return result
}








// export async function getAllCats(){
//     const db = await connection()
//     try{
//         const [rows] = await db.query("select * from cat")
//         return rows
//     }catch(error){
//         throw error
//     }finally{
//         db.end()
//         console.log(db)
//     }
// }