import Link from "next/link";
import Image from 'next/image';

const Navbar = () => {
    return(
        <header className="max-w-[1920px] w-full z-30 fixed py-4 bg-white">
            <nav className="flex justify-between items-center">
                <Link href="/" className="ml-60">
                    <Image
                        src="/logo.svg"
                        alt="my bakery logo"
                        width={100}
                        height={100}
                        className="object-contain"
                        priority
                    />
                </Link>

                <div className="flex gap-6 ml-20">
                    <Link href="/" className="hover:underline underline-offset-2 active:underline underline-offset-2">Home</Link>
                    <Link href="/menu" className="hover:underline underline-offset-2 active:underline underline-offset-2">Menu</Link>
                    <Link href="/about" className="hover:underline underline-offset-2 active:underline underline-offset-2">About</Link>
                    <Link href="/contact" className="hover:underline underline-offset-2 active:underline underline-offset-2">Contact</Link>
                </div>

                <div className="flex gap-28 items-center mr-16">
                    <div className="flex">
                        <Image src="/icons8-caddie-24.png" alt="caddie" width={20} height={20}/>
                        <h6 className="text-orange-800">0</h6>
                    </div>
                    <Link href="/" className="custombutton-white px-20 py-3">Order Online</Link>
                </div>
            </nav>
        </header>
        )
}

export default Navbar