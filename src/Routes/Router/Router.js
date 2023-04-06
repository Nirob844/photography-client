import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import About from "../../Pages/About/About";
import Home from "../../Pages/Home/Home/Home";
import SignIn from "../../Pages/LoginRegister/SignIn/SignIn";
import SignUp from "../../Pages/LoginRegister/SignUp/SignUp";
import Services from "../../Pages/Services/Services";
import ServicesDetails from "../../Pages/Services/ServicesDetails";
import PrivateRoutes from "../PrivateRouts/PrivateRoutes";
import MyReviews from "../../Pages/Dashboard/MyReviews/MyReviews";
import AddServices from "../../Pages/Dashboard/AddService/AddServices";
import SlowService from "../../Pages/Dashboard/AddService/SlowService";
import Blogs from "../../Pages/Blogs/Blogs";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://photography-server-five.vercel.app/services/')
            },
            {
                path: '/services',
                element: <Services></Services>,
                loader: () => fetch('https://photography-server-five.vercel.app/services/')
            },
            {
                path: '/services/:id',
                element: <ServicesDetails></ServicesDetails>,
                loader: ({ params }) => fetch(`https://photography-server-five.vercel.app/services/${params.id}`)
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/blog',
                element: <Blogs></Blogs>
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
                path: '/slow-services',
                element: <PrivateRoutes><SlowService></SlowService></PrivateRoutes>,
            },
            {
                path: '/add-services',
                element: <PrivateRoutes><AddServices></AddServices></PrivateRoutes>,
            },

        ]
    }
])

export default router