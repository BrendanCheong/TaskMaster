import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import Meta from "@/global/Meta";

const MyApp = ({ Component, pageProps }) => {
    return (
        <>
            <Meta/>
            <Component {...pageProps} />
        </>
    );
};

export default MyApp;
