import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import DashboardOverview from './pages/DashboardOverview';

const placeholderPages = {
  properties: 'Bất động sản',
  assets: 'Tài sản',
  tenants: 'Cư dân',
  contracts: 'Hợp đồng',
  invoices: 'Hóa đơn',
  reports: 'Báo cáo',
};

function PlaceholderPage({ title }) {
  return (
    <section className="placeholder-page">
      <p className="eyebrow">Đang phát triển</p>
      <h1>{title}</h1>
      <p>Chức năng này sẽ được bổ sung trong các bước tiếp theo.</p>
    </section>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<DashboardOverview />} />
          {Object.entries(placeholderPages).map(([path, title]) => (
            <Route key={path} path={path} element={<PlaceholderPage title={title} />} />
          ))}
        </Route>
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
