import Image from "next/image";
import styles from "../styles/Home.module.css";
import Footer from "@/global/Footer";
import Layout from "@/global/Layout";
import Content from "@/home/Content";
import Sidebar from "@/global/Sidebar";
import Mobilebar from "@/global/Mobilebar";

const Home = () => {
    return (
        <>
            <Layout>
                <Mobilebar/>
                <Sidebar/>
                <Content/>
            </Layout>
            <Footer/>
        </>
    );
};

export default Home;
