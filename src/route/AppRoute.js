import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { PublicRoute, ProtectedRoute ,PrivateRoute } from "./components";
import { PATHS } from "../configs/RoutesConfig";
import { Home, CardPage, CategoriesPage, FinalizePage, ResultPayingPage, ProductionUserPage } from "../pages/user";
import { DashboardPage, LoginPage } from '../pages/management/index';
import {  } from "./components/ProtectRout/ProtectedRouteComponent";

export const AppRoute = () => {
    return (
        <Routes>
            <Route path={PATHS.HOME} element={<PublicRoute
                Component={() =>
                    <Home />} />} />;

            <Route path={PATHS.CARD} element={<PublicRoute
                Component={() =>
                    <CardPage />} />} />;

            <Route path={PATHS.CATEGORIES} element={<PublicRoute
                Component={() =>
                    <CategoriesPage />} />} />;

            <Route path={PATHS.FINALIZE} element={<PublicRoute
                Component={() =>
                    <FinalizePage />} />} />;

            <Route path={PATHS.PRODUCTION} element={<PublicRoute
                Component={() =>
                    <ProductionUserPage />} />} />;

            <Route path={PATHS.RESULT_PAYING} element={<PrivateRoute
                Component={() =>
                    <ResultPayingPage />} />} />;

            <Route path={PATHS.DASHBOARD} element={<PrivateRoute
                Component={() => <DashboardPage />} />} />;

            <Route path={PATHS.LOGIN} element={<ProtectedRoute
                Component={() =>
                    <LoginPage />} />} />;

            <Route path={PATHS.NAVIGATE} element={<Navigate to={PATHS.HOME} />} />

        </Routes>

    )
}