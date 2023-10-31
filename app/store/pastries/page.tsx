export default function page() {
    return (
        <main className="relative overflow-hidden pt-24">
            <div className="absolute w-full pb-60 pt-52 barista-img"></div>
            <div className="relative text-center mx-96 bg-white px-14 mt-72 pt-10">
                <h6 className="flex justify-start text-l font-light">Store / Pastries</h6>
                <h1 className="text-4xl">Pastries</h1>
                <div className="flex-col">
                    <div className="flex justify-center gap-10 py-10">
                        <h1 className="border-2 w-80 h-80">Macaron</h1>
                        <h1 className="border-2 w-80 h-80">Profiterole</h1>
                        <h1 className="border-2 w-80 h-80">Danish Apple</h1>
                    </div>
                    <div className="flex justify-center gap-10 pb-20">
                        <h1 className="border-2 w-80 h-80">Muffin</h1>
                        <h1 className="border-2 w-80 h-80">Danish Pecan</h1>
                        <h1 className="border-2 w-80 h-80">Croissant</h1>
                    </div>
                </div>
            </div>
        </main>
    )
}