import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import About from "../../Pages/About/About";
import Home from "../../Pages/Home/Home/Home";
import SignIn from "../../Pages/LoginRegister/SignIn/SignIn";
import SignUp from "../../Pages/LoginRegister/SignUp/SignUp";
import ServiceCart from "../../Pages/Services/ServiceCart";
import Services from "../../Pages/Services/Services";
import ServicesDetails from "../../Pages/Services/ServicesDetails";
import PrivateRoutes from "../PrivateRouts/PrivateRoutes";
import MyReviews from "../../Pages/Dashboard/MyReviews/MyReviews";
import AddService from "../../Pages/Dashboard/AddService/AddService";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/services/')
            },
            {
                path: '/services',
                element: <Services></Services>,
                loader: () => fetch('http://localhost:5000/services/')
            },
            {
                path: '/services/:id',
                element: <ServicesDetails></ServicesDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/register',
                element: <SignUp></SignUp>
            },
            {
                path: '/login',
                element: <SignIn></SignIn>
            },
            {
                path: '/my-reviews',
                element: <PrivateRoutes><MyReviews></MyReviews></PrivateRoutes>,
            },
            {
                path: '/add-services',
                element: <PrivateRoutes><AddService></AddService></PrivateRoutes>,
            },

        ]
    }
])

export default router