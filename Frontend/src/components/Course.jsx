import React from 'react'
import Cards from './Cards'
import list from '../../public/list.json'
import { Link } from 'react-router-dom'
function Course() {
  return (<>
    <div className='max-w-screen-2x1 container mx-auto md:px-20 px-2'>
      <div className='mt-28 items-center justify-center text-center'>
        <h1 className='text-2xl  me:text-4xl'>
          We're delighted to have you <span className='text-pink-500'>here!:)</span>
        </h1>
        <p className='mt-12'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora nihil error similique aut, dignissimos quod provident rem ipsum enim ullam corporis et blanditiis nulla deserunt velit qui optio molestias animi quae. Quisquam, quod quae. Quisquam, quod quae Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione hic porro illum tempore ipsa dolore in, sapiente repellendus dicta aut. Quia architecto impedit maiores debitis aperiam sapiente iure repellendus consectetur?
        </p>
        <Link to="/">
          <button className=' mt-6 bg-pink-500 text-white px-4 py2 rounded-md hover:bg-pink-700 duration-300'>Back</button>
        </Link>
      </div>
      <div className='mt-12 grid group-cols-1 md:grid-cols-4'>
        {
          list.map((item) => (
            <Cards key={item.id} item={item} />
          ))
        }
      </div>
    </div>
  </>
    
  )
}

export default Course