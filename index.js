import express from "express"
import cors from "cors"
process.loadEnvFile(".env")
import { router as catRouter} from "./src/router/cat.router.js"
import { router as regionRouter} from "./src/router/region.router.js"
import { router as clanRouter} from "./src/router/clan.router.js"



const PORT = process.env.PORT || 8080

const app = express()

app.use(cors())
app.use(express.json())
app.use("/api/v1", catRouter)
app.use("/api/v1", regionRouter)
app.use("/api/v1", clanRouter)



app.listen(PORT, () => console.log(`Ein Mauzi erscheint in Port: ${PORT}`))