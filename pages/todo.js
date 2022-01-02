import Footer from "@/global/Footer";
import Layout from "@/global/Layout";
import Content from "@/app/Content";
import Sidebar from "@/global/Sidebar";
import Mobilebar from "@/global/Mobilebar";

const Todo = () => {
    return (
        <div className="md:overflow-hidden bg-zinc-100">
            <Layout>
                <Mobilebar/>
                <Sidebar/>
                <Content/>
            </Layout>
            <Footer/>
        </div>
    );
};

export default Todo;