import { Bounce, ToastContainer as TC } from "react-toastify";

export default function ToastContainer(){
  return(
    <TC
      position="top-right"
      autoClose={3000}
      hideProgressBar
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      transition={Bounce}
    />
  );
}