import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/hero-tea.jpg";
import { PageHero, Section, Placeholder, Card, meta } from "@/components/site";

export const Route = createFileRoute("/du-an")({
  head: () => meta("Dự án Trường Nhân – Trà Sâm | DBC2026", "Giới thiệu thương hiệu Trường Nhân, sản phẩm Trà Sâm và câu chuyện thương hiệu."),
  component: Project,
});

function Project() {
  return (
    <>
      <PageHero eyebrow="Dự án" title="Trường Nhân – Trà Sâm" desc="[CẦN BỔ SUNG: Giới thiệu chính thức từ thương hiệu]" />
      <Section eyebrow="Thương hiệu" title="Về Trường Nhân">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <p className="text-muted-foreground">[CẦN BỔ SUNG: Thông tin giới thiệu thương hiệu Trường Nhân]</p>
          <img src={hero} alt="Trà sâm" loading="lazy" width={1600} height={1008} className="rounded-lg shadow-elegant" />
        </div>
      </Section>
      <section className="bg-secondary">
        <Section eyebrow="Sản phẩm" title="Trà Sâm">
          <div className="grid gap-6 md:grid-cols-2">
            <Placeholder label="[CẦN BỔ SUNG: Ảnh sản phẩm Trà Sâm]" className="aspect-[4/3]" />
            <Card>
              <h3 className="text-2xl text-primary">Thông tin sản phẩm</h3>
              <p className="mt-3 text-muted-foreground">[CẦN BỔ SUNG: Thành phần, quy cách, cách dùng]</p>
            </Card>
          </div>
        </Section>
      </section>
      <Section eyebrow="Lợi ích" title="Lợi ích sản phẩm">
        <div className="grid gap-6 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <Card key={i}>
              <p className="font-display text-3xl text-gold">0{i}</p>
              <h3 className="mt-2 text-xl text-primary">[CẦN BỔ SUNG: Lợi ích {i}]</h3>
              <p className="mt-2 text-sm text-muted-foreground">[CẦN BỔ SUNG: Mô tả lợi ích]</p>
            </Card>
          ))}
        </div>
      </Section>
      <section className="bg-gradient-forest text-forest-foreground">
        <div className="mx-auto max-w-3xl px-4 py-20 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Câu chuyện thương hiệu</p>
          <p className="mt-6 font-display text-2xl italic leading-relaxed">“[CẦN BỔ SUNG: Câu chuyện thương hiệu Trường Nhân]”</p>
        </div>
      </section>
    </>
  );
}
