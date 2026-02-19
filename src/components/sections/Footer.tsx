export function Footer() {
  return (
    <footer className="border-t border-border-subtle py-12 px-8 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-heading text-sm font-semibold tracking-wide text-text-muted uppercase">
          Arcterra
        </div>
        <p className="font-mono text-xs text-text-muted tracking-wide">
          &copy; {new Date().getFullYear()} Arcterra Labs. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
