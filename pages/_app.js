import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import Meta from "@/global/Meta";
import stores from "@/redux/redux-stores/stores";
import Grow from "@mui/material/Grow";
import Button from "@mui/material/Button";
import { createRef } from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import { SnackbarProvider } from "notistack";
import theme from "@/global/theme";

const MyApp = ({ Component, pageProps }) => {

    const AUTO_HIDE_DURATION = 3000;
    const POSITION = {
        vertical: "bottom",
        horizontal: "center",
    };
    const notistackRef = createRef();
    const onClickDismiss = key => () => {
        notistackRef.current.closeSnackbar(key);
    };

    return (
        <div className="scrollbar-thin scrollbar-thumb-slate-500 hover:scrollbar-thumb-slate-700">
            <Provider store={stores}>
                <ThemeProvider theme={theme}>
                    <SnackbarProvider
                        ref={notistackRef}
                        autoHideDuration={AUTO_HIDE_DURATION}
                        anchorOrigin={POSITION}
                        TransitionComponent={Grow}
                        action={(key) => (
                            <Button 
                                sx={{
                                    color: "#FFFFFF",
                                }}
                                onClick={onClickDismiss(key)}>
                                Dismiss
                            </Button>
                        )}>
                        <Meta/>
                        <Component {...pageProps} />
                    </SnackbarProvider>
                </ThemeProvider>
            </Provider>
        </div>
    );
};

export default MyApp;
