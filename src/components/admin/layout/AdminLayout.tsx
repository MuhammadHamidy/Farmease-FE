import { defineComponent, type PropType } from 'vue';
import AdminSidebar, { type AdminNavItem } from './AdminSidebar';
import AdminHeader from './AdminHeader';
import '../../../assets/css/modules/admin/AdminLayout.css';

export default defineComponent({
  name: 'AdminLayout',
  props: {
    activeTab: { type: String, required: true },
    pageTitle: { type: String, required: true },
    navItems: { type: Array as PropType<AdminNavItem[]>, required: true },
    userName: { type: String, default: 'Administrator' },
    onNavigate: { type: Function as PropType<(id: string) => void>, required: true },
    onLogout: { type: Function as PropType<() => void>, required: true },
  },
  setup(props, { slots }) {
    return () => (
      <div class="admin-shell">
        <AdminSidebar
          items={props.navItems}
          activeId={props.activeTab}
          onNavigate={props.onNavigate}
        />

        <div class="admin-main">
          <AdminHeader
            pageTitle={props.pageTitle}
            userName={props.userName}
            onLogout={props.onLogout}
          />
          <main class="admin-main-content">{slots.default?.()}</main>
        </div>
      </div>
    );
  },
});
