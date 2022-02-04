import { HeaderComponent } from "./components";

export const MainLayout = (props) => {
    return <>
        <HeaderComponent />
        {props.children}
    </>
}