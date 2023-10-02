"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page() {
    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
        if(e.currentTarget.innerText === 'Baker') {
                // @ts-ignore
            if (document.getElementById("baker-text").style.display === 'block') {
                // @ts-ignore
                document.getElementById("baker-text").style.display = 'none';
                // @ts-ignore
                document.getElementById("baker-plus").src = "plus.png";
            } else {
                // @ts-ignore
                document.getElementById("baker-text").style.display = 'block';
                // @ts-ignore
                document.getElementById("barista-text").style.display = 'none';
                // @ts-ignore
                document.getElementById("pastry-text").style.display = 'none';
                // @ts-ignore
                document.getElementById("baker-plus").src = "less.png";
            }
        }

        if(e.currentTarget.innerText === 'Pastry chef') {
                // @ts-ignore
            if (document.getElementById("pastry-text").style.display === 'block') {
                // @ts-ignore
                document.getElementById("pastry-text").style.display = 'none';
                // @ts-ignore
                document.getElementById("pastry-plus").src = "plus.png";
            } else {
                // @ts-ignore
                document.getElementById("pastry-text").style.display = 'block';
                // @ts-ignore
                document.getElementById("baker-text").style.display = 'none';
                // @ts-ignore
                document.getElementById("barista-text").style.display = 'none';
                // @ts-ignore
                document.getElementById("pastry-plus").src = "less.png";
            }
        }

        if(e.currentTarget.innerText === 'Barista') {
                // @ts-ignore
            if (document.getElementById("barista-text").style.display === 'block') {
                // @ts-ignore
                document.getElementById("barista-text").style.display = 'none';
                // @ts-ignore
                document.getElementById("barista-plus").src = "plus.png";
            } else {
                // @ts-ignore
                document.getElementById("barista-text").style.display = 'block';
                // @ts-ignore
                document.getElementById("baker-text").style.display = 'none';
                // @ts-ignore
                document.getElementById("pastry-text").style.display = 'none';
                // @ts-ignore
                document.getElementById("barista-plus").src = "less.png";
            }
        }
    }

    return (
        <main className="overflow-hidden pt-24">
            <div className="main-color">
                <div className="container mx-auto text-white font-light text-center">
                    <h1 className="text-9xl py-20">Come on over</h1>
                    <div className="flex justify-center gap-40 pb-8">
                        <Image
                            src="/contact/cafe_interior_address.webp"
                            alt="cafe interior"
                            width={300}
                            height={300}
                        />
                        <Image
                            src="/contact/cafe_interior_address_2.webp"
                            alt="cafe interior2"
                            width={300}
                            height={300}
                        />
                    </div>

                    <div className="flex px-96 gap-20 pb-32 text-white text-xl font-extralight">
                        <div className="flex-1 space-y-3">
                            <h1 className="text-2xl">Downtown bakery</h1>
                            <div className="flex flex-between">
                                <dt>Mon - Fri</dt>
                                <dd><time>9:00 am</time> - <time>5:00 pm</time></dd>
                            </div>
                            <div className="flex flex-between pb-3">
                                <dt>Mon - Fri</dt>
                                <dd><time>9:00 am</time> - <time>5:00 pm</time></dd>
                            </div>
                            <p className="pb-6">555-555-5555</p>
                            <Link href="/" className="border-solid border-2 border-white p-2 px-12 hover:bg-black hover:border-black duration-200">Nous trouver</Link>
                        </div>
                        <div className="flex-1 ml-10 space-y-3">
                            <h1 className="text-2xl">Uptown bakery</h1>
                            <div className="flex flex-between">
                                <dt>Mon - Fri</dt>
                                <dd><time>9:00 am</time> - <time>5:00 pm</time></dd>
                            </div>
                            <div className="flex flex-between pb-3">
                                <dt>Mon - Fri</dt>
                                <dd><time>9:00 am</time> - <time>5:00 pm</time></dd>
                            </div>
                            <p className="pb-6">555-555-5555</p>
                            <Link href="/" className="border-solid border-2 border-white p-2 px-12 hover:bg-black hover:border-black duration-200">Nous trouver</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container max-w-lg mx-auto text-center my-32">
                <h1 className="text-4xl mb-14">Open positions</h1>
                <div onClick={handleClick} className="flex flex-between">
                    <h1 className="text-2xl ml-6">Baker</h1>
                    <img src="/plus.png" alt="plus" width={20} height={20} className="mr-6" id="baker-plus"/>
                </div>
                <hr className="mt-4 mb-10"/>
                <p id="baker-text" className="text-left pb-10 pl-5 font-extralight hidden">
                    Are you a passionate and punctual, with a love for baking and creating? Come join our team and
                    prepare with us delicious, wholesome simple indulgences.
                </p>
                <div onClick={handleClick} className="flex flex-between">
                    <h1 className="text-2xl ml-6">Pastry chef</h1>
                    <img src="/plus.png" alt="plus" width={20} height={20} className="mr-6" id="pastry-plus"/>
                </div>
                <hr className="mt-4 mb-10"/>
                <p id="pastry-text" className="text-left pb-10 pl-5 font-extralight hidden">
                    Are you a passionate and punctual, with a love for baking and creating? Come join our team and
                    prepare with us delicious, wholesome simple indulgences.
                </p>
                <div onClick={handleClick} className="flex flex-between">
                    <h1 className="text-2xl ml-6">Barista</h1>
                    <img src="/plus.png" alt="plus" width={20} height={20} className="mr-6" id="barista-plus"/>
                </div>
                <hr className="mt-4 mb-10"/>
                <p id="barista-text" className="text-left pb-10 pl-5 font-extralight hidden">
                    Are you a passionate and punctual, with a love for baking and creating? Come join our team and
                    prepare with us delicious, wholesome simple indulgences.
                </p>
            </div>

            <div>
                <section className="flex justify-center text-center bg-fixed bg-center barista-img py-24">
                    <div className="bg-white py-20 container mx-auto max-w-xl px-16 main-color text-white">
                        <h1 className="text-3xl font-light mb-3">Drop us a line</h1>
                        <div className="flex flex-col text-left border-b border-white mb-10">
                            <h1 className="mb-2">Name:</h1>
                            <input type="text" aria-label="full name" className="appearance-none bg-transparent border-none w-full"/>
                        </div>
                        <div className="flex flex-col text-left border-b border-white mb-10">
                            <h1 className="mb-2">Email:</h1>
                            <input type="email" aria-label="full email" className="appearance-none bg-transparent border-none w-full"/>
                        </div>
                        <div className="flex flex-col text-left border-b border-white mb-20">
                            <h1 className="mb-2">Message:</h1>
                            <input type="text" aria-label="message" className="appearance-none bg-transparent border-none w-full"/>
                        </div>
                        <input type="submit" className="cursor-pointer border1 border-white hover:bg-black hover:border-0 hover:duration-200 py-3 px-14" value="Send Message"></input>
                    </div>
                </section>
            </div>
        </main>
    )
}