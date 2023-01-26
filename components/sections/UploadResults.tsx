import React from 'react'
import Button from '../ui/Button'

type IProps = {
    handleFile: any,
    handleSubmit: any,
}

function UploadResults({handleFile, handleSubmit}:IProps) {
  return (
    <form className='my-6' onSubmit={handleSubmit}>
        <input type="file"  className='w-full text-gray-800 font-PT text-[20px] border py-3 h-[60px] border-gray-300 focus:outline-gray-300 px-4 tex rounded-md' onChange={handleFile} />
        <Button name="Upload Result" className='login my-6 py-3 rounded-md px-12 bg-primary hover:text-primary text-white text-[18px] font-semibold hover:bg-gray-300'  />
    </form>
  )
}

export default UploadResults