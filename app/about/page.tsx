import Image from "next/image";
import {JoinUs, OurPhilosophy} from "@/components";
export default function page() {
    return (
        <main className="overflow-hidden pt-24">
            <Image
                src="/about/cafe_owners.webp"
                alt="cafe owners"
                width={450}
                height={450}
                className="absolute left-1/4 mt-28"
            />
            <section className="flex flex-col flex-center text-white second-color pt-60 pb-40 pl-96">
                <h1 className="relative text-9xl font-extralight pb-8">Our Story</h1>
                <div className="relative text-left space-y-3 pl-20">
                    <p>We serve traditional baked goods that are fresh, </p>
                    <p>delicious, satisfying and wholesome. From daily breads </p>
                    <p>to special pastries, everything is prepare and baked</p>
                    <p>fresh daily. Our recipes have been passed down from</p>
                    <p>one generation to the next, proudly combining our</p>
                    <p>roots, our heritage and our dreams. We love to feed you</p>
                    <p>delicious baked goods.</p>
                </div>
            </section>

            <OurPhilosophy />
            <div className="mb-28"></div>

            <div className="second-color text-white">
                <h1 className="text-8xl font-extralight text-center pt-40 pb-14">Founders</h1>
                <ul className="flex justify-center gap-10">
                    <Image
                        src="/about/bearded_man_smiling.webp"
                        alt="smiling bearded man"
                        width={250}
                        height={250}
                    />
                    <Image
                        src="/about/Smiling_woman.webp"
                        alt="smiling woman"
                        width={250}
                        height={250}
                    />
                </ul>
                <ul className="flex justify-center mt-5 gap-40 text-2xl font-light">
                    <li>Joel Newman</li>
                    <li>Beth Marmot</li>
                </ul>
                <ul className="container flex flex-between mx-auto max-w-lg gap-20 text-center pb-20">
                    <li>Joel has been a baker from childhood and studied at culinary school in New York. He
                        brings a true love of the craft to his work. </li>
                    <li>Beth grew up on a farm, and has been in the kitchen for as long as she can remember.
                        It's her hobby, passion and profession. </li>
                </ul>
            </div>

            <JoinUs />
        </main>
    )
}