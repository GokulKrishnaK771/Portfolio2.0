import ghibliHappy from '../../assets/ghibli-happy.png'
import ghibliNeutral from '../../assets/ghibli-neutral.png'
import hoverme from '../../assets/hoverme.svg'
import code from '../../assets/code.svg'
import badminton from '../../assets/badminton.svg'
import coffee from '../../assets/coffee.svg'
import music from '../../assets/music.svg'

import { useState, useRef, useEffect } from 'react'
import gsap from 'gsap'

const GibliEmoji = () => {
    const [status, setStatus] = useState('idle');

    const ghibliRef = useRef(null);

    useEffect(() => {
        if (status !== 'idle') {
            gsap.fromTo(ghibliRef.current,
                { y: 50, opacity: 0, scale: 0.8 },
                { y: 0, opacity: 1, scale: 1, duration: 0.3, ease: "back.out(2)" }
            );
        }
    }, [status]);

    return (
        <div className='absolute bottom-0 left-1/2 -translate-x-1/2'>
            <img src={status === 'hover' ? ghibliNeutral : ghibliHappy} onMouseEnter={() => setStatus('hover')} onMouseLeave={() => setStatus('idle')} className='md:w-30 w-20 object-contain' />
            <img src={hoverme} alt="hoverme" className='hidden lg:block absolute top-0 left-1/2 translate-x-1/3 translate-y-10  xl:w-25 lg:w-20' />
            {status !== 'idle' && (
                <div ref={ghibliRef} className='relative group'>
                    <div className='absolute -top-14 left-1/2 -translate-x-1/2 flex flex-col items-center'>
                        <img src={code} alt="code" className='hidden lg:block top-0 -translate-x-35 -translate-y-30 w-12' />
                        <img src={badminton} alt="badminton" className='hidden lg:block top-0 -translate-x-15 -translate-y-55 w-12' />
                        <img src={coffee} alt="coffee" className='hidden lg:block top-0 translate-x-10 -translate-y-68 w-12' />
                        <img src={music} alt="code" className='hidden lg:block top-0 translate-x-35 -translate-y-65 w-12' />
                    </div>
                </div>
            )}
            <div className='absolute top-0 left-1/2  flex flex-col items-center'>
                <img src={code} alt="code" className='block lg:hidden top-0 -translate-x-15 -translate-y-20 w-8' />
                <img src={badminton} alt="badminton" className='block lg:hidden top-0 -translate-x-15 -translate-y-15 w-8' />
                <img src={coffee} alt="coffee" className='block lg:hidden top-0 translate-x-5 -translate-y-25 w-8' />
                <img src={music} alt="code" className='block lg:hidden top-0 translate-x-5 -translate-y-45 w-8' />
            </div>
        </div>
    )
}

export default GibliEmoji