import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import clsx from 'clsx';
import { AnalyticsIcon, DashboardIcon, PagesIcon, ThemesIcon, SettingsIcon, CollapseButtonIcon } from '../ui/Icons';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    clsx(
      'block px-4 py-2 text-sm rounded-sm transition-colors whitespace-nowrap',
      isActive ? 'text-primary bg-secondary font-semibold' : 'text-gray-700 hover:bg-gray-100',
      collapsed && 'text-center px-2'
    );

  return (
    <aside
      className={clsx(
        'sticky top-0 h-screen flex-shrink-0 bg-white shadow-md border-r border-gray-300 flex flex-col transition-all duration-300',
        collapsed ? 'w-16' : 'w-60'
      )}
    >
      <nav>
        <div className="flex items-center justify-between border-b h-16 px-4 border-gray-300">
          {!collapsed && (
            <Link to="/" className="text-xl font-bold">
              404<span className="text-primary">magic</span>
            </Link>
          )}
          <button
            className="border p-[0.1rem] rounded-sm shadow-xs cursor-pointer border-gray-300"
            onClick={() => setCollapsed(!collapsed)}
          >
            <CollapseButtonIcon/>
          </button>
        </div>
        <ul className={clsx('space-y-1 border-gray-300 mt-8', collapsed ? 'px-2' : 'px-4')}>
          <li>
            <NavLink to="/dashboard" end className={linkClasses}>
              {collapsed ? <div><DashboardIcon /></div> : <div className='flex items-center gap-4'><DashboardIcon/> Dashboard</div>}
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/404pages" className={linkClasses}>
              {collapsed ? <div><PagesIcon /></div> : <div className='flex items-center gap-4'><PagesIcon/> 404 Pages</div>}
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/analytics" className={linkClasses}>
              {collapsed ? <div><AnalyticsIcon /></div> : <div className='flex items-center gap-4'><AnalyticsIcon/> Analytics</div>}
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/themes" className={linkClasses}>
              {collapsed ? <div><ThemesIcon /></div> : <div className='flex items-center gap-4'><ThemesIcon/> Themes</div>}
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/settings" className={linkClasses}>
              {collapsed ? <div><SettingsIcon /></div> : <div className='flex items-center gap-4'><SettingsIcon/> Settings</div>}
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
