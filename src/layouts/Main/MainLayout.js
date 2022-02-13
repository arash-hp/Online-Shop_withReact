import { HeaderComponent } from "./components";
import { FooterComponent } from "./components";

export const MainLayout = (props) => {
    return <>

        <HeaderComponent />
         {props.children}
        <FooterComponent />
    </>
}