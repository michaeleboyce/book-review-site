import React, { FunctionComponent, useState, Suspense } from 'react'
import './App.css'
import ImageButton from './ImageButton'
import axios from 'axios'
import CbImage from './CbImage';
import { IImage } from '../../models/image';
declare var fetch: any 
interface IState {
  uploading: boolean
  images: Array<IImage>
}
const App: FunctionComponent<{}> = () => {
  const initialState: IState = {
    uploading: false,
    images: []
  } 

  const [uploading, setUploading] = useState(initialState.uploading)
  const [images, setImages] = useState(initialState.images)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
  {
    const files: FileList | null = e.target.files
    const formData: FormData = new FormData()
    if (!files) { 
      return
    }

    for (let i = 0; i < files.length; i++){
      formData.append(i.toString(), files[i])
    }

    axios.post(`http://localhost:8000/image-upload`, formData)
    .then(res => res.data)
    .then(images => setImages(images))
  }

  const handleRemove = (id: string) => {
    setImages(images.filter((image) => image.public_id !== id))
  }
  return (
    <>
      <Suspense fallback='Loading...'>
        <ImageButton handleChange={handleChange} />
      </Suspense>
      {images.map((image, i) => 
        <CbImage image={image} removeImage={handleRemove} key={i} /> 
      )}
    </>)
  }

export default App
