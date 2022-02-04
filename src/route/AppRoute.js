import { Navigate, Route, Routes } from "react-router-dom";
import { PublicRoute } from "./components";
import { PATHS } from "../configs/RoutesConfig";
import { DashboardPage, OrdersPage, ProductManagementPage, StockPage } from "../pages/management";
import { HomePage, CardPage, CategoriesPage, FinalizePage, ResultPayingPage, ProductionUserPage } from "../pages/user";
export const AppRoute = () => {
    return (
        <Routes>
            <Route path={PATHS.HOME} 
            element={<PublicRoute 
            MyComponent={(props) => 
            <HomePage {...props} />} />} />;
            
            <Route path={PATHS.CARD} 
            element={<PublicRoute 
            MyComponent={(props) => 
            <CardPage {...props} />} />} />;
            
            <Route path={PATHS.CATEGORIES} 
            element={<PublicRoute 
            MyComponent={(props) => 
            <CategoriesPage {...props} />} />} />;
            
            <Route path={PATHS.FINALIZE} 
            element={<PublicRoute 
            MyComponent={(props) => 
            <FinalizePage {...props} />} />} />;
            
            <Route path={PATHS.PRODUCTION} 
            element={<PublicRoute 
            MyComponent={(props) => 
            <ProductionUserPage {...props} />} />} />;
            
            <Route path={PATHS.RESULT_PAYING} 
            element={<PublicRoute 
            MyComponent={(props) => 
            <ResultPayingPage {...props} />} />} />;
            
            <Route path={PATHS.DASHBOARD} 
            element={<PublicRoute 
            MyComponent={(props) => 
            <DashboardPage {...props} />} />} />;
            
            <Route path={PATHS.ORDERS} 
            element={<PublicRoute 
            MyComponent={(props) => 
            <OrdersPage {...props} />} />} />;
            
            <Route path={PATHS.PRODUCT_MANAGEMENT} 
            element={<PublicRoute 
            MyComponent={(props) => 
            <ProductManagementPage {...props} />} />} />;
            
            <Route path={PATHS.STOCK} 
            element={<PublicRoute 
            MyComponent={(props) => 
            <StockPage {...props} />} />} />;
            
        </Routes>
    )
}