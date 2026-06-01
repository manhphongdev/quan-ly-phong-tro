import {Navigate, Route, Routes} from "react-router-dom";
import MainLayout from "./shared/components/MainLayout.jsx";
import DashboardOverview from "./pages/DashboardOverview.jsx";
import TenantsListPage from "./features/tenants/pages/TenantsListPage.jsx";
import TenantDetailPage from "./features/tenants/pages/TenantDetailPage.jsx";
import RoomsPage from "./features/rooms/pages/RoomsPage.jsx";
import RoomDetailPage from "./features/rooms/pages/RoomDetailPage.jsx";

const appRoutes = [
    {path: "dashboard", element: <DashboardOverview/>},
    {path: "rooms", element: <RoomsPage></RoomsPage>},
    {path: "rooms/:id", element: <RoomDetailPage/>},
    {path: "tenants", element: <TenantsListPage/>},
    {path: "tenants/:id", element: <TenantDetailPage/>},
];

export default function PageRouter() {
    return (
        <Routes>
            <Route element={<MainLayout/>}>
                <Route index element={<Navigate to="/dashboard" replace/>}/>

                {appRoutes.map(({path, element}) => (
                    <Route key={path} path={path} element={element}/>
                ))}
            </Route>
            <Route path="*" element={<Navigate to="/dashboard" replace/>}/>
        </Routes>
    )
}
