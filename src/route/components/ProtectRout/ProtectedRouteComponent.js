import { Navigate } from "react-router-dom";
import { PATHS } from "../../../configs/RoutesConfig";
import { IS_LOGGED_IN } from "../../../configs/VariablesConfig"
import { MainLayout } from "../../../layouts";
import { DEFAULT_PROPS, PROP_TYPES } from "./ProtectedRouteConfig";


export const ProtectedRoute = (props) => {
    const isLoggedIn =localStorage.getItem(IS_LOGGED_IN) === 'true';

    if (isLoggedIn) {
        return <Navigate replace to={PATHS.DASHBOARD} />
    }

    const { Component , hasLayout } = props;
    console.log('private:',props)
    return (
        <>
            {hasLayout ?
                (<MainLayout> <Component /> </MainLayout>)
                :
                <Component />
            }
        </>
    )
}


ProtectedRoute.defaultProps = DEFAULT_PROPS;
ProtectedRoute.propTypes = PROP_TYPES;