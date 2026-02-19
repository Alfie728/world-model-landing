export function Footer() {
  return (
    <footer className="border-border-subtle border-t px-8 py-12 md:px-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
        <div className="font-heading font-semibold text-sm text-text-muted uppercase tracking-wide">
          Arcterra
        </div>
        <p className="font-mono text-text-muted text-xs tracking-wide">
          &copy; {new Date().getFullYear()} Arcterra Labs. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
