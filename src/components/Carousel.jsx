
import ArrowRight from '../assets/chevron_carousel_right.png'
import ArrowLeft from '../assets/chevron_carousel_left.png'
import { useState } from 'react'

export default function Slider({imageSlider}) {

    const [currentIndex, setCurrentIndex] = useState(0)

    const nextSlide = () => {
        setCurrentIndex(currentIndex + 1)
        if(currentIndex === imageSlider.length - 1)
            setCurrentIndex(0)
    }

    const prevSlide = () => {
        setCurrentIndex(currentIndex - 1)
        if(currentIndex === 0)
            setCurrentIndex(imageSlider.length - 1)
    }

    return (
        <section style={{backgroundImage : `url(${imageSlider[currentIndex]})`}} className='relative bg-cover bg-center h-64 md:h-[415px] flex items-center justify-center rounded-3xl'>
            {imageSlider.length > 1 && 
                <>
                    <img 
                        className='max-md:h-1/6 absolute right-4 cursor-pointer' 
                        src={ArrowRight} 
                        alt="show next slider" 
                        onClick={nextSlide}
                    />
                    <img 
                        className='max-md:h-1/6 absolute left-4 cursor-pointer' 
                        src={ArrowLeft} 
                        alt="show previous slider" 
                        onClick={prevSlide}
                    />
                    {document.body.clientWidth > 768 && <p className='bg-red-400 py-1 px-3 rounded-2xl absolute bottom-2'>{currentIndex + 1} / {imageSlider.length}</p>}
                    
                </>
            } 
        </section>
    )
}
