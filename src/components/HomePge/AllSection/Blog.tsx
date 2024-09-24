import Image from "next/image";
import victor from "../../../../Public/Logo/Vector.png"
import rectangle from "../../../../Public/Logo/Rectangle.png"
import aboutus from "../../../../Public/Logo/AboutUs.png"
import commmersial from "../../../../Public/Logo//commercial.png"


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
                
                {/* Commercial Section */}
                <div className="mx-auto w-[90%] ">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                        <div className="relative  overflow-hidden rounded-lg  lg:order-last">
                            <Image
                                alt=""
                                // width={300}
                                // height={300}
                                src={rectangle}
                                className=""
                            />
                        </div>

                        <div className=" mb-4 container ">

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

                            <div className="mt-4 bg-white rounded-md flex gap-4 p-6">
                                <Image
                                    alt=""
                                    // width={50}
                                    // height={300}
                                    src={commmersial}
                                    className=""
                                />
                                <div>
                                    <h2 className="text-[#494949] font-bold ">Commercial</h2>
                                    <p className="text-[#737373] mt-2">The barn house captivates with its blend of rustic charm and modern.</p>
                                </div>
                            </div>

                            <div className="mt-4 bg-white rounded-md flex gap-4 p-6">
                                <Image
                                    alt=""
                                    // width={50}
                                    // height={300}
                                    src={commmersial}
                                    className=""
                                />
                                <div>
                                    <h2 className="text-[#494949] font-bold ">Residential</h2>
                                    <p className="text-[#737373] mt-2">The barn house captivates with its blend of rustic charm and modern.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


            </section>
        </div>
    );
};

export default Blog;