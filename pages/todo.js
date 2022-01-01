import Footer from "@/global/Footer";
import Layout from "@/global/Layout";
import Content from "@/home/Content";
import Sidebar from "@/global/Sidebar";
import Mobilebar from "@/global/Mobilebar";

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