const statusColumn = [
  { id: 1, title: "To Do" },
  { id: 2, title: "In Progres" },
  { id: 3, title: "To Check" },
  { id: 4, title: "Done" },
];

export default function DashboardPage() {
  return (
    <div className="grid grid-cols-4 gap-4">
      {statusColumn.map((col) => (
        <div key={col.id} className="p-4 border rounded shadow">
          {col.title}
        </div>
      ))}
    </div>
  );
}
