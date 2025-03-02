import React from 'react'

const TwoLine = ({position}) => {
  return (
    <div>
        {position == "right"?
            <div className='w-screen flex flex-col justify-end items-end gap-5'>
                <div className='lg:h-2  lg:w-80 h-2 sm:w-40 w-20 bg-[#720A08]'></div>
                <div className='lg:h-2  lg:w-80 h-2 sm:w-40 w-20 bg-white mr-20'></div>
            </div>  :<> <div className='  flex flex-col justify-start items-start gap-5'>
                <div className='lg:h-2  lg:w-80 h-2 sm:w-40 w-20 bg-[#720A08] ml-20'></div>
                <div className='lg:h-2  lg:w-80 h-2 sm:w-40 w-20 bg-white '></div>
            </div></>  
    }
    </div>
  )
}

export default TwoLine