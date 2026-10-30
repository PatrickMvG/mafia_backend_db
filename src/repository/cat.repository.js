// Hier Datenzugriffschicht Kommunikation 
import { connection } from "../util/db.js"

export async function getAllCats(){
    const db = await connection()
    try{
        const [rows] = await db.query("select * from cat")
        return rows
    }catch(error){
        throw error
    }finally{
        db.end()
        console.log(db)
    }

}