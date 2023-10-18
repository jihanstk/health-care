'use client';

import { RiDoubleQuotesL } from 'react-icons/ri';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/bundle';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import { testimonialData } from '@/Data/testimonialData';


const Testimonial = () => {
    return (
        <div className='mt-20 p-20'>
            <div className='text-center'>

                <h3 className='text-2xl font-bold text-orange-500'>Feedback from our patients</h3>
                <h1 className='text-4xl font-bold my-4'>TESTIMONIALS</h1>
            </div>
            <Swiper
                slidesPerView={5}
                spaceBetween={20}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper "
            >
                <div>

                    {

                        testimonialData.map((testimonial) => <>
                            <SwiperSlide className='shadow-lg mt-7 '>
                                <div className='p-8'>
                                    <p className='text-justify'>{testimonial.comments}</p>
                                    <div className='flex space-x-8 mt-6'>
                                        <img src={testimonial.picture} alt="" className='h-16 w-16 rounded-full' />
                                        <div>
                                            <p className='font-bold text-orange-400'>{testimonial.name}</p>
                                            <p className='font-bold'>{testimonial.profession}</p>
                                        </div>
                                    </div>
                                    <RiDoubleQuotesL style={{}}></RiDoubleQuotesL>
                                </div>


                            </SwiperSlide>

                        </>


                        )
                    }
                </div>


            </Swiper>
        </div>
    );
};

export default Testimonial;