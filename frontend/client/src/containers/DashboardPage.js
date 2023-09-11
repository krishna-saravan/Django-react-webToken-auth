import Layout from "../components/Layout";
import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";

const DashboardPage = () => {

    const {isAuthenticated,user, loading} = useSelector(state => state.user)

    if(!isAuthenticated && !loading && user === null){
        return <Navigate to='/login'/>;
    }

    return (
        <Layout title= ' Auth Site | Dashoboard' content= 'Dashboard Page'>

            {loading || user === null? (
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            ):(
                <>
                    <h1 className= 'mb-5'> DashBoard Page </h1>
                    <p> User Details</p>
                    <ul>
                        <li> First Name: {user.first_name}</li>
                        <li> Last Name: {user.last_name}</li>
                        <li> contact: {user.email}</li>
                    </ul>
                </>
            )}

        </Layout>
    )
}

export default DashboardPage;