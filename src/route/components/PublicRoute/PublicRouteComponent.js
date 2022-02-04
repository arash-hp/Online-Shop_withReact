import { MainLayout } from "../../../layouts"

export const PublicRoute = ({ MyComponent, flag }) => {
    return <>
        <MainLayout>
            <MyComponent />
        </MainLayout>
    </>
}
