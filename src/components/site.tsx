import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, X, Leaf } from "lucide-react";

export const NAV = [
  { to: "/", label: "Trang chủ" },
  { to: "/doi-ngu", label: "Đội ngũ" },
  { to: "/du-an", label: "Dự án" },
  { to: "/chien-dich", label: "Chiến dịch" },
  { to: "/hoat-dong", label: "Hoạt động" },
  { to: "/lien-he", label: "Liên hệ" },
] as const;

export const SOCIALS = [
  { label: "Facebook", href: "#", note: "[CẦN BỔ SUNG: Link Facebook]" },
  { label: "TikTok", href: "#", note: "[CẦN BỔ SUNG: Link TikTok]" },
  { label: "Instagram", href: "#", note: "[CẦN BỔ SUNG: Link Instagram]" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-gold">
            <Leaf className="h-5 w-5" />
          </span>
          <span className="font-display text-lg font-semibold text-primary">Đội RUBY</span>
        </Link>
        <nav className="hidden gap-6 md:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
              activeProps={{ className: "text-sm font-semibold text-primary" }}
              activeOptions={{ exact: true }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <button className="md:hidden text-primary" onClick={() => setOpen(!open)} aria-label="Mở menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="flex flex-col border-t border-border bg-background px-4 py-2 md:hidden">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="py-3 text-primary">
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-gradient-forest text-forest-foreground">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3">
        <div>
          <p className="font-display text-xl text-gold">Trường Nhân – Trà Sâm</p>
          <p className="mt-2 text-sm opacity-80">Chiến dịch “Gửi trọn yêu thương” · DBC2026</p>
        </div>
        <div className="text-sm opacity-80">
          <p>Email: [CẦN BỔ SUNG: Email đội]</p>
          <p>Điện thoại: [CẦN BỔ SUNG: Số điện thoại]</p>
        </div>
        <div className="flex gap-4 text-sm">
          {SOCIALS.map((s) => (
            <a key={s.label} href={s.href} className="text-gold-soft hover:text-gold">{s.label}</a>
          ))}
        </div>
      </div>
      <p className="border-t border-gold/20 py-4 text-center text-xs opacity-60">
        © 2026 Đội RUBY – Cuộc thi Digital Marketing DBC2026
      </p>
    </footer>
  );
}

export function PageHero({ eyebrow, title, desc }: { eyebrow: string; title: string; desc?: string }) {
  return (
    <section className="bg-gradient-forest text-forest-foreground">
      <div className="mx-auto max-w-6xl px-4 py-20 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-gold">{eyebrow}</p>
        <h1 className="mt-4 text-4xl md:text-5xl">{title}</h1>
        <div className="gold-rule mx-auto mt-6" />
        {desc && <p className="mx-auto mt-6 max-w-2xl opacity-80">{desc}</p>}
      </div>
    </section>
  );
}

export function Section({ title, eyebrow, children }: { title: string; eyebrow?: string; children: ReactNode }) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      {eyebrow && <p className="text-xs uppercase tracking-[0.3em] text-accent">{eyebrow}</p>}
      <h2 className="mt-2 text-3xl text-primary md:text-4xl">{title}</h2>
      <div className="gold-rule mt-4" />
      <div className="mt-10">{children}</div>
    </section>
  );
}

export function Placeholder({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div className={`flex items-center justify-center rounded-lg border-2 border-dashed border-gold/50 bg-muted text-center text-sm text-muted-foreground ${className}`}>
      {label}
    </div>
  );
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`rounded-lg border border-border bg-card p-6 shadow-elegant ${className}`}>{children}</div>;
}

export function meta(title: string, description: string) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}
