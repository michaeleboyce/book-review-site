import * as dotenv from 'dotenv'
import express from 'express'
import * as cloudinary from 'cloudinary'
import * as formData from 'express-form-data'
import cors from 'cors'
dotenv.config()

const app: express.Application = express()

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
})

const allowedOrigins = [
  'http://localhost:8000',
  'http://yourapp.com'
]

const options: cors.CorsOptions = {
  origin: allowedOrigins
}

//app.use(cors(options))
app.use(cors())
app.use(formData.parse())

app.post('/image-upload', (req, res) => {
    console.log('it reached the post!!!')
    // @ts-ignore
    const values = Object.values(req.files)
    // @ts-ignore
    const promises = values.map(image => cloudinary.uploader.upload(image.path))

    Promise
        .all(promises)
        .then(results => res.json(results))
})
const port = process.env.PORT || 8000
app.listen(port, () => console.log(`it worked on port: ${port}!`))

export default app