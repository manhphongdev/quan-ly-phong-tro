import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

const menuItems = [
    { to: '/dashboard', label: 'Tổng quan' },
    { to: '/properties', label: 'Bất động sản' },
    { to: '/assets', label: 'Tài sản' },
    { to: '/tenants', label: 'Cư dân' },
    { to: '/contracts', label: 'Hợp đồng' },
    { to: '/invoices', label: 'Hóa đơn' },
    { to: '/reports', label: 'Báo cáo' },
];

function Sidebar() {
    return (
        <aside className="sidebar">
            <div className="sidebar-brand">
                <span className="brand-mark">RM</span>
                <span>RentMaster</span>
            </div>

            <Nav as="nav" className="sidebar-nav" aria-label="Điều hướng chính">
                {menuItems.map((item) => (
                    <NavLink
                        key={item.to}
                        to={item.to}
                        className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                    >
                        {item.label}
                    </NavLink>
                ))}
            </Nav>
        </aside>
    );
}

export default Sidebar;