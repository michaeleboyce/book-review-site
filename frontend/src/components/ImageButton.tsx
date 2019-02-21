import React, { FunctionComponent } from 'react'
import { CloudUpload }from '@material-ui/icons'
interface IProps {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
const ImageButton: FunctionComponent<IProps> = ({handleChange}) => {
  return (
    <>
      <label htmlFor='file-label'>
        <CloudUpload />
      </label>
      <input  id='file-label'aria-label='file-upload-label' type='file' onChange={handleChange} multiple />
    </>
  )
}

export default ImageButton