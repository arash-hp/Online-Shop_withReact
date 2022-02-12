import { MainLayout } from "../../../layouts"

export const PublicRoute = ({Component}) => {
    return <>
        <MainLayout>
            <Component />
        </MainLayout>
    </>
}
