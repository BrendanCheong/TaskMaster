import Image from "next/image";
import styles from "../styles/Home.module.css";
import Footer from "@/global/Footer";
import Layout from "@/global/Layout";
import Content from "@/home/Content";
import Sidebar from "@/global/Sidebar";
import Mobilebar from "@/global/Mobilebar";
import { auth } from "../components/base/util/refreshToken";

const Todo = () => {
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

export default Todo;