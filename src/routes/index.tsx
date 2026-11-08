import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero-tea.jpg";
import love from "@/assets/campaign-love.jpg";
import { Section, meta, NAV } from "@/components/site";

export const Route = createFileRoute("/")({
  head: () => meta("Gửi trọn yêu thương – Trà Sâm Trường Nhân | DBC2026", "Trang chủ đội thi DBC2026 với dự án Trường Nhân – Trà Sâm và chiến dịch Gửi trọn yêu thương."),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="relative overflow-hidden bg-forest text-forest-foreground">
        <img src={hero} alt="Trà sâm Trường Nhân" width={1600} height={1008} className="absolute inset-0 h-full w-full object-cover opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest via-forest/80 to-transparent" />
        <div className="relative mx-auto max-w-6xl px-4 py-28 md:py-40">
          <p className="text-xs uppercase tracking-[0.35em] text-gold">Đội RUBY · DBC2026</p>
          <h1 className="mt-6 max-w-2xl text-5xl leading-tight md:text-7xl">
            Gửi trọn <span className="text-gradient-gold italic">yêu thương</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg opacity-85">Dự án Trường Nhân – Trà Sâm · Cuộc thi Digital Marketing DBC2026</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/chien-dich" className="rounded-md bg-gold px-6 py-3 font-medium text-accent-foreground transition hover:bg-gold-soft">Khám phá chiến dịch</Link>
            <Link to="/doi-ngu" className="rounded-md border border-gold/60 px-6 py-3 text-gold-soft transition hover:bg-gold/10">Gặp gỡ đội thi</Link>
          </div>
        </div>
      </section>

      <Section eyebrow="Về chiến dịch" title="Một tách trà, trọn vẹn yêu thương">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <img src={love} alt="Trao tách trà yêu thương" loading="lazy" width={1200} height={912} className="rounded-lg shadow-elegant" />
          <div className="space-y-4 text-muted-foreground">
            <p>
              <strong className="font-semibold text-primary">“Gửi trọn yêu thương”</strong> là chiến dịch Digital Marketing dành cho sản phẩm Trà Sâm Trường Nhân, được triển khai trong 8 tuần, từ ngày 30/11/2026 đến 24/01/2027, hướng đến mùa mua sắm Tết. Chiến dịch lấy ý tưởng chủ đạo{" "}
              <strong className="font-semibold text-accent italic">“7 phút bên cha mẹ”</strong>, kết nối thời gian hãm trà 5–7 phút với hành động gọi điện hoặc video call hỏi thăm bố mẹ. Thông qua nội dung truyền thông giàu cảm xúc, thông tin minh bạch về sản phẩm và các hoạt động quảng bá trên TikTok, TikTok Shop và Facebook, chiến dịch hướng đến xây dựng niềm tin, gia tăng nhận diện thương hiệu và thúc đẩy hành vi mua hàng, đặc biệt là nhu cầu mua trà làm quà tặng dịp Tết.
            </p>
            <Link to="/chien-dich" className="inline-block font-medium text-primary underline decoration-gold underline-offset-4">Xem chi tiết chiến dịch →</Link>
          </div>
        </div>
      </Section>

      <section className="bg-secondary">
        <div className="mx-auto grid max-w-6xl gap-4 px-4 py-14 sm:grid-cols-2 md:grid-cols-5">
          {NAV.slice(1).map((n) => (
            <Link key={n.to} to={n.to} className="rounded-lg border border-border bg-card p-5 text-center font-display text-lg text-primary transition hover:border-gold hover:shadow-elegant">
              {n.label}
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
