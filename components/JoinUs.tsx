import Image from "next/image";
import Link from "next/link";

const JoinUs = () => {
    return (
        <div>
            <section className="flex justify-center text-center bg-fixed bg-center barista-img py-24">
                <div className="bg-white py-20 px-24">
                    <Image src="/home/chief-hat.png" alt="chief hat" width={70} height={70} className="ml-32"/>
                    <h1 className="text-4xl font-light mb-3">Join us</h1>
                    <h1 className="mb-3">Are you baker, pastry chef or barista?</h1>
                    <h1 className="mb-3">Send us your CV to <strong className="italic underline">mymail@mailservice.com</strong></h1>
                    <h1 className="mb-14">or click below to see open positions</h1>
                    <Link href="/" className="custombutton-white py-3 px-14">Careers</Link>
                </div>
            </section>
        </div>
    )
}

export default JoinUs