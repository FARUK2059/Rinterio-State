import Image from "next/image";
import victor from "../../../../Public/Logo/Vector.png"
import rectangle from "../../../../Public/Logo/Rectangle.png"
import aboutus from "../../../../Public/Logo/AboutUs.png"
import commmersial from "../../../../Public/Logo/commercial.png"
import comment from "../../../../Public/Logo/comment-01.png"
import department from "../../../../Public/Logo/departement.png"
import group from "../../../../Public/Logo/Group 8.png"
import user1 from "../../../../Public/Logo/user-multiple.png"


const Blog = () => {
    return (
        <div>
            <section className="bg-[#E6E6E6] mt-4 p-2">

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
                        <div className="relative  overflow-hidden rounded-lg  lg:order-last p-2">
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

                            <div className="mt-4 bg-white rounded-md lg:flex gap-4 p-6">
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

                            <div className="mt-4 bg-white rounded-md lg:flex gap-4 p-6">
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


                {/* State Section */}
                <div className="mx-auto w-[90%]">
                    <dl className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4">

                        <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
                            <div className="items-center grid justify-center">
                                <Image
                                    className=""
                                    src={comment}
                                    alt="icon 1"
                                    // width={30}
                                    // height={38}
                                    priority
                                />
                            </div>
                            <p className="order-last text-lg font-medium text-gray-500">Happy Client Review</p>
                            <p className="text-4xl font-extrabold text-[#212121] md:text-5xl">235+</p>
                        </div>

                        <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
                            <div className="items-center grid justify-center">
                                <Image
                                    className=""
                                    src={department}
                                    alt="icon 1"
                                    // width={30}
                                    // height={38}
                                    priority
                                />
                            </div>
                            <p className="order-last text-lg font-medium text-gray-500">Work Departments</p>
                            <p className="text-4xl font-extrabold text-[#212121] md:text-5xl">50+</p>
                        </div>

                        <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
                            <div className="items-center grid justify-center">
                                <Image
                                    className=""
                                    src={group}
                                    alt="icon 1"
                                    // width={30}
                                    // height={38}
                                    priority
                                />
                            </div>
                            <p className="order-last text-lg font-medium text-gray-500">Our Happy Client</p>
                            <p className="text-4xl font-extrabold text-[#212121] md:text-5xl">30k+</p>
                        </div>

                        <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
                            <div className="items-center grid justify-center">
                                <Image
                                    className=""
                                    src={user1}
                                    alt="icon 1"
                                    // width={30}
                                    // height={38}
                                    priority
                                />
                            </div>
                            <p className="order-last text-lg font-medium text-gray-500">Staff Members</p>
                            <p className="text-4xl font-extrabold text-[#212121] md:text-5xl">307k+</p>
                        </div>

                    </dl>
                </div>


            </section>
        </div>
    );
};

export default Blog;