import Home from "../pages/Home/Home";

const publicRoutes = [
    {
        path: "/",
        element: <Home />
    }
];

const privateRoutes = [
    {
        path: "/chats",
        element: ""
    }
]


export {
    publicRoutes,
    privateRoutes
}