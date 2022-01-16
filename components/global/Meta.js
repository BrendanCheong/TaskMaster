import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
    // Meta not Facebook
    return (
        <Head>
            <title>{title}</title>
            <meta name="author" content="Brendan Cheong Ern Jie" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
            <meta
                name="keywords"
                content={keywords}
            />
            <meta name="description" content={description}/>
            <meta charSet="utf-8"/>
            <link rel="icon" href="/favicon.ico"/>
            <meta name="type" content="application" />
        </Head>
    );
};

Meta.defaultProps = {
    title: "TaskMaster - The Ultimate ToDo Application",
    keywords: "full-stack web development, CVWO, computing for voluntary welfare organisations, ruby on rails, todo list, todo app, MySQL, NextJS, Redux, React, TailwindCSS, MaterialUI",
    description: "A ToDo list full-stack application for National University of Singapore Computing For Voluntary Welfare Organisations",
};

export default Meta;
