import React from 'react';

export const Sidebar = ({ showSidebar }) => {
  return (
    <div id="sidebar-wrapper" data-simplebar="" data-simplebar-auto-hide="true">
      <div className="brand-logo">
        <a href="index.html">
          <img src="./assets/images/logo-icon.png" className="logo-icon" alt="logo icon" />
          <h5 className="logo-text">Dashtreme Admin</h5>
        </a>
      </div>
      <ul className="sidebar-menu do-nicescroll">
        <li className="sidebar-header">MAIN NAVIGATION</li>
        <SidebarItem iconClass="zmdi zmdi-view-dashboard" text="Dashboard" link="index.html" />

        <SidebarItem iconClass="zmdi zmdi-invert-colors" text="UI Icons" link="icons.html" />

        <SidebarItem iconClass="zmdi zmdi-format-list-bulleted" text="Forms" link="forms.html" />

        <SidebarItem iconClass="zmdi zmdi-grid" text="Tables" link="tables.html" />

        <SidebarItem iconClass="zmdi zmdi-calendar-check" text="Calendar" link="calendar.html" badge="New" />

        <SidebarItem iconClass="zmdi zmdi-face" text="Profile" link="profile.html" />

        <SidebarItem iconClass="zmdi zmdi-lock" text="Login" link="login.html" target="_blank" />

        <SidebarItem iconClass="zmdi zmdi-account-circle" text="Registration" link="register.html" target="_blank" />

        <li className="sidebar-header">LABELS</li>
        <SidebarItem iconClass="zmdi zmdi-coffee text-danger" text="Important" />

        <SidebarItem iconClass="zmdi zmdi-chart-donut text-success" text="Warning" />

        <SidebarItem iconClass="zmdi zmdi-share text-info" text="Information" />
      </ul>
    </div>
  );
};

const SidebarItem = ({ iconClass, text, link, target, badge }) => {
  return (
    <li>
      <a href={link} target={target} style={{ display: 'flex', cursor: 'pointer' }}>
        <i className={iconClass}></i> <span>{text}</span>
        {badge && <small className="badge float-right badge-light">{badge}</small>}
      </a>
    </li>
  );
};

