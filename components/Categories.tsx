import Image from "next/image";
import Link from "next/link";

const Categories = () => {
    return (
        <section className="flex flex-wrap justify-center gap-5 mb-40">
            <Link href="/store/pastries">
                <Image src="/home/croissant_3.jpg" alt="3 croissant" width={300} height={300}/>
                <h1 className="font-medium text-xl pt-4">Pastries</h1>
            </Link>
            <Link href="/store/pies">
                <Image src="/home/pie.jpg" alt="pie" width={300} height={300}/>
                <h1 className="font-medium text-xl pt-4">Pies</h1>
            </Link>
            <Link href="/store/breads">
                <Image src="/home/bread.jpg" alt="bread" width={300} height={300}/>
                <h1 className="font-medium text-xl pt-4">Breads</h1>
            </Link>
            <Link href="/store/beverages">
                <Image src="/coffee_bean.jpg" alt="coffee bean" width={300} height={300}/>
                <h1 className="font-medium text-xl pt-4">Beverages</h1>
            </Link>
        </section>
    )
}

export default Categories