import Footer from "@/global/Footer";
import Layout from "@/global/Layout";
import Content from "@/app/Content";
import Sidebar from "@/global/Sidebar";
import Mobilebar from "@/global/Mobilebar";
import UserAccountButton from "@/global/UserAccountButton";
import ViewTask from "@/app/ViewTask";
import DefaultContent from "@/global/DefaultContent";
import { useSelector } from "react-redux";

const Todo = () => {

    const taskView = useSelector((state) => state.taskView);

    const renderContent = (state) => {
        switch(state) {
        case("EDIT"):
            return <>
                <Content/>
            </>;
        case("VIEW"):
            return <>
                <ViewTask/>
            </>;
        default:
            return <>
                <DefaultContent/>
            </>;
        };
    };
    
    return (
        <div className="md:overflow-hidden bg-zinc-100">
            <Layout>
                <Mobilebar/>
                <Sidebar/>
                {renderContent(taskView.showState)}
                <UserAccountButton/>
            </Layout>
            <Footer/>
        </div>
    );
};

export default Todo;