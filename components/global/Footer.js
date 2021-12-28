import Image from "next/image";

const Footer = () => {
    return (
        <div>
            <footer className="flex justify-center align-center grow">
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{" Your mom "}
                    <span className="h-1 ml-1">
                        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                    </span>
                </a>
            </footer>
        </div>
    );
};

export default Footer;
