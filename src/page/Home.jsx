import React from 'react'
import Man from '../assets/images/person-1.png'
import Testi from '../assets/images/ThibaultErnout.png'
import { useMediaQuery } from 'react-responsive';

const Home = () => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)',
    });

    const loopStars = []
    for (let i = 0; i < 4; i++) {
        loopStars.push(<svg key={i} xmlns='http://www.w3.org/2000/svg' viewBox="0 0 24 24" width="24" height="24" fill="rgba(231,90,124,1)"> <path d="M11.9998 17L6.12197 20.5902L7.72007 13.8906L2.48926 9.40983L9.35479 8.85942L11.9998 2.5L14.6449 8.85942L21.5104 9.40983L16.2796 13.8906L17.8777 20.5902L11.9998 17Z"></path></svg>)
    }

    return (
        <div>
            {isDesktopOrLaptop &&
                <div className='flex min-h-screen relative' id='hero'>
                    <div className='hero-content flex ml-[7rem] mr-[50rem]'>
                        <div className="absolute right-0 top-[8rem] max-w-screen-md">
                            <div className='absolute right-[8rem] bottom-0 bg-gradient-to-t from-white to-transparent min-w-[34rem] min-h-[12rem]'></div>
                            <img src={Man} alt="apalah" />
                        </div>

                        <button className='absolute right-12 top-[25rem] bg-white shadow-lg shadow-slate-400 cursor-default rounded-xl p-6'>
                            <div className='max-w-[13rem]'>
                                <p className='text-left font-normal text-[12px]'>"Une expérience parfaite pour obtenir mon site internet! Le processus a été rapide et efficace.”</p>
                                <div className='flex py-3'>
                                    {loopStars}
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(231,90,124,1)"><path d="M11.9998 14.6564L14.8165 16.3769L14.0507 13.1664L16.5574 11.0192L13.2673 10.7554L11.9998 7.70792V14.6564ZM11.9998 17L6.12197 20.5902L7.72007 13.8906L2.48926 9.40983L9.35479 8.85942L11.9998 2.5L14.6449 8.85942L21.5104 9.40983L16.2796 13.8906L17.8777 20.5902L11.9998 17Z"></path></svg>
                                </div>

                                <div className='flex items-center p-2'>
                                    <img src={Testi} width={52} height={52} alt="Thibault Ernout" />
                                    <div className='px-3 items-start'>
                                        <div className='flex flex-col text-left'>
                                            <p className='font-medium text-[14px]'>Thibault Ernout</p>
                                            <p className='font-medium text-[10px] text-[#4B4B4B]'>Client du 9 Juin 2024</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </button>

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="rgba(255,255,255,1)"><path d="M12.8659 3.00017L22.3922 19.5002C22.6684 19.9785 22.5045 20.5901 22.0262 20.8662C21.8742 20.954 21.7017 21.0002 21.5262 21.0002H2.47363C1.92135 21.0002 1.47363 20.5525 1.47363 20.0002C1.47363 19.8246 1.51984 19.6522 1.60761 19.5002L11.1339 3.00017C11.41 2.52187 12.0216 2.358 12.4999 2.63414C12.6519 2.72191 12.7782 2.84815 12.8659 3.00017Z"></path></svg>
                        <div className='grid grid-cols-1 gap-4'>
                            <p className='font-medium text-[30px] text-[#E75A7C]'>Transformez votre vision en réalité numérique !</p>
                            <h1 className="text-[80px] font-semibold leading-tight">L’agence digital dédié
                                aux entreprises </h1>
                            <p className="py-6 text-[22px] font-medium col-start-1">
                                AGENCIFY est une agence française spécialisée dans le Développement Web, qui identifie vos besoins pour vous accompagner dans la création de votre site sur-mesure et dans vos projets digitaux.
                            </p>
                            <div className='flex flex-row gap-8 col-start-1 font-bold mt-16'>
                                <button className='bg-[#E75A7C] py-4 px-16 rounded-full hover:bg-black hover:text-[#E75A7C] text-white text-[20px]'>Recevoir nos offres</button>
                                <button className='outline outline-[#E75A7C] hover:bg-[#E75A7C] hover:text-black text-[#E75A7C] py-4 px-16 rounded-full  text-[20px]'>Prendre un rendez-vous</button>
                            </div>
                        </div>
                    </div>
                </div>
            }

            {/* mobile view */}

            {!isDesktopOrLaptop && <div className='flex max-h-screen relative bg-white'>
                <div className="hero-content flex flex-col">
                    <p className='text-center text-xs min-[406px]:text-base sm:font-medium md:font-medium lg:font-semibold md:text-lg lg:text-xl text-[#E75A7C]'>Transformez votre vision en réalité numérique !</p>
                    <h1 className='font-semibold text-[20px] min-[406px]:text-[23px] text-center leading-tight'>L’agence digital dédié aux entreprises </h1>
                    <div className='absolute top-0 translate-y-[9rem]'>
                        <div className='absolute bottom-0 right-[5rem] bg-gradient-to-t from-white to-transparent min-w-[20rem] min-h-[5rem] '></div>
                        <img src={Man} alt="" />
                        <div className='relative'>
                            <button className='absolute left-1/2 -translate-x-1/2 translate-y-16 bg-[#E75A7C] py-4 px-10 min-w-[15rem] rounded-full hover:bg-black hover:text-[#E75A7C] text-white text-[15px] font-semibold'>Recevoir nos offres</button>
                            <button className='absolute left-1/2 -translate-x-1/2 translate-y-[8rem] outline outline-[#E75A7C] min-w-[15rem] rounded-full hover:bg-[#E75A7C] hover:text-black text-[#E75A7C] py-4 px-5 text-[15px] font-semibold'>Prendre un rendez-vous</button>
                        </div>
                        <div className="relative">
                            <div className="absolute w-1 min-h-[40rem]"></div>
                        </div>
                    </div>
                </div>
            </div>
            }
        </div>
        // bg-gradient-to-t from-white to-transparent
    )
}

export default Home