export default function Header({ total, done }) {
  return (
    <header className="navbar bg-primary text-primary-content px-6 py-4 flex justify-between">
      <div>
        <h1 className="text-2xl font-bold">Team Task Board</h1>
        <p className="text-sm opacity-70">Verwalte Aufgaben für dein Team.</p>
      </div>
      <div className="flex gap-6">
        <div className="text-center">
          <p className="text-2xl font-bold">{total}</p>
          <p className="text-xs opacity-60 uppercase">Aufgaben</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold">{done}</p>
          <p className="text-xs opacity-60 uppercase">Erledigt</p>
        </div>
      </div>
    </header>
  );
}
