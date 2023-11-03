import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import s from './SharedLayout.module.css';


const SharedLayout = () => {
    return <div className={s.conteiner}>
    <header className={s.header}>
        <nav>
            <ul className={s.list}>
                <li className={s.list}>
                    <NavLink to="/" className={s.link}>Home</NavLink>
                </li>
                <li className={s.list}>
                    <NavLink to="/movies" className={s.link}>Movies</NavLink>
                </li>
            </ul>
        </nav>
        </header>
        <main>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet/>
            </Suspense>
        </main>
    </div> 
}

export default SharedLayout;