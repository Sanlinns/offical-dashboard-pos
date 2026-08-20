"use client";

import * as React from "react";
import {
  DndContext,
  DragEndEvent,
  DragOverEvent,
  DragOverlay,
  DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
  useDroppable,
  useDraggable,
} from "@dnd-kit/core";
import { AnimatePresence, motion } from "framer-motion";
import {
  GripVertical,
  Plus,
  Trash2,
  CalendarDays,
  CheckCircle2,
  Clock,
  AlertCircle,
  TrendingUp,
  ClipboardList,
  X,
  Search,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Users,
  Filter,
  ArrowRight,
  Zap,
  Loader2,
  RefreshCw,
  Briefcase,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

/* ────────────────────────────────────────────────────────────────────────── */
/* Theme                                                                    */
/* ────────────────────────────────────────────────────────────────────────── */
const FontImport = () => (
  <style>{`
    .tasks-page {
      --bg: #f0f2f8;
      --bg-dots: rgba(100,116,139,0.06);
      --bg-2: #e8ebf4;
      --surface: #ffffff;
      --surface-2: #f7f8fc;
      --surface-3: #eef0f7;
      --surface-hover: #f2f4fb;
      --border: #e2e6f3;
      --border-strong: #c8cfe8;
      --text: #0d1526;
      --text-2: #2d3a54;
      --muted: #5e6e8a;
      --muted-2: #94a3b8;
      --primary: var(--color-blue-600);
      --primary-2: var(--color-blue-700);
      --primary-light: var(--color-blue-400);
      --primary-soft: color-mix(in srgb, var(--color-blue-600) 10%, transparent);
      --primary-border: color-mix(in srgb, var(--color-blue-600) 20%, transparent);
      --success: #0ca678;
      --success-soft: rgba(12,166,120,.10);
      --warning: #e67700;
      --warning-soft: rgba(230,119,0,.10);
      --danger: #e03131;
      --danger-soft: rgba(224,49,49,.10);
      --violet: #7048e8;
      --violet-soft: rgba(112,72,232,.10);
      --cyan: #0c8599;
      --cyan-soft: rgba(12,133,153,.10);

      --shadow-xs: 0 1px 3px rgba(13,21,38,.04), 0 1px 2px rgba(13,21,38,.03);
      --shadow-sm: 0 4px 16px rgba(13,21,38,.06), 0 1px 4px rgba(13,21,38,.04);
      --shadow-md: 0 8px 32px rgba(13,21,38,.09), 0 2px 8px rgba(13,21,38,.05);
      --shadow-lg: 0 20px 60px rgba(13,21,38,.14), 0 4px 16px rgba(13,21,38,.07);
      --shadow-glow: 0 0 0 3px rgba(59,91,219,.12);

      --radius-sm: 10px;
      --radius-md: 16px;
      --radius-lg: 16px;
      --radius-xl: 20px;

      --header-bg-start: color-mix(in srgb, var(--color-blue-950) 88%, #0f172a);
      --header-bg-mid: color-mix(in srgb, var(--color-blue-900) 82%, #0f172a);
      --header-bg-end: var(--color-blue-800);
      --header-accent: color-mix(in srgb, var(--color-blue-400) 15%, transparent);

      --transition: all .2s cubic-bezier(.4,0,.2,1);
    }

    .dark .tasks-page {
      --bg: #172033;
      --bg-dots: rgba(116,143,252,0.07);
      --bg-2: #202c42;
      --surface: #293750;
      --surface-2: #33435f;
      --surface-3: #3b4d6d;
      --surface-hover: #405474;
      --border: rgba(255,255,255,.10);
      --border-strong: rgba(255,255,255,.16);
      --text: #f8fafc;
      --text-2: #e2e8f0;
      --muted: #94a3b8;
      --muted-2: #64748b;
      --primary: var(--color-blue-400);
      --primary-2: var(--color-blue-300);
      --primary-light: var(--color-blue-300);
      --primary-soft: color-mix(in srgb, var(--color-blue-400) 14%, transparent);
      --primary-border: color-mix(in srgb, var(--color-blue-400) 24%, transparent);
      --success: #20c997;
      --success-soft: rgba(32,201,151,.12);
      --warning: #ffa94d;
      --warning-soft: rgba(255,169,77,.12);
      --danger: #ff6b6b;
      --danger-soft: rgba(255,107,107,.12);
      --violet: #9775fa;
      --violet-soft: rgba(151,117,250,.12);
      --cyan: #22d3ee;
      --cyan-soft: rgba(34,211,238,.12);

      --shadow-xs: 0 1px 3px rgba(15,23,42,.16);
      --shadow-sm: 0 6px 18px rgba(15,23,42,.18);
      --shadow-md: 0 12px 32px rgba(15,23,42,.22);
      --shadow-lg: 0 20px 50px rgba(15,23,42,.28);
      --shadow-glow: 0 0 0 3px rgba(116,143,252,.18);

      --header-bg-start: color-mix(in srgb, var(--color-blue-950) 30%, #020617);
      --header-bg-mid: color-mix(in srgb, var(--color-blue-950) 42%, #020617);
      --header-bg-end: color-mix(in srgb, var(--color-blue-900) 48%, #020617);
      --header-accent: color-mix(in srgb, var(--color-blue-400) 12%, transparent);
    }

    .tasks-page,
    .tasks-page *,
    .tasks-page *::before,
    .tasks-page *::after {
      box-sizing: border-box;
    }

    .tasks-page input:focus,
    .tasks-page select:focus,
    .tasks-page textarea:focus {
      outline: none;
      border-color: var(--primary);
      box-shadow: var(--shadow-glow);
    }

    .tasks-page ::-webkit-scrollbar { width: 6px; height: 6px; }
    .tasks-page ::-webkit-scrollbar-track { background: transparent; }
    .tasks-page ::-webkit-scrollbar-thumb {
      background: var(--border-strong);
      border-radius: 999px;
    }
    .tasks-page ::-webkit-scrollbar-thumb:hover {
      background: var(--muted-2);
    }

    .surface-card {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: var(--radius-lg);
      box-shadow: var(--shadow-sm);
      transition: var(--transition);
    }

    .surface-card:hover {
      border-color: var(--border-strong);
      box-shadow: var(--shadow-md);
    }

    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(14px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    .fade-up-1 { animation: fadeUp .35s .05s both; }
    .fade-up-2 { animation: fadeUp .35s .12s both; }
    .fade-up-3 { animation: fadeUp .35s .20s both; }

    .status-pill {
      transition: var(--transition);
    }
    .status-pill:hover {
      transform: translateY(-1px);
      filter: brightness(1.08);
    }

    .staff-card-inner {
      transition: var(--transition);
    }

    .task-chip:hover {
      transform: translateY(-2px);
      box-shadow: var(--shadow-md) !important;
    }
  `}</style>
);

/* ────────────────────────────────────────────────────────────────────────── */
/* Types                                                                    */
/* ────────────────────────────────────────────────────────────────────────── */
type TaskStatus = "Pending" | "In Progress" | "Done";
type TaskPriority = "High" | "Medium" | "Low";
type AttStatus = "Present" | "Absent" | "Late";

type Task = {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  status: TaskStatus;
  priority: TaskPriority;
  subject: string;
  assignedTo: string | null;
};

type Staff = {
  id: string;
  staffId: string;
  name: string;
  role: string;
  subject: string;
  image: string;
  attendance: AttStatus;
  email?: string;
  phone?: string;
  branch?: string;
};


const PER_PAGE = 6;

const DEMO_STAFF: Staff[] = [
  {
    id: "staff-001",
    staffId: "ST-001",
    name: "Aiko Tanaka",
    role: "Manager",
    subject: "Main Branch",
    image: "https://api.dicebear.com/9.x/notionists/svg?seed=Aiko%20Tanaka",
    attendance: "Present",
    email: "aiko@example.com",
    phone: "090-1234-1001",
    branch: "Main Branch",
  },
  {
    id: "staff-002",
    staffId: "ST-002",
    name: "Ken Ito",
    role: "Cashier",
    subject: "Cashier",
    image: "https://api.dicebear.com/9.x/notionists/svg?seed=Ken%20Ito",
    attendance: "Present",
    email: "ken@example.com",
    phone: "090-1234-1002",
    branch: "Main Branch",
  },
  {
    id: "staff-003",
    staffId: "ST-003",
    name: "Mika Sato",
    role: "Staff",
    subject: "Store",
    image: "https://api.dicebear.com/9.x/notionists/svg?seed=Mika%20Sato",
    attendance: "Late",
    email: "mika@example.com",
    phone: "090-1234-1003",
    branch: "Main Branch",
  },
  {
    id: "staff-004",
    staffId: "ST-004",
    name: "Ryo Suzuki",
    role: "Warehouse",
    subject: "Warehouse",
    image: "https://api.dicebear.com/9.x/notionists/svg?seed=Ryo%20Suzuki",
    attendance: "Present",
    email: "ryo@example.com",
    phone: "090-1234-1004",
    branch: "Warehouse",
  },
  {
    id: "staff-005",
    staffId: "ST-005",
    name: "Yui Nakamura",
    role: "Support",
    subject: "Support",
    image: "https://api.dicebear.com/9.x/notionists/svg?seed=Yui%20Nakamura",
    attendance: "Absent",
    email: "yui@example.com",
    phone: "090-1234-1005",
    branch: "Support",
  },
  {
    id: "staff-006",
    staffId: "ST-006",
    name: "Haru Kobayashi",
    role: "Staff",
    subject: "Store",
    image: "https://api.dicebear.com/9.x/notionists/svg?seed=Haru%20Kobayashi",
    attendance: "Present",
    email: "haru@example.com",
    phone: "090-1234-1006",
    branch: "Main Branch",
  },
  {
    id: "staff-007",
    staffId: "ST-007",
    name: "Nao Kato",
    role: "Cashier",
    subject: "Cashier",
    image: "https://api.dicebear.com/9.x/notionists/svg?seed=Nao%20Kato",
    attendance: "Present",
    email: "nao@example.com",
    phone: "090-1234-1007",
    branch: "Main Branch",
  },
];

const DEMO_TASKS: Task[] = [
  {
    id: "task-001",
    title: "Restock beverage shelf",
    description: "Refill bottled water, juice and soft drinks before lunch.",
    dueDate: "11:30 AM",
    status: "In Progress",
    priority: "High",
    subject: "Store",
    assignedTo: "staff-003",
  },
  {
    id: "task-002",
    title: "Check morning cash drawer",
    description: "Verify opening cash balance and receipt paper.",
    dueDate: "09:00 AM",
    status: "Done",
    priority: "High",
    subject: "Cashier",
    assignedTo: "staff-002",
  },
  {
    id: "task-003",
    title: "Update low-stock list",
    description: "Review warehouse stock and prepare the restock list.",
    dueDate: "02:00 PM",
    status: "Pending",
    priority: "Medium",
    subject: "Warehouse",
    assignedTo: "staff-004",
  },
  {
    id: "task-004",
    title: "Clean checkout area",
    description: "Organize checkout counter and customer basket area.",
    dueDate: "04:30 PM",
    status: "Pending",
    priority: "Low",
    subject: "Cashier",
    assignedTo: null,
  },
  {
    id: "task-005",
    title: "Review customer feedback",
    description: "Check today's support notes and summarize common requests.",
    dueDate: "05:00 PM",
    status: "In Progress",
    priority: "Medium",
    subject: "Support",
    assignedTo: "staff-006",
  },
  {
    id: "task-006",
    title: "Prepare evening promotion",
    description: "Set promotional signs for selected snack products.",
    dueDate: "03:30 PM",
    status: "Pending",
    priority: "Medium",
    subject: "Main Branch",
    assignedTo: null,
  },
  {
    id: "task-007",
    title: "Warehouse temperature check",
    description: "Record cold-storage and freezer temperatures.",
    dueDate: "01:00 PM",
    status: "Done",
    priority: "High",
    subject: "Warehouse",
    assignedTo: "staff-004",
  },
  {
    id: "task-008",
    title: "Front display arrangement",
    description: "Refresh the entrance display before the evening rush.",
    dueDate: "05:30 PM",
    status: "Pending",
    priority: "Low",
    subject: "Store",
    assignedTo: null,
  },
];


/* ────────────────────────────────────────────────────────────────────────── */
/* Demo UI Helpers                                                           */
/* ────────────────────────────────────────────────────────────────────────── */
const priorityConfig = (priority: TaskPriority) => {
  const config: Record<
    TaskPriority,
    {
      color: string;
      bg: string;
      border: string;
      icon: string;
    }
  > = {
    High: {
      color: "var(--danger)",
      bg: "var(--danger-soft)",
      border: "rgba(224,49,49,.20)",
      icon: "●",
    },
    Medium: {
      color: "var(--warning)",
      bg: "var(--warning-soft)",
      border: "rgba(230,119,0,.20)",
      icon: "◐",
    },
    Low: {
      color: "var(--muted)",
      bg: "var(--surface-3)",
      border: "var(--border)",
      icon: "○",
    },
  };

  return config[priority];
};

const attConfig = (status: AttStatus) => {
  const config: Record<
    AttStatus,
    {
      color: string;
      bg: string;
      border: string;
      dot: string;
    }
  > = {
    Present: {
      color: "var(--success)",
      bg: "var(--success-soft)",
      border: "rgba(12,166,120,.20)",
      dot: "var(--success)",
    },
    Late: {
      color: "var(--warning)",
      bg: "var(--warning-soft)",
      border: "rgba(230,119,0,.20)",
      dot: "var(--warning)",
    },
    Absent: {
      color: "var(--danger)",
      bg: "var(--danger-soft)",
      border: "rgba(224,49,49,.20)",
      dot: "var(--danger)",
    },
  };

  return config[status];
};

const statusConfig = (status: TaskStatus) => {
  const config: Record<
    TaskStatus,
    {
      color: string;
      bg: string;
      border: string;
    }
  > = {
    Done: {
      color: "var(--success)",
      bg: "var(--success-soft)",
      border: "rgba(12,166,120,.20)",
    },
    "In Progress": {
      color: "var(--primary)",
      bg: "var(--primary-soft)",
      border: "var(--primary-border)",
    },
    Pending: {
      color: "var(--warning)",
      bg: "var(--warning-soft)",
      border: "rgba(230,119,0,.20)",
    },
  };

  return config[status];
};

const subjectPalette: Record<
  string,
  {
    color: string;
    light: string;
  }
> = {
  "Main Branch": {
    color: "var(--primary)",
    light: "var(--primary-soft)",
  },
  Store: {
    color: "#0ca678",
    light: "rgba(12,166,120,.14)",
  },
  Support: {
    color: "#7048e8",
    light: "rgba(112,72,232,.14)",
  },
  Cashier: {
    color: "#e67700",
    light: "rgba(230,119,0,.14)",
  },
  Warehouse: {
    color: "#0c8599",
    light: "rgba(12,133,153,.14)",
  },
};

const getSubject = (subject: string) =>
  subjectPalette[subject] ?? {
    color: "var(--muted)",
    light: "var(--surface-3)",
  };

const inputBase: React.CSSProperties = {
  width: "100%",
  height: 42,
  borderRadius: 12,
  border: "1px solid var(--border)",
  background: "var(--surface-2)",
  color: "var(--text)",
  padding: "0 12px",
  fontSize: 13.5,
  fontWeight: 500,
  transition: "all .18s ease",
};

/* ────────────────────────────────────────────────────────────────────────── */
/* Badge                                                                     */
/* ────────────────────────────────────────────────────────────────────────── */
function Badge({
  label,
  color,
  bg,
  border,
}: {
  label: string;
  color: string;
  bg: string;
  border: string;
}) {
  return (
    <span
      className="status-pill"
      style={{
        fontSize: 10.5,
        fontWeight: 700,
        letterSpacing: ".03em",
        color,
        background: bg,
        border: `1px solid ${border}`,
        borderRadius: 999,
        padding: "3px 9px",
        display: "inline-flex",
        alignItems: "center",
      }}
    >
      {label}
    </span>
  );
}

/* ────────────────────────────────────────────────────────────────────────── */
/* Draggable Task Chip                                                       */
/* ────────────────────────────────────────────────────────────────────────── */
function DraggableTaskChip({
  task,
  allStaff,
  onDelete,
  actionLoading,
}: {
  task: Task;
  allStaff: Staff[];
  onDelete: () => void;
  actionLoading?: boolean;
}) {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id: task.id,
    data: { task },
  });

  const assignedStaff = allStaff.find((s) => s.id === task.assignedTo) ?? null;
  const priority = priorityConfig(task.priority);
  const status = statusConfig(task.status);
  const subject = getSubject(task.subject);

  return (
    <div
      ref={setNodeRef}
      className="task-chip"
      style={{
        background: "var(--surface)",
        borderTop: isDragging
          ? `1px solid var(--primary)`
          : "1px solid var(--border)",
        borderRight: isDragging
          ? `1px solid var(--primary)`
          : "1px solid var(--border)",
        borderBottom: isDragging
          ? `1px solid var(--primary)`
          : "1px solid var(--border)",
        borderLeft: `3px solid ${subject.color}`,
        borderRadius: 14,
        padding: "12px 12px 12px 10px",
        opacity: isDragging ? 0.3 : actionLoading ? 0.7 : 1,
        boxShadow: isDragging ? "var(--shadow-lg)" : "var(--shadow-xs)",
        transition: "all .18s ease",
        display: "flex",
        gap: 8,
        alignItems: "flex-start",
        cursor: "default",
      }}
    >
      <button
        {...listeners}
        {...attributes}
        disabled={actionLoading}
        style={{
          border: "none",
          background: "transparent",
          color: "var(--muted-2)",
          cursor: actionLoading ? "not-allowed" : "grab",
          paddingTop: 2,
          flexShrink: 0,
          display: "flex",
        }}
      >
        <GripVertical size={15} />
      </button>

      <div style={{ flex: 1, minWidth: 0 }}>
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: 8,
            marginBottom: 7,
          }}
        >
          <div style={{ minWidth: 0 }}>
            <p
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: "var(--text)",
                lineHeight: 1.35,
                marginBottom: 3,
              }}
            >
              {task.title}
            </p>
            <p
              style={{
                fontSize: 11,
                color: "var(--muted)",
                lineHeight: 1.5,
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {task.description || "No description"}
            </p>
          </div>

          <button
            onClick={onDelete}
            disabled={actionLoading}
            style={{
              width: 26,
              height: 26,
              flexShrink: 0,
              borderRadius: 8,
              border: "1px solid var(--danger-soft)",
              background: "var(--danger-soft)",
              color: "var(--danger)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "var(--transition)",
              cursor: actionLoading ? "not-allowed" : "pointer",
              opacity: actionLoading ? 0.65 : 1,
            }}
          >
            {actionLoading ? (
              <Loader2 size={12} className="animate-spin" />
            ) : (
              <Trash2 size={12} />
            )}
          </button>
        </div>

        <div
          style={{ display: "flex", gap: 5, flexWrap: "wrap", marginBottom: 8 }}
        >
          <Badge
            label={`${priority.icon} ${task.priority}`}
            color={priority.color}
            bg={priority.bg}
            border={priority.border}
          />
          <Badge
            label={task.status}
            color={status.color}
            bg={status.bg}
            border={status.border}
          />
          <Badge
            label={task.subject}
            color={subject.color}
            bg={subject.light}
            border={subject.color + "30"}
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 8,
          }}
        >
          <div
            style={{
              display: "flex",
              gap: 5,
              alignItems: "center",
              minWidth: 0,
            }}
          >
            {assignedStaff ? (
              <>
                <img
                  src={assignedStaff.image}
                  alt={assignedStaff.name}
                  style={{
                    width: 18,
                    height: 18,
                    borderRadius: "50%",
                    border: "1.5px solid var(--border)",
                    background: "var(--surface-2)",
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 600,
                    color: "var(--text-2)",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    maxWidth: 100,
                  }}
                >
                  {assignedStaff.name}
                </span>
              </>
            ) : (
              <span
                style={{
                  fontSize: 11,
                  color: "var(--muted)",
                  fontWeight: 600,
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                }}
              >
                <span
                  style={{
                    width: 14,
                    height: 14,
                    borderRadius: "50%",
                    border: "1.5px dashed var(--muted-2)",
                    display: "inline-block",
                  }}
                />
                Unassigned
              </span>
            )}
          </div>

          <span
            style={{
              fontSize: 10.5,
              fontWeight: 600,
              color: "var(--muted-2)",
              flexShrink: 0,
            }}
          >
            ⏱ {task.dueDate}
          </span>
        </div>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────────────────── */
