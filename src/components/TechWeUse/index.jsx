import React from 'react'
import Image from 'next/image'

const TechWeUser = () => {
    
        const icons = [
            { id: 1, icon: "android.png" },
            { id: 2, icon: "api.png" },
            { id: 3, icon: "aws.png" },
            { id: 4, icon: "css.png" },
            { id: 5, icon: "dotnet.png" },
            { id: 6, icon: "oracle.png" },
        ]
  return (
    <div className='p-10'>
        <h1 className='text-center text-[#268BBF] text-4xl font-semibold'>Technologies We Use</h1>
        <div className='grid grid-cols-6 py-20 '>
            {icons.map((item)=>(<div key={item.id}  className='flex justify-center'>
                <Image src={`/assets/icons/technologies/${item.icon}`} alt='logo' width={40} height={40} quality={100} className='h-10 w-10 object-contain text-[#268BBF] fill-current'/>
            </div>))}
        </div>
    </div>
  )
}

export default TechWeUser