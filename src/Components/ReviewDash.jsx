import React from 'react'


const ReviewDash = () => {
  return (
    <>
      <section className='mx-10 mb-20'>
        <div>
          <p className=' font-bold text-2xl mt-4'>Your reviews <small className='ml-2 text-sm'>last <span className=' underline'>30days</span></small></p>
          <p className=' space-x-2 mt-8'><span className='font-bold text-2xl items-center'>5.0</span><span>⭐</span> <span className=' font-medium'>Overall rating</span></p>
        </div>
        <div className='flex items-center justify-between pt-10'>
          <div><p>5 stars</p></div>
          <div className='border w-52 h-3 bg-orange-600 rounded-lg'></div>
          <p>100%</p>
        </div>
        <div className='flex items-center justify-between pt-6'>
          <div><p>4 stars</p></div>
          <div className='border w-52 h-3 bg-[#B9B9B9] rounded-lg'></div>
          <p>100%</p>
        </div>
        <div className='flex items-center justify-between pt-6'>
          <div><p>3 stars</p></div>
          <div className='border w-52 h-3 bg-[#B9B9B9] rounded-lg'></div>
          <p>100%</p>
        </div>
        <div className='flex items-center justify-between pt-6'>
          <div><p>2 stars</p></div>
          <div className='border w-52 h-3 bg-[#B9B9B9] rounded-lg'></div>
          <p>100%</p>
        </div>
        <div className='flex items-center justify-between pt-6'>
          <div><p>1 stars</p></div>
          <div className='border w-52 h-3 bg-[#B9B9B9] rounded-lg'></div>
          <p>100%</p>
        </div>
        <p className=' font-extrabold mt-10 text-1xl'>Reviews (2)</p>
        <div>
          <div className='mt-8'>
            ⭐⭐⭐⭐⭐
            <p className=' mt-8'>Elliot December 1, 2022</p>
            <p className='mt-8 font-semibold text-base'>The beach bum is such as awesome van! Such as comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!</p>
          </div>
          <hr className=' font-extrabold bg-[#B9B9B9] mt-8' />
          <p className='mt-6'>⭐⭐⭐⭐⭐</p>
          <p className=' mt-8'><span className=' font-bold'>Sandy</span> November 23, 2022</p>
          <p className=' font-bold'>This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!</p>

          <hr className=' font-[200px] bg-[#908a8a] mt-8 mb-10' />
        </div>
      </section>
    </>
  )
}

export default ReviewDash