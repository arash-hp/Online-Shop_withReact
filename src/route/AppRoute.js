import { Navigate, Route, Routes } from "react-router-dom"
import { PATHS } from "../configs/RoutesConfig"
import { DashboardPage, OrdersPage, ProductManagementPage, StockPage } from "../pages/management"
import { HomePage, CardPage, CategoriesPage, FinalizePage, ResultPayingPage, ProductionUserPage } from "../pages/user"
export const AppRoute = () => {
    return (
        <Routes>
            <Route path={PATHS.HOME} element={<HomePage />} />
            <Route path={PATHS.CARD} element={<CardPage />} />
            <Route path={PATHS.CATEGORIES} element={<CategoriesPage />} />
            <Route path={PATHS.FINALIZE} element={<FinalizePage />} />
            <Route path={PATHS.PRODUCTION} element={<ProductionUserPage />} />
            <Route path={PATHS.RESULT_PAYING} element={<ResultPayingPage />} />
            <Route path={PATHS.DASHBOARD} element={<DashboardPage />} />
            <Route path={PATHS.ORDERS} element={<OrdersPage />} />
            <Route path={PATHS.PRODUCT_MANAGEMENT}
                element={<ProductManagementPage />} />
            <Route path={PATHS.STOCK} element={<StockPage />} />
        </Routes>
    )
}