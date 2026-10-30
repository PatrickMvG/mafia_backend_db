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