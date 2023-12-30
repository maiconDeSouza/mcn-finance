import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layout";
import { Transactions } from "../pages/Transactions";
import { Categories } from "../pages/Categories";
import { Historic } from "../pages/Historic";

export const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                element: <Transactions />,
                path: "/"
            },
            {
                element: <Categories />,
                path: "/categories"
            },
            {
                element: <Historic />,
                path: "/historic"
            }
        ]
    }
])