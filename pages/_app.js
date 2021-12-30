import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import Meta from "@/global/Meta";
import stores from "@/redux/redux-stores/stores";
import { Provider } from "react-redux";

const MyApp = ({ Component, pageProps }) => {
    return (
        <>
            <Provider store={stores}>
                <Meta/>
                <Component {...pageProps} />
            </Provider>
        </>
    );
};

export default MyApp;
