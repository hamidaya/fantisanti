import { useEffect, useState } from "react";

const Dashboard = () => {
    const [isAuth, toggleIsAuth] = useState(null);
    useEffect(() => {

        const loggedInUser = localStorage.getItem("authenticated");
        if (loggedInUser) {
            toggleIsAuth(loggedInUser);
        }
    }, []);

    if (!isAuth) {
        // Redirect
    } else {
        return (
            <div>
                <p>Welcome to your Dashboard</p>
            </div>
        );
    }
};

export default Dashboard;