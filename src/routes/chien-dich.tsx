import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Eye, Heart, ShoppingCart, Gift, Star, type LucideIcon } from "lucide-react";
import love from "@/assets/campaign-love.jpg";
import { PageHero, Section, Card, meta } from "@/components/site";

export const Route = createFileRoute("/chien-dich")({
  head: () => meta("Chiến dịch Gửi trọn yêu thương | Trà Sâm Trường Nhân", "Tổng quan, ý tưởng 7 phút bên cha mẹ, mục tiêu, đối tượng, thông điệp và lộ trình 8 tuần của chiến dịch Gửi trọn yêu thương."),
  component: Campaign,
});

const H = "Lê Thị Minh Hạnh", C = "Vũ Thị Linh Chi", V = "Trần Việt Hoàng";

export const WEEKS = [
  { n: 1, title: "Gieo nền tảng", acts: ["Dựng gian hàng TikTok Shop.", "Đăng thẻ sản phẩm.", "Quay phim hero và 8 video ngắn.", "Tuyển 36 KOC/KOL.", "Livestream 2 phiên.", "Chạy thử Spark Ads."], outs: ["Gian hàng hoàn chỉnh.", "Video V1 và 8 video ngắn.", "Danh sách KOC."], owners: [V, C, H], milestone: "Mốc duyệt nội dung: 04/12." },
  { n: 2, title: "Seeding và kiểm chứng", acts: ["Seeding mẫu.", "Sản xuất 6 video.", "Triển khai hoạt động 12.12.", "Livestream 3 phiên.", "Thử nghiệm A/B nội dung và quảng cáo."], outs: ["Báo cáo A/B mẫu 1.", "Lựa chọn mẫu nội dung quảng cáo hiệu quả."], owners: [C, V] },
  { n: 3, title: "Xây dựng niềm tin", acts: ["Triển khai video V3, V4.", "KOL đầu tiên tham gia.", "Livestream 3 phiên, trong đó có 1 phiên KOL.", "Truyền tải bằng chứng về sản phẩm."], outs: ["Video bằng chứng.", "Báo cáo tuần."], owners: [C, H] },
  { n: 4, title: "Tăng tương tác dịp Noel", acts: ["Triển khai ưu đãi Noel.", "Khuyến khích nội dung UGC.", "Livestream 3 phiên.", "Tăng cường hoạt động KOC."], outs: ["Bộ nội dung Noel."], owners: [C, V] },
  { n: 5, title: "Thúc đẩy mua combo", acts: ["Triển khai combo 2 hộp và 3 hộp.", "Livestream KOL.", "Tận dụng dịp Tết Dương lịch.", "Theo dõi hiệu quả bán combo."], outs: ["Báo cáo hiệu quả combo."], owners: [V, H] },
  { n: 6, title: "Lan tỏa thử thách", acts: ["Triển khai video V5.", "Đẩy mạnh thử thách #7PhutYeuThuong.", "Tăng ngân sách Shop Ads.", "Livestream KOL."], outs: ["Báo cáo UGC."], owners: [C, V] },
  { n: 7, title: "Cao điểm chốt đơn Tết", acts: ["Tăng cường livestream cao điểm.", "Remarketing khách hàng đã quan tâm.", "Đẩy mạnh hoạt động chốt đơn quà Tết.", "Theo dõi tiến độ đơn hàng và khả năng giao hàng."], outs: ["Báo cáo tuần."], owners: [V], milestone: "Mốc duyệt: Xem xét giải ngân dự phòng đợt 2 theo điều kiện kế hoạch." },
  { n: 8, title: "Hoàn tất và tổng kết", acts: ["Triển khai poster G8 \"Chốt quà Tết – giao kịp trước Tết\".", "Phát hành video V6.", "Livestream marathon.", "Tổng kết chiến dịch và đánh giá hiệu quả."], outs: ["Báo cáo cuối chiến dịch.", "Bài học kinh nghiệm."], owners: [H, C, V] },
];

