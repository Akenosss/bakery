import Image from "next/image";

const OurPhilosophy = () => {
    return (
        <div>
            <div className="text-center text-5xl font-extralight mt-40 mb-52">Our Philosophy</div>
            <section className="relative box-border flex flex-col mx-96">
                <div className="philo-container">
                    <div className="w-72">
                        <h1 className="text-2xl font-light text-right mb-2">Natural ingredients</h1>
                        <p className="text-l text-right font-thin">All our ingredients come from local farmers and shops.</p>
                    </div>
                    <div className="w-64">
                        <h1 className="text-2xl font-light text-left mb-2">Made fresh</h1>
                        <p className="text-l text-left font-thin">Every day, at the crack at dawn, we start fresh.</p>
                    </div>
                </div>
                <div className="philo-container">
                    <div className="w-72">
                        <h1 className="text-2xl font-light text-right mb-2">Eco-friendly</h1>
                        <p className="text-l text-right font-thin">We consider the impact on the world, in everything we do.</p>
                    </div>
                    <div className="w-64">
                        <h1 className="text-2xl font-light text-left mb-2">Family recipes</h1>
                        <p className="text-l text-left font-thin">Our recipes aren't just recipes - they are heirlooms.</p>
                    </div>
                </div>
                <Image
                    src="/natural_coffee.jpg"
                    alt="coffee"
                    width={170}
                    height={170}
                    className="absolute left-1/4 bottom-2/4 ml-14 mb-8"
                />
                <Image
                    src="/bake.webp"
                    alt="baking"
                    width={300}
                    height={300}
                    className="absolute right-1/4 bottom-0 z-1"
                />
                <Image
                    src="/natural_coffee_beans.jpg"
                    alt="baking"
                    width={150}
                    height={150}
                    className="absolute left-1/3 top-2/4 ml-16 z-10"
                />
            </section>
        </div>
    )
}

export default OurPhilosophy