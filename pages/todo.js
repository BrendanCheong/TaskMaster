import Footer from "@/global/Footer";
import Layout from "@/global/Layout";
import Content from "@/app/Content";
import Sidebar from "@/global/Sidebar";
import Mobilebar from "@/global/Mobilebar";
import UserAccountButton from "@/global/UserAccountButton";
import ViewTask from "@/app/ViewTask";

const Todo = () => {
    return (
        <div className="md:overflow-hidden bg-zinc-100">
            <Layout>
                <Mobilebar/>
                <Sidebar/>
                {/* <Content/> */}
                <ViewTask/>
                <UserAccountButton/>
            </Layout>
            <Footer/>
        </div>
    );
};

export default Todo;