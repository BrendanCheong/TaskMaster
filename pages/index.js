import Image from "next/image";
import cool_background from "../public/cool_background.png";
import Register from "@/home/Register";
import Login from "@/home/Login";

const Home = () => {

    return (
        <div className="fixed flex flex-col items-center justify-center w-screen h-screen overflow-hidden place-content-center place-self-center -z-10" id="register form">
            <Image
                alt="background"
                src={cool_background}
                layout="fill"
                objectFit="cover"
                quality={100}
                priority={true}
            />
            {/* <Register/>
            <Login/> */}
        </div>
    );
};

export default Home;
