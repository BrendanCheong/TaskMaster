import Head from "next/head";
import "../styles/globals.css";
import "tailwindcss/tailwind.css";

const MyApp = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <title>TaskMaster - The Ultimate ToDo Application</title>
                <meta name="author" content="Brendan Cheong Ern Jie" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
                <meta
                    name="keywords"
                    content="Full-stack web development, CVWO, computing for
                voluntary welfare organisations, ruby on rails, todo list, todo app, MySQL, NextJS, Redux, React, TailwindCSS, MaterialUI"
                />
                <meta name="type" content="application" />
            </Head>
            <Component {...pageProps} />
        </>
    );
};

export default MyApp;
