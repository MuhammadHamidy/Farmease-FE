import { defineComponent, type PropType } from 'vue';
import NavItem from '../../ui/admin/NavItem';
import Badge from '../../ui/admin/Badge';

export type AdminNavItem = {
  id: string;
  label: string;
  icon?: () => unknown;
  badge?: number;
};

export default defineComponent({
  name: 'AdminSidebar',
  props: {
    items: { type: Array as PropType<AdminNavItem[]>, required: true },
    activeId: { type: String, required: true },
    onNavigate: { type: Function as PropType<(id: string) => void>, required: true },
  },
  setup(props) {
    return () => (
      <aside class="admin-sidebar">
        <div class="admin-sidebar-brand">
          <img src="/icon/logo_farmease.png" alt="FARMease" class="admin-sidebar-logo" />
          <div>
            <span class="admin-sidebar-brand-title">FARMease</span>
            <span class="admin-sidebar-brand-sub">Panel Admin</span>
          </div>
        </div>

        <nav class="admin-sidebar-nav">
          {props.items.map((item) => (
            <div
              key={item.id}
              class="admin-sidebar-nav-item"
              onClick={() => props.onNavigate(item.id)}
            >
              <NavItem text={item.label} active={props.activeId === item.id} icon={item.icon} />
              {item.badge && item.badge > 0 ? (
                <span class="admin-sidebar-badge-wrap">
                  <Badge variant="danger">{item.badge}</Badge>
                </span>
              ) : null}
            </div>
          ))}
        </nav>

        <div class="admin-sidebar-footer">
          <span class="small text-muted">Say Hi Agro Farm · Admin</span>
        </div>
      </aside>
    );
  },
});
