function Footer({ content }) {
  return (
    <footer className="relative mx-auto w-full max-w-7xl px-4 pb-10 pt-2 sm:px-6 lg:px-8">
      <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] px-6 py-5 text-sm text-slate-400 backdrop-blur-md sm:px-8">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>{content.note}</p>
          <p className="font-mono text-xs uppercase tracking-[0.34em] text-slate-500">Deepanshu Sharma</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
