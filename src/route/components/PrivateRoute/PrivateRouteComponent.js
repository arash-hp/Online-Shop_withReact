import { Navigate } from "react-router-dom";
import { PATHS } from "../../../configs/RoutesConfig";
import { MainLayout } from "../../../layouts";

const HasLayout = ({ MyComponent, flag }) => {
    const isLoggedIn = JSON.parse(localStorage.getItem('IS_LOGGED_IN'));

    if (!isLoggedIn) {
        return <Navigate replace to={PATHS.LOGIN} />
    } else {
        return (
            flag ?
                <MainLayout>
                    <MyComponent />
                </MainLayout> :
                <MyComponent />)
    }
}

export const PrivateRout = ({ MyComponent, flag }) => {
    return <HasLayout MyComponent={MyComponent} flag={flag} />
}