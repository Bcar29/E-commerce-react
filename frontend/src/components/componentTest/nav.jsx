
<header className="navbar navbar-expand-sm navbar-dark tw-bg-slate-900" style={{ position: "sticky", top: "0", zIndex: "1000" }}>
<div className="container-fluid " style={{ alignItems: "center" }}>
    <a href="" className="navbar-brand ">
        <span>Alfa</span>
    </a>
    
    <button className="navbar-toggler" data-toggle="collapse" data-target="#navbar-content">
        <span className="navbar-toggler-icon" ></span>
    </button>
    {/* debut navbar collapse */}
    

    {/* fin navbar collapse */}

    <nav className="tw-bg-gray-800">
            <div className="tw-mx-auto tw-max-w-7xl tw-px-2 sm:tw-px-6 lg:tw-px-8">
                <div className="tw-relative tw-flex tw-h-16 tw-items-center tw-justify-between">
                    {/* Bouton pour ouvrir/fermer le menu en mode mobile */}
                    <div className="tw-absolute tw-inset-y-0 tw-left-0 tw-flex tw-items-center sm:tw-hidden">
                        <button
                            type="button"
                            onClick={() => setIsOpen(!isOpen)}
                            className="tw-relative tw-inline-flex tw-items-center tw-justify-center tw-rounded-md tw-p-2 tw-text-gray-400 hover:tw-bg-gray-700 hover:tw-text-white focus:tw-ring-2 focus:tw-ring-white focus:tw-outline-hidden focus:tw-ring-inset"
                        >
                            <span className="tw-absolute -tw-inset-0.5"></span>
                            <span className="tw-sr-only">Open main menu</span>
                            <svg
                                className="tw-block tw-size-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Logo et navigation */}
                    <div className="tw-flex tw-flex-1 tw-items-center tw-justify-center sm:tw-items-stretch sm:tw-justify-start">
                        <div className="tw-flex tw-shrink-0 tw-items-center">
                            <img
                                className="tw-h-8 tw-w-auto"
                                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                                alt="Your Company"
                            />
                        </div>
                    </div>

                    {/* Menu desktop */}
                    <div className="tw-hidden sm:tw-ml-6 sm:tw-block">
                        <div className="tw-flex tw-space-x-4">
                            <a
                                href="#"
                                className="tw-rounded-md tw-bg-gray-900 tw-px-3 tw-py-2 tw-text-sm tw-font-medium tw-text-white"
                            >
                                Dashboard
                            </a>
                            <a
                                href="#"
                                className="tw-rounded-md tw-px-3 tw-py-2 tw-text-sm tw-font-medium tw-text-gray-300 hover:tw-bg-gray-700 hover:tw-text-white"
                            >
                                Team
                            </a>
                            <a
                                href="#"
                                className="tw-rounded-md tw-px-3 tw-py-2 tw-text-sm tw-font-medium tw-text-gray-300 hover:tw-bg-gray-700 hover:tw-text-white"
                            >
                                Projects
                            </a>
                            <a
                                href="#"
                                className="tw-rounded-md tw-px-3 tw-py-2 tw-text-sm tw-font-medium tw-text-gray-300 hover:tw-bg-gray-700 hover:tw-text-white"
                            >
                                Calendar
                            </a>
                        </div>
                    </div>
                </div>

                {/* Menu mobile */}
                {isOpen && (
                    <div className="tw-sm:hidden">
                        <div className="tw-space-y-1 tw-px-2 tw-pt-2 tw-pb-3">
                            <a
                                href="#"
                                className="tw-block tw-rounded-md tw-bg-gray-900 tw-px-3 tw-py-2 tw-text-base tw-font-medium tw-text-white"
                            >
                                Dashboard
                            </a>
                            <a
                                href="#"
                                className="tw-block tw-rounded-md tw-px-3 tw-py-2 tw-text-base tw-font-medium tw-text-gray-300 hover:tw-bg-gray-700 hover:tw-text-white"
                            >
                                Team
                            </a>
                            <a
                                href="#"
                                className="tw-block tw-rounded-md tw-px-3 tw-py-2 tw-text-base tw-font-medium tw-text-gray-300 hover:tw-bg-gray-700 hover:tw-text-white"
                            >
                                Projects
                            </a>
                            <a
                                href="#"
                                className="tw-block tw-rounded-md tw-px-3 tw-py-2 tw-text-base tw-font-medium tw-text-gray-300 hover:tw-bg-gray-700 hover:tw-text-white"
                            >
                                Calendar
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>












    {/* <div className="collapse navbar-collapse " id="navbar-content">
        <ul className="navbar-nav" style={{ position: "relative", top: "1px", }}>
            <li className="nav-item"><Link to="/" className="nav-link text-white fs-5 ">Accueil</Link></li>
            <li className="nav-item"><Link href="" className="nav-link text-white fs-5" onMouseOver={() => setCat(true)} onMouseLeave={() => setCat(false)}>Categories</Link></li>
            <li className="nav-item"><Link to="/contact" className="nav-link text-white fs-5">Contact</Link></li>
           
        </ul>
         formulaire de Rechercher  
        <div className="ml-auto mt-2 d-flex ">
            <Search />
            {/* end formulaire de Rechercher  
            <div className="">
                <a href="" className="">
                    <FontAwesomeIcon className='tw-text-amber-500 fs-4 mt-2' icon={faCartArrowDown}></FontAwesomeIcon>
                    <sup style={{ color: "antiquewhite" }} className="fs-3"> 3</sup>
                </a>
            </div>
        </div>

    </div>
    <div className="ml-auto">
        <li>
            <Link to="/signup" className="btn hover:tw-border hover:tw-rounded-md text-white tw-text-lg">Connexion</Link>
        </li>
    </div>*/}
</div> 
{/* end navbar collapse  */}
<hr className="tw-bg-slate-50 tw-h-1" />
{/* debut component prduit par categories */}
<div style={{ position:'fixed', zIndex:'10' }}>
    {cat && (<ProductCategories />)}
</div>
{/* debut component prduit par categories */}
</header>
