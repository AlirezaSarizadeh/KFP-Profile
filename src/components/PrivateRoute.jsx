import { Navigate } from 'react-router-dom';

// PrivateRoute Component for protecting routes
const PrivateRoute = ({ children }) => {

    const token = localStorage.getItem('token');
    return token ? children : swal({
        title: "Login Required!",
        text: "Please Login First",
        icon: "error",
    }).then(() => {
        window.history.back();
    });

};
export default PrivateRoute;
