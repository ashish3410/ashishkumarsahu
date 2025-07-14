import React from 'react'
import { useNavigate } from 'react-router-dom'
function Giphy() {
    const navigate = useNavigate()
    return (
        <>
            <section style={{ backgroundImage: `url('https://i.ibb.co/MS8ZFKK/portfolio-Bg.png')` }} className=' flex flex-col justify-center text-center h-full pt-48 z-10'>
                <div>
                    <h1 className='text-5xl font-bold p-4'>GIPHY WEB APP</h1>
                </div>
                <div className='p-4'>
                    <p className='text-xl text-gray-600'>
                        This page contains the case study of Giphy Project which includes the  Project Overview, <br />Tools Used and Live Links to the official product.
                    </p>
                </div>
                <div className='mt-10'>
                    <a href='https://github.com/ashish3410/giphy'><button className='px-20 py-4 bg-violet-600 rounded-md text-white mt-10 mb-32 hover:bg-violet-700 hover:-translate-y-1 duration-500'>GITHUB LINK</button></a>
                </div>

            </section>

            <section className='mt-20 flex flex-col justify-center items-center'>
                <div className='lg:w-1/2'>
                    <div className='flex justify-center items-center'>
                        <img src="https://i.ibb.co/wZGRQ4ny/giphy.png" alt="giphy"/>
                    </div>

                    <div className='mt-20 lg:ml-20 ml-4 text-gray-600 '>
                        <h1 className='text-3xl font-bold text-black'>Project Overview</h1>
                        <p className='mt-6'>
                            Developed a responsive web application that allows users to search and view trending GIFs using the Giphy API. The app provides a seamless and interactive UI to explore a wide range of GIFs in real-time.
                        </p>
                        <h1 className='text-3xl font-bold mt-10 text-black'>Core Feature</h1>
                            <div className='mt-6'>
                            1.Real-time GIF search functionality using Giphy API. <br />
                            2.Display of trending and searched GIFs in a responsive grid layout. <br />
                            3.Smooth loading experience with optimized performance. <br />
                            4.Intuitive user interface with modern design principles. <br />
                            5.Error handling for empty or invalid searches.
                            </div>
                        <h1 className='text-3xl mt-10 font-bold text-black'>Technical Hightlight</h1>
                        <div className='mt-6 pr-2'>
                            <p>Integrated <span className='font-semibold'>Giphy REST API</span> for real-time content fetching.</p>
                            <p>Built with   <span className='font-semibold'>ReactJS</span> using  <span className='font-semibold'>Vite</span> for fast development and build performance.</p>
                            <p>Utilized <span className='font-semibold'>Tailwind CSS</span> for responsive and utility-first styling.</p>
                            <p>Employed  (useState, useEffect) <span className='font-semibold'>React hooks</span> for state management and side effects.</p>
                        </div>

                        <h1 className='text-3xl mt-10 font-bold text-black' >Learning Outcomes</h1>
                        <p className='mt-6 pr-4'>

                            1.Gained hands-on experience working with third-party APIs and handling asynchronous operations. <br />

                            2.Improved skills in React component architecture and state management. <br />

                            3.Enhanced understanding of modern frontend tools like Vite and Tailwind CSS. <br />

                            4.Learned how to structure clean, scalable, and maintainable codebases. <br />

                            5.Understood deployment best practices for frontend apps.
                        </p>
                    </div>
                    <div className='lg:ml-20 ml-4'>
                        <h1 className='text-3xl text-black font-bold mt-10 text-left'>Tool Used</h1>
                        <div className='mt-6 flex flex-wrap gap-6'>
                            <p className=' flex px-4 bg-gray-300 rounded-lg text-center justify-center items-center'>HTML</p>
                            <p className='px-4 py-2 bg-gray-300 rounded-lg text-center justify-center items-center'>Tailwind CSS</p>
                            <p className='px-4 py-2 bg-gray-300 rounded-lg text-center justify-center items-center'>JavaScript</p>
                            <p className='px-4 py-2 bg-gray-300 rounded-lg text-center justify-center items-center'>ReactJS</p>
                            <p className='px-4 py-2 bg-gray-300 rounded-lg text-center justify-center items-center'> Toolkit</p>
                            <p className='px-4 py-2 bg-gray-300 rounded-lg text-center justify-center items-center'>Giphy API</p>
                            <p className='px-4 py-2 bg-gray-300 rounded-lg text-center justify-center items-center'>Github</p>
                            <p className='px-4 py-2 bg-gray-300 rounded-lg text-center justify-center items-center'>Render</p>
                        </div>
                    </div>
                    <div className='lg:ml-20 ml-4'>
                        <h1 className='text-3xl text-black font-bold mt-10 text-left'>See Live</h1>
                        <a href='https://giphy-ruby.vercel.app/'><button className='px-10 py-4 bg-violet-600 rounded-md text-white mt-10 mb-32 hover:bg-violet-700 hover:-translate-y-1 duration-500'>SEE LIVE</button></a>
                        <button onClick={() => navigate('/projects')} className='border-violet-600 border border-b-4  px-10 py-3.5 ml-4 rounded-lg hover:-translate-y-1 duration-500'>GO BACK</button>
                    </div>
                </div>

            </section>

        </>
    )
}

export default Giphy
