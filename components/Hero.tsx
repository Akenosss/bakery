import Image from "next/image";
const Hero = () => {
  return (
      <main>
          <div className="relative main-color py-96">
          <h1 className="absolute z-10 top-1/4 mt-10 inset-center text-white text-9xl font-serif">Take a Bread</h1>
          <Image
              src="/home/bakery_shop.jpg"
              alt="bakery shop"
              width={200}
              height={200}
              className="absolute bottom-0"
          />
          <Image
              src="/home/main_photo.webp"
              alt="bakery shop"
              width={550}
              height={550}
              className="absolute top-2/3 inset-center mt-10"
          />
          <Image
              src="/home/cake.jpg"
              alt="bakery shop"
               width={180}
               height={180}
               className="absolute right-0 top-2/4"
          />
          </div>
      </main>
  )
}

export default Hero