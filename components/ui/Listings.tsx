import React from 'react'

type Props = {
    Icon: any;
    title: string;
    description: string;
}

function Listings({Icon, title, description}:Props) {
  return (
        <div className='flex items-center'>
            <div>{<Icon/>}</div>
            <div><h2 className='block'>{title}</h2> <p>{description}</p></div>
        </div>
    )
}

export default Listings