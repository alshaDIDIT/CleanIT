import StyledLoginForm from "../styles/StyledLoginForm";
import CenteredPage from "../styles/CenteredPage";
import {Link} from "react-router-dom";

const LoginForm = () => {

    return(
        <CenteredPage>
            <h1>Login to CleanIT</h1>
            <StyledLoginForm>
                <input type="text" placeholder="Username"/>
                <input type="password" placeholder="Password"/>
                <div>
                    <button>Login</button>
                    <Link to="/register">Register</Link>
                </div>
            </StyledLoginForm>
        </CenteredPage>
    );
}

export default LoginForm;
