import { Outlet } from "react-router-dom";
import { Header } from "../UI/Header";

export const Header_Footer = () => {
    return (
        <>
            <Header />
            <Outlet />

        </>
    );
}