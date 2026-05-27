import { ref, watch, computed } from 'vue';

export type ApprovalStatus = 'pending' | 'approved' | 'rejected';
export type TaskStatus = 'belum' | 'proses' | 'selesai' | 'terlambat';
export type TaskPriority = 'rendah' | 'sedang' | 'tinggi';
export type ScheduleFrequency = 'harian' | 'mingguan' | 'bulanan';
export type PencatatanCategory = 'pakan' | 'kesehatan' | 'kotoran' | 'perkawinan' | 'kelahiran' | 'umum';

export interface OperatorTask {
  id: string;
  title: string;
  description: string;
  assigneeCode: string;
  assigneeName: string;
  cageCode: string;
  category: PencatatanCategory;
  dueDate: string;
  dueTime: string;
  priority: TaskPriority;
  status: TaskStatus;
  scheduleId?: string;
  createdAt: number;
}

export interface RoutineSchedule {
  id: string;
  title: string;
  description: string;
  category: PencatatanCategory;
  cageCode: string;
  assigneeCode: string;
  assigneeName: string;
  frequency: ScheduleFrequency;
  time: string;
  daysOfWeek: number[];
  dayOfMonth: number;
  active: boolean;
  createdAt: number;
}

export interface PencatatanSubmission {
  id: string;
  type: string;
  typeLabel: string;
  operatorCode: string;
  operatorName: string;
  cageCode: string;
  scope: 'domba' | 'kandang';
  summary: string;
  payload: Record<string, unknown>;
  submittedAt: number;
  approvalStatus: ApprovalStatus;
  reviewedAt?: number;
  reviewedBy?: string;
  reviewNote?: string;
  taskId?: string;
}

const KEYS = {
  tasks: 'fe:admin:operator_tasks',
  schedules: 'fe:admin:routine_schedules',
  submissions: 'fe:admin:pencatatan_submissions',
} as const;

const TYPE_LABELS: Record<string, string> = {
  pakan: 'Pakan',
  kesehatan: 'Kesehatan',
  kotoran: 'Kotoran',
  perkawinan: 'Perkawinan',
  kelahiran: 'Kelahiran',
};

const CATEGORY_MAP: Record<string, string> = {
  pakan: 'PAKAN',
  kesehatan: 'SEHAT',
  kotoran: 'KOTORAN',
  perkawinan: 'KAWIN',
  kelahiran: 'LAHIR',
};

function load<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function save<T>(key: string, data: T) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    console.warn('Failed to save', key, e);
  }
}

const defaultTasks: OperatorTask[] = [
  {
    id: 'T-001',
    title: 'Pakan pagi Kandang A',
    description: 'Catat pemberian pakan pagi sebelum jam 08:00',
    assigneeCode: 'OPT001',
    assigneeName: 'Budi Ternak',
    cageCode: 'A',
    category: 'pakan',
    dueDate: new Date().toISOString().split('T')[0] as string,
    dueTime: '08:00',
    priority: 'tinggi',
    status: 'belum',
    createdAt: Date.now() - 86400000,
  },
  {
    id: 'T-002',
    title: 'Pemeriksaan kesehatan D-004',
    description: 'Cek ternak prioritas dan catat tindakan kesehatan',
    assigneeCode: 'OPT001',
    assigneeName: 'Budi Ternak',
    cageCode: 'A',
    category: 'kesehatan',
    dueDate: new Date().toISOString().split('T')[0] as string,
    dueTime: '10:00',
    priority: 'sedang',
    status: 'proses',
    createdAt: Date.now() - 43200000,
  },
  {
    id: 'T-003',
    title: 'Sanitasi kandang aktif',
    description: 'Bersihkan area minum dan lantai kandang',
    assigneeCode: 'OPT002',
    assigneeName: 'Siti Aminah',
    cageCode: 'B',
    category: 'kotoran',
    dueDate: new Date().toISOString().split('T')[0] as string,
    dueTime: '16:00',
    priority: 'sedang',
    status: 'belum',
    createdAt: Date.now() - 21600000,
  },
];

