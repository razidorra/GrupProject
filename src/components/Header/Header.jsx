export default function Header({ total, done }) {
  return (
    <header className="bg-primary text-primary-content shadow-sm">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-5 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div>
          <h1 className="text-2xl font-bold leading-tight sm:text-3xl">
            Team Task Board
          </h1>
          <p className="text-sm opacity-75">Manage Tasks for your Team.</p>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:w-64">
          <div className="rounded-box bg-primary-content/10 px-4 py-3 text-center">
            <p className="text-2xl font-bold leading-none">{total}</p>
            <p className="mt-1 text-xs uppercase opacity-70">Tasks</p>
          </div>
          <div className="rounded-box bg-primary-content/10 px-4 py-3 text-center">
            <p className="text-2xl font-bold leading-none">{done}</p>
            <p className="mt-1 text-xs uppercase opacity-70">Done</p>
          </div>
        </div>
      </div>
    </header>
  );
}
