import Image from "next/image";
import victor from "../../../../Public/Logo/Vector.png"
import rectangle from "../../../../Public/Logo/Rectangle.png"
import aboutus from "../../../../Public/Logo/AboutUs.png"


const Blog = () => {
    return (
        <div>
            <section className="bg-[#E6E6E6] mt-4">

                {/* Ring Section */}
                <div className="p-2 ml-4 lg:block hidden">
                    <Image
                        className=""
                        src={victor}
                        alt="icon 1"
                        // width={30}
                        // height={38}
                        priority
                    />
                </div>

                <div className="mx-auto w-[90%] ">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                        <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                            <Image
                                alt=""
                                width={300}
                                height={300}
                                src={rectangle}
                                className="absolute inset-0 h-full w-full object-cover"
                            />
                        </div>

                        <div className="lg:py-24">
                            <div>
                                <button className="bg-white rounded-full p-2">
                                    <Image
                                        alt=""
                                        width={70}
                                        // height={300}
                                        src={aboutus}
                                        className=" "
                                    />
                                </button>
                            </div>
                            <h2 className="text-5xl manrope font-extrabold text-[#212121] sm:text-5xl mt-2">We design thoughtful, liveable spaces</h2>

                            <p className="mt-4 text-[#494949] sm:text-xl/relaxed">
                                The barn house captivates with its blend of rustic charm and
                                modern sophistication, featuring weathered wood, sleek metal accents.
                            </p>

                            <a
                                href="#"
                                className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
                            >
                                Get Started Today
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;