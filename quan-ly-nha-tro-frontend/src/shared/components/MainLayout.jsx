import {Outlet} from 'react-router-dom';
import Sidebar from './sidebar/Sidebar.jsx';

function MainLayout() {
    return (
        <div className="d-flex">
            <Sidebar/>
            <main className="flex-grow-1 p-4">
                <Outlet/>
            </main>
        </div>
    );
}

export default MainLayout;