const defaultSchedules: RoutineSchedule[] = [
  {
    id: 'S-001',
    title: 'Pakan pagi harian',
    description: 'Pencatatan pakan pagi untuk seluruh kandang A',
    category: 'pakan',
    cageCode: 'A',
    assigneeCode: 'OPT001',
    assigneeName: 'Budi Ternak',
    frequency: 'harian',
    time: '07:30',
    daysOfWeek: [1, 2, 3, 4, 5, 6, 0],
    dayOfMonth: 1,
    active: true,
    createdAt: Date.now() - 604800000,
  },
  {
    id: 'S-002',
    title: 'Pemeriksaan kesehatan mingguan',
    description: 'Pemeriksaan rutin ternak di kandang B',
    category: 'kesehatan',
    cageCode: 'B',
    assigneeCode: 'OPT002',
    assigneeName: 'Siti Aminah',
    frequency: 'mingguan',
    time: '09:00',
    daysOfWeek: [1],
    dayOfMonth: 1,
    active: true,
    createdAt: Date.now() - 604800000,
  },
];

const defaultSubmissions: PencatatanSubmission[] = [
  {
    id: 'SUB-2401',
    type: 'pakan',
    typeLabel: 'Pakan',
    operatorCode: 'OPT001',
    operatorName: 'Budi Ternak',
    cageCode: 'A',
    scope: 'kandang',
    summary: 'Mencatat 1 rincian Pakan',
    payload: { data: { items: [{ name: 'Pakan Pagi', targetId: 'A', qty: '12', unit: 'kg' }] } },
    submittedAt: Date.now() - 7200000,
    approvalStatus: 'pending',
  },
  {
    id: 'SUB-2400',
    type: 'kesehatan',
    typeLabel: 'Kesehatan',
    operatorCode: 'OPT001',
    operatorName: 'Budi Ternak',
    cageCode: 'A',
    scope: 'domba',
    summary: 'Mencatat 1 rincian Kesehatan',
    payload: { data: { items: [{ name: 'Vitamin', targetId: 'D-004', tindakan: 'Vitamin rutin' }] } },
    submittedAt: Date.now() - 86400000,
    approvalStatus: 'approved',
    reviewedAt: Date.now() - 80000000,
    reviewedBy: 'Admin Utama',
    reviewNote: 'Sesuai prosedur',
  },
];

export const operatorTasks = ref<OperatorTask[]>(load(KEYS.tasks, defaultTasks));
export const routineSchedules = ref<RoutineSchedule[]>(load(KEYS.schedules, defaultSchedules));
export const pencatatanSubmissions = ref<PencatatanSubmission[]>(load(KEYS.submissions, defaultSubmissions));

watch(operatorTasks, (v) => save(KEYS.tasks, v), { deep: true });
watch(routineSchedules, (v) => save(KEYS.schedules, v), { deep: true });
watch(pencatatanSubmissions, (v) => save(KEYS.submissions, v), { deep: true });

export const pendingApprovalCount = computed(
  () => pencatatanSubmissions.value.filter((s) => s.approvalStatus === 'pending').length,
);

export const openOperatorTasks = computed(() =>
  operatorTasks.value.filter((t) => t.status === 'belum' || t.status === 'proses' || t.status === 'terlambat'),
);

export function addOperatorTask(task: Omit<OperatorTask, 'id' | 'createdAt'>) {
  operatorTasks.value.unshift({
    ...task,
    id: `T-${Date.now().toString().slice(-6)}`,
    createdAt: Date.now(),
  });
}

export function updateOperatorTask(id: string, patch: Partial<Omit<OperatorTask, 'id' | 'createdAt'>>) {
  const i = operatorTasks.value.findIndex((t) => t.id === id);
  if (i !== -1) {
    operatorTasks.value[i] = { ...operatorTasks.value[i], ...patch } as OperatorTask;
  }
}

export function deleteOperatorTask(id: string) {
  operatorTasks.value = operatorTasks.value.filter((t) => t.id !== id);
}

export function addRoutineSchedule(schedule: Omit<RoutineSchedule, 'id' | 'createdAt'>) {
  routineSchedules.value.unshift({
    ...schedule,
    id: `S-${Date.now().toString().slice(-6)}`,
    createdAt: Date.now(),
  });
}

export function updateRoutineSchedule(id: string, patch: Partial<Omit<RoutineSchedule, 'id' | 'createdAt'>>) {
  const i = routineSchedules.value.findIndex((s) => s.id === id);
  if (i !== -1) {
    routineSchedules.value[i] = { ...routineSchedules.value[i], ...patch } as RoutineSchedule;
  }
}

