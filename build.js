const fs = require('fs');

const htmlContent = `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>AIkid - Mỗi ý tưởng của con đều xứng đáng được nhìn thấy</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700;800&family=Chiron+GoRound+TC:wght@400;600;700;800;900&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="style.css?v=20.0" />
  <link rel="stylesheet" href="gift-theme.css" />
</head>
<body>

  <!-- S01: Hero -->
  <section id="pdf-sec-01" class="pdf-section hero" style="background: var(--gift-bg-2);">
    <div class="container hero__inner" style="padding-top: 60px;">
      <div class="hero__content" style="text-align: center; max-width: 800px; margin: 0 auto;">
        <img src="assets/logo.svg" alt="AIkid Logo" style="height: 48px; margin: 0 auto 20px auto;" />
        <div class="hero__eyebrow">
          <span class="badge" style="background: var(--gift-accent); color: #fff;">Sáng tạo - Trí tuệ - Cảm xúc</span>
        </div>
        <h1 class="hero__title" style="color: var(--gift-primary); font-size: 2.8rem; margin-bottom: 20px;">
          Mỗi ý tưởng của con đều xứng<br>đáng được nhìn thấy
        </h1>
        <div class="hero__img-wrap" style="margin-top: 30px;">
          <img src="assets/classroom_step1.png" alt="Kids using laptop" class="hero__img" style="border-radius: var(--radius-xl); box-shadow: var(--shadow-lg);" />
        </div>
      </div>
    </div>
  </section>

  <!-- S02: Pain Points -->
  <section id="pdf-sec-02" class="pdf-section" style="background: var(--gift-bg-1); padding: var(--section-py) 0;">
    <div class="container">
      <div class="section-header section-header--center">
        <h2 class="section-title" style="color: var(--color-primary);">BA MẸ CÓ TỪNG THẤY MÌNH<br>TRONG NHỮNG ĐIỀU NÀY?</h2>
      </div>
      <div class="concerns__grid" style="display: grid; grid-template-columns: 1fr; gap: 1.5rem; max-width: 800px; margin: 0 auto;">
        <article class="concern-card" style="background: var(--gift-bg-3); border: 2px solid var(--gift-accent);">
          <p class="concern-card__q" style="color: var(--color-text); font-weight: 600; font-size: 1.1rem; margin:0;">"Con cầm điện thoại lên, mở TikTok, YouTube xem cả ngày mà không học thêm được gì"</p>
        </article>
        <article class="concern-card" style="background: var(--gift-bg-3); border: 2px solid var(--gift-accent);">
          <p class="concern-card__q" style="color: var(--color-text); font-weight: 600; font-size: 1.1rem; margin:0;">"Mình muốn con biết dùng công nghệ có ích. Nhưng không biết bắt đầu từ đâu"</p>
        </article>
        <article class="concern-card" style="background: var(--gift-bg-3); border: 2px solid var(--gift-accent);">
          <p class="concern-card__q" style="color: var(--color-text); font-weight: 600; font-size: 1.1rem; margin:0;">"Thật ra, mình cũng chưa hiểu AI là gì cho rõ chỉ từng nghe nói nó là Chat GPT hoặc Gemini"</p>
        </article>
        <article class="concern-card" style="background: var(--gift-bg-3); border: 2px solid var(--gift-accent);">
          <p class="concern-card__q" style="color: var(--color-text); font-weight: 600; font-size: 1.1rem; margin:0;">"Và mình sợ nếu con quen hỏi AI, con sẽ quên cách tự nghĩ"</p>
        </article>
      </div>
      <div style="text-align: center; margin-top: 3rem; display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
        <a href="#pdf-sec-03" class="btn btn-outline btn--lg" style="border-color: var(--gift-primary); color: var(--gift-primary);">TÌM HIỂU THÊM</a>
        <a href="#pdf-sec-09" class="btn btn-primary btn--lg" style="background: var(--gift-primary); box-shadow: 0 4px 16px rgba(230, 57, 70, 0.4);">ĐĂNG KÝ NHẬN TƯ VẤN</a>
      </div>
    </div>
  </section>

  <!-- S03: What to Learn -->
  <section id="pdf-sec-03" class="pdf-section" style="background: var(--gift-bg-3); padding: var(--section-py) 0;">
    <div class="container">
      <div class="section-header section-header--center">
        <h2 class="section-title" style="color: var(--color-primary);">CON SẼ HỌC ĐƯỢC GÌ CÙNG AIKID?</h2>
        <h3 class="section-subtitle" style="color: var(--gift-primary); font-size: 1.5rem; font-weight: 800; margin-top: 10px;">TƯ DUY & SÁNG TẠO</h3>
        <p class="section-lead" style="margin-top: 10px;">Phát triển năng lực tự học, giải quyết vấn đề và sáng tạo theo định hướng giáo dục hiện hành</p>
      </div>
      
      <div class="roles__grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
        <!-- HỌC MÀ CHƠI -->
        <div class="roles__col roles__col--child" style="background: #fff; padding: 2rem; border-radius: var(--radius-lg); box-shadow: var(--shadow-md);">
          <div class="roles__header" style="justify-content: center;">
            <h3 class="roles__title" style="color: var(--color-primary); font-size: 1.5rem;">HỌC MÀ CHƠI</h3>
          </div>
          <p style="font-weight: 600; margin-bottom: 1rem; color: var(--color-text);">Mỗi hoạt động là một lần con được khám phá và học thêm điều mới:</p>
          <ul class="roles__list">
            <li><strong>Chơi để khám phá,</strong> tự do thử nghiệm những điều con tò mò;</li>
            <li><strong>Hỏi để học,</strong> đặt câu hỏi, trò chuyện và tìm kiếm câu trả lời</li>
            <li><strong>Tạo để hiểu,</strong> tự tay tạo nhân vật, câu chuyện và sản phẩm</li>
            <li><strong>Học qua trải nghiệm,</strong> thử, sai, làm lại và tự tìm ra cách của mình.</li>
          </ul>
        </div>
        
        <!-- CHƠI MÀ HỌC -->
        <div class="roles__col roles__col--ai" style="background: #fff; padding: 2rem; border-radius: var(--radius-lg); box-shadow: var(--shadow-md);">
          <div class="roles__header" style="justify-content: center;">
            <h3 class="roles__title" style="color: var(--color-primary); font-size: 1.5rem;">CHƠI MÀ HỌC</h3>
          </div>
          <p style="font-weight: 600; margin-bottom: 1rem; color: var(--color-text);">Biến AI thành công cụ để con vừa chơi, vừa rèn luyện những kỹ năng quan trọng:</p>
          <ul class="roles__list">
            <li><strong>Tư duy</strong> — biết suy nghĩ trước khi hỏi AI</li>
            <li><strong>Ngôn ngữ</strong> — biết diễn đạt điều mình muốn</li>
            <li><strong>Sáng tạo</strong> — biến trí tưởng tượng thành sản phẩm</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- S04: Reason -->
  <section id="pdf-sec-04" class="pdf-section" style="background: var(--gift-bg-1); padding: var(--section-py) 0;">
    <div class="container">
      <div class="section-header section-header--center">
        <h2 class="section-title" style="color: var(--color-primary);">Đó cũng là lý do AIkid ra đời</h2>
        <h3 class="section-subtitle" style="color: var(--gift-primary); font-size: 1.5rem; font-weight: 800;">TẠO RA BỘ NÃO THIÊN TÀI CHO TRẺ</h3>
        <p class="section-lead" style="margin-top: 10px; font-weight: 600;">Nền tảng sáng tạo AI dành riêng cho trẻ em Việt</p>
      </div>
      
      <div class="concerns__grid" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; margin-bottom: 3rem;">
        <article class="concern-card" style="background: #fff; border: none; box-shadow: var(--shadow-sm);">
          <p class="concern-card__a">Không phải để con tránh xa AI. Mà để con <strong>làm quen với AI đúng cách</strong>, biết đặt câu hỏi, biết suy nghĩ trước khi sử dụng và biết dùng AI như một công cụ để học tập, sáng tạo và khám phá.</p>
        </article>
        <article class="concern-card" style="background: #fff; border: none; box-shadow: var(--shadow-sm);">
          <p class="concern-card__a">Ba mẹ cũng không cần phải là <strong>người RÀNH công nghệ</strong> hay tự mình tìm hiểu hàng loạt công cụ AI. Ba mẹ chỉ cần ở bên cạnh con, trò chuyện, đặt câu hỏi và khuyến khích con tự suy nghĩ, khám phá.</p>
        </article>
        <article class="concern-card" style="background: #fff; border: none; box-shadow: var(--shadow-sm);">
          <p class="concern-card__a">Những <strong>nội dung, công cụ và hoạt động phù hợp</strong> với độ tuổi của con, <strong>AIKid</strong> sẽ chuẩn bị sẵn để ba mẹ và con có thể cùng nhau khám phá AI một cách an toàn, dễ hiểu và có ích.</p>
        </article>
      </div>
      
      <div style="text-align: center;">
        <img src="assets/hero_child_ai.png" alt="Kids exploring" style="max-width: 600px; width: 100%; border-radius: var(--radius-xl); box-shadow: var(--shadow-md); margin: 0 auto;" />
      </div>
    </div>
  </section>

  <!-- S05: Discovery -->
  <section id="pdf-sec-05" class="pdf-section" style="background: var(--gift-bg-2); padding: var(--section-py) 0;">
    <div class="container">
      <div class="section-header section-header--center">
        <h2 class="section-title" style="color: var(--gift-primary); font-size: 1.8rem;">Vì sao AIkid bắt đầu từ việc cho con tự khám phá?</h2>
      </div>
      <div style="max-width: 700px; margin: 0 auto; background: #fff; padding: 2.5rem; border-radius: var(--radius-xl); box-shadow: var(--shadow-md); text-align: center; border: 2px dashed var(--gift-primary);">
        <p style="font-size: 1.1rem; margin-bottom: 1.5rem;">AI có thể trả lời rất nhiều câu hỏi.<br>Nhưng <strong>AIkid</strong> không muốn AI nghĩ thay con.</p>
        
        <div style="background: var(--gift-bg-3); padding: 1rem; border-radius: var(--radius-full); font-weight: 800; color: var(--color-primary); font-size: 1.2rem; margin: 1.5rem 0;">
          Con nghĩ trước &rarr; AI hỗ trợ &rarr; Con tự tạo
        </div>
        
        <p style="font-size: 1.1rem;">Từ một ý tưởng, con có thể tạo nhân vật, kể câu chuyện và biến trí tưởng tượng thành sản phẩm của riêng mình.</p>
        <img src="SVG/Con.svg" alt="Brain" style="width: 60px; height: 60px; margin: 1.5rem auto 0 auto;" />
      </div>
    </div>
  </section>

  <!-- S06: Why AI -->
  <section id="pdf-sec-06" class="pdf-section" style="background: var(--gift-bg-1); padding: var(--section-py) 0;">
    <div class="container">
      <div class="section-header section-header--center">
        <h2 class="section-title" style="color: var(--color-primary);">TẠI SAO TRẺ CẦN<br>HỌC CÁCH DÙNG AI ĐÚNG CÁCH?</h2>
        <span class="badge" style="background: var(--gift-accent); color: #fff; font-size: 1rem; padding: 0.5rem 1rem; margin-top: 1rem;">Không chỉ biết dùng AI mà biết tự suy nghĩ</span>
      </div>
      
      <div style="max-width: 800px; margin: 0 auto; text-align: center; font-size: 1.1rem;">
        <p style="margin-bottom: 2rem;">AI có thể giúp con tìm kiếm, trả lời câu hỏi và tạo ra rất nhiều thứ. Nhưng điều quan trọng hơn là con vẫn phải là người đưa ra ý tưởng và quyết định.</p>
        
        <div style="background: var(--gift-bg-3); padding: 2rem; border-radius: var(--radius-lg); margin-bottom: 2rem; box-shadow: var(--shadow-sm);">
          <p style="font-weight: 800; color: var(--color-primary); margin-bottom: 1rem; font-size: 1.2rem;">AIKid giúp con hình thành thói quen:</p>
          <p style="color: var(--gift-primary); font-weight: 700; font-size: 1.3rem;">Tự nghĩ &rarr; Tự hỏi &rarr; AI hỗ trợ &rarr; Tự tạo</p>
        </div>
        
        <p style="margin-bottom: 1rem;">Từ một ý tưởng nhỏ, con có thể tạo nhân vật, kể câu chuyện, vẽ thế giới riêng và biến trí tưởng tượng thành sản phẩm của chính mình.</p>
        <p style="font-weight: 700; color: var(--color-primary);">AI không thay con suy nghĩ. AI giúp con biến ý tưởng thành hiện thực.</p>
      </div>
    </div>
  </section>

  <!-- S07: Insight Kids Learn Best -->
  <section id="pdf-sec-07" class="pdf-section" style="background: var(--gift-bg-3); padding: var(--section-py) 0;">
    <div class="container">
      <div style="text-align: center; margin-bottom: 2rem;">
        <img src="assets/meadow_hero_bg.png" alt="Bé Vy" style="width: 250px; height: 250px; object-fit: cover; border-radius: var(--radius-full); border: 6px solid #fff; box-shadow: var(--shadow-md); margin: 0 auto 1rem auto;" />
        <p style="color: var(--color-primary); font-weight: 700;">Bé Vy - 8 tuổi - Thanh Hóa</p>
      </div>
      
      <div class="section-header section-header--center" style="margin-bottom: 2rem;">
        <h3 class="section-title" style="color: var(--color-primary); font-size: 1.6rem;">TRẺ HỌC TỐT NHẤT KHI ĐƯỢC TỰ MÌNH KHÁM PHÁ</h3>
      </div>
      
      <div style="max-width: 800px; margin: 0 auto; text-align: center; font-size: 1.1rem; display: flex; flex-direction: column; gap: 1rem;">
        <p>Những trải nghiệm trong những năm đầu đời giúp trẻ từng bước phát triển khả năng quan sát, ghi nhớ, ngôn ngữ và tư duy.</p>
        <p>Vì vậy, thay vì chỉ cho con tiếp nhận thông tin, hãy tạo cơ hội để con được hỏi, được thử, được sáng tạo và tự mình tìm ra câu trả lời.</p>
        <p>AIKid biến AI thành một người bạn đồng hành, giúp mỗi câu hỏi của con trở thành một cơ hội để khám phá và mỗi ý tưởng trở thành một sản phẩm của riêng mình.</p>
      </div>
    </div>
  </section>

  <!-- S08 & S09: Offer 1 + CTA Form -->
  <section id="pdf-sec-08-09" class="pdf-section" style="background: var(--color-primary); padding: var(--section-py) 0; color: #fff;">
    <div class="container">
      <div style="display: grid; grid-template-columns: 1fr; gap: 3rem; max-width: 1000px; margin: 0 auto;">
        
        <!-- Offer Content -->
        <div style="text-align: center;">
          <h2 style="font-size: 2.5rem; font-weight: 900; margin-bottom: 1rem; color: #fff;">CƠ HỘI<br>DÀNH CHO <span style="background: var(--gift-accent); color: var(--color-primary); padding: 0.2rem 0.8rem; border-radius: var(--radius-full); display: inline-block;">99 BA MẸ</span><br><span style="font-size: 1.2rem; display: block; margin-top: 0.5rem;">Nhanh tay nhất!</span></h2>
          
          <div style="background: rgba(255,255,255,0.1); border-radius: var(--radius-xl); padding: 2rem; margin-top: 2rem; border: 1px solid rgba(255,255,255,0.2);">
            <h3 style="font-size: 1.8rem; color: var(--gift-accent); margin-bottom: 0.5rem;">Trải nghiệm MIỄN PHÍ</h3>
            <p style="margin-bottom: 1.5rem; font-size: 1.1rem;">cho mỗi TÀI KHOẢN ba mẹ có thể để con<br>em thỏa sức vui chơi</p>
            
            <div style="display: flex; justify-content: center; align-items: center; gap: 1rem; margin-bottom: 2rem;">
              <span style="text-decoration: line-through; font-size: 1.5rem; opacity: 0.7;">799.000đ</span>
              <span style="background: var(--gift-accent); color: var(--color-primary); font-weight: 900; font-size: 2.5rem; padding: 0.5rem 1.5rem; border-radius: var(--radius-full);">0đ</span>
            </div>
            
            <ul style="text-align: left; max-width: 400px; margin: 0 auto; display: flex; flex-direction: column; gap: 1rem;">
              <li style="display: flex; gap: 0.5rem;"><span>&#10004;</span> <span><strong>Tặng 1 File tài liệu hướng dẫn</strong> giúp cha mẹ và con em sử dụng dễ dàng hơn.</span></li>
              <li style="display: flex; gap: 0.5rem;"><span>&#10004;</span> <span><strong>Tặng bộ ebook:</strong> Ẩn dặm không nước mắt, Ăn dặm kiểu Nhật, và 150 món ăn dặm.</span></li>
              <li style="display: flex; gap: 0.5rem;"><span>&#10004;</span> <span><strong>Tặng thêm khóa học</strong> về các bệnh tiêu hóa cho trẻ em lúc giao mùa trị giá 1.250.000đ</span></li>
              <li style="display: flex; gap: 0.5rem;"><span>&#10004;</span> <span><strong>Hoàn tiền 100%</strong> nếu ba mẹ không hài lòng với khóa học trong vòng 3 ngày.</span></li>
            </ul>
          </div>
        </div>
        
        <!-- CTA Form -->
        <div id="pdf-sec-09" style="background: #fff; border-radius: var(--radius-xl); padding: 2.5rem; color: var(--color-text); box-shadow: var(--shadow-xl);">
          <div style="text-align: center; margin-bottom: 2rem;">
            <h3 style="color: var(--color-primary); font-size: 2rem; font-weight: 900; margin-bottom: 0.5rem;">ĐĂNG KÝ NGAY<br>ĐỂ NHẬN TƯ VẤN</h3>
            <p style="color: var(--color-text-2);">Đừng để con bị thiệt thòi, giáo dục sớm cần phải được bắt đầu càng sớm càng tốt!</p>
          </div>
          
          <form style="display: flex; flex-direction: column; gap: 1rem;">
            <input type="text" placeholder="Tên của bạn" required style="width: 100%; padding: 1rem; border: 2px solid var(--clr-gray-200); border-radius: var(--radius-md); font-size: 1rem; font-family: inherit;" />
            <input type="tel" placeholder="Số điện thoại" required style="width: 100%; padding: 1rem; border: 2px solid var(--clr-gray-200); border-radius: var(--radius-md); font-size: 1rem; font-family: inherit;" />
            
            <button type="submit" class="btn btn-primary btn--lg btn--full" style="background: var(--gift-primary); box-shadow: 0 4px 16px rgba(230, 57, 70, 0.4); margin-top: 1rem; display: flex; flex-direction: column; height: auto; padding: 1rem;">
              <span style="font-size: 1.2rem; font-weight: 900;">NHẬN TƯ VẤN</span>
              <span style="font-size: 0.8rem; font-weight: 400;">Nhân viên tư vấn sẽ gọi lại trong 5 phút</span>
            </button>
          </form>
          
          <div style="text-align: center; margin-top: 2rem; padding-top: 2rem; border-top: 1px solid var(--clr-gray-200);">
            <p style="font-weight: 600; margin-bottom: 1rem; color: var(--color-text-2);">Thời gian khuyến mãi còn lại:</p>
            <div style="display: flex; justify-content: center; gap: 1rem;">
              <div style="background: var(--gift-bg-3); width: 60px; height: 60px; border-radius: var(--radius-md); display: flex; flex-direction: column; align-items: center; justify-content: center; color: var(--color-primary);">
                <span style="font-weight: 900; font-size: 1.5rem; line-height: 1;">00</span>
                <span style="font-size: 0.7rem;">Ngày</span>
              </div>
              <div style="background: var(--gift-bg-3); width: 60px; height: 60px; border-radius: var(--radius-md); display: flex; flex-direction: column; align-items: center; justify-content: center; color: var(--color-primary);">
                <span style="font-weight: 900; font-size: 1.5rem; line-height: 1;">12</span>
                <span style="font-size: 0.7rem;">Giờ</span>
              </div>
              <div style="background: var(--gift-bg-3); width: 60px; height: 60px; border-radius: var(--radius-md); display: flex; flex-direction: column; align-items: center; justify-content: center; color: var(--color-primary);">
                <span style="font-weight: 900; font-size: 1.5rem; line-height: 1;">00</span>
                <span style="font-size: 0.7rem;">Phút</span>
              </div>
              <div style="background: var(--gift-bg-3); width: 60px; height: 60px; border-radius: var(--radius-md); display: flex; flex-direction: column; align-items: center; justify-content: center; color: var(--color-primary);">
                <span style="font-weight: 900; font-size: 1.5rem; line-height: 1;">00</span>
                <span style="font-size: 0.7rem;">Giây</span>
              </div>
            </div>
          </div>
          
        </div>
        
      </div>
    </div>
  </section>

  <!-- S10: Instructors -->
  <section id="pdf-sec-10" class="pdf-section" style="background: var(--gift-bg-1); padding: var(--section-py) 0;">
    <div class="container">
      <div class="section-header section-header--center">
        <h2 class="section-title" style="color: var(--gift-primary);">GIẢNG VIÊN ĐỒNG HÀNH</h2>
        <h3 class="section-subtitle" style="color: var(--color-text-2); font-size: 1.1rem; font-weight: 600;">CÙNG BA MẸ SUỐT THỜI GIAN HỌC</h3>
      </div>
      
      <div style="max-width: 800px; margin: 0 auto;">
        <ul style="display: flex; flex-direction: column; gap: 1.5rem; margin-bottom: 3rem;">
          <li style="display: flex; gap: 1rem; align-items: flex-start;">
            <span style="color: var(--gift-primary); font-size: 1.5rem; line-height: 1;">&bull;</span>
            <p><strong>Antigravity Vietnam:</strong> CEO & Founder, cộng đồng kết nối developer, founder và nhà sáng tạo AI.</p>
          </li>
          <li style="display: flex; gap: 1rem; align-items: flex-start;">
            <span style="color: var(--gift-primary); font-size: 1.5rem; line-height: 1;">&bull;</span>
            <p><strong>Victory.ai:</strong> Đồng sáng lập nền tảng sản xuất video bằng Creative AI cho thương mại điện tử.</p>
          </li>
          <li style="display: flex; gap: 1rem; align-items: flex-start;">
            <span style="color: var(--gift-primary); font-size: 1.5rem; line-height: 1;">&bull;</span>
            <p><strong>Sống chung với AI:</strong> Nhà sáng lập cộng đồng chia sẻ kiến thức và ứng dụng AI thực chiến tại Việt Nam.</p>
          </li>
          <li style="display: flex; gap: 1rem; align-items: flex-start;">
            <span style="color: var(--gift-primary); font-size: 1.5rem; line-height: 1;">&bull;</span>
            <p><strong>Ten Media & Ten Tickers:</strong> Founder Ten Tickers, CEO Ten Media với hệ thống kênh truyền thông hàng triệu lượt theo dõi.</p>
          </li>
        </ul>
        
        <div style="background: var(--color-primary); color: #fff; padding: 1.5rem 2rem; border-radius: var(--radius-full); text-align: center; max-width: 500px; margin: 0 auto; box-shadow: var(--shadow-md);">
          <h4 style="font-size: 1.5rem; font-weight: 900; margin-bottom: 0.25rem;">MR. LÊ HUY ĐỨC ANH</h4>
          <p style="opacity: 0.9; font-size: 0.9rem;">Chuyên gia hàng đầu trong lĩnh vực AI</p>
        </div>
      </div>
    </div>
  </section>

  <!-- S11: Testimonials -->
  <section id="pdf-sec-11" class="pdf-section" style="background: var(--gift-bg-2); padding: var(--section-py) 0;">
    <div class="container">
      <div class="section-header section-header--center">
        <h2 class="section-title" style="color: var(--gift-primary); font-size: 1.8rem;">CẢM NHẬN CỦA CÁC MẸ</h2>
        <h3 class="section-subtitle" style="color: var(--color-primary); font-size: 1.1rem; font-weight: 600;">SAU KHI HỌC KHÓA HỌC AI TẠI AIKID</h3>
      </div>
      
      <div style="max-width: 800px; margin: 0 auto; background: #fff; padding: 2.5rem; border-radius: var(--radius-xl); box-shadow: var(--shadow-md);">
        <p style="margin-bottom: 1rem;">Lúc đầu mình cho con thử <strong>AIKid</strong> cũng chỉ nghĩ là <strong>cho con làm quen với AI thôi</strong>, chứ không kỳ vọng nhiều. Ai ngờ con lại thích cực kỳ.</p>
        <p style="margin-bottom: 1rem;">Trước đây con hay hỏi mẹ mấy câu linh tinh, giờ nhiều lúc con tự nghĩ ra rồi hỏi AI, xong còn ngồi sửa tới sửa lui để ra đúng cái mình muốn.</p>
        <p style="margin-bottom: 2rem;">Có lần con tự tạo được một nhân vật xong chạy đi khoe cả nhà: <strong>"Mẹ ơi con làm cái này nè!"</strong> Nhìn con hào hứng như vậy mình thấy vui hơn cả việc con làm ra sản phẩm đẹp hay không.</p>
        
        <img src="assets/artwork_sketch_vs_final.png" alt="Artwork by kid" style="width: 100%; max-width: 400px; border-radius: var(--radius-md); margin: 0 auto 2rem auto; display: block;" />
        
        <div style="display: flex; align-items: center; justify-content: center; gap: 1rem; border-top: 1px solid var(--clr-gray-200); padding-top: 2rem;">
          <img src="assets/logo.svg" alt="Avatar" style="width: 60px; height: 60px; border-radius: 50%; object-fit: cover; border: 2px solid var(--gift-primary);" />
          <div style="text-align: left;">
            <p style="color: var(--gift-primary); font-weight: 800; font-size: 1.2rem; margin: 0;">Mẹ Yến</p>
            <p style="color: var(--gift-primary); margin: 0; font-size: 0.9rem;">Chị Ngọc, 32 tuổi - TP. Hồ Chí Minh</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- S14: Benefits -->
  <section id="pdf-sec-14" class="pdf-section" style="background: var(--gift-bg-1); padding: var(--section-py) 0;">
    <div class="container">
      <div class="section-header section-header--center">
        <h2 class="section-title" style="color: var(--gift-primary);">CÁC QUYỀN LỢI<br>DÀNH CHO BA MẸ</h2>
      </div>
      
      <div class="roles__grid" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 2rem; max-width: 900px; margin: 0 auto;">
        
        <div style="text-align: center; padding: 2rem; background: var(--gift-bg-3); border-radius: var(--radius-xl); box-shadow: var(--shadow-sm);">
          <div style="width: 64px; height: 64px; background: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem auto; box-shadow: var(--shadow-sm);">
            <img src="SVG/Thời gian.svg" alt="Icon" style="width: 32px; height: 32px;" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'32\\' height=\\'32\\' viewBox=\\'0 0 24 24\\' fill=\\'none\\' stroke=\\'%23602cd2\\' stroke-width=\\'2\\'><circle cx=\\'12\\' cy=\\'12\\' r=\\'10\\'/><path d=\\'M12 6v6l4 2\\'/></svg>'" />
          </div>
          <h4 style="color: var(--color-primary); font-size: 1.2rem; margin-bottom: 1rem;">Học mọi lúc mọi nơi</h4>
          <p style="font-size: 0.95rem; color: var(--color-text-2);">Nếu có thắc mắc, mẹ có thể gọi tới tổng đài hoặc để lại câu hỏi, câu hỏi của mẹ sẽ được chuyển tới chuyên gia có chuyên môn giải đáp và phản hồi ngay khi có kết quả.</p>
        </div>

        <div style="text-align: center; padding: 2rem; background: var(--gift-bg-3); border-radius: var(--radius-xl); box-shadow: var(--shadow-sm);">
          <div style="width: 64px; height: 64px; background: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem auto; box-shadow: var(--shadow-sm);">
            <img src="SVG/check.svg" alt="Icon" style="width: 32px; height: 32px;" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'32\\' height=\\'32\\' viewBox=\\'0 0 24 24\\' fill=\\'none\\' stroke=\\'%23602cd2\\' stroke-width=\\'2\\'><path d=\\'M22 11.08V12a10 10 0 1 1-5.93-9.14\\'/><polyline points=\\'22 4 12 14.01 9 11.01\\'/></svg>'" />
          </div>
          <h4 style="color: var(--color-primary); font-size: 1.2rem; margin-bottom: 1rem;">Cam kết học tập</h4>
          <p style="font-size: 0.95rem; color: var(--color-text-2);">Giảng viên đã có nhiều kinh nghiệm dạy trẻ em. Cam kết hoàn tiền trong vòng 3 ngày nếu mẹ không hài lòng về khóa học.</p>
        </div>

        <div style="text-align: center; padding: 2rem; background: var(--gift-bg-3); border-radius: var(--radius-xl); box-shadow: var(--shadow-sm);">
          <div style="width: 64px; height: 64px; background: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem auto; box-shadow: var(--shadow-sm);">
            <img src="SVG/MONEY.svg" alt="Icon" style="width: 32px; height: 32px;" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'32\\' height=\\'32\\' viewBox=\\'0 0 24 24\\' fill=\\'none\\' stroke=\\'%23602cd2\\' stroke-width=\\'2\\'><line x1=\\'12\\' y1=\\'1\\' x2=\\'12\\' y2=\\'23\\'/><path d=\\'M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6\\'/></svg>'" />
          </div>
          <h4 style="color: var(--color-primary); font-size: 1.2rem; margin-bottom: 1rem;">Tiết kiệm chi phí</h4>
          <p style="font-size: 0.95rem; color: var(--color-text-2);">Mẹ có thể học tại bất cứ đâu, với 1 lần mua, mẹ đã có quyền truy cập mãi mãi vào nội dung của khóa học. Học lại bất cứ lúc nào mẹ muốn.</p>
        </div>

        <div style="text-align: center; padding: 2rem; background: var(--gift-bg-3); border-radius: var(--radius-xl); box-shadow: var(--shadow-sm);">
          <div style="width: 64px; height: 64px; background: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem auto; box-shadow: var(--shadow-sm);">
            <img src="SVG/24.svg" alt="Icon" style="width: 32px; height: 32px;" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'32\\' height=\\'32\\' viewBox=\\'0 0 24 24\\' fill=\\'none\\' stroke=\\'%23602cd2\\' stroke-width=\\'2\\'><path d=\\'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z\\'/></svg>'" />
          </div>
          <h4 style="color: var(--color-primary); font-size: 1.2rem; margin-bottom: 1rem;">Hỗ trợ trọn đời</h4>
          <p style="font-size: 0.95rem; color: var(--color-text-2);">Thay vì phải bỏ ra 3-5 triệu để học một khóa chuyên sâu lại không được chủ động thời gian thì đến với AIKid mẹ chỉ cần ...k là đủ.</p>
        </div>

      </div>
    </div>
  </section>

  <!-- S15: App Guide -->
  <section id="pdf-sec-15" class="pdf-section" style="background: var(--gift-bg-2); padding: var(--section-py) 0;">
    <div class="container">
      <div class="section-header section-header--center">
        <h2 class="section-title" style="color: var(--color-primary);">HƯỚNG DẪN<br>CÁCH HỌC TẠI NHÀ</h2>
      </div>
      
      <div style="display: grid; grid-template-columns: 1fr; gap: 3rem; max-width: 800px; margin: 0 auto; align-items: center;">
        
        <div style="background: #fff; padding: 2.5rem; border-radius: var(--radius-xl); box-shadow: var(--shadow-md);">
          <ul style="display: flex; flex-direction: column; gap: 1.5rem; margin-bottom: 2rem;">
            <li style="display: flex; gap: 1rem; align-items: center;">
              <span style="background: var(--gift-primary); color: #fff; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; flex-shrink: 0;">01</span>
              <p>Tải App : https://app.aikid.vn/</p>
            </li>
            <li style="display: flex; gap: 1rem; align-items: center;">
              <span style="background: var(--gift-primary); color: #fff; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; flex-shrink: 0;">02</span>
              <p>Vào mục C</p>
            </li>
            <li style="display: flex; gap: 1rem; align-items: center;">
              <span style="background: var(--gift-primary); color: #fff; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; flex-shrink: 0;">03</span>
              <p>Nhập</p>
            </li>
            <li style="display: flex; gap: 1rem; align-items: center;">
              <span style="background: var(--gift-primary); color: #fff; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; flex-shrink: 0;">04</span>
              <p>Chọn</p>
            </li>
          </ul>
          
          <div style="text-align: center; margin-bottom: 2rem;">
            <img src="assets/artwork_dragon.png" alt="App UI mockup" style="max-width: 250px; border-radius: var(--radius-md); box-shadow: var(--shadow-sm); margin: 0 auto;" />
          </div>
          
          <div style="display: flex; justify-content: center; gap: 1rem;">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" style="height: 40px;" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" style="height: 40px;" />
          </div>
        </div>
        
      </div>
    </div>
  </section>

  <!-- S16: Footer & Community -->
  <section id="pdf-sec-16" class="pdf-section footer" style="background: var(--color-primary); color: #fff; padding-top: 3rem;">
    <div class="container">
      
      <div style="background: rgba(255,255,255,0.1); padding: 2rem; border-radius: var(--radius-xl); margin-bottom: 3rem; display: flex; align-items: center; gap: 2rem; border: 1px solid rgba(255,255,255,0.2);">
        <img src="assets/hero_child_ai.png" alt="Community" style="width: 150px; height: 100px; object-fit: cover; border-radius: var(--radius-md);" />
        <p style="font-size: 1.1rem; line-height: 1.5;">Cộng đồng abc với hơn 2.000.000 thành viên hoạt động khắp cả nước, cùng nhau chia sẻ kiến thức mang thai và nuôi dạy con mỗi ngày.</p>
      </div>
      
      <div style="display: flex; flex-direction: column; align-items: center; text-align: center; padding-bottom: 2rem;">
        <img src="assets/logo.svg" alt="AIkid" style="height: 48px; margin-bottom: 1.5rem; filter: brightness(0) invert(1);" />
        <p style="margin-bottom: 0.5rem;"><strong>Địa chỉ:</strong> D15 180 Thanh Bình, Mỗ Lao, Hà Đông, Hà Nội, Vietnam</p>
        <p style="margin-bottom: 0.5rem;"><strong>Email:</strong> storymee.com@gmail.com</p>
        <p style="margin-bottom: 1.5rem;"><strong>Điện thoại:</strong> +84972220XXX</p>
        
        <div style="width: 100%; border-top: 1px solid rgba(255,255,255,0.2); padding-top: 1.5rem; font-size: 0.9rem; opacity: 0.8; display: flex; flex-wrap: wrap; justify-content: center; gap: 2rem;">
          <p><strong>Website:</strong> https://app.aikid.vn/</p>
          <p>Copyright © 2018 AVC. All rights reserved.</p>
        </div>
      </div>
      
    </div>
  </section>

  <script src="script.js"></script>
</body>
</html>
