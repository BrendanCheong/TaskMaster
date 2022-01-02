import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#4f46e5",
        },
        secondary: {
            main: "#14b8a6",
        },
    },
    components: {
        MuiOutlinedInput: {
            styleOverrides: {
                multiline: {
                    fontSize: "16px",
                    color: "#0f172a",
                    // height: "50rem",
                    "@media (min-width: 768px)": {
                    },
                },
            },
        },
    },
});

export default theme;