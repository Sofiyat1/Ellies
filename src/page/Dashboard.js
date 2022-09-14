import React, {useEffect, useState} from 'react';
import { Navigate } from "react-router-dom";
import './Foodapp.css';

const Dashboard = () => {
    const [authenticated, setauthenticated] = useState(null);
    useEffect(() => {
      const loggedInUser = localStorage.getItem("authenticated");
      if (loggedInUser) {
        setauthenticated(loggedInUser);
      }
    }, []);
    if (!authenticated) {
    // Redirect
    return <Navigate replace to="/login" />;
    } else {
    return (
    <div>
        <h3>Welcome to the Dashboard<br>All Our Menus are here</br></h3>
    </div>
    );
}
};

export default Dashboard;