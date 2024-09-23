import Image from "next/image";
import Link from "next/link";
import arrow from "../../../../Public/Logo/Arrow.png"
import banner from "../../../../Public/Logo/banner.png"



const Banner = () => {
    return (
        <div>
            <section className="">

                {/* Image section */}
                <div className="grid justify-center p-4">
                    <Image
                        className=""
                        src={banner}
                        alt="icon 1"
                        // width={30}
                        // height={38}
                        priority
                    />
                </div>

                {/* Title Section */}
                <div className="mx-auto max-w-screen-xl  lg:flex  lg:items-center">
                    <div className="mx-auto  text-center">
                        <h1 className="text-6xl manrope font-extrabold text-[#212121] sm:text-5xl">
                            A barn house of this design has a <br /> striking appearance
                        </h1>

                        <p className="mt-4 text-[#494949] sm:text-xl/relaxed">
                            The barn house captivates with its blend of rustic charm and modern sophistication, featuring weathered wood, sleek metal accents, and large windows that flood the space with natural light.
                        </p>

                        <div className="p-4 flex flex-wrap justify-center gap-4">
                            <Link
                                className="block w-full  rounded bg-[#ffef5f80] px-12 py-3 text-lg font-extrabold text-[#212121]  shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500  sm:w-auto"
                                href="#"
                            >
                                <div className="flex gap-2 text-center justify-center items-center">
                                    <h2> View Details</h2>
                                    <Image
                                        className=""
                                        src={arrow}
                                        alt="icon 1"
                                        width={30}
                                        // height={38}
                                        priority
                                    />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;