import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthGoogleContext } from "../../contexts/authGoogle";



export const Login = () => {
    const { singInGoogle, signed, user } = useContext(AuthGoogleContext)



    async function loginGoogle() {
        await singInGoogle();
    }
    if(!signed){
        return <button onClick={() => singInGoogle()} >Logar com o google</button>;
    } else {
        return <Navigate to="/home" />;
    }
    
}