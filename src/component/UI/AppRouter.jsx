import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router'
import { AuthContext } from '../../context'
import About from '../../pages/About'
import PostIdPage from '../../pages/PostIdPage'
import Posts from '../../pages/Posts'
import { publicRoutes, privateRoutes } from '../../router/routes'




function AppRouter() {
    const {isAuth, setIsAuth} =  useContext(AuthContext)
    return (

        <div>
            {isAuth
                ? <Routes> {privateRoutes.map(route =>

                    <Route
                        element={route.component}
                        path={route.path}
                        exact={route.exact}
                        key={route.path}
                    />
                )}
                </Routes>
                : <Routes> {publicRoutes.map(route =>

                    <Route
                        element={route.component}
                        path={route.path}
                        exact={route.exact}
                        key={route.path}
                    />


                )}

                </Routes>

            }
        </div>
    )
}

export default AppRouter

