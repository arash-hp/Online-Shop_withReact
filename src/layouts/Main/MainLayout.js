import { Header } from "./components";
import { FooterComponent } from "./components";

export const MainLayout = (props) => {
    return <>

        <Header />
         {props.children}
        <FooterComponent />
    </>
}