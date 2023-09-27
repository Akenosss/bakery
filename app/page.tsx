import {Hero} from "@/components";
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
                <Link href="/" className="border border-black px-14 py-3 hover:bg-zinc-700 duration-300 hover:text-white">Order Online</Link>
                <Link href="/" className="border bg-black text-white border-black px-14 py-3 hover:bg-white duration-300 hover:text-black">See the menu</Link>
            </div>

            <h1 className="mt-20 mb-14 text-4xl font-light">Our menu</h1>

            <section className="flex flex-wrap justify-center gap-5 mb-20">
                <Link href="/">
                    <Image src="/home/croissant_3.jpg" alt="3 croissant" width={300} height={300}/>
                    <h1 className="font-medium text-xl pt-4">Pastries</h1>
                </Link>
                <Link href="/">
                    <Image src="/home/pie.jpg" alt="pie" width={300} height={300}/>
                    <h1 className="font-medium text-xl pt-4">Pies</h1>
                </Link>
                <Link href="/">
                    <Image src="/home/bread.jpg" alt="bread" width={300} height={300}/>
                    <h1 className="font-medium text-xl pt-4">Breads</h1>
                </Link>
                <Link href="/">
                    <Image src="/coffee_bean.jpg" alt="coffee bean" width={300} height={300}/>
                    <h1 className="font-medium text-xl pt-4">Beverages</h1>
                </Link>
            </section>
        </div>

        <div className="relative box-border">
            <div className="absolute top-1/2 inset-center z-20 box-content bg-white py-20 px-56 text-center">
                <Image src="/home/cup.png" alt="coffee cup" width={100} height={100} className="ml-10"/>
                <h1 className="text-4xl font-light mb-6">Daily Deal</h1>
                <h1 className="mb-6">Bring your own cup</h1>
                <h1 className="italic underline font-bold">and get a 15% discount</h1>
            </div>
            <Image src="/home/coffee_table.webp" alt="coffee table" width={2000} height={2000} className="bg-scroll"/>
        </div>

        <div className="mt-40 text-center text-5xl font-extralight mb-52">Our Philosophy</div>
        <div className="relative box-border flex flex-col mx-40 mb-20">
            <section className="philo-container">
                <div className="w-72">
                    <h1 className="text-2xl font-light text-right mb-2">Natural ingredients</h1>
                    <p className="text-l text-right font-thin">All our ingredients come from local farmers and shops.</p>
                </div>
                <div className="w-64">
                    <h1 className="text-2xl font-light text-left mb-2">Made fresh</h1>
                    <p className="text-l text-left font-thin">Every day, at the crack at dawn, we start fresh.</p>
                </div>
            </section>
            <section className="philo-container">
                <div className="w-72">
                    <h1 className="text-2xl font-light text-right mb-2">Eco-friendly</h1>
                    <p className="text-l text-right font-thin">We consider the impact on the world, in everything we do.</p>
                </div>
                <div className="w-64">
                    <h1 className="text-2xl font-light text-left mb-2">Family recipes</h1>
                    <p className="text-l text-left font-thin">Our recipes aren't just recipes - they are heirlooms.</p>
                </div>
            </section>
        </div>
    </main>
  )
}
