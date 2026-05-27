import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import Typography from '../../../components/ui/admin/Typography';
import Button from '../../../components/ui/admin/Button';
import CustomInput from '../../../components/ui/admin/Input';
import { userSession } from '@/store/navigation';
import '../../../assets/css/modules/admin/AdminLogin.css';

const ADMIN_ACCOUNTS = [
  { username: 'admin', password: 'admin123', code: 'ADM001', name: 'Admin Utama' },
  { username: 'superadmin', password: 'FarMease@26', code: 'ADM002', name: 'Super Admin' },
];

export default defineComponent({
  name: 'AdminLoginView',
  setup() {
    const router = useRouter();
    const username = ref('');
    const password = ref('');
    const error = ref('');
    const loading = ref(false);

    const goBack = () => router.push({ name: 'login' });

    const handleLogin = () => {
      error.value = '';
      const user = username.value.trim().toLowerCase();
      const pass = password.value;

      if (!user || !pass) {
        error.value = 'Username dan password wajib diisi.';
        return;
      }

      loading.value = true;
      const account = ADMIN_ACCOUNTS.find(
        (a) => a.username.toLowerCase() === user && a.password === pass,
      );

      setTimeout(() => {
        loading.value = false;
        if (!account) {
          error.value = 'Username atau password salah.';
          return;
        }

        userSession.value = {
          code: account.code,
          name: account.name,
          role: 'Admin',
        };
        router.push({ name: 'admin' });
      }, 400);
    };

    return () => (
      <div class="admin-login-page">
        <div class="admin-login-card">
          <div class="admin-login-accent" />

          <div class="text-center mb-4">
            <img src="/icon/logo_farmease.png" alt="FARMease" class="admin-login-logo" />
            <Typography variant="h2" weight="extrabold" color="primary" class="mt-3 mb-1">
              Login Administrator
            </Typography>
            <Typography variant="p" size="text-sm" color="secondary">
              Masuk dengan username dan password admin
            </Typography>
          </div>

          <div class="mb-3">
            <label class="admin-login-label">Username</label>
            <CustomInput
              modelValue={username.value}
              placeholder="Masukkan username"
              onUpdate:modelValue={(v: string) => {
                username.value = v;
                error.value = '';
              }}
            />
          </div>

          <div class="mb-4">
            <label class="admin-login-label">Password</label>
            <CustomInput
              type="password"
              modelValue={password.value}
              placeholder="Masukkan password"
              onUpdate:modelValue={(v: string) => {
                password.value = v;
                error.value = '';
              }}
            />
          </div>

          {error.value && <div class="admin-login-error mb-3">{error.value}</div>}

          <Button
            variant={loading.value ? 'disabled' : 'solid'}
            class="w-100 mb-3"
            onClick={handleLogin}
          >
            {loading.value ? 'Memverifikasi...' : 'Masuk ke Panel Admin'}
          </Button>

          <button type="button" class="admin-login-back" onClick={goBack}>
            ← Kembali ke halaman login
          </button>

          <div class="admin-login-hint mt-4">
            <Typography variant="span" size="text-xs" color="secondary">
              Demo: username <code>admin</code> · password <code>admin123</code>
            </Typography>
          </div>
        </div>
      </div>
    );
  },
});
