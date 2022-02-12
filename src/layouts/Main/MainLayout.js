import { HeaderComponent } from "./components";
import { FooterComponent } from "./components";

export const MainLayout = (props) => {
    console.log('layouuuut',props)
    return <>

        <HeaderComponent />
         {props.children}
        <FooterComponent />
    </>
}