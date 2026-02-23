import { Route, Routes } from "react-router-dom";
import { Home } from './../Pages/Home';
import { Counter } from './../Pages/Counter';
import { Todo } from './../Pages/Todo';
import { About } from './../Pages/About';
import { User } from './../Pages/User';

export const AllRoutes = () => {
    return (
        <>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/" element={<Counter/>}></Route>
            <Route path="/" element={<Todo/>}></Route>
            <Route path="/" element={<About/>}></Route>
            <Route
            path="/user"
            element={
                <PrivateRoutes>
                    <User/>
                </PrivateRoutes>
            }

            ></Route>
            <Route path="/login" element={<Login/>}></Route>
            
        </Routes>
        </>
    );
};