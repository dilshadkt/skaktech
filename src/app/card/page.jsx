import React from 'react'
import Image from 'next/image'

const cardData = [
    {
        id: 1,
        svg: 'website',
        heading: "Website",
        content: [
            "www.skaktech.com"
        ]
    },
    {
        id: 2,
        svg: "location",
        heading: "Location",
        content: [
            "Maps"
        ]
    },
    {
        id: 3,
        svg: "address",
        heading: "Address",
        content: [
            "59/7757, CHAMPION ARCADE,  ANNIE HALL CROSS ROAD, Kozhikode"
        ]
    },
    {
        id: 4,
        svg: "phone",
        heading: "Phone",
        content: [
            "+91 9778699292",
            "+91 8590604797"
        ]
    },
    {
        id: 5,
        svg: "mail",
        heading: "Mail",
        content: [
            "hr@skaktech.com",
            "anju@skaktech.com"
        ]
    },
]
const socials = [
    {
        id: 1,
        heading: "Youtube",
        logo: 'youtube'
    },
    {
        id: 2,
        heading: "LinkedIn",
        logo: 'linkedin'
    },
    {
        id: 3,
        heading: "Facebook",
        logo: 'facebook'
    },
    {
        id: 4,
        heading: "Instagram",
        logo: 'instagram'
    },

]

const CardPage = () => {
    return (
        <div className='min-h-screen w-full flex flex-col px-5 py-20 '>
            <div className='flex justify-between  items-center w-full py-3'>
                <div><Image src="/assets/images/card/Logo.svg" alt='logo' height={100} width={100} quality={100} className='h-10 w-full object-contain' /></div>
                <div className='bg-primary  p-2 rounded-lg '><Image src="/assets/images/card/share.svg" alt='share' height={100} width={100} quality={100} className='h-5 w-5 object-contain ' /></div>
            </div>
            <div className='
        flex flex-col gap-4'>
                {cardData.map((item) => (<div key={item.id} className='shadow-lg p-3 rounded-xl'>
                    <div className='flex gap-1 py-2 items-center text-[#00000099]'>
                        <div className=''>
                            <Image src={`/assets/images/card/${item.svg}.svg`} alt='logo' height={10} width={10} quality={100} className='h-5 w-5 object-contain' />
                        </div>
                        <h3 className=''>{item.heading}</h3>
                    </div>
                    <div className='flex justify-between items-end w-full'>
                        <div className='w-1/2'>
                            {item.content.map((el, index) => (<h1 key={index} className='font-medium'>{el}</h1>))}
                        </div>
                        <div className='bg-primary flex gap-2 items-center px-1 rounded-lg text-white' >
                            <button >Share</button>
                            <div className='' >
                                <Image src={'/assets/images/card/plane.svg'} alt='logo' height={10} width={10} quality={100} className='h-4 w-4 object-contain' />
                            </div>
                        </div>
                    </div>
                </div>))}
                <div className='p-3 rounded-xl shadow-lg'>
                    <div className='flex gap-1 py-2 items-center text-[#00000099]'>
                        <div className=''>
                            <Image src={`/assets/images/card/mail.svg`} alt='logo' height={10} width={10} quality={100} className='h-5 w-5 object-contain' />
                        </div>
                        <h3 className=''>Socials</h3>
                    </div>
                    <div className='flex flex-col gap-2'>
                        {socials.map((item) => (<div key={item.id} className='flex justify-between items-center' >
                            <div className='flex items-center gap-2'>
                                <h1 className='font-medium'>{item.heading}</h1>
                                <div>
                                    <Image src={`/assets/images/card/${item.logo}.svg`} alt='logo' height={10} width={10} quality={100} className='h-8 w-8 object-contain' />
                                </div>
                            </div>
                            <div className='bg-primary flex gap-2 items-center px-1 rounded-lg text-white ' >
                                <button >Share</button>
                                <div className='' >
                                    <Image src={'/assets/images/card/plane.svg'} alt='logo' height={10} width={10} quality={100} className='h-4 w-4 object-contain' />
                                </div>
                            </div>
                        </div>))}
                    </div>
                </div>
                <div  className='shadow-lg p-3 rounded-xl'>
                    <div className='flex gap-1 py-2 items-center text-[#00000099]'>
                        <div className=''>
                            <Image src='/assets/images/card/timing.svg' alt='logo' height={10} width={10} quality={100} className='h-5 w-5 object-contain' />
                        </div>
                        <h3 className=''>Working Hours</h3>
                    </div>
                    <div className='flex justify-between items-end w-full'>
                        <h1 className='font-medium'>Monday	9 AM–6 PM</h1>
                        <div className='bg-primary flex gap-2 items-center px-1 rounded-lg text-white' >
                            <button >Read More</button>
                            <div className='' >
                                <Image src={'/assets/images/card/more.svg'} alt='logo' height={10} width={10} quality={100} className='h-4 w-4 object-contain' />
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div  className='shadow-lg p-3 rounded-xl'>
                    <div className='flex gap-1 py-2 items-center text-[#00000099]'>
                        <div className=''>
                            <Image src='/assets/images/card/vaccancies.svg' alt='logo' height={10} width={10} quality={100} className='h-5 w-5 object-contain' />
                        </div>
                        <h3 className=''>Vaccancies</h3>
                    </div>
                    <div className='flex justify-between items-end w-full'>
                        <h1 className='font-medium text-lg'>Continue with Website</h1>
                        <div className='bg-primary  p-2 rounded-lg ' >
                            
                            <div className='' >
                                <Image src={'/assets/images/card/globe.svg'} alt='logo' height={10} width={10} quality={100} className='h-6 w-6 object-contain' />
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>

        </div>
    )
}

export default CardPage