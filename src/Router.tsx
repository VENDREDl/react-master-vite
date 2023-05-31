import { BrowserRouter, Route, Routes, createBrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Home from "./screens/Home";
import About from "./screens/About";
import Root from "./Root";
import NotFound from "./screens/NotFound";
import Detail from "./screens/Details/Detail";
import BookDetail from "./screens/Details/BookDetail";
import Chapter from "./screens/Details/Chapter";
import Character from "./screens/Details/Character";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "author/:name",
                element: <Detail />,
                children: [
                    {
                        path: ":book",
                        element: <BookDetail />,
                        children: [  
                            {
                                path: ":chapters",
                                element: <Chapter />
                            },
                            {
                                path: ":characters",
                                element: <Character />
                            },
                        ]
                    }
                ]
            },
        ],
        errorElement: <NotFound />
    }
])

export default router;