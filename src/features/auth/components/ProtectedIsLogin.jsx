import useAuth from "../../../hooks/use-auth";

export default function ProtectedIsLogin({ children }) {
    const { authUser } = useAuth();

    if (!authUser) {
        return null; 
    }

    return children; 
}