const PHASES = [
  { code: "P1 – GIEO", time: "Tuần 1–2 · 30/11–13/12", goal: "Nhận biết và kiểm chứng insight.", out: "Tối thiểu 14 video, 20 KOC đã nhận mẫu.", kpi: "CTR ≥ 0,8%; có ít nhất 3 mẫu thắng." },
  { code: "P2 – TIN", time: "Tuần 3–4 · 14/12–27/12", goal: "Xây dựng niềm tin và cân nhắc.", out: "Ít nhất 50% KOC đăng bài.", kpi: "Tỷ lệ thêm giỏ ≥ 6% lượt vào Shop." },
  { code: "P3 – TẶNG", time: "Tuần 5–6 · 28/12–10/01", goal: "Thúc đẩy chuyển đổi và bán combo.", out: "Combo chiếm ít nhất 30% đơn.", kpi: "ROAS ≥ 2,0." },
  { code: "P4 – CHỐT", time: "Tuần 7–8 · 11/01–24/01", goal: "Chốt đơn trong giai đoạn cao điểm.", out: "Đạt mục tiêu đơn hàng/doanh thu và báo cáo cuối chiến dịch.", kpi: "G8, V6, livestream marathon, remarketing và tổng kết." },
];

type Kpi = { code: string; name: string; icon: LucideIcon; items: [string, string][]; hero?: boolean };

const KPIS: Kpi[] = [
  { code: "M1", name: "Nhận biết", icon: Eye, items: [["≥ 1,7 triệu", "người xem duy nhất tiếp cận quảng cáo TikTok"], ["≥ 5,2 triệu", "tổng lượt xem/hiển thị video"]] },
  { code: "M2", name: "Quan tâm và niềm tin", icon: Heart, items: [["≥ 40.000", "lượt nhấp vào gian hàng từ quảng cáo"], ["≥ 5.000", "người theo dõi mới TikTok/Shop"]] },
  { code: "M3", name: "Chuyển đổi và doanh thu", icon: ShoppingCart, items: [["≥ 2.200", "đơn hàng"], ["≥ 1.200 triệu đồng", "doanh thu GMV"], ["≥ 2,4", "ROAS tổng"]] },
  { code: "M4", name: "Quà tặng", icon: Gift, hero: true, items: [["≥ 35%", "tỷ lệ đơn combo 2–3 hộp"]] },
  { code: "M5", name: "Chất lượng dịch vụ", icon: Star, items: [["≥ 4,7/5", "điểm đánh giá gian hàng"], ["≥ 95%", "chat được phản hồi trong 15 phút"]] },
];

const AUDIENCES = [
  { tag: "Nhóm chính", title: "Con xa nhà (25–44 tuổi)", pts: ["Người đi làm tại thành phố lớn, quê ở xa bố mẹ.", "Thường mua sắm bằng điện thoại, sử dụng TikTok.", "Muốn gửi món quà thiết thực để thể hiện sự quan tâm khi không thể về nhà.", "Ngân sách quà tặng dự kiến: 300.000–800.000 đồng.", "Động cơ: quà có ý nghĩa, nguồn gốc rõ ràng và thuận tiện khi gửi tặng.", "Rào cản: lo ngại hàng giả, chưa biết bố mẹ có phù hợp với thành phần sản phẩm hay không."] },
  { tag: "Nhóm phụ", title: "Dân văn phòng tự dùng (25–40 tuổi)", pts: ["Quan tâm đồ uống tiện lợi, dễ pha và trải nghiệm sản phẩm mới.", "Có thể trở thành người mua hoặc giới thiệu sản phẩm."] },
  { tag: "Nhóm phụ", title: "Người tặng quà nhỏ", pts: ["Đồng nghiệp, đối tác hoặc người mua quà cho nhóm nhỏ.", "Ngân sách dự kiến: 400.000–1.100.000 đồng.", "Quan tâm đến hình thức quà tặng, thiệp và khả năng giao hàng đúng hạn."] },
  { tag: "Người nhận", title: "Bố mẹ (từ 55 tuổi)", pts: ["Thường uống trà và quen với các sản phẩm dược liệu truyền thống.", "Giá trị nhận được chủ yếu là sự quan tâm của con cái."] },
];

const SUBNAV = [["tong-quan", "Tổng quan"], ["y-tuong", "Ý tưởng"], ["muc-tieu", "Mục tiêu"], ["doi-tuong", "Đối tượng"], ["thong-diep", "Thông điệp"], ["lo-trinh", "Lộ trình"]];

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((t) => (
        <li key={t} className="flex gap-2 text-sm text-muted-foreground"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />{t}</li>
      ))}
    </ul>
  );
}

function Note({ children }: { children: string }) {
  return <p className="mt-6 rounded-md border border-gold/40 bg-secondary px-4 py-3 text-sm italic text-primary">{children}</p>;
}

