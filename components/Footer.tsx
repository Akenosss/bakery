import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <div className="second-color px-80">
            <div className="text-center pt-32 text-white">
                <h1 className="mb-5">Follow us on instagram</h1>
                <h1 className="text-4xl mb-10">#takeabread</h1>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
                <ul>
                    <Image src="/insta/bakery_entrance_bike.webp" alt="bakery entrance" width={180} height={180} className="pb-4 hover:scale-110 transition duration-300"/>
                    <Image src="/insta/coffee_machine.webp" alt="bakery entrance" width={180} height={180} className="hover:scale-110 transition duration-300"/>
                </ul>
                <ul>
                    <Image src="/insta/chopped_bread.webp" alt="bakery entrance" width={180} height={180} className="pb-4 hover:scale-110 transition duration-300"/>
                    <Image src="/insta/coffee_latte_house_trees.webp" alt="bakery entrance" width={180} height={180} className="hover:scale-110 transition duration-300"/>
                </ul>
                <ul>
                    <Image src="/insta/bread_zoom_in.webp" alt="bakery entrance" width={180} height={180} className="pb-4 hover:scale-110 transition duration-300"/>
                    <Image src="/insta/woman_eats_cake.webp" alt="bakery entrance" width={180} height={180} className="hover:scale-110 transition duration-300"/>
                </ul>
                <ul>
                    <Image src="/insta/bakery_interior.webp" alt="bakery entrance" width={180} height={180} className="pb-4 hover:scale-110 transition duration-300"/>
                    <Image src="/insta/table_full_of_bread.webp" alt="bakery entrance" width={180} height={180} className="hover:scale-110 transition duration-300"/>
                </ul>
                <ul>
                    <Image src="/insta/bread_store.webp" alt="bakery entrance" width={180} height={180} className="pb-4 hover:scale-110 transition duration-300"/>
                    <Image src="/insta/we_are_open.webp" alt="bakery entrance" width={180} height={180} className="hover:scale-110 transition duration-300"/>
                </ul>
                <ul>
                    <Image src="/insta/coffee_from_machine.webp" alt="bakery entrance" width={180} height={180} className="pb-4 hover:scale-110 transition duration-300"/>
                    <Image src="/insta/happy_bakery_workers.webp" alt="bakery entrance" width={180} height={180} className="hover:scale-110 transition duration-300"/>
                </ul>
            </div>

            <div className="flex px-20 py-32 text-center text-white text-xl font-extralight">
                <div className="flex-1 px-20 mr-10 space-y-3">
                    <h1 className="text-2xl">Downtown bakery</h1>
                    <div className="flex flex-between">
                        <dt>Mon - Fri</dt>
                        <dd><time>9:00 am</time> - <time>5:00 pm</time></dd>
                    </div>
                    <div className="flex flex-between pb-3">
                        <dt>Mon - Fri</dt>
                        <dd><time>9:00 am</time> - <time>5:00 pm</time></dd>
                    </div>
                    <span>555-555-5555</span>
                </div>
                <div className="flex-1 px-20 ml-10 space-y-3">
                    <h1 className="text-2xl">Uptown bakery</h1>
                    <div className="flex flex-between">
                        <dt>Mon - Fri</dt>
                        <dd><time>9:00 am</time> - <time>5:00 pm</time></dd>
                    </div>
                    <div className="flex flex-between pb-3">
                        <dt>Mon - Fri</dt>
                        <dd><time>9:00 am</time> - <time>5:00 pm</time></dd>
                    </div>
                    <span>555-555-5555</span>
                </div>
            </div>

            <hr className="w-full border-solid border-1"></hr>

            <div className="flex items-center text-white flex-between pb-10">
                <Link href="/" className="filter">
                    <Image
                        src="/logo.svg"
                        alt="my bakery logo"
                        width={100}
                        height={100}
                        className="object-contain"
                        priority
                    />
                </Link>

                <div className="flex gap-6 font-extralight">
                    <Link href="/" className="hover:underline underline-offset-2 active:underline underline-offset-2">Home</Link>
                    <Link href="/menu" className="hover:underline underline-offset-2 active:underline underline-offset-2">Menu</Link>
                    <Link href="/about" className="hover:underline underline-offset-2 active:underline underline-offset-2">About</Link>
                    <Link href="/contact" className="hover:underline underline-offset-2 active:underline underline-offset-2">Contact</Link>
                </div>

                <div className="flex">
                    <Image
                        src="/facebook.png"
                        alt="facebook"
                        width={40}
                        height={40}
                        className="object-contain mr-3 filter cursor-pointer"
                        priority
                    />

                    <Image
                        src="/logo-insta.png"
                        alt="insta"
                        width={40}
                        height={40}
                        className="object-contain filter cursor-pointer"
                        priority
                    />
                </div>
            </div>
        </div>
    )
}

export default Footer