export default function page() {
    return (
        <main className="relative overflow-hidden pt-24">
            <div className="absolute w-full pb-60 pt-40 barista-img">
                <h1 className="text-center text-8xl font-extralight">Our menu</h1>
            </div>
            <div className="relative text-center mx-96 bg-white px-14 mt-80 pt-20">
                <span className="text-4xl font-light">Pastries</span>
                <div className="flex gap-10 justify-center mt-10">
                    <div className="flex flex-col w-full">
                        <ul className="flex flex-between">
                            <li>Croissant</li>
                            <li>$6</li>
                        </ul>
                        <hr className="mt-4 pb-8"></hr>
                        <ul className="flex  flex-between">
                            <li>Macarons</li>
                            <li>$7</li>
                        </ul>
                        <hr  className="mt-4 pb-8"></hr>
                        <ul className="flex  flex-between">
                            <li>Chocolate danish</li>
                            <li>$7</li>
                        </ul>
                        <hr  className="mt-4 pb-8"></hr>
                    </div>
                    <div className="flex flex-col w-full">
                        <ul className="flex flex-between">
                            <li>Brioche</li>
                            <li>$5</li>
                        </ul>
                        <hr  className="mt-4 pb-8"></hr>
                        <ul className="flex  flex-between">
                            <li>Profiteroles</li>
                            <li>$5</li>
                        </ul>
                        <hr  className="mt-4 pb-8"></hr>
                        <ul className="flex  flex-between">
                            <li>Muffins</li>
                            <li>$4</li>
                        </ul>
                        <hr  className="mt-4 pb-8"></hr>
                    </div>
                </div>
            </div>

            <div className="text-center mx-96 bg-white px-14 pt-20">
                <span className="text-4xl font-light">Bread</span>
                <div className="flex gap-10 justify-center mt-10">
                    <div className="flex flex-col w-full">
                        <ul className="flex flex-between">
                            <li>Wholegrain</li>
                            <li>$12</li>
                        </ul>
                        <hr className="mt-4 pb-8"></hr>
                        <ul className="flex  flex-between">
                            <li>Buckwheat</li>
                            <li>$10</li>
                        </ul>
                        <hr  className="mt-4 pb-8"></hr>
                        <ul className="flex  flex-between">
                            <li>Egg</li>
                            <li>$10</li>
                        </ul>
                        <hr  className="mt-4 pb-8"></hr>
                    </div>
                    <div className="flex flex-col w-full">
                        <ul className="flex flex-between">
                            <li>Rye</li>
                            <li>$8</li>
                        </ul>
                        <hr  className="mt-4 pb-8"></hr>
                        <ul className="flex  flex-between">
                            <li>Rye with caraway</li>
                            <li>$10</li>
                        </ul>
                        <hr  className="mt-4 pb-8"></hr>
                        <ul className="flex  flex-between">
                            <li>Sourdough</li>
                            <li>$10</li>
                        </ul>
                        <hr  className="mt-4 pb-8"></hr>
                    </div>
                </div>
            </div>

            <div className="text-center mx-96 bg-white px-14 pt-20">
                <span className="text-4xl font-light">Pies</span>
                <div className="flex gap-10 justify-center mt-10">
                    <div className="flex flex-col w-full">
                        <ul className="flex flex-between">
                            <li>Fresh apple</li>
                            <li>$12</li>
                        </ul>
                        <hr className="mt-4 pb-8"></hr>
                        <ul className="flex  flex-between">
                            <li>Sour cherry</li>
                            <li>$12</li>
                        </ul>
                        <hr  className="mt-4 pb-8"></hr>
                        <ul className="flex  flex-between">
                            <li>Sweet pear</li>
                            <li>$12</li>
                        </ul>
                        <hr  className="mt-4 pb-8"></hr>
                    </div>
                    <div className="flex flex-col w-full">
                        <ul className="flex flex-between">
                            <li>Coconut cream</li>
                            <li>$14</li>
                        </ul>
                        <hr  className="mt-4 pb-8"></hr>
                        <ul className="flex  flex-between">
                            <li>French vanilla</li>
                            <li>$12</li>
                        </ul>
                        <hr  className="mt-4 pb-8"></hr>
                        <ul className="flex  flex-between">
                            <li>Banana cream</li>
                            <li>$14</li>
                        </ul>
                        <hr  className="mt-4 pb-8"></hr>
                    </div>
                </div>
            </div>

            <div className="text-center mx-96 bg-white px-14 py-20">
                <span className="text-4xl font-light">Coffee & Tea</span>
                <div className="flex gap-10 justify-center mt-10">
                    <div className="flex flex-col w-full">
                        <ul className="flex flex-between">
                            <li>Espresso</li>
                            <li>$4</li>
                        </ul>
                        <hr className="mt-4 pb-8"></hr>
                        <ul className="flex  flex-between">
                            <li>Filter</li>
                            <li>$3</li>
                        </ul>
                        <hr  className="mt-4 pb-8"></hr>
                        <ul className="flex  flex-between">
                            <li>Instant</li>
                            <li>$3</li>
                        </ul>
                        <hr  className="mt-4 pb-8"></hr>
                    </div>
                    <div className="flex flex-col w-full">
                        <ul className="flex flex-between">
                            <li>Jasmine</li>
                            <li>$2</li>
                        </ul>
                        <hr  className="mt-4 pb-8"></hr>
                        <ul className="flex  flex-between">
                            <li>Chai</li>
                            <li>$4</li>
                        </ul>
                        <hr  className="mt-4 pb-8"></hr>
                        <ul className="flex  flex-between">
                            <li>Herbal</li>
                            <li>$4</li>
                        </ul>
                        <hr  className="mt-4 pb-8"></hr>
                    </div>
                </div>
            </div>
        </main>
    )
}