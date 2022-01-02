import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import Meta from "@/global/Meta";
import stores from "@/redux/redux-stores/stores";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/global/theme";

const MyApp = ({ Component, pageProps }) => {
    return (
        <div className="scrollbar-thin scrollbar-thumb-slate-500 hover:scrollbar-thumb-slate-700">
            <Provider store={stores}>
                <ThemeProvider theme={theme}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <Meta/>
                        <Component {...pageProps} />
                    </LocalizationProvider>
                </ThemeProvider>
            </Provider>
        </div>
    );
};

export default MyApp;
