import React, { useState } from 'react'
import Logo from '../assets/images/agencify-logo.png'
import Arrow from '../assets/images/arrow.svg'
import Magento from '../assets/images/magento.png'
import WordPress from '../assets/images/wordPress.png'
import Laravel from '../assets/images/laravel.png'
import WooCommerce from '../assets/images/woocommerce.png'
import Optimisation from '../assets/images/approuve.png'
import DesignGraphique from '../assets/images/couches.png'
import DevelopmentWeb from '../assets/images/360.png'
import Suivi from '../assets/images/compte.png'
import '../assets/css/index.css'
import { RiArrowDownSLine, RiCloseCircleFill, RiMenuLine, RiVerifiedBadgeFill } from '@remixicon/react'
import { useMediaQuery } from 'react-responsive'

const Header = () => {

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)',
    });

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className='bg-white shadow-lg shadow-slate-400'>
            {isDesktopOrLaptop &&
                <div className="header">
                    <div className="nav containerd">
                        <div className="nav-logo">
                            <img src={Logo} alt="logo" />
                        </div>
                        <div className="nav-menu" id="nav-menu">
                            <ul className='nav-list'>
                                <li className='nav-item'>
                                    <a href="#1" className='nav-link active-link'>Accueil</a>
                                </li>
                                <li className='nav-item'>
                                    <div className="dropdown dropdown-start">
                                        <div tabIndex={0} role="button" className="nav-link">Notre expertise<RiArrowDownSLine size={28} color='#000' className='inline-block' /></div>
                                        <ul
                                            tabIndex={0}
                                            className="menu dropdown-content bg-base-100 rounded-box z-[1] mt-4 w-[25rem] p-8 shadow">
                                            <li className="mb-3"><a href="#1" className='nav-link'>
                                                <div className='flex items-center p-2'>
                                                    <img src={Magento} className='w-10' alt="magento-logo" />
                                                    <div className='px-3'>
                                                        Magento
                                                        <p className="text-[#868686] mt-1">Le cms inconturnable</p>
                                                    </div>
                                                </div>
                                            </a></li>
                                            <li className="mb-3"><a href="#1" className='nav-link'>
                                                <div className='flex items-center p-2'>
                                                    <img src={WordPress} className='w-10' alt="wordpress-logo" />
                                                    <div className='px-3'>
                                                        Wordpress
                                                        <p className="text-[#868686] mt-1">Le cms inconturnable</p>
                                                    </div>
                                                </div>
                                            </a></li>
                                            <li className="mb-3"><a href="#1" className='nav-link'>
                                                <div className='flex items-center p-2'>
                                                    <img src={Laravel} className='w-10' alt="laravel-logo" />
                                                    <div className='px-3'>
                                                        Laravel
                                                        <p className="text-[#868686] mt-1">Le cms inconturnable</p>
                                                    </div>
                                                </div>
                                            </a></li>
                                            <li><a href="#1" className='nav-link'>
                                                <div className='flex items-center p-2'>
                                                    <img src={WooCommerce} className='w-10' alt="woocommerce-logo" />
                                                    <div className='px-3'>
                                                        WooCommerce
                                                        <p className="text-[#868686] mt-1">Le cms inconturnable</p>
                                                    </div>
                                                </div>
                                            </a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className='nav-item'>
                                    <div className="dropdown dropdown-start">
                                        <div tabIndex={0} role="button" className="nav-link">Nos Services<RiArrowDownSLine size={28} color='#000' className='inline-block' /></div>
                                        <ul
                                            tabIndex={0}
                                            className="menu dropdown-content bg-base-100 rounded-box z-[1] mt-4 w-[27rem] p-8 shadow">
                                            <li className="mb-3"><a href="#1" className='nav-link'>
                                                <div className='flex items-center p-2'>
                                                    <img src={Optimisation} className='w-10' alt="optimisation-logo" />
                                                    <div className='px-3'>
                                                        <span className='relative'>Optimisation</span>
                                                        <div className='absolute right-0 btn bg-[#0AC45F] bg-opacity-15 rounded-full btn-xs '>
                                                            <RiVerifiedBadgeFill color='#0AC45F' className='w-4' /><span className='text-[12px] text-[#0AC45F]'>La plus populaire</span>
                                                        </div>
                                                        <p className='text-[#868686] mt-1'>Web</p>
                                                    </div>
                                                </div>
                                            </a></li>
                                            <li className="mb-3"><a href="#1" className='nav-link'>
                                                <div className='flex items-center p-2'>
                                                    <img src={DesignGraphique} className='w-10' alt="design-logo" />
                                                    <div className='px-3'>
                                                        Design graphique
                                                        <p className="text-[#868686] mt-1">Web & print</p>
                                                    </div>
                                                </div>
                                            </a></li>
                                            <li className="mb-3"><a href="#1" className='nav-link'>
                                                <div className='flex items-center p-2'>
                                                    <img src={DevelopmentWeb} className='w-10' alt="dev-logo" />
                                                    <div className='px-3'>
                                                        Development Web
                                                        <p className="text-[#868686] mt-1">Desktop & Mobile</p>
                                                    </div>
                                                </div>
                                            </a></li>
                                            <li><a href="#1" className='nav-link'>
                                                <div className='flex items-center p-2'>
                                                    <img src={Suivi} className='w-10' alt="magento-logo" />
                                                    <div className='px-3'>
                                                        Suivi & support
                                                        <p className="text-[#868686] mt-1">Dans votre projet</p>
                                                    </div>
                                                </div>
                                            </a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className='nav-item'>
                                    <a href="#4" className='nav-link'>A propos</a>
                                </li>
                                <li className='nav-item'>
                                    <a href="#5" className='nav-link'>Contact</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <button className='btn rounded-full bg-[#E75A7C] text-white px-9'><img src={Arrow} alt="" />Demander un devis</button>
                        </div>

                    </div>
                </div>
            }

            {/* mobile view */}
            <div className="sm:max-w-7xl md:max-w-[140rem] lg:max-w-[24rem] xl:max-w-[30rem] px-4 sm:px-6 md:px-7 lg:px-8">
                <div className='flex justify-between h-16 sm:h-20'>
                    <div className='flex items-center'>
                        <div className='flex-shrink-0'>
                            <img src={Logo} alt="" className='w-1/2 min-[406px]:w-[80%]' />
                        </div>
                        <div className="hidden md:block md:items-center">
                            <div className="ml-10 flex items-baseline space-x-4 ">

                                <a href="#1" className="text-gray-700 hover:text-blue-500">Accueil</a>
                                <a href="#1" className="text-gray-700 hover:text-blue-500">Nos expertise</a>
                                <a href="#1" className="text-gray-700 hover:text-blue-500">Nos services</a>
                                <a href="#1" className="text-gray-700 hover:text-blue-500">A propos</a>
                                <a href="#1" className="text-gray-700 hover:text-blue-500">Contact</a>

                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col justify-center '>
                        <button className='btn bg-[#E75A7C] rounded-full md:text-xs justify-end max-[768px]:hidden'><img src={Arrow} alt="" className='sm:w-6' />Demander un devis</button>
                    </div>
                    <div className="p-4 flex md:hidden">
                        <button onClick={toggleMenu} type="button" className=" bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E75A7C]">
                            {isOpen ? (<RiCloseCircleFill widths={12} color='#E75A7C' />) : (<RiMenuLine widths={12} color='#E75A7C' />)}
                            <span className={isOpen ? "hidden" : "block"}></span>
                            <span className={isOpen ? "block" : "hidden"}></span>
                            <span className={isOpen ? "hidden" : "block"}></span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu, toggle class based on menu state */}
            <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
                <div className="px-2 pt-2 sm:px-3 ">
                    <a href="#1" className="block px-3 rounded-md text-[17px] active-link text-gray-700 hover:text-[#E75A7C] font-semibold ">Accueil</a>
                    <hr className="my-4 border-gray-300 mx-3 dark:border-gray-700" />
                </div>
                <div className="px-2 sm:px-3">
                    <div className="dropdown dropdown-start">
                        <div tabIndex={0} role="button" className="nav-link">
                            <div className='flex flex-1 items-end justify-start gap-4 w-[20rem]'>
                                <span className='text-base ml-4'>Notre expertise</span>
                                <RiArrowDownSLine size={23} color='#000' className='block mr-3 right-0' />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu dropdown-content bg-base-100 rounded-box z-[1]  w-[20rem] shadow">
                            <li className="mb-3"><a href="#1" className='nav-link'>
                                <div className='flex items-center p-2'>
                                    <img src={Magento} width={38} height={38} alt="magento-logo" />
                                    <div className='px-3'>
                                        <span className='text-base'>Magento</span>
                                        <p className="text-[#868686]">Le cms inconturnable</p>
                                    </div>
                                </div>
                            </a></li>
                            <li className="mb-3"><a href="#1" className='nav-link'>
                                <div className='flex items-center p-2'>
                                    <img src={WordPress} width={38} height={38} alt="wordpress-logo" />
                                    <div className='px-3'>
                                        <span className='text-base'>Wordpress</span>
                                        <p className="text-[#868686]">Le cms inconturnable</p>
                                    </div>
                                </div>
                            </a></li>
                            <li className="mb-3"><a href="#1" className='nav-link'>
                                <div className='flex items-center p-2'>
                                    <img src={Laravel} width={38} height={38} alt="laravel-logo" />
                                    <div className='px-3'>
                                        <span className='text-base'>Laravel</span>
                                        <p className="text-[#868686]">Le cms inconturnable</p>
                                    </div>
                                </div>
                            </a></li>
                            <li className="mb-3"><a href="#1" className='nav-link'>
                                <div className='flex items-center p-2'>
                                    <img src={WooCommerce} width={38} height={38} alt="woocommerce-logo" />
                                    <div className='px-3'>
                                        <span className='text-base'>WooCommerce</span>
                                        <p className="text-[#868686]">Le cms inconturnable</p>
                                    </div>
                                </div>
                            </a></li>
                        </ul>
                    </div>
                    <hr className="my-4 border-gray-300 mx-3 dark:border-gray-700" />
                </div>

                <div className="px-2 sm:px-3 ">
                    <div className="dropdown dropdown-start">
                        <div tabIndex={0} role="button" className="nav-link">
                            <div className='flex flex-1 items-end justify-start gap-4 w-[20rem]'>
                                <span className='text-base ml-4'>Nos services</span>
                                <RiArrowDownSLine size={23} color='#000' className='block mr-3 right-0' />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu dropdown-content bg-base-100 rounded-box z-[1]  w-[21rem] shadow">
                            <li className="mb-3"><a href="#1" className='nav-link'>
                                <div className='flex items-center p-2'>
                                    <img src={Optimisation} width={38} height={38} alt="optimisation-logo" />
                                    <div className='px-3'>
                                        <span className='relative text-base'>Optimisation</span>
                                        <div className='absolute right-0 btn bg-[#0AC45F] bg-opacity-15 rounded-full btn-xs '>
                                            <RiVerifiedBadgeFill color='#0AC45F' className='w-4' /><span className='text-[8px] text-[#0AC45F]'>La plus populaire</span>
                                        </div>
                                        <p className='text-[#868686] mt-1'>Web</p>
                                    </div>
                                </div>
                            </a></li>
                            <li className="mb-3"><a href="#1" className='nav-link'>
                                <div className='flex items-center p-2'>
                                    <img src={DesignGraphique} width={38} height={38} alt="design-logo" />
                                    <div className='px-3'>
                                        <span className='text-base'>Design graphique</span>
                                        <p className="text-[#868686] mt-1">Web & print</p>
                                    </div>
                                </div>
                            </a></li>
                            <li className="mb-3"><a href="#1" className='nav-link'>
                                <div className='flex items-center p-2'>
                                    <img src={DevelopmentWeb} width={38} height={38} alt="dev-logo" />
                                    <div className='px-3'>
                                        <span className='text-base'>Development Web</span>
                                        <p className="text-[#868686] mt-1">Desktop & Mobile</p>
                                    </div>
                                </div>
                            </a></li>
                            <li><a href="#1" className='nav-link'>
                                <div className='flex items-center p-2'>
                                    <img src={Suivi} width={38} height={38} alt="magento-logo" className='' />
                                    <div className='px-3'>
                                        <span className='text-base'>Suivi & support</span>
                                        <p className="text-[#868686] mt-1">Dans votre projet</p>
                                    </div>
                                </div>
                            </a></li>
                        </ul>
                    </div>
                    <hr className="my-4 border-gray-300 mx-3 dark:border-gray-700" />
                </div>

                <div className='px-2 pb-4 sm:px-3'>
                    <div className="nav-link">
                        <div className='flex flex-1 items-end justify-start gap-4 w-[20rem]'>
                            <span className='text-base ml-4'>A propos</span>
                        </div>
                    </div>
                    <hr className="my-4 border-gray-300 mx-3 dark:border-gray-700" />
                    <div className="nav-link">
                        <div className='flex flex-1 items-end justify-start gap-4 w-[20rem]'>
                            <span className='text-base ml-4'>Contact</span>
                        </div>
                    </div>
                    <hr className="my-4 border-gray-300 mx-3 dark:border-gray-700" />
                    <div className='text-center pt-4'>
                        <button className='btn rounded-full bg-[#E75A7C] text-white px-9'>Demander un devis</button>
                    </div>
                </div>
            </div>

        </nav>

    )
}

export default Header