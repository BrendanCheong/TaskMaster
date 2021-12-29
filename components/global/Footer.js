import LinkedIn from "@/SVG/LinkedIn";
import Github from "@/SVG/Github";
import Mail from "@/SVG/Mail";

const Footer = () => {
    return (
        <>
            <div className="max-w-screen-xl px-4 py-6 mx-auto space-y-5 overflow-hidden bg-transparent sm:px-6 lg:px-8 h-1/6">
                <h1 className="text-xl text-center text-black font-poppins">Get In Touch With Me!</h1>
                <div className="flex justify-center mt-8 space-x-6">
                    <a href="https://www.linkedin.com/in/brendan-cheong-ern-jie/" className="text-black" target="_blank"
                        rel="noreferrer">
                        <LinkedIn/>
                    </a>
                    <a href="https://github.com/BrendanCheong" className="text-black" target="_blank" rel="noreferrer">
                        <Github/>
                    </a>
                    <a href="mailto: brendan_cej@u.nus.edu" className="text-black">
                        <Mail/>
                    </a>
                </div>
                <p className="mt-8 font-sans text-base leading-6 text-center text-black">
                    Made by Brendan Cheong.
                </p>
            </div>
        </>
    );
};

export default Footer;
