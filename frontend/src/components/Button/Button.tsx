export default function Button({
  children,
  onClick,
  className = "",
}: {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-400 transition-colors mb-4 uppercase max-h-[40px] ${className}`}
    >
      {children}
    </button>
  );
}
