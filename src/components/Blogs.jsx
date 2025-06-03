import React from 'react'

const Blogs = (props) => {
  return (
    <div className='container text-black mt-10  grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1  max-md:gap-5 mx-auto space-y-10'>
        {
            props.cardsInfo.map((c) => (
            <div key={c.id} className='mx-auto max-sm:w-full'>
                <img className='max-sm:w-full' src={c.img} alt="" />
                <div>
                    <p className='opacity-80 pt-2'>JULY 23, 2022</p>
                    <h3 className='py-4 font-bold text-2xl'>Blog {c.title}</h3>
                    <p className='text-[16px] opacity-75 max-w-78 max-sm:max-w-full'>I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.</p>
                </div>
            </div>
            ))
        }
    </div>
  )
}

export default Blogs