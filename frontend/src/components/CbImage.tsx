import React, { FunctionComponent } from 'react'
import { IImage } from '../../../models/image'
import { DeleteForeverRounded } from '@material-ui/icons'
import { IconButton } from '@material-ui/core'

interface IProps {
  image: IImage
  removeImage: (public_id: string) => void
}

const CbImage:FunctionComponent<IProps> = ({image, removeImage}) => {
  return (
    <>
      <IconButton
        onClick={() => removeImage(image.public_id)}
      >
        <DeleteForeverRounded /> 
      </IconButton>
      <img src={image.secure_url} alt='' />
    </>
  )
}

export default CbImage