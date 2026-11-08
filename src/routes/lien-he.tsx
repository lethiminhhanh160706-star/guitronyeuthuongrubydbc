import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, Section, Card, SOCIALS, meta } from "@/components/site";

export const Route = createFileRoute("/lien-he")({
  head: () => meta("Liên hệ đội thi | Trà Sâm Trường Nhân – DBC2026", "Thông tin liên hệ và mạng xã hội của đội thi chiến dịch Gửi trọn yêu thương."),
  component: Contact,
});

const TEAM_EMAIL = ""; // [CẦN BỔ SUNG: Email đội] – cập nhật khi có

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !/^\S+@\S+\.\S+$/.test(form.email) || !form.message.trim()) {
      setError("Vui lòng nhập đầy đủ họ tên, email hợp lệ và nội dung.");
      return;
    }
    setError("");
    if (!TEAM_EMAIL) {
      setError("Email của đội chưa được cập nhật. Vui lòng liên hệ qua mạng xã hội.");
      return;
    }
    window.location.href = `mailto:${TEAM_EMAIL}?subject=${encodeURIComponent("Liên hệ từ " + form.name)}&body=${encodeURIComponent(form.message + "\n\n" + form.email)}`;
  };
  const input = "w-full rounded-md border border-input bg-background px-4 py-3 outline-none focus:border-gold";
  return (
    <>
      <PageHero eyebrow="Liên hệ" title="Kết nối với chúng tôi" />
      <Section title="Thông tin liên hệ">
        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <dl className="space-y-4">
              {[["Đội thi", "Đội RUBY"], ["Email", "[CẦN BỔ SUNG: Email đội]"], ["Điện thoại", "[CẦN BỔ SUNG: Số điện thoại]"], ["Trường / Đơn vị", "[CẦN BỔ SUNG: Tên trường]"]].map(([k, v]) => (
                <div key={k}><dt className="text-xs uppercase tracking-widest text-accent">{k}</dt><dd className="text-primary">{v}</dd></div>
              ))}
            </dl>
            <div className="mt-6 flex flex-wrap gap-3">
              {SOCIALS.map((s) => (
                <a key={s.label} href={s.href} className="rounded-full border border-gold px-4 py-2 text-sm text-primary hover:bg-gold/10">{s.label}</a>
              ))}
            </div>
          </Card>
          <Card>
            <form onSubmit={submit} className="space-y-4">
              <input className={input} placeholder="Họ và tên" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
              <input className={input} placeholder="Email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
              <textarea className={input} rows={5} placeholder="Nội dung" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
              {error && <p className="text-sm text-destructive">{error}</p>}
              <button className="w-full rounded-md bg-primary py-3 font-medium text-primary-foreground hover:bg-primary/90">Gửi lời nhắn</button>
            </form>
          </Card>
        </div>
      </Section>
    </>
  );
}
