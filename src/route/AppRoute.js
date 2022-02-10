import { Navigate, Route, Routes } from "react-router-dom";
import { PublicRoute } from "./components";
import { PATHS } from "../configs/RoutesConfig";
import { DashboardPage, OrdersPage, ProductManagementPage, StockPage, LoginPage } from "../pages/management";
import { Home, CardPage, CategoriesPage, FinalizePage, ResultPayingPage, ProductionUserPage } from "../pages/user";
import { PrivateRout } from "./components/PrivateRoute/PrivateRouteComponent";
export const AppRoute = () => {
    return (
        <Routes>
            <Route path={PATHS.HOME}
                element={<PublicRoute
                    MyComponent={() =>
                        <Home />} />} />;

            <Route path={PATHS.CARD}
                element={<PublicRoute
                    MyComponent={() =>
                        <CardPage />} />} />;

            <Route path={PATHS.CATEGORIES}
                element={<PublicRoute
                    MyComponent={() =>
                        <CategoriesPage />} />} />;

            <Route path={PATHS.FINALIZE}
                element={<PublicRoute
                    MyComponent={() =>
                        <FinalizePage />} />} />;

            <Route path={PATHS.PRODUCTION}
                element={<PublicRoute
                    MyComponent={() =>
                        <ProductionUserPage />} />} />;

            <Route path={PATHS.RESULT_PAYING}
                element={<PublicRoute
                    MyComponent={() =>
                        <ResultPayingPage />} />} />;

            <Route path={PATHS.DASHBOARD}
                element={<PrivateRout
                    MyComponent={() =>
                        <DashboardPage />} />} />;

            <Route path={PATHS.ORDERS}
                element={<PrivateRout
                    MyComponent={() =>
                        <OrdersPage />} />} />;

            <Route path={PATHS.PRODUCT_MANAGEMENT}
                element={<PrivateRout
                    MyComponent={() =>
                        <ProductManagementPage />} />} />;

            <Route path={PATHS.STOCK}
                element={<PrivateRout
                    MyComponent={() =>
                        <StockPage />} />} />;

            <Route path={PATHS.LOGIN}
                element={<PublicRoute
                    MyComponent={() =>
                        <LoginPage />} />} />;

            <Route path={PATHS.NAVIGATE}
                element={<Navigate to={PATHS.HOME} />} />

        </Routes>
    )
}