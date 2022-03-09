import { Navigate, Route, Routes } from "react-router-dom";
import { PATHS } from "../configs/RoutesConfig";
import { DashboardPage, OrdersPage, SignInPage, StockPage } from '../pages/management/index';
import { CategoriesPage, FinalizePage, Home, ProductionUserPage, Result, ShoppingCartPage } from "../pages/user";
import { PrivateRoute, ProtectedRoute, PublicRoute } from "./components";
import { } from "./components/ProtectRout/ProtectedRouteComponent";

export const AppRoute = () => {
    return (
        <Routes>
            <Route path={PATHS.HOME} element={<PublicRoute
                Component={() =>
                    <Home />} />} />;

            <Route path={PATHS.PRODUCTION} element={<PublicRoute
                Component={() =>
                    <ProductionUserPage />} />} />;
            <Route path={PATHS.CATEGORY} element={<PublicRoute
                Component={() =>
                    <CategoriesPage />} />} />;

            <Route path={PATHS.FINALIZE} element={<PublicRoute
                Component={() =>
                    <FinalizePage />} />} />;
            <Route path={PATHS.SHOPPING_CART} element={<PublicRoute
                Component={() =>
                    <ShoppingCartPage />} />} />;
            <Route path={PATHS.RESULT} element={<PublicRoute
                Component={() =>
                    <Result />} />} />;

            {/* <Route path={PATHS.PRODUCTION} element={<PublicRoute
                Component={() =>
                    <ProductionUserPage />} />} />; */}
       
            <Route path={PATHS.DASHBOARD} element={<PrivateRoute
                Component={() => <DashboardPage />} />} />;

            <Route path={PATHS.STOCK} element={<PrivateRoute
                Component={() => <StockPage />} />} />;

            <Route path={PATHS.ORDERS} element={<PrivateRoute
                Component={() => <OrdersPage />} />} />;

            <Route path={PATHS.LOGIN} element={<ProtectedRoute
                Component={() =>
                    <SignInPage />} />} />;

            <Route path={PATHS.NAVIGATE} element={<Navigate to={PATHS.HOME} />} />

        </Routes>

    )
}