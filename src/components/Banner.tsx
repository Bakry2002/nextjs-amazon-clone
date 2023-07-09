//? libraries imports
import { Carousel } from 'react-responsive-carousel';

//? Next components
import Image from 'next/image';

//? assets 
import sliderImg_1 from '../images/carousel/sliderImg_1.jpg'
import sliderImg_2 from '../images/carousel/sliderImg_2.jpg'
import sliderImg_3 from '../images/carousel/sliderImg_3.jpg'
import sliderImg_4 from '../images/carousel/sliderImg_4.jpg'

const Banner = () => {
    return (
        <div className='relative'>
            <Carousel 
                autoPlay 
                infiniteLoop 
                showStatus={false} 
                showIndicators={false} 
                showThumbs={false} 
                interval={3000}
            >
                <div>
                    <Image priority src={sliderImg_1} alt='slider image'/>
                </div>
                <div>
                    <Image src={sliderImg_2} alt='slider image'/>
                </div>
                <div>
                    <Image src={sliderImg_3} alt='slider image' />
                </div>
                <div>
                    <Image src={sliderImg_4} alt='slider image'/>
                </div>
            </Carousel>
            <div className='w-full h-40 bg-gradient-to-t from-gray-100 to-transparent absolute bottom-0 z-20'></div>
        </div>
    )
}

export default Banner