/* Task Ghost                                                                */
/* ────────────────────────────────────────────────────────────────────────── */
function TaskGhost({ task, allStaff }: { task: Task; allStaff: Staff[] }) {
  return (
    <div style={{ width: 320, transform: "rotate(2deg)" }}>
      <DraggableTaskChip
        task={task}
        allStaff={allStaff}
        onDelete={() => undefined}
      />
    </div>
  );
}

/* ────────────────────────────────────────────────────────────────────────── */
/* Droppable Staff Card                                                      */
/* ────────────────────────────────────────────────────────────────────────── */
function DroppableStaffCard({
  staff,
  tasks,
  isOver,
  onRemoveTask,
  onStatusChange,
  actionTaskId,
}: {
  staff: Staff;
  tasks: Task[];
  isOver: boolean;
  onRemoveTask: (id: string) => void;
  onStatusChange: (id: string, s: TaskStatus) => void;
  actionTaskId: string | null;
}) {
  const { setNodeRef } = useDroppable({
    id: `staff-${staff.id}`,
    data: { staffId: staff.id },
  });
  const badge = attConfig(staff.attendance);
  const [expanded, setExpanded] = React.useState(false);

  const doneCount = tasks.filter((t) => t.status === "Done").length;
  const progress = tasks.length === 0 ? 0 : (doneCount / tasks.length) * 100;
  const roleColor =
    staff.role.toLowerCase() === "admin" ? "var(--violet)" : "var(--primary)";

  return (
    <div
      ref={setNodeRef}
      className="staff-card-inner"
      style={{
        borderRadius: 18,
        background: "var(--surface)",
        border: isOver
          ? "1.5px solid var(--primary)"
          : "1px solid var(--border)",
        boxShadow: isOver
          ? "var(--shadow-glow), var(--shadow-md)"
          : "var(--shadow-xs)",
        overflow: "hidden",
        transition: "all .18s ease",
      }}
    >
      <div
        onClick={() => setExpanded((v) => !v)}
        style={{
          padding: "14px 14px 12px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: 12,
          background: isOver ? "var(--primary-soft)" : "transparent",
          transition: "background .18s ease",
        }}
      >
        <div style={{ position: "relative", flexShrink: 0 }}>
          <div
            style={{
              width: 46,
              height: 46,
              borderRadius: 14,
              border: "1.5px solid var(--border)",
              background: "var(--surface-2)",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={staff.image}
              alt={staff.name}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <span
            style={{
              position: "absolute",
              right: -2,
              bottom: -2,
              width: 12,
              height: 12,
              borderRadius: "50%",
              background: badge.dot,
              border: "2px solid var(--surface)",
            }}
          />
        </div>

        <div style={{ flex: 1, minWidth: 0 }}>
          <div
            style={{
              display: "flex",
              gap: 6,
              alignItems: "center",
              flexWrap: "wrap",
              marginBottom: 3,
            }}
          >
            <p
              style={{
                fontSize: 13.5,
                fontWeight: 700,
                color: "var(--text)",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                maxWidth: 150,
              }}
            >
              {staff.name}
            </p>
            <Badge
              label={staff.attendance}
              color={badge.color}
              bg={badge.bg}
              border={badge.border}
            />
          </div>

          <p
            style={{
              fontSize: 11.5,
              color: "var(--muted)",
              fontWeight: 500,
              marginBottom: 8,
            }}
          >
            <span style={{ color: roleColor, fontWeight: 700 }}>
              {staff.role}
            </span>
            {" · "}
            {staff.subject}
            {" · "}
            <span style={{ color: "var(--muted-2)" }}>{staff.staffId}</span>
          </p>

          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <div
              style={{
                flex: 1,
                height: 5,
                borderRadius: 999,
                background: "var(--surface-3)",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: `${progress}%`,
                  height: "100%",
                  background:
                    progress === 100
                      ? "linear-gradient(90deg, var(--success), #34d399)"
                      : "linear-gradient(90deg, var(--primary), var(--primary-light))",
                  borderRadius: 999,
                  transition: "width .4s cubic-bezier(.4,0,.2,1)",
                }}
              />
            </div>
            <span
              style={{
                fontSize: 10.5,
                fontWeight: 700,
                color: "var(--muted)",
                flexShrink: 0,
              }}
            >
              {doneCount}/{tasks.length}
            </span>
          </div>
        </div>

        <div
          style={{
            width: 28,
            height: 28,
            borderRadius: 10,
            background: "var(--surface-3)",
            border: "1px solid var(--border)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "var(--muted)",
            flexShrink: 0,
          }}
        >
          {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </div>
      </div>

      {isOver && (
        <motion.div
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            margin: "0 14px 10px",
            padding: "9px 12px",
            borderRadius: 12,
            border: "1.5px dashed var(--primary)",
            background: "var(--primary-soft)",
            color: "var(--primary)",
            fontSize: 12,
            fontWeight: 700,
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 6,
          }}
        >
          <Zap size={13} />
          Assign to {staff.name}
        </motion.div>
      )}

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            style={{ overflow: "hidden" }}
          >
            <div style={{ padding: "0 14px 14px" }}>
              <div
                style={{
                  background: "var(--surface-2)",
                  border: "1px solid var(--border)",
                  borderRadius: 14,
                  padding: 12,
                  marginBottom: 12,
                }}
              >
                <div style={{ display: "grid", gap: 8 }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      fontSize: 12,
                      color: "var(--text-2)",
                      fontWeight: 600,
                    }}
                  >
                    <Briefcase size={14} /> {staff.branch || staff.subject}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      fontSize: 12,
                      color: "var(--text-2)",
                      fontWeight: 600,
                    }}
                  >
                    <Mail size={14} /> {staff.email || "—"}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      fontSize: 12,
                      color: "var(--text-2)",
                      fontWeight: 600,
                    }}
                  >
                    <Phone size={14} /> {staff.phone || "—"}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      fontSize: 12,
                      color: "var(--text-2)",
                      fontWeight: 600,
                    }}
                  >
                    <MapPin size={14} /> Staff ID: {staff.staffId}
                  </div>
                </div>
              </div>

              <div style={{ display: "grid", gap: 8 }}>
                {tasks.length === 0 ? (
                  <div
                    style={{
                      padding: "14px 12px",
                      borderRadius: 12,
                      border: "1px dashed var(--border-strong)",
                      background: "var(--surface-2)",
                      textAlign: "center",
                      color: "var(--muted)",
                      fontSize: 12,
                      fontWeight: 600,
                    }}
                  >
                    No tasks assigned yet
                  </div>
                ) : (
                  tasks.map((task) => {
                    const status = statusConfig(task.status);
                    const isBusy = actionTaskId === task.id;

                    return (
                      <div
                        key={task.id}
                        style={{
                          borderRadius: 12,
                          border: "1px solid var(--border)",
                          background: "var(--surface)",
                          padding: 10,
                          opacity: isBusy ? 0.7 : 1,
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            gap: 8,
                            marginBottom: 8,
                          }}
                        >
                          <div style={{ minWidth: 0 }}>
                            <p
                              style={{
                                fontSize: 12.5,
                                fontWeight: 700,
                                color: "var(--text)",
                              }}
                            >
                              {task.title}
                            </p>
                            <p style={{ fontSize: 11, color: "var(--muted)" }}>
                              {task.dueDate}
                            </p>
                          </div>
                          <button
                            onClick={() => onRemoveTask(task.id)}
                            disabled={isBusy}
                            style={{
                              width: 24,
                              height: 24,
                              borderRadius: 8,
                              border: "1px solid var(--danger-soft)",
                              background: "var(--danger-soft)",
                              color: "var(--danger)",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              cursor: isBusy ? "not-allowed" : "pointer",
                              flexShrink: 0,
                            }}
                          >
                            {isBusy ? (
                              <Loader2 size={12} className="animate-spin" />
                            ) : (
                              <X size={12} />
                            )}
                          </button>
                        </div>

                        <div
                          style={{
                            display: "flex",
                            gap: 6,
                            flexWrap: "wrap",
                            marginBottom: 8,
                          }}
                        >
                          <Badge
                            label={task.status}
                            color={status.color}
                            bg={status.bg}
                            border={status.border}
                          />
                        </div>

                        <div
                          style={{ display: "flex", gap: 6, flexWrap: "wrap" }}
                        >
                          {(
                            ["Pending", "In Progress", "Done"] as TaskStatus[]
                          ).map((next) => (
                            <button
                              key={next}
                              onClick={() => onStatusChange(task.id, next)}
                              disabled={isBusy}
                              style={{
                                borderRadius: 999,
                                border:
                                  task.status === next
                                    ? `1px solid ${status.color}`
                                    : "1px solid var(--border)",
                                background:
                                  task.status === next
                                    ? status.bg
                                    : "var(--surface-2)",
                                color:
                                  task.status === next
                                    ? status.color
                                    : "var(--muted)",
                                padding: "5px 9px",
                                fontSize: 10.5,
                                fontWeight: 700,
                                cursor: isBusy ? "not-allowed" : "pointer",
                              }}
                            >
                              {next}
                            </button>
                          ))}
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────────────────── */
/* Pagination                                                                */
/* ────────────────────────────────────────────────────────────────────────── */
function Pagination({
  page,
  total,
  perPage,
  onChange,
  label,
}: {
  page: number;
  total: number;
  perPage: number;
  onChange: (page: number) => void;
  label: string;
}) {
  const totalPages = Math.max(1, Math.ceil(total / perPage));

  return (
    <div
      style={{
        padding: "14px 16px 18px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 12,
        flexWrap: "wrap",
      }}
    >
      <span style={{ fontSize: 12, color: "var(--muted)", fontWeight: 700 }}>
        {label}
      </span>

      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <button
          onClick={() => onChange(Math.max(1, page - 1))}
          disabled={page === 1}
          style={{
            width: 34,
            height: 34,
            borderRadius: 10,
            border: "1px solid var(--border)",
            background: "var(--surface)",
            color: "var(--text)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: page === 1 ? 0.45 : 1,
            cursor: "pointer",
          }}
        >
          <ChevronLeft size={15} />
        </button>

        <div
          style={{
            minWidth: 88,
            height: 34,
            borderRadius: 10,
            border: "1px solid var(--border)",
            background: "var(--surface-2)",
            color: "var(--text-2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 12,
            fontWeight: 700,
            padding: "0 12px",
          }}
        >
          Page {page} / {totalPages}
        </div>

        <button
          onClick={() => onChange(Math.min(totalPages, page + 1))}
          disabled={page === totalPages}
          style={{
            width: 34,
            height: 34,
            borderRadius: 10,
            border: "1px solid var(--border)",
            background: "var(--surface)",
            color: "var(--text)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: page === totalPages ? 0.45 : 1,
            cursor: "pointer",
          }}
        >
          <ChevronRight size={15} />
        </button>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────────────────── */
/* Create Modal                                                              */
/* ────────────────────────────────────────────────────────────────────────── */
function CreateModal({
  open,
  onClose,
  onSubmit,
  submitting,
}: {
  open: boolean;
  onClose: () => void;
  onSubmit: (task: Omit<Task, "id">) => Promise<void> | void;
  submitting: boolean;
}) {
  const [form, setForm] = React.useState<Omit<Task, "id">>({
    title: "",
    description: "",
    dueDate: "",
    status: "Pending",
    priority: "Medium",
    subject: "Main Branch",
    assignedTo: null,
  });

  React.useEffect(() => {
    if (!open) {
      setForm({
        title: "",
        description: "",
        dueDate: "",
        status: "Pending",
        priority: "Medium",
        subject: "Main Branch",
        assignedTo: null,
      });
    }
  }, [open]);

  if (!open) return null;

  const submit = async () => {
    if (!form.title.trim() || submitting) return;
    await onSubmit({
      ...form,
      title: form.title.trim(),
      description: form.description.trim(),
      dueDate: form.dueDate || "05:00 PM",
    });
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,.35)",
          backdropFilter: "blur(4px)",
          zIndex: 60,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 16,
        }}
        onClick={submitting ? undefined : onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 18, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 18, scale: 0.96 }}
          transition={{ duration: 0.18 }}
          onClick={(e) => e.stopPropagation()}
          style={{
            width: "100%",
            maxWidth: 520,
            borderRadius: 24,
            background: "var(--surface)",
            border: "1px solid var(--border)",
            boxShadow: "var(--shadow-lg)",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              padding: "18px 20px",
              borderBottom: "1px solid var(--border)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div>
              <h3
                style={{ fontSize: 18, fontWeight: 800, color: "var(--text)" }}
              >
                Create Task
              </h3>
              <p style={{ fontSize: 12, color: "var(--muted)", marginTop: 4 }}>
                Add a new task to the task pool
              </p>
            </div>

            <button
              onClick={onClose}
              disabled={submitting}
              style={{
                width: 34,
                height: 34,
                borderRadius: 10,
                border: "1px solid var(--border)",
                background: "var(--surface-2)",
                color: "var(--text)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: submitting ? "not-allowed" : "pointer",
              }}
            >
              <X size={16} />
            </button>
          </div>

          <div style={{ padding: 20, display: "grid", gap: 12 }}>
            <input
              placeholder="Task title"
              value={form.title}
              onChange={(e) =>
                setForm((p) => ({ ...p, title: e.target.value }))
              }
              style={inputBase}
            />
            <textarea
              placeholder="Description"
              value={form.description}
              onChange={(e) =>
                setForm((p) => ({ ...p, description: e.target.value }))
              }
              style={{
                ...inputBase,
                minHeight: 96,
                padding: 12,
                resize: "vertical",
              }}
            />

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 12,
              }}
            >
              <input
                placeholder="Due time (e.g. 03:00 PM)"
                value={form.dueDate}
                onChange={(e) =>
                  setForm((p) => ({ ...p, dueDate: e.target.value }))
                }
                style={inputBase}
              />
              <select
                value={form.priority}
                onChange={(e) =>
                  setForm((p) => ({
                    ...p,
                    priority: e.target.value as TaskPriority,
                  }))
                }
                style={inputBase}
              >
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
            </div>

            <input
              placeholder="Subject / Branch"
              value={form.subject}
              onChange={(e) =>
                setForm((p) => ({ ...p, subject: e.target.value }))
              }
              style={inputBase}
            />
          </div>

          <div
            style={{
              padding: 20,
              borderTop: "1px solid var(--border)",
              display: "flex",
              justifyContent: "flex-end",
              gap: 10,
            }}
          >
            <button
              onClick={onClose}
              disabled={submitting}
              style={{
                height: 42,
                padding: "0 16px",
                borderRadius: 12,
                border: "1px solid var(--border)",
                background: "var(--surface-2)",
                color: "var(--text)",
                fontWeight: 700,
                cursor: submitting ? "not-allowed" : "pointer",
              }}
            >
              Cancel
            </button>

            <button
              onClick={submit}
              disabled={submitting}
              style={{
                height: 42,
                padding: "0 16px",
                borderRadius: 12,
                border: "1px solid var(--primary)",
                background: "var(--primary)",
                color: "white",
                fontWeight: 700,
                cursor: submitting ? "not-allowed" : "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              {submitting && <Loader2 size={14} className="animate-spin" />}
              Create Task
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

/* ────────────────────────────────────────────────────────────────────────── */
/* Main App                                                                  */
/* ────────────────────────────────────────────────────────────────────────── */
export default function TasksPage() {
  const [tasks, setTasks] = React.useState<Task[]>(() => [...DEMO_TASKS]);
  const [staff, setStaff] = React.useState<Staff[]>(() => [...DEMO_STAFF]);
  const [refreshing, setRefreshing] = React.useState(false);
  const [creatingTask, setCreatingTask] = React.useState(false);
  const [actionTaskId, setActionTaskId] = React.useState<string | null>(null);
  const [notification, setNotification] = React.useState<string | null>(null);

  const [poolQuery, setPoolQuery] = React.useState("");
  const [staffQuery, setStaffQuery] = React.useState("");
  const [attFilter, setAttFilter] = React.useState<AttStatus | "All">("All");

  const [createOpen, setCreateOpen] = React.useState(false);
  const [activeTask, setActiveTask] = React.useState<Task | null>(null);
  const [overStaffId, setOverStaffId] = React.useState<string | null>(null);
  const [staffPage, setStaffPage] = React.useState(1);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 6 } }),
  );

  const showNotification = React.useCallback((message: string) => {
    setNotification(message);
    window.setTimeout(() => setNotification(null), 2200);
  }, []);

  const reloadAll = React.useCallback(() => {
    setRefreshing(true);

    window.setTimeout(() => {
      setTasks([...DEMO_TASKS]);
      setStaff([...DEMO_STAFF]);
      setPoolQuery("");
      setStaffQuery("");
      setAttFilter("All");
      setStaffPage(1);
      setRefreshing(false);
      showNotification("Demo data reset");
    }, 350);
  }, [showNotification]);

  const poolTasks = React.useMemo(() => {
    const q = poolQuery.trim().toLowerCase();
    return tasks.filter(
      (t) =>
        !t.assignedTo &&
        (!q ||
          t.title.toLowerCase().includes(q) ||
          t.subject.toLowerCase().includes(q) ||
          t.description.toLowerCase().includes(q)),
    );
  }, [tasks, poolQuery]);

  const filteredStaff = React.useMemo(() => {
    const q = staffQuery.trim().toLowerCase();
    return staff.filter(
      (s) =>
        (attFilter === "All" || s.attendance === attFilter) &&
        (!q ||
          s.name.toLowerCase().includes(q) ||
          s.subject.toLowerCase().includes(q) ||
          s.staffId.toLowerCase().includes(q) ||
          s.role.toLowerCase().includes(q) ||
          (s.email || "").toLowerCase().includes(q) ||
          (s.phone || "").toLowerCase().includes(q)),
    );
  }, [staff, staffQuery, attFilter]);

  const pagedStaff = filteredStaff.slice(
    (staffPage - 1) * PER_PAGE,
    staffPage * PER_PAGE,
  );

  React.useEffect(() => {
    setStaffPage(1);
  }, [staffQuery, attFilter]);

  const getStaffTasks = (id: string) =>
    tasks.filter((t) => t.assignedTo === id);

  const createTask = (task: Omit<Task, "id">) => {
    setCreatingTask(true);

    const newTask: Task = {
      ...task,
      id: `demo-task-${Date.now()}`,
    };

    setTasks((prev) => [newTask, ...prev]);
    setCreateOpen(false);
    setCreatingTask(false);
    showNotification("Demo task created");
  };

  const deleteTask = (id: string) => {
    setActionTaskId(id);

    setTasks((prev) => prev.filter((task) => task.id !== id));

    if (activeTask?.id === id) {
      setActiveTask(null);
    }

    setActionTaskId(null);
    showNotification("Demo task removed");
  };

  const unassignTask = (id: string) => {
    setActionTaskId(id);

    setTasks((prev) =>
      prev.map((task): Task =>
        task.id === id
          ? {
              ...task,
              assignedTo: null,
              status: task.status === "Done" ? "Done" : "Pending",
            }
          : task,
      ),
    );

    setActionTaskId(null);
    showNotification("Task moved back to pool");
  };

  const updateStatus = (id: string, status: TaskStatus) => {
    setActionTaskId(id);

    setTasks((prev) =>
      prev.map((task): Task =>
        task.id === id
          ? {
              ...task,
              status,
            }
          : task,
      ),
    );

    setActionTaskId(null);
    showNotification(`Status changed to ${status}`);
  };

  const assignTask = (taskId: string, staffId: string) => {
    setActionTaskId(taskId);

    setTasks((prev) =>
      prev.map((task): Task =>
        task.id === taskId
          ? {
              ...task,
              assignedTo: staffId,
              status: task.status === "Done" ? "Done" : "In Progress",
            }
          : task,
      ),
    );

    setActionTaskId(null);

    const member = staff.find((item) => item.id === staffId);
    showNotification(
      member ? `Assigned to ${member.name}` : "Demo task assigned",
    );
  };

  const stats = {
    total: tasks.length,
    pending: tasks.filter((t) => t.status === "Pending").length,
    inProgress: tasks.filter((t) => t.status === "In Progress").length,
    done: tasks.filter((t) => t.status === "Done").length,
    unassigned: tasks.filter((t) => !t.assignedTo).length,
    totalStaff: staff.length,
  };

  const attStats = {
    present: staff.filter((s) => s.attendance === "Present").length,
    late: staff.filter((s) => s.attendance === "Late").length,
    absent: staff.filter((s) => s.attendance === "Absent").length,
  };

  const today = new Date().toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const onDragStart = (e: DragStartEvent) => {
    setActiveTask(e.active.data.current?.task ?? null);
  };

  const onDragOver = (e: DragOverEvent) => {
    const id = e.over?.id ? String(e.over.id) : null;
    setOverStaffId(id?.startsWith("staff-") ? id.replace("staff-", "") : null);
  };

  const onDragEnd = (e: DragEndEvent) => {
    setActiveTask(null);
    setOverStaffId(null);

    const { active, over } = e;
    if (!over) return;

    const taskId = String(active.id);
    const overId = String(over.id);

    if (overId.startsWith("staff-")) {
      const targetStaffId = overId.replace("staff-", "");
      assignTask(taskId, targetStaffId);
    }
  };

  const statCards = [
    {
      label: "Total Tasks",
      value: stats.total,
      icon: <ClipboardList size={17} />,
      color: "var(--primary)",
      bg: "var(--primary-soft)",
    },
    {
      label: "Pending",
      value: stats.pending,
      icon: <Clock size={17} />,
      color: "var(--warning)",
      bg: "var(--warning-soft)",
    },
    {
      label: "In Progress",
      value: stats.inProgress,
      icon: <TrendingUp size={17} />,
      color: "var(--cyan)",
      bg: "var(--cyan-soft)",
    },
    {
      label: "Completed",
      value: stats.done,
      icon: <CheckCircle2 size={17} />,
      color: "var(--success)",
      bg: "var(--success-soft)",
    },
    {
      label: "Unassigned",
      value: stats.unassigned,
      icon: <AlertCircle size={17} />,
      color: "var(--danger)",
      bg: "var(--danger-soft)",
    },
    {
      label: "Staff",
      value: stats.totalStaff,
      icon: <Users size={17} />,
      color: "var(--violet)",
      bg: "var(--violet-soft)",
    },
  ];

  return (
    <div className="tasks-page min-h-full py-5 text-[var(--text)]">
      <FontImport />

      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: -18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -18, scale: 0.96 }}
            className="fixed left-1/2 top-5 z-[100] -translate-x-1/2 rounded-xl border border-[var(--primary-border)] bg-[var(--surface)] px-4 py-2.5 text-xs font-bold text-[var(--primary)] shadow-[var(--shadow-lg)]"
          >
            {notification}
          </motion.div>
        )}
      </AnimatePresence>

      <header className="mx-auto flex max-w-[1440px] flex-col gap-4 pb-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--primary)] shadow-[var(--shadow-xs)]">
            <ClipboardList size={13} />
            Demo Workspace
          </div>

          <h1 className="text-2xl font-bold tracking-tight text-[var(--text)] md:text-3xl">
            Task Management Demo
            <span className="ml-2 text-sm font-medium text-[var(--muted)]">
              / Staff Assignment
            </span>
          </h1>

          <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-[var(--muted)]">
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays size={14} />
              {today}
            </span>
            <span>{stats.pending} pending</span>
            <span>{stats.totalStaff} demo staff</span>
            <span className="rounded-full border border-[var(--primary-border)] bg-[var(--primary-soft)] px-2 py-0.5 font-bold text-[var(--primary)]">
              Local demo data · No API
            </span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={reloadAll}
            className="inline-flex h-10 items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 text-xs font-semibold text-[var(--text-2)] shadow-[var(--shadow-xs)] transition hover:bg-[var(--surface-hover)]"
          >
            {refreshing ? (
              <Loader2 size={16} className="animate-spin" />
            ) : (
              <RefreshCw size={16} />
            )}
            Reset Demo
          </button>

          <button
            onClick={() => setCreateOpen(true)}
            className="inline-flex h-10 items-center gap-2 rounded-xl bg-[var(--color-blue-600)] px-4 text-xs font-semibold text-white shadow-md shadow-blue-600/20 transition hover:bg-[var(--color-blue-500)] active:scale-95"
          >
            <Plus size={16} />
            New Task
          </button>
        </div>
      </header>

      <main style={{ maxWidth: 1440, margin: "0 auto", padding: "0 0 28px" }}>
        <div className="mb-[18px] grid grid-cols-2 gap-3 md:grid-cols-3 2xl:grid-cols-6">
          {statCards.map((card) => (
            <div
              key={card.label}
              className="surface-card"
              style={{
                padding: 16,
                display: "flex",
                alignItems: "center",
                gap: 12,
                minWidth: 0,
              }}
            >
              <div
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: 14,
                  background: card.bg,
                  color: card.color,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                {card.icon}
              </div>

              <div style={{ minWidth: 0 }}>
                <p
                  style={{
                    fontSize: 12,
                    color: "var(--muted)",
                    fontWeight: 700,
                  }}
                >
                  {card.label}
                </p>
                <p
                  style={{
                    fontSize: 22,
                    color: "var(--text)",
                    fontWeight: 800,
                    lineHeight: 1.1,
                  }}
                >
                  {card.value}
                </p>
              </div>
            </div>
          ))}
        </div>

        <DndContext
          sensors={sensors}
          onDragStart={onDragStart}
          onDragOver={onDragOver}
          onDragEnd={onDragEnd}
        >
          <div className="grid items-start gap-4 xl:grid-cols-[360px_minmax(0,1fr)]">
            <aside className="surface-card" style={{ overflow: "hidden" }}>
              <div
                style={{
                  padding: 16,
                  borderBottom: "1px solid var(--border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 12,
                }}
              >
                <div>
                  <h2
                    style={{
                      fontSize: 18,
                      fontWeight: 800,
                      color: "var(--text)",
                    }}
                  >
                    Task Pool
                  </h2>
                  <p
                    style={{
                      fontSize: 12,
                      color: "var(--muted)",
                      marginTop: 4,
                    }}
                  >
                    Drag any task onto a staff card
                  </p>
                </div>

                <button
                  onClick={() => setCreateOpen(true)}
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 12,
                    border: "1px solid var(--border)",
                    background: "var(--surface-2)",
                    color: "var(--primary)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    flexShrink: 0,
                  }}
                >
                  <Plus size={16} />
                </button>
              </div>

              <div
                style={{ padding: 14, borderBottom: "1px solid var(--border)" }}
              >
                <div style={{ position: "relative" }}>
                  <Search
                    size={15}
                    style={{
                      position: "absolute",
                      left: 12,
                      top: "50%",
                      transform: "translateY(-50%)",
                      color: "var(--muted-2)",
                    }}
                  />
                  <input
                    value={poolQuery}
                    onChange={(e) => setPoolQuery(e.target.value)}
                    placeholder="Search tasks..."
                    style={{ ...inputBase, paddingLeft: 36 }}
                  />
                </div>
              </div>

              <div
                style={{
                  padding: 14,
                  display: "grid",
                  gap: 10,
                  maxHeight: "calc(100vh - 330px)",
                  overflow: "auto",
                }}
              >
                {poolTasks.length === 0 ? (
                  <div
                    style={{
                      borderRadius: 16,
                      border: "1.5px dashed var(--border-strong)",
                      background: "var(--surface-2)",
                      padding: "28px 16px",
                      textAlign: "center",
                    }}
                  >
                    <div style={{ fontSize: 28, marginBottom: 8 }}>📋</div>
                    <p
                      style={{
                        fontSize: 14,
                        fontWeight: 800,
                        color: "var(--text)",
                        marginBottom: 4,
                      }}
                    >
                      No tasks in pool
                    </p>
                    <p style={{ fontSize: 12, color: "var(--muted)" }}>
                      Create a task or unassign one from staff
                    </p>
                  </div>
                ) : (
                  poolTasks.map((task) => (
                    <DraggableTaskChip
                      key={task.id}
                      task={task}
                      allStaff={staff}
                      onDelete={() => deleteTask(task.id)}
                      actionLoading={actionTaskId === task.id}
                    />
                  ))
                )}
              </div>
            </aside>

            <section className="surface-card" style={{ overflow: "hidden" }}>
              <div
                style={{
                  padding: "16px 16px 14px",
                  borderBottom: "1px solid var(--border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 14,
                  flexWrap: "wrap",
                }}
              >
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      marginBottom: 6,
                    }}
                  >
                    <div
                      style={{
                        width: 38,
                        height: 38,
                        borderRadius: 14,
                        background: "var(--primary-soft)",
                        color: "var(--primary)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Users size={18} />
                    </div>
                    <h2
                      style={{
                        fontSize: 18,
                        fontWeight: 800,
                        color: "var(--text)",
                      }}
                    >
                      Task Assignment Board
                    </h2>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      gap: 7,
                      alignItems: "center",
                      padding: "6px 12px",
                      borderRadius: 999,
                      background: "var(--surface-2)",
                      border: "1px solid var(--border)",
                      color: "var(--muted)",
                      fontSize: 11.5,
                      fontWeight: 700,
                      width: "fit-content",
                    }}
                  >
                    Drag task from left
                    <ArrowRight size={13} style={{ color: "var(--primary)" }} />
                    Drop on staff card
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: 10,
                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <div style={{ position: "relative", minWidth: 240 }}>
                    <Search
                      size={15}
                      style={{
                        position: "absolute",
                        left: 12,
                        top: "50%",
                        transform: "translateY(-50%)",
                        color: "var(--muted-2)",
                      }}
                    />
                    <input
                      value={staffQuery}
                      onChange={(e) => setStaffQuery(e.target.value)}
                      placeholder="Search staff..."
                      style={{ ...inputBase, paddingLeft: 36 }}
                    />
                  </div>

                  <div style={{ position: "relative", minWidth: 170 }}>
                    <Filter
                      size={15}
                      style={{
                        position: "absolute",
                        left: 12,
                        top: "50%",
                        transform: "translateY(-50%)",
                        color: "var(--muted-2)",
                      }}
                    />
                    <select
                      value={attFilter}
                      onChange={(e) =>
                        setAttFilter(e.target.value as AttStatus | "All")
                      }
                      style={{ ...inputBase, paddingLeft: 36 }}
                    >
                      <option value="All">All attendance</option>
                      <option value="Present">Present</option>
                      <option value="Late">Late</option>
                      <option value="Absent">Absent</option>
                    </select>
                  </div>
                </div>
              </div>

              <div
                style={{
                  padding: "12px 16px",
                  borderBottom: "1px solid var(--border)",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  flexWrap: "wrap",
                }}
              >
                <Badge
                  label={`Present ${attStats.present}`}
                  color="var(--success)"
                  bg="var(--success-soft)"
                  border="rgba(12,166,120,.20)"
                />
                <Badge
                  label={`Late ${attStats.late}`}
                  color="var(--warning)"
                  bg="var(--warning-soft)"
                  border="rgba(230,119,0,.20)"
                />
                <Badge
                  label={`Absent ${attStats.absent}`}
                  color="var(--danger)"
                  bg="var(--danger-soft)"
                  border="rgba(224,49,49,.20)"
                />
              </div>

              <div style={{ padding: 14 }}>
                {false ? (
                  <div
                    style={{
                      borderRadius: 16,
                      border: "1.5px dashed var(--border-strong)",
                      background: "var(--surface-2)",
                      padding: "36px 16px",
                      textAlign: "center",
                      fontSize: 14,
                      fontWeight: 700,
                      color: "var(--muted)",
                    }}
                  >
                    Loading staff...
                  </div>
                ) : filteredStaff.length === 0 ? (
                  <div
                    style={{
                      borderRadius: 16,
                      border: "1.5px dashed var(--border-strong)",
                      background: "var(--surface-2)",
                      padding: "36px 16px",
                      textAlign: "center",
                    }}
                  >
                    <div style={{ fontSize: 28, marginBottom: 8 }}>🔎</div>
                    <p
                      style={{
                        fontSize: 14,
                        fontWeight: 800,
                        color: "var(--text)",
                        marginBottom: 4,
                      }}
                    >
                      No staff found
                    </p>
                    <p style={{ fontSize: 12, color: "var(--muted)" }}>
                      Try changing the search or attendance filter.
                    </p>
                  </div>
                ) : (
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`${staffPage}-${staffQuery}-${attFilter}`}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      style={{
                        display: "grid",
                        gridTemplateColumns:
                          "repeat(auto-fill,minmax(290px,1fr))",
                        gap: 12,
                      }}
                    >
                      {pagedStaff.map((member) => (
                        <DroppableStaffCard
                          key={member.id}
                          staff={member}
                          tasks={getStaffTasks(member.id)}
                          isOver={overStaffId === member.id}
                          onRemoveTask={unassignTask}
                          onStatusChange={updateStatus}
                          actionTaskId={actionTaskId}
                        />
                      ))}
                    </motion.div>
                  </AnimatePresence>
                )}
              </div>

              <Pagination
                page={staffPage}
                total={filteredStaff.length}
                perPage={PER_PAGE}
                onChange={setStaffPage}
                label={`${filteredStaff.length} staff`}
              />
            </section>
          </div>

          <DragOverlay dropAnimation={{ duration: 150, easing: "ease" }}>
            {activeTask && <TaskGhost task={activeTask} allStaff={staff} />}
          </DragOverlay>
        </DndContext>
      </main>

      <CreateModal
        open={createOpen}
        onClose={() => setCreateOpen(false)}
        onSubmit={createTask}
        submitting={creatingTask}
      />
    </div>
  );
}