import {Categories, Hero, JoinUs, OurPhilosophy} from "@/components";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-hidden">
        <Hero />

        <div className="relative mt-44 text-center">
            <h5 className="font-light">Indulge yourself, and the people you love, with delicious home-baked treats.</h5>
            <h5 className="font-light">All items are baked on the premises, so they are always fresh.</h5>

            <div className="flex flex-wrap justify-center gap-8 mt-10">
                <Link href="#order" className="custombutton-white px-14 py-3 active:duration-500">Order Online</Link>
                <Link href="/menu" className="custombutton-black px-14 py-3">See the menu</Link>
            </div>

            <h1 id="order" className="mt-20 mb-14 text-4xl font-light">Our menu</h1>
            <Categories />
        </div>

        <section className="flex justify-center text-center bg-fixed bg-center barista-img py-80">
            <div className="absolute inset-center z-20 box-content bg-white py-20 px-56 text-center">
                <Image src="/home/cup.png" alt="coffee cup" width={100} height={100} className="ml-10"/>
                <h1 className="text-4xl font-light mb-6">Daily Deal</h1>
                <h1 className="mb-6">Bring your own cup</h1>
                <h1 className="italic underline font-bold">and get a 15% discount</h1>
            </div>
        </section>

        <OurPhilosophy />
        <div className="relative flex justify-center">
            <Link href="/about" className="custombutton-white px-24 py-3 my-32">About us</Link>
        </div>
        <JoinUs />
    </main>
  )
}