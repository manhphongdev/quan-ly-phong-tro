import {NavLink} from 'react-router-dom';
import './Sidebar.css'
import {CarFront, Grid3X3, LayoutDashboard, Users,} from 'lucide-react';

const menuItems = [
    {to: '/dashboard', label: 'Tổng quan', icon: LayoutDashboard},
    {to: '/rooms', label: 'Lưới phòng', icon: Grid3X3},
    {to: '/tenants', label: 'Cư dân', icon: Users},
    {to: '/vehicles', label: 'Phương tiện', icon: CarFront},
];

function SidebarItem({to, label, icon: Icon}) {
    return (
        <NavLink
            to={to}
            className={({isActive}) =>
                `nav-link d-flex align-items-center gap-2 ${isActive ? 'active' : 'text-dark'}`
            }
        >
            <Icon className="sidebar-link-icon" size={20} strokeWidth={2.2}/>
            <span>{label}</span>
        </NavLink>
    );
}

function Sidebar() {
    return (
        <aside className="sidebar">
            <div className="sidebar-header">
                <h2 className="sidebar-title">Hola Management</h2>
            </div>

            <nav className="sidebar-nav">
                {menuItems.map((item) => (
                    <SidebarItem key={item.to} {...item} />
                ))}
            </nav>

            <div className="sidebar-user">
                <img
                    className="sidebar-avatar"
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80"
                    alt="Manager User"
                />
                <div className="sidebar-user-info">
                    <strong>Manager</strong>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;