function Campaign() {
  const [active, setActive] = useState(1);
  const w = WEEKS[active - 1] ?? WEEKS[0]!;
  const phase = PHASES[Math.floor((w.n - 1) / 2)] ?? PHASES[0]!;
  return (
    <>
      <PageHero eyebrow="Chiến dịch · 30/11/2026 – 24/01/2027" title="Gửi trọn yêu thương" desc="Chiến dịch Digital Marketing 8 tuần cho Trà Sâm Trường Nhân trên TikTok và TikTok Shop." />

      <nav className="sticky top-16 z-30 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-4 py-3">
          {SUBNAV.map(([id, l]) => (
            <a key={id} href={`#${id}`} className="whitespace-nowrap rounded-full border border-border px-4 py-1.5 text-sm text-primary transition hover:border-gold hover:text-accent">{l}</a>
          ))}
        </div>
      </nav>

      <div id="tong-quan" className="scroll-mt-32">
        <Section eyebrow="Tổng quan" title="Tóm tắt chiến dịch">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[["Sản phẩm trọng tâm", "Trà Sâm Trường Nhân"], ["Thời gian", "30/11/2026 – 24/01/2027 (8 tuần)"], ["Ngân sách kế hoạch", "500.000.000 đồng"], ["Kênh trọng tâm", "TikTok và TikTok Shop; Facebook hỗ trợ remarketing và chăm sóc khách hàng"]].map(([k, v]) => (
              <Card key={k}><p className="text-xs uppercase tracking-widest text-accent">{k}</p><p className="mt-2 font-display text-lg text-primary">{v}</p></Card>
            ))}
          </div>
          <div className="mt-8 space-y-4 text-muted-foreground">
            <p>Chiến dịch "Gửi trọn yêu thương" được xây dựng nhằm gia tăng nhận biết, sự quan tâm và niềm tin đối với Trà Sâm Trường Nhân, đồng thời thúc đẩy doanh thu trên nền tảng thương mại điện tử trong mùa mua sắm Tết.</p>
            <p>Chiến dịch xuất phát từ hai vấn đề: người tiêu dùng còn lo ngại về nguồn gốc sản phẩm sâm và những món quà gửi đến người thân đôi khi thiếu đi sự kết nối, quan tâm trực tiếp.</p>
            <p>Thông qua ý tưởng "7 phút bên cha mẹ", chiến dịch biến thời gian pha một túi trà thành khoảng thời gian để người con gọi điện hoặc video call hỏi thăm bố mẹ. Đồng thời, chiến dịch sử dụng nội dung minh bạch về thành phần, giấy tờ, kiểm nghiệm và nguồn gốc để xây dựng niềm tin.</p>
          </div>
          <h3 className="mt-10 text-xl text-primary">Kết quả kỳ vọng (kịch bản cơ sở)</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[["~2.232", "đơn hàng"], ["~1.220 triệu đồng", "doanh thu"], ["~2,44", "ROAS tổng"], ["> 5,3 triệu", "lượt hiển thị/xem"]].map(([n, l]) => (
              <div key={l} className="rounded-lg bg-primary p-5 text-primary-foreground"><p className="font-display text-2xl text-gold">{n}</p><p className="mt-1 text-sm opacity-80">{l}</p></div>
            ))}
          </div>
          <Note>Đây là các chỉ tiêu dự kiến, không phải kết quả thực tế.</Note>
        </Section>
      </div>

      <div id="y-tuong" className="scroll-mt-32 bg-secondary">
        <Section eyebrow="Ý tưởng" title={'Big Idea: "7 phút bên cha mẹ"'}>
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="space-y-4 text-muted-foreground">
              <p>Mỗi hộp Trà Sâm Trường Nhân có 15 túi lọc. Theo hướng dẫn trên nhãn, mỗi túi trà cần 5–7 phút hãm. Chiến dịch tận dụng khoảng thời gian này để khuyến khích người con dành 7 phút gọi điện hoặc video call cho bố mẹ mỗi khi pha trà.</p>
              <p>Món quà vì thế không chỉ là sản phẩm được gửi đi mà còn trở thành một cái cớ để người con kết nối, hỏi thăm và dành thời gian cho gia đình.</p>
            </div>
            <img src={love} alt="Gửi trọn yêu thương" loading="lazy" width={1200} height={912} className="rounded-lg shadow-elegant" />
          </div>
          <h3 className="mt-12 text-xl text-primary">Chiến lược tiếp cận: "Từ tin đến tặng"</h3>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {[["1", "Dẫn bằng bằng chứng", "Sử dụng giấy tờ, kiểm nghiệm và thông tin nguồn gốc để giải quyết rào cản niềm tin."], ["2", "Dẫn bằng nghi thức", "Gắn thời gian hãm trà 5–7 phút với cuộc gọi 7 phút cho bố mẹ."], ["3", "Chốt bằng thương mại", "Sử dụng combo quà tặng, livestream, affiliate và quảng cáo theo nhịp mua sắm Tết."]].map(([n, t, d]) => (
              <Card key={n}><span className="font-display text-3xl text-gold">{n}</span><h4 className="mt-2 text-lg text-primary">{t}</h4><p className="mt-2 text-sm text-muted-foreground">{d}</p></Card>
            ))}
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <Card><h4 className="text-lg text-primary">Điểm khác biệt</h4><div className="gold-rule my-3" /><Bullets items={["Kết hợp giá trị cảm xúc của món quà với bằng chứng minh bạch về sản phẩm.", "Tạo ra hành động quan tâm cụ thể, dễ thực hiện.", "Kết hợp thiệp lời nhắn, thử thách UGC và livestream hỏi đáp."]} /></Card>
            <Card><h4 className="text-lg text-primary">Cơ chế lan tỏa</h4><div className="gold-rule my-3" /><p className="text-sm text-muted-foreground">Thử thách UGC <strong className="text-primary">#7PhutYeuThuong</strong>. Mỗi tuần lựa chọn 5 video để tặng hộp trà, sử dụng quỹ quà 5 triệu đồng trong ngân sách livestream/minigame.</p></Card>
          </div>
        </Section>
      </div>

      <div id="muc-tieu" className="scroll-mt-32">
        <Section eyebrow="Mục tiêu SMART" title="Mục tiêu toàn chiến dịch">
          <p className="text-muted-foreground">Thời gian thực hiện: 30/11/2026 – 24/01/2027.</p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:auto-rows-fr lg:grid-cols-6">
            {KPIS.map((k, i) => {
              const Icon = k.icon;
              return (
                <Card key={k.code} className={`flex h-full flex-col lg:col-span-2 ${i === 3 ? "lg:col-start-2" : ""}`}>
                  <div className="flex items-start justify-between gap-3">
                    <span className="shrink-0 rounded-full border border-gold/50 bg-secondary px-3 py-1 font-display text-sm font-semibold tracking-[0.2em] text-accent">{k.code}</span>
                    <Icon className="h-5 w-5 shrink-0 text-gold" aria-hidden />
                  </div>
                  <h3 className="mt-3 min-h-[3.25rem] text-lg font-semibold leading-snug text-primary">{k.name}</h3>
                  <div className="gold-rule my-3" />
                  <div className="flex flex-1 flex-col justify-center space-y-3">
                    {k.items.map(([n, l]) => (
                      <div key={l}>
                        <p className={`font-display text-primary ${k.hero ? "text-7xl" : "text-2xl"}`}>{n}</p>
                        <p className={`${k.hero ? "text-xl" : "text-sm"} text-muted-foreground`}>{l}</p>
                      </div>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
          <Note>Chú thích: Đây là mục tiêu kế hoạch được nhóm xây dựng, không phải số liệu đã đạt được.</Note>
        </Section>
      </div>

      <div id="doi-tuong" className="scroll-mt-32 bg-secondary">
        <Section eyebrow="Đối tượng" title="Đối tượng mục tiêu">
          <div className="grid gap-5 md:grid-cols-2">
            {AUDIENCES.map((a, i) => (
              <Card key={a.title} className={i === 0 ? "border-gold" : ""}>
                <span className="rounded-full bg-primary px-3 py-1 text-xs uppercase tracking-widest text-gold">{a.tag}</span>
                <h3 className="mt-3 text-xl text-primary">{a.title}</h3>
                <div className="gold-rule my-3" />
                <Bullets items={a.pts} />
              </Card>
            ))}
          </div>
        </Section>
      </div>

      <div id="thong-diep" className="scroll-mt-32">
        <Section eyebrow="Thông điệp" title="Thông điệp chính">
          <div className="rounded-lg bg-primary p-8 text-center text-primary-foreground md:p-12">
            <p className="font-display text-2xl text-gold md:text-4xl">"Gửi trọn yêu thương – 7 phút bên cha mẹ"</p>
            <p className="mt-3 opacity-90">Thông điệp hỗ trợ: "Hãm 7 phút – gọi về 7 phút"</p>
            <p className="mt-4 text-gold">#7PhutYeuThuong · #GuiTronYeuThuong</p>
            <p className="mt-4 text-sm italic opacity-75">Slogan phụ đề xuất: "Gửi trọn yêu thương – Giữ trọn quốc bảo"</p>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[["THẬT", "Món quà có giấy tờ, kiểm nghiệm và nguồn gốc."], ["DỄ", "Một túi trà, 300 ml nước sôi, hãm 5–7 phút."], ["ẤM", "Quà đi cùng lời nhắn và cuộc gọi 7 phút."], ["BỀN", "Trân trọng Sâm Ngọc Linh và giá trị dược liệu bản địa."]].map(([t, d]) => (
              <Card key={t}><p className="font-display text-2xl text-gold">{t}</p><p className="mt-2 text-sm text-muted-foreground">{d}</p></Card>
            ))}
          </div>
          <Card className="mt-6"><h4 className="text-lg text-primary">Lời kêu gọi hành động</h4><div className="gold-rule my-3" /><Bullets items={["Chọn hộp quà trên TikTok Shop.", "Gọi về 7 phút và tham gia thử thách #7PhutYeuThuong.", "Mua lại hoặc giới thiệu sản phẩm."]} /></Card>
        </Section>
      </div>

      <div id="lo-trinh" className="scroll-mt-32 bg-secondary">
        <Section eyebrow="Lộ trình" title="Kế hoạch triển khai 8 tuần">
          <div className="grid grid-cols-4 gap-2 md:grid-cols-8" role="tablist">
            {WEEKS.map((x) => (
              <button key={x.n} role="tab" aria-selected={active === x.n} onClick={() => setActive(x.n)}
                className={`rounded-md border px-2 py-3 text-center transition ${active === x.n ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-primary hover:border-gold"}`}>
                <span className="block text-xs uppercase tracking-widest opacity-80">Tuần</span>
                <span className="font-display text-xl">{x.n}</span>
              </button>
            ))}
          </div>
          <Card className="mt-6">
            <p className="text-xs uppercase tracking-widest text-accent">Tuần {w.n} · {phase.code}</p>
            <h3 className="mt-1 text-2xl text-primary">{w.title}</h3>
            <div className="gold-rule my-4" />
            <div className="grid gap-6 md:grid-cols-3">
              <div><h4 className="mb-2 font-semibold text-primary">Hoạt động</h4><Bullets items={w.acts} /></div>
              <div><h4 className="mb-2 font-semibold text-primary">Sản phẩm đầu ra</h4><Bullets items={w.outs} /></div>
              <div><h4 className="mb-2 font-semibold text-primary">Phụ trách</h4><Bullets items={w.owners} /></div>
            </div>
            {w.milestone && <p className="mt-6 rounded-md bg-secondary px-4 py-2 text-sm text-primary">{w.milestone}</p>}
          </Card>

          <h3 className="mt-12 text-xl text-primary">KPI theo giai đoạn</h3>
          <p className="mt-1 text-sm text-muted-foreground">KPI chuyển giai đoạn, tách biệt với mục tiêu SMART toàn chiến dịch ở trên.</p>
          <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {PHASES.map((p) => (
              <Card key={p.code}>
                <p className="font-display text-xl text-primary">{p.code}</p>
                <p className="text-xs uppercase tracking-widest text-accent">{p.time}</p>
                <div className="gold-rule my-3" />
                <p className="text-sm"><strong className="text-primary">Mục tiêu:</strong> <span className="text-muted-foreground">{p.goal}</span></p>
                <p className="mt-2 text-sm"><strong className="text-primary">Đầu ra:</strong> <span className="text-muted-foreground">{p.out}</span></p>
                <p className="mt-2 text-sm"><strong className="text-primary">{p.code.startsWith("P4") ? "Hoạt động:" : "KPI chuyển giai đoạn:"}</strong> <span className="text-muted-foreground">{p.kpi}</span></p>
              </Card>
            ))}
          </div>
        </Section>
      </div>
    </>
  );
}
