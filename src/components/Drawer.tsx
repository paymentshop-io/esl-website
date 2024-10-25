import React, { useRef } from 'react'
import useOnClickOutside from '../hooks/useClickOutside';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

interface INO {
    isOpen: boolean;
    setIsOpen: any;
}

const Drawer = ({ isOpen, setIsOpen }: INO) => {
    const { pathname, push } = useRouter();
    const sideNavRef = useRef<any>();
    useOnClickOutside(sideNavRef, () => {
        setIsOpen(false);
    });
    return (
        <>
            {isOpen && (
                <section
                    ref={sideNavRef}
                    className={`fixed notification-sidebar ${isOpen ? "active" : ""
                        } rounded-tl rounded-bl transition-transform duration-1000 h-[443px] w-full  top-0 shadow-md bg-white z-30 right-0`}
                >
                    <div className="h-full flex flex-col pr-1 justify-center">
                        <div
                            style={{ borderColor: "#EBEFF2" }}
                            className="py-5 flex items-center justify-between  px-5"
                        >
                            <div className="flex items-center">
                                <img className="h-10 w-auto" alt="G" src="/E-Settlement.png" />

                            </div>
                            <img
                                onClick={() => {
                                    setIsOpen(false);
                                }}
                                src="/assets/close-nav.svg"
                                className="w-8 h-auto cursor-pointer"
                                alt=""
                            />
                        </div>
                        <div className="flex-1 scrollbar px-6 py-4 overflow-y-auto">
                            <div className="flex w-full gap-y-6 mx-auto flex-col">
                                <Link
                                    href="/"
                                    className={`pr-12 text-base`}
                                >
                                    Company
                                </Link>
                                <Link
                                    href="/about-us"
                                    className={`pr-12 text-base `}
                                >
                                    Products
                                </Link>
                                <Link
                                    href="/what-we-do"
                                    className={`pr-12 text-base `}
                                >
                                    Careers
                                </Link>
                                <Link
                                    href="/contact-us"
                                    className={`pr-12 text-base `}
                                >
                                    Contact
                                </Link>

                                <div className="flex items-center">
                                    <Link className="mx-2" href={""}>
                                        <Image alt="" className="h-6 w-6" width={24} height={24} src={"/images/49.png"} />
                                    </Link>
                                    <Link className="mx-2" href={""}>
                                        <Image className="h-6 w-6" alt="" width={24} height={24} src={"/images/50.png"} />
                                    </Link> <Link className="mx-2" href={""}>
                                        <Image className="h-6 w-6" alt="" width={24} height={24} src={"/images/51.png"} />
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            )}
        </>
    )
}

export default Drawer