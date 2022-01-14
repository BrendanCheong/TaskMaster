import { useState } from "react";
import Image from "next/image";
import cool_background from "../public/cool_background.png";
import Register from "@/home/Register";
import Login from "@/home/Login";

const Home = () => {

    const [flip, setFlipped] = useState(false);
    const [disable, setDisable] = useState(false);

    const handleFlip = () => {
        setFlipped(!flip);
        if (!disable) {
            setTimeout(() => {
                setDisable(true);
            }, 1000);
        } else {
            setDisable(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden place-content-center place-self-center -z-10" id="register form">
            <Image
                alt="background"
                src={cool_background}
                layout="fill"
                className="object-cover object-center bg-cover pointer-events-none"
                quality={100}
                priority={true}
                as="image"
            />
            <div className="h-96 [perspective:600px] z-50 w-96 md:w-[30rem]">
                <div className={"w-full h-full [transform-style:preserve-3d] [transition:_transform_1s] relative" + (
                    flip
                        ? " [transform:rotateY(180deg)]"
                        : ""
                )} id="flip"
                >
                    <div className="absolute w-full h-full text-white font-poppins [-webkit-backface-visibility:hidden] [backface-visibility:hidden] bottom-10" id="front">
                        {
                            !disable &&
                            <>
                                <Login
                                    flip={flip}
                                    setFlipped={handleFlip}
                                />
                            </>
                        }
                    </div>
                    <div className="absolute w-full h-full text-white font-poppins [-webkit-backface-visibility:hidden] [backface-visibility:hidden] [transform:rotateY(180deg)] bottom-10" id="back">
                        <Register
                            flip={flip}
                            setFlipped={handleFlip}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
