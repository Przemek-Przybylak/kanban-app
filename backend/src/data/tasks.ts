export interface Task {
  taskId: string;
  title: string;
  description: string;
  dueDate: string;
  project: string;
  status: string;
  assignees: string[];
  approvedBy: string | null;
}

export const tasks: Task[] = [
  {
    taskId: "1",
    title: "Zaprojektować UI strony głównej",
    description: "Layout i elementy wizualne",
    dueDate: "2025-06-01",
    project: "Projekt Alfa",
    status: "todo",
    assignees: ["Jan Kowalski", "Anna Nowak"],
    approvedBy: null,
  },
  {
    taskId: "2",
    title: "Zaimplementować backend API",
    description: "Endpointy do zadań",
    dueDate: "2025-06-10",
    project: "Projekt Alfa",
    status: "in_progress",
    assignees: ["Michał Wiśniewski"],
    approvedBy: null,
  },
  {
    taskId: "3",
    title: "Dodanie responsywności do UI",
    description: "Media queries, testy mobilne",
    dueDate: "2025-06-12",
    project: "Projekt Alfa",
    status: "todo",
    assignees: ["Karolina Maj"],
    approvedBy: null,
  },
  {
    taskId: "4",
    title: "Testy jednostkowe komponentów",
    description: "RTL, Jest",
    dueDate: "2025-06-08",
    project: "Projekt Alfa",
    status: "review",
    assignees: ["Jan Kowalski"],
    approvedBy: null,
  },
  {
    taskId: "5",
    title: "Deploy na Vercel",
    description: "Pierwsze wypchnięcie projektu",
    dueDate: "2025-06-15",
    project: "Projekt Alfa",
    status: "done",
    assignees: ["Anna Nowak"],
    approvedBy: null,
  },
  {
    taskId: "6",
    title: "Setup bazy danych",
    description: "MongoDB Atlas",
    dueDate: "2025-06-05",
    project: "Projekt Alfa",
    status: "done",
    assignees: ["Michał Wiśniewski"],
    approvedBy: null,
  },
  {
    taskId: "7",
    title: "Konfiguracja ESLint i Prettier",
    description: "Lintowanie i formatowanie kodu",
    dueDate: "2025-06-02",
    project: "Projekt Alfa",
    status: "review",
    assignees: ["Karolina Maj"],
    approvedBy: null,
  },
  {
    taskId: "8",
    title: "Zarządzanie stanem w aplikacji",
    description: "React Context / Zustand",
    dueDate: "2025-06-07",
    project: "Projekt Alfa",
    status: "in_progress",
    assignees: ["Anna Nowak"],
    approvedBy: null,
  },
  {
    taskId: "9",
    title: "Obsługa błędów",
    description: "Zabezpieczenie API",
    dueDate: "2025-06-11",
    project: "Projekt Alfa",
    status: "todo",
    assignees: ["Jan Kowalski"],
    approvedBy: null,
  },
  {
    taskId: "10",
    title: "Dodanie logowania",
    description: "Prosty auth (mock)",
    dueDate: "2025-06-09",
    project: "Projekt Alfa",
    status: "todo",
    assignees: ["Michał Wiśniewski", "Karolina Maj"],
    approvedBy: null,
  },
];
