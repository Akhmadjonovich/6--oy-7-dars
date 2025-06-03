import React from 'react'
import heroImg from '../assets/heroImg.png'
import blog1 from '../assets/blog-1.png'
import blog2 from '../assets/blog-2.png'
import blog3 from '../assets/blog-3.png'
import blog4 from '../assets/blog-4.png'
import blog5 from '../assets/blog-5.png'
import blog6 from '../assets/blog-6.png'
import Blogs from '../components/Blogs'


let cardsInfo = [
  {
    id:1,
    img: blog1,
    title: "one"
  },
  {
    id:2,
    img: blog2,
    title: "one"
  },
  {
    id:3,
    img: blog3,
    title: "one"
  },
  {
    id:4,
    img: blog4,
    title: "one"
  },
  {
    id:5,
    img: blog5,
    title: "one"
  },
  {
    id:6,
    img: blog6,
    title: "one"
  },
]
const Home = () => {
  return (
    <div>
      <div className='text-white h-[86.5vh] max-lg:h-[60vh] max-md:h-[52vh]' style={{backgroundImage: `url(${heroImg})` , backgroundSize: 'cover',
          backgroundPosition: 'center'}}>
        <div className='pt-[360px] container max-md:pt-[100px] max-lg:pt-[200px]'>
          <p className='opacity-70 max-sm:text-sm'>JUNE 03, 2025 (Created by Axrorbek)</p>
          <h1 className='text-5xl font-bold py-5 max-md:text-4xl max-sm:text-3xl'>My new journey as a bootcamp student.</h1>
          <p className='opacity-80 max-sm:text-sm max-w-170'>After several months of learning in the Frontend Developer Career Path, I've made the big jump over to the Bootcamp to get expert code reviews of my Solo Projects projects and meet like-minded peers.</p>
        </div>
      </div>
      <Blogs cardsInfo={cardsInfo}/>
      <p className='text-center py-10'><a href="#" className=' underline text-black font-bold mx-auto inline-block'>View more</a></p>
    </div>
  )
}

export default Home