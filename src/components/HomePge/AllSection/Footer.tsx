import Image from "next/image";
import footer from "../../../../Public/Logo/Frame 66.png"



const Footer = () => {
    return (
        <div>
            <div className="">
                <Image
                    className=""
                    src={footer}
                    alt="icon 1"
                    // width={30}
                    // height={38}
                    priority
                />
            </div>
        </div>
    );
};

export default Footer;