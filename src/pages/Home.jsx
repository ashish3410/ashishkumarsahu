import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'
function Home() {
    const navigate = useNavigate()

    const gotoAboutme = () => {
        navigate('/about')
    }
    return (
        <>
            <section style={{ backgroundImage: `url('https://i.ibb.co/MS8ZFKK/portfolio-Bg.png')` }} className='flex-col justify-center text-center h-full pt-48 z-10'>
                <div>
                    <TypeAnimation
                    className='text-4xl font-bold'
                        sequence={[
                            "HEY,I'M ASHISH KUMAR SAHU", 500,
                            "I'M A SOFTWARE DEVELOPER", 500,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                        cursor={true}
                    />
                </div>
                <div className='p-4'>
                    <p className='text-xl'>
                        A Passionate Web Developer building and managing Website and Web
                        <br />Applications, thats leads to the success of the overall products.
                    </p>
                </div>
                <div>
                    <Button handleClick={gotoAboutme} label="ABOUT ME" />
                </div>
            </section>

        </>
    )
}

export default Home
