



import React from 'react'
import ExmpCard from '../Exempo/ExmpCard'
import CardFour from '../lib/Card4'
import ExmpCard4 from './ExmpCard4'


const Card4 = () => {
    return (
        <div >
            <div className='  mt-[40px] md:mt-[100px] flex justify-center items-center  mx-auto w-full     '>
                <div className='   flex justify-center items-center '>
                    <div className=' grid xl:grid-cols-4 md:grid-cols-2 gap-5 md:gap-10   xl:gap-10 place-content-center transition-all duration-200 delay-200  '>
                        {
                            CardFour.map((data, idx) => <div key={idx} className=' '>
                                <ExmpCard4 title={data.Title} image={data.image} description={data.description} />

                            </div>)
                        }

                    </div>

                </div>



            </div>
        </div>
    )
}

export default Card4