export function deleteRoutineSchedule(id: string) {
  routineSchedules.value = routineSchedules.value.filter((s) => s.id !== id);
}

export function generateTasksFromSchedules() {
  const today = new Date();
  const todayStr = today.toISOString().split('T')[0] as string;
  const day = today.getDay();

  routineSchedules.value
    .filter((s) => s.active)
    .forEach((schedule) => {
      const shouldRun =
        schedule.frequency === 'harian' ||
        (schedule.frequency === 'mingguan' && schedule.daysOfWeek.includes(day)) ||
        (schedule.frequency === 'bulanan' && today.getDate() === schedule.dayOfMonth);

      if (!shouldRun) return;

      const exists = operatorTasks.value.some(
        (t) =>
          t.scheduleId === schedule.id &&
          t.dueDate === todayStr &&
          (t.status === 'belum' || t.status === 'proses'),
      );
      if (exists) return;

      addOperatorTask({
        title: schedule.title,
        description: schedule.description,
        assigneeCode: schedule.assigneeCode,
        assigneeName: schedule.assigneeName,
        cageCode: schedule.cageCode,
        category: schedule.category,
        dueDate: todayStr,
        dueTime: schedule.time,
        priority: 'sedang',
        status: 'belum',
        scheduleId: schedule.id,
      });
    });
}

export function submitPencatatanSubmission(input: {
  type: string;
  scope: 'domba' | 'kandang';
  summary: string;
  payload: Record<string, unknown>;
  operatorCode?: string;
  operatorName?: string;
  cageCode?: string;
  taskId?: string;
}) {
  const submission: PencatatanSubmission = {
    id: `SUB-${Date.now().toString().slice(-6)}`,
    type: input.type,
    typeLabel: TYPE_LABELS[input.type] || 'Pencatatan',
    operatorCode: input.operatorCode || 'OPT001',
    operatorName: input.operatorName || 'Operator Peternakan',
    cageCode: input.cageCode || 'A',
    scope: input.scope,
    summary: input.summary,
    payload: input.payload,
    submittedAt: Date.now(),
    approvalStatus: 'pending',
    taskId: input.taskId,
  };

  pencatatanSubmissions.value.unshift(submission);
  syncRiwayatFromSubmission(submission);

  if (input.taskId) {
    updateOperatorTask(input.taskId, { status: 'proses' });
  }

  return submission;
}

export function approveSubmission(id: string, reviewerName: string, note = '') {
  const sub = pencatatanSubmissions.value.find((s) => s.id === id);
  if (!sub) return;
  sub.approvalStatus = 'approved';
  sub.reviewedAt = Date.now();
  sub.reviewedBy = reviewerName;
  sub.reviewNote = note;

  if (sub.taskId) {
    updateOperatorTask(sub.taskId, { status: 'selesai' });
  }
}

export function rejectSubmission(id: string, reviewerName: string, note: string) {
  const sub = pencatatanSubmissions.value.find((s) => s.id === id);
  if (!sub) return;
  sub.approvalStatus = 'rejected';
  sub.reviewedAt = Date.now();
  sub.reviewedBy = reviewerName;
  sub.reviewNote = note;

  if (sub.taskId) {
    updateOperatorTask(sub.taskId, { status: 'belum' });
  }
}

function syncRiwayatFromSubmission(sub: PencatatanSubmission) {
  try {
    const key = 'ovis_riwayat_records';
    const stored = localStorage.getItem(key);
    const list = stored ? JSON.parse(stored) : [];
    const dt = new Date(sub.submittedAt);
    list.unshift({
      id: sub.id,
      date: new Intl.DateTimeFormat('id-ID', { dateStyle: 'short' }).format(dt),
      time: new Intl.DateTimeFormat('id-ID', { hour: '2-digit', minute: '2-digit' }).format(dt) + ' WIB',
      category: CATEGORY_MAP[sub.type] || 'UMUM',
      operator: sub.operatorName,
      details: JSON.stringify(sub.payload?.data || sub.payload),
      approvalStatus: sub.approvalStatus,
    });
    localStorage.setItem(key, JSON.stringify(list));
  } catch (e) {
    console.warn('Failed to sync riwayat', e);
  }
}
