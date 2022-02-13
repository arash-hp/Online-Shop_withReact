import { DEFAULT_PROPS, PROP_TYPES } from "./PrivateRouteConfig";
import { Navigate } from "react-router-dom";
import { PATHS } from "../../../configs/RoutesConfig";
import { IS_LOGGED_IN } from "../../../configs/VariablesConfig";
import { ManagementLayout } from "../../../layouts";

export const PrivateRoute = (props) => {
    const isLoggedIn =localStorage.getItem(IS_LOGGED_IN) === 'true';

    if (!isLoggedIn) {
        return <Navigate replace to={PATHS.LOGIN} />
    }

    const { Component , hasLayout } = props;
    return (
        <>
            {hasLayout ?
                (<ManagementLayout> <Component /> </ManagementLayout>)
                :
                <Component />
            }
        </>
    )
}

PrivateRoute.defaultProps = DEFAULT_PROPS;
PrivateRoute.propTypes = PROP_TYPES;
