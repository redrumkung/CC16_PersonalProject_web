import { Slide, ToastContainer } from "react-toastify";
import Router from "./routes";
import useAuth from "./hooks/use-auth";
import Spinner from "./components/Spinner";

function App() {
  const { initiailLoading } = useAuth();

  if (initiailLoading) return <Spinner />;
  return (
    <>
      <Router />
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        theme="colred"
        transition={Slide}
      />
    </>
  );
}

export default App;
