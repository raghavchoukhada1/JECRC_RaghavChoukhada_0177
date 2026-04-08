import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from './features/auth/authSlice';
import { clearNotification, setActiveTab } from './features/ui/uiSlice';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';

export default function App() {
  const dispatch  = useDispatch();
  const isAuth    = useSelector(s => s.auth.isAuthenticated);
  const user      = useSelector(s => s.auth.user);
  const role      = useSelector(s => s.auth.role);
  const notif     = useSelector(s => s.ui.notification);
  const activeTab = useSelector(s => s.ui.activeTab);
  const employees = useSelector(s => s.employees.list);

  const [showForm, setShowForm] = useState(false);

  // Auto-clear notification
  useEffect(() => {
    if (notif) {
      const t = setTimeout(() => dispatch(clearNotification()), 3500);
      return () => clearTimeout(t);
    }
  }, [notif, dispatch]);

  if (!isAuth) return <LoginForm />;

  const NOTIF_COLOR = { success:'#10b981', error:'#ef4444', info:'#3b82f6' };

  return (
    <div style={a.shell}>
      {/* Sidebar */}
      <aside style={a.sidebar}>
        <div style={a.logo}>
          <div style={a.logoBox}>
            <svg width="22" height="22" viewBox="0 0 28 28" fill="none">
              <rect width="12" height="12" x="2" y="2" rx="3" fill="#3b82f6"/>
              <rect width="12" height="12" x="14" y="2" rx="3" fill="#06b6d4" opacity="0.7"/>
              <rect width="12" height="12" x="2" y="14" rx="3" fill="#06b6d4" opacity="0.7"/>
              <rect width="12" height="12" x="14" y="14" rx="3" fill="#3b82f6"/>
            </svg>
          </div>
          <span style={a.brandName}>EmpDesk</span>
        </div>

        <nav style={a.nav}>
          {[
            { id:'dashboard', icon:'🏠', label:'Dashboard' },
            { id:'employees', icon:'👥', label:'Employees' },
            { id:'analytics', icon:'📊', label:'Analytics' },
            { id:'settings',  icon:'⚙️', label:'Settings'  },
          ].map(item => (
            <button key={item.id} onClick={() => dispatch(setActiveTab(item.id))}
              style={{...a.navItem, ...(activeTab===item.id ? a.navActive : {})}}>
              <span style={a.navIcon}>{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        {/* User Card */}
        <div style={a.userCard}>
          <div style={a.userAvatar}>{user?.[0]?.toUpperCase()}</div>
          <div style={{flex:1, minWidth:0}}>
            <div style={a.userName}>{user}</div>
            <div style={{...a.userRole, color: role==='admin' ? '#3b82f6' : '#10b981'}}>
              {role}
            </div>
          </div>
          <button onClick={() => dispatch(logout())} style={a.logoutBtn} title="Logout">↩</button>
        </div>
      </aside>

      {/* Main */}
      <main style={a.main}>
        {/* Topbar */}
        <div style={a.topbar}>
          <div>
            <h1 style={a.pageTitle}>
              {activeTab === 'dashboard' && 'Dashboard'}
              {activeTab === 'employees' && 'Employees'}
              {activeTab === 'analytics' && 'Analytics'}
              {activeTab === 'settings'  && 'Settings'}
            </h1>
            <p style={a.pageDate}>
              {new Date().toLocaleDateString('en-IN',{weekday:'long',year:'numeric',month:'long',day:'numeric'})}
            </p>
          </div>
          {(activeTab === 'dashboard' || activeTab === 'employees') && role === 'admin' && (
            <button onClick={() => setShowForm(true)} style={a.addBtn}>
              + Add Employee
            </button>
          )}
        </div>

        {/* Content */}
        <div style={a.content}>
          {(activeTab === 'dashboard' || activeTab === 'employees') && (
            <EmployeeList onEdit={() => setShowForm(true)} />
          )}
          {activeTab === 'analytics' && (
            <div style={a.placeholder}>
              <span style={{fontSize:48}}>📊</span>
              <h2 style={{fontFamily:"'Syne',sans-serif", fontSize:22, color:'#f1f5f9', marginTop:12}}>Analytics Coming Soon</h2>
              <p style={{color:'#475569', fontSize:14, marginTop:6}}>Charts and reports will appear here.</p>
            </div>
          )}
          {activeTab === 'settings' && (
            <div style={a.placeholder}>
              <span style={{fontSize:48}}>⚙️</span>
              <h2 style={{fontFamily:"'Syne',sans-serif", fontSize:22, color:'#f1f5f9', marginTop:12}}>Settings</h2>
              <p style={{color:'#475569', fontSize:14, marginTop:6}}>App configuration options.</p>
            </div>
          )}
        </div>
      </main>

      {/* Employee Form Modal */}
      {showForm && <EmployeeForm onClose={() => setShowForm(false)} />}

      {/* Toast Notification */}
      {notif && (
        <div style={{...a.toast, borderColor: NOTIF_COLOR[notif.type], background:`${NOTIF_COLOR[notif.type]}15`}}>
          <span style={{color: NOTIF_COLOR[notif.type], fontWeight:700}}>
            {notif.type === 'success' ? '✅' : notif.type === 'error' ? '❌' : 'ℹ️'}
          </span>
          <span style={{color:'#f1f5f9', fontSize:13}}>{notif.message}</span>
        </div>
      )}
    </div>
  );
}

const a = {
  shell: { display:'flex', height:'100vh', overflow:'hidden', background:'#0a0e1a' },

  // Sidebar
  sidebar: {
    width:220, background:'#111827', borderRight:'1px solid #1e2d45',
    display:'flex', flexDirection:'column', padding:'24px 16px', flexShrink:0,
  },
  logo: { display:'flex', alignItems:'center', gap:10, marginBottom:36, paddingLeft:4 },
  logoBox: { width:38, height:38, background:'#0a0e1a', border:'1px solid #1e2d45', borderRadius:10, display:'flex', alignItems:'center', justifyContent:'center' },
  brandName: { fontFamily:"'Syne',sans-serif", fontSize:18, fontWeight:800, color:'#f1f5f9' },
  nav: { display:'flex', flexDirection:'column', gap:4, flex:1 },
  navItem: {
    display:'flex', alignItems:'center', gap:10, padding:'10px 14px', borderRadius:10,
    background:'none', border:'none', color:'#94a3b8', cursor:'pointer',
    fontSize:13, fontFamily:"'DM Sans',sans-serif", fontWeight:500,
    textAlign:'left', transition:'all .15s',
  },
  navActive: { background:'#3b82f620', color:'#3b82f6' },
  navIcon: { fontSize:16, width:20, textAlign:'center' },
  userCard: {
    display:'flex', alignItems:'center', gap:10, background:'#0a0e1a',
    border:'1px solid #1e2d45', borderRadius:12, padding:'12px',
  },
  userAvatar: {
    width:34, height:34, borderRadius:9, background:'linear-gradient(135deg,#3b82f6,#06b6d4)',
    display:'flex', alignItems:'center', justifyContent:'center',
    fontSize:14, fontWeight:700, color:'#fff', flexShrink:0,
  },
  userName: { fontSize:13, fontWeight:600, color:'#f1f5f9', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' },
  userRole: { fontSize:11, fontWeight:600, textTransform:'uppercase', letterSpacing:0.5 },
  logoutBtn: { background:'none', border:'none', color:'#94a3b8', cursor:'pointer', fontSize:16, padding:4 },

  // Main
  main: { flex:1, display:'flex', flexDirection:'column', overflow:'hidden' },
  topbar: {
    display:'flex', justifyContent:'space-between', alignItems:'center',
    padding:'24px 32px 20px', borderBottom:'1px solid #1e2d45', flexShrink:0,
  },
  pageTitle: { fontFamily:"'Syne',sans-serif", fontSize:24, fontWeight:800, color:'#f1f5f9' },
  pageDate: { fontSize:12, color:'#475569', marginTop:3 },
  addBtn: {
    padding:'10px 22px', background:'linear-gradient(135deg,#3b82f6,#06b6d4)',
    border:'none', borderRadius:10, color:'#fff', fontSize:13, fontWeight:700,
    cursor:'pointer', fontFamily:"'Syne',sans-serif",
    boxShadow:'0 4px 14px #3b82f640',
  },
  content: { flex:1, overflowY:'auto', padding:'28px 32px' },
  placeholder: {
    display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center',
    height:300, background:'#111827', border:'1px solid #1e2d45', borderRadius:16,
  },

  // Toast
  toast: {
    position:'fixed', bottom:28, right:28, display:'flex', alignItems:'center', gap:10,
    background:'#111827', border:'1px solid', borderRadius:12,
    padding:'14px 20px', boxShadow:'0 8px 32px rgba(0,0,0,0.4)', zIndex:2000,
    animation:'slideIn .3s ease', maxWidth:360,
  },
};