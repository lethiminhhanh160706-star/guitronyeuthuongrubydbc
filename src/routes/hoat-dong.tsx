import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, Section, Placeholder, Card, SOCIALS, meta } from "@/components/site";

export const Route = createFileRoute("/hoat-dong")({
  head: () => meta("Hoạt động Marketing | Gửi trọn yêu thương", "Video TikTok, bài đăng Facebook và hình ảnh chiến dịch Gửi trọn yêu thương."),
  component: Activities,
});

const tabs = ["Tất cả", "TikTok", "Facebook", "Hình ảnh"] as const;
const items = [
  ...[1, 2, 3].map((i) => ({ type: "TikTok", label: `[CẦN BỔ SUNG: Video TikTok ${i}]`, ratio: "aspect-[9/16]" })),
  ...[1, 2, 3].map((i) => ({ type: "Facebook", label: `[CẦN BỔ SUNG: Bài đăng Facebook ${i}]`, ratio: "aspect-square" })),
  ...[1, 2, 3].map((i) => ({ type: "Hình ảnh", label: `[CẦN BỔ SUNG: Hình ảnh chiến dịch ${i}]`, ratio: "aspect-[4/3]" })),
];

function Activities() {
  const [tab, setTab] = useState<(typeof tabs)[number]>("Tất cả");
  const shown = items.filter((i) => tab === "Tất cả" || i.type === tab);
  return (
    <>
      <PageHero eyebrow="Hoạt động" title="Hoạt động Marketing" desc="Nội dung đã triển khai trên các kênh truyền thông của chiến dịch." />
      <Section title="Thư viện nội dung">
        <div className="flex flex-wrap gap-2">
          {tabs.map((t) => (
            <button key={t} onClick={() => setTab(t)} className={`rounded-full border px-4 py-2 text-sm transition ${tab === t ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-primary hover:border-gold"}`}>
              {t}
            </button>
          ))}
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((it) => (
            <Card key={it.label} className="p-3">
              <Placeholder label={it.label} className={it.ratio} />
              <p className="mt-3 px-1 text-sm text-muted-foreground"><span className="font-medium text-accent">{it.type}</span> · [CẦN BỔ SUNG: Mô tả / link bài đăng]</p>
            </Card>
          ))}
        </div>
      </Section>
      <section className="bg-secondary">
        <Section title="Kênh mạng xã hội">
          <div className="grid gap-4 sm:grid-cols-3">
            {SOCIALS.map((s) => (
              <a key={s.label} href={s.href} className="rounded-lg border border-border bg-card p-6 text-center transition hover:border-gold hover:shadow-elegant">
                <p className="font-display text-xl text-primary">{s.label}</p>
                <p className="mt-1 text-sm text-muted-foreground">{s.note}</p>
              </a>
            ))}
          </div>
        </Section>
      </section>
    </>
  );
}
