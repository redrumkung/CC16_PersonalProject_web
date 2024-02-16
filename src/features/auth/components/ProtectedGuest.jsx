import useAuth from "../../../hooks/use-auth";

export default function ProtectedGuest({ children }) {
    const { authUser } = useAuth();

    if (!authUser) {
        return children; 
    }

    return null; 
}