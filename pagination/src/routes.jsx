import Layout from "./components/Layout/layout";
import { pageRoutes } from "./constants/pageRoutes";
import Homepage from "./pageRoutes/Homepage";

export const routes = [
    {
        path: pageRoutes.HOME,
        element: <Layout />,
        children: [
            {
                path: pageRoutes.HOME,
                element: <Homepage />,
            },
        ],
    },
]