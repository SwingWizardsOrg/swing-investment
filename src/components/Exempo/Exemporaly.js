





import React from 'react'
import HeadTitle from './HeadTitle'
import ExmpCard from './ExmpCard'
import { ExmpCardData } from '../lib/ExempCardData'

const Exemporaly = () => {
  return (
    <div className=' w-full h-[100vh]  overflow-x-scroll mt-20'>
      <div className=' h-full flex flex-col'>
        <div className=' w-full   items-center z-40   ' >
          <HeadTitle title=" Exemporary" />
        </div>
        <div className='  mt-[40px] md:mt-[100px] flex justify-center items-center  mx-auto w-full     '>
          <div className='   flex justify-center items-center '>
            <div className=' grid md:grid-cols-3 gap-5 md:gap-20  xl:gap-14 place-content-center transition-all duration-200 delay-200  '>
              {
                ExmpCardData.map((data, idx) => <div key={idx} className=' '>
                  <ExmpCard title={data.Title} image={data.image} description={data.Description} />

                </div>)
              }

            </div>

          </div>



        </div>
      </div>




    </div>
  )
}

export default Exemporaly
