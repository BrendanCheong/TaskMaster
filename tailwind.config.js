module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}", 
        "./components/**/*.{js,ts,jsx,tsx}",
        "./public/**/*.{js,ts,jsx,tsx}",
    ],
    darkmode: "class",
    theme: {
        extend: {
            fontFamily: {
                poppins: ["Poppins"],
                nunito: ["Nunito+Sans"],
                roboto: ["Roboto"],
            },
        },
    },
    plugins: [
        require("tailwind-scrollbar"),
    ],
    variants: {
        scrollbar: ["rounded", "dark"],
    },
};
