import axios from "axios";
import { useRouter } from "next/router";

const Login = () => {

    const router = useRouter();

    const loginPost = async() => {
        try {
            const post = {
                "email": "john@gmail.com",
                "password": "password",
            };
            const response = await axios.post("http://localhost:3000/api/v1/users/login", post, { withCredentials: true });
            console.log(response.data);
        } catch(e) {
            console.error(e.response);
        }
    };

    const refresh = async () => {
        try {
            const response = await axios.get("http://localhost:3000/api/v1/users/refresh", {  withCredentials: true  });
            console.log(response.data);
        } catch(e) {
            console.error(e.response.data);
        }
    };

    return (
        <div className="flex items-center justify-center place-content-center place-self-center" id="temporary">
            <button className="px-5 py-2 bg-red-500 rounded-lg hover:bg-red-700" onClick={() => loginPost()}>
                Login
            </button>
            <button className="px-5 py-2 bg-red-500 rounded-lg hover:bg-red-700" onClick={() => refresh()}>
                Register
            </button>
        </div>
    );
};

export default Login;
