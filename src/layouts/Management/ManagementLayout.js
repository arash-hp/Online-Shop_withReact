import { FooterComponent, HeaderComponent } from "./components"

export const ManagementLayout = (props) => {
    return <>
        <HeaderComponent />
            {props.children}
        <FooterComponent />
    </>
}