<template>
  <section
    class="bg-blog relative bg-cover bg-center text-white py-16 px-6 mt-20 md:px-12"
  >
    <div class="container mx-auto flex flex-col lg:flex-row items-center">
      <div class="lg:w-1/3 text-center mx-auto">
        <h1 class="text-2xl md:text-6xl">BLOG 1</h1>
      </div>
    </div>
  </section>

  <div class="relative w-full h-auto mx-auto my-16 px-4">
    <div class="blog-container relative w-2/3 h-auto mx-auto">
      <div class="bg-orange-500 text-center w-52 mx-auto my-5">
        <a class="text-white" href="/blog"> CUSTOM AFFIX APPAREL</a>
      </div>

      <div class="blog-item my-5">
        <div class="text-center mb-5">
          <strong class="text-2xl md:text-3xl">
            Xu hướng diện đồ đôi mẹ và bé : Tăng sự gắn kết, tạo kỷ niệm đẹp
          </strong>
        </div>
        <div class="bg-white shadow-lg rounded-lg overflow-hidden">
          <img :src="blog1_img1" class="w-full object-cover" />
        </div>
        <p class="mt-5 leading-7">
          Bạn đã bao giờ thử diện đồ đôi cùng bé yêu chưa? Không chỉ là xu hướng
          thời trang hot hit, đồ đôi mẹ và bé còn là cách tuyệt vời để tăng sự
          gắn kết và lưu giữ những kỷ niệm đáng nhớ.
        </p>
        <p class="mt-5 leading-7">
          Từ những bộ váy xinh xắn khi đi chơi, đến những set đồ thun thoải mái
          mặc ở nhà, việc mặc đồ đôi giúp mẹ và bé thể hiện tình cảm một cách
          đầy ý nghĩa. Hơn nữa, những khoảnh khắc diện đồ giống nhau sẽ tạo nên
          những bức ảnh "triệu like", giúp mẹ và bé lưu giữ ký ức đẹp bên nhau.
        </p>
        <p class="mt-5 leading-7">
          Vậy làm sao để chọn được set đồ đôi vừa thời trang, vừa phù hợp cho cả
          mẹ và bé? Cùng khám phá ngay những gợi ý cực xinh trong bài viết này
          nhé!
        </p>
      </div>

      <div class="blog-item my-16">
        <div class="text-left mb-5">
          <strong class="text-xl md:text-2xl">
            Set đồ đôi đi chơi, dạo phố - Phong cách và tinh tế
          </strong>
        </div>
        <div class="bg-white shadow-lg rounded-lg overflow-hidden">
          <img :src="blog1_img2" class="w-full object-cover" />
        </div>
        <div>
          <p class="mt-6 leading-7">
            Diện đồ đôi khi đi chơi hay dạo phố không chỉ giúp mẹ và bé trông
            thật phong cách mà còn thể hiện sự đồng điệu, gắn kết đặc biệt giữa
            hai mẹ con. Đây cũng là cách để lưu giữ những khoảnh khắc đáng nhớ
            qua những bức ảnh kỷ niệm đầy yêu thương.
          </p>
        </div>
        <div class="mt-6 leading-7">
          <strong>Gợi ý các kiểu set đồ đôi đi chơi</strong>
          <ul class="list-disc ps-10">
            <li class="mt-3">
              <p>
                <strong>Váy maxi thướt tha:</strong> Một lựa chọn hoàn hảo cho
                những ngày dạo phố hay du lịch. Váy maxi giúp mẹ trở nên duyên
                dáng và bé trông thật đáng yêu. Các gam màu pastel hoặc họa tiết
                hoa nhí sẽ tạo nên phong cách dịu dàng, nữ tính.
              </p>
            </li>
            <li class="mt-3">
              <p>
                <strong>Áo thun + chân váy đồng điệu:</strong> Phong cách trẻ
                trung, năng động nhưng không kém phần thời trang. Mẹ có thể diện
                áo thun trắng kết hợp chân váy xếp ly hoặc jean, bé cũng có một
                bộ y hệt giúp cả hai trông cực kỳ dễ thương.
              </p>
            </li>
            <li class="mt-3">
              <p>
                <strong>Quần short + áo phông cá tính:</strong> Một lựa chọn
                thoải mái, phù hợp cho những buổi đi dạo hoặc picnic cùng gia
                đình. Set đồ này mang đến sự năng động, giúp bé thoải mái vui
                chơi mà vẫn đồng bộ với mẹ.
              </p>
            </li>
          </ul>
        </div>
        <div class="mt-6 leading-7">
          <strong>Màu sắc và chất liệu phù hợp</strong>
          <ul class="list-disc ps-10">
            <li class="mt-3">
              <p>
                <strong>Chất liệu thoáng mát:</strong> Để đảm bảo sự thoải mái
                trong suốt chuyến đi, nên chọn những loại vải mềm, co giãn tốt
                như cotton, linen hoặc thun lạnh.
              </p>
            </li>
            <li class="mt-3">
              <p>
                <strong>Màu sắc trẻ trung:</strong> Những gam màu pastel nhẹ
                nhàng như hồng, xanh dương, be hoặc các họa tiết đơn giản như
                sọc caro, chấm bi sẽ giúp mẹ và bé trông tươi tắn hơn.
              </p>
            </li>
          </ul>
        </div>
        <div class="mt-6 leading-7">
          <strong>Bí quyết phối phụ kiện để set đồ thêm nổi bật</strong>
          <ul class="list-disc ps-10">
            <li class="mt-3">
              <p>
                <strong>Mũ rộng vành:</strong> Giúp mẹ và bé vừa thời trang vừa
                bảo vệ làn da khỏi ánh nắng.
              </p>
            </li>
            <li class="mt-3">
              <p>
                <strong>Túi xách mini:</strong> Mẹ có thể chọn một chiếc túi nhỏ
                xinh cho bé để tạo sự đồng bộ.
              </p>
            </li>
            <li class="mt-3">
              <p>
                <strong>Giày sneaker hoặc sandal:</strong> Sự lựa chọn hoàn hảo
                giúp mẹ và bé di chuyển dễ dàng hơn khi dạo phố.
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div class="blog-item my-16">
        <div class="text-left mb-5">
          <strong class="text-xl md:text-2xl">
            Set đồ đôi mặc ở nhà – Thoải mái nhưng vẫn thời trang
          </strong>
        </div>
        <div class="bg-white shadow-lg rounded-lg overflow-hidden">
          <img :src="blog1_img3" class="w-full object-cover" />
        </div>
        <p class="mt-6 leading-7">
          Ở nhà không có nghĩa là xuề xòa, việc diện đồ đôi khi ở nhà không chỉ
          giúp mẹ và bé thêm đáng yêu mà còn mang lại sự thoải mái tối đa trong
          sinh hoạt hàng ngày. Một bộ đồ phù hợp sẽ giúp bé dễ dàng vận động,
          còn mẹ thì vẫn giữ được vẻ chỉn chu ngay cả khi ở nhà.
        </p>
        <div class="mt-6 leading-7">
          <strong>Gợi ý các kiểu set đồ đôi mặc ở nhà</strong>
          <ul class="list-disc ps-10">
            <li class="mt-3">
              <p>
                <strong>Bộ pijama dễ thương:</strong> Set pijama với các họa
                tiết đáng yêu như gấu bông, trái tim, nhân vật hoạt hình sẽ làm
                mẹ và bé thêm phần nhí nhảnh, đáng yêu. Dáng suông rộng rãi giúp
                cả hai luôn thoải mái khi ngủ hoặc sinh hoạt trong nhà.
              </p>
            </li>
            <li class="mt-3">
              <p>
                <strong>Đồ thun co giãn:</strong> Một bộ đồ thun nhẹ nhàng giúp
                bé vận động thoải mái cả ngày. Mẹ có thể chọn áo phông rộng kết
                hợp với quần short, còn bé có thể mặc set tương tự để tạo sự
                đồng điệu.
              </p>
            </li>
            <li class="mt-3">
              <p>
                <strong>Bộ lụa mềm mại:</strong> Nếu mẹ thích phong cách sang
                trọng ngay cả khi ở nhà, có thể chọn những bộ lụa mềm mại vừa
                nhẹ nhàng vừa thoải mái. Bé cũng sẽ có những bộ đồ nhỏ xinh làm
                từ chất liệu tương tự để không bị bí bách khi mặc lâu.
              </p>
            </li>
          </ul>
        </div>
        <div class="mt-6 leading-7">
          <strong>Chất liệu phù hợp để mặc ở nhà</strong>
          <ul class="list-disc ps-10">
            <li class="mt-3">
              <p>
                <strong> Vải cotton:</strong> Chất liệu mềm mại, thấm hút tốt
                giúp bé luôn thoải mái khi chơi đùa.
              </p>
            </li>
            <li class="mt-3">
              <p>
                <strong>Lụa satin:</strong> Phù hợp cho những mẹ yêu thích sự
                sang trọng, nhẹ nhàng và mát mẻ.
              </p>
            </li>
            <li class="mt-3">
              <p>
                <strong>Thun co giãn:</strong> Mang lại cảm giác dễ chịu, đặc
                biệt phù hợp cho mùa hè.
              </p>
            </li>
          </ul>
        </div>
        <div class="mt-6 leading-7">
          <strong>Bí quyết lựa chọn đồ đôi ở nhà</strong>
          <ul class="list-disc ps-10">
            <li class="mt-3">
              <p>
                <strong>Ưu tiên chất liệu mềm mại:</strong> Vì da bé khá nhạy
                cảm nên hãy chọn những loại vải nhẹ, thoáng mát.
              </p>
            </li>
            <li class="mt-3">
              <p>
                <strong>Chọn màu sắc nhẹ nhàng:</strong> Các gam màu pastel,
                trung tính giúp tăng cảm giác thư giãn.
              </p>
            </li>
            <li class="mt-3">
              <p>
                <strong>Lựa chọn dáng rộng rãi:</strong> Giúp mẹ và bé dễ dàng
                vận động, sinh hoạt mà không bị khó chịu.
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div class="blog-item my-16">
        <div class="text-left mb-5">
          <strong class="text-xl md:text-2xl">
            Set đồ đôi dự tiệc, sự kiện – Thanh lịch và sang trọng
          </strong>
        </div>
        <div class="bg-white shadow-lg rounded-lg overflow-hidden">
          <img :src="blog1_img4" class="w-full object-cover" />
        </div>
        <p class="mt-6 leading-7">
          Những dịp đặc biệt như sinh nhật, đám cưới, lễ hội hay các sự kiện
          quan trọng luôn là cơ hội tuyệt vời để mẹ và bé diện đồ đôi thật lộng
          lẫy. Việc lựa chọn trang phục không chỉ giúp hai mẹ con nổi bật mà còn
          tạo nên những khoảnh khắc đáng nhớ. Dưới đây là một số gợi ý cho set
          đồ đôi dự tiệc, sự kiện dành cho mẹ và bé.
        </p>
        <div class="mt-6 leading-7">
          <strong>Gợi ý các kiểu set đồ đôi dự tiệc</strong>
          <ul class="list-decimal ps-10">
            <li class="mt-3">
              <strong>Váy công chúa + đầm sang trọng cho mẹ và bé gái:</strong>
              <ul class="list-disc ps-10">
                <li class="mt-2">
                  Những chiếc váy xòe bồng bềnh với chất liệu ren, voan, lụa
                  giúp hai mẹ con trở nên lộng lẫy và nữ tính.
                </li>
                <li class="mt-2">
                  Tông màu pastel hoặc ánh kim giúp tạo điểm nhấn sang trọng cho
                  bữa tiệc.
                </li>
                <li class="mt-2">
                  Nếu bé gái còn nhỏ, có thể chọn váy thiết kế đơn giản, dễ mặc
                  và dễ di chuyển.
                </li>
              </ul>
            </li>
            <li class="mt-3">
              <strong>Bộ vest mini cho bé trai + đầm dạ hội cho mẹ:</strong>
              <ul class="list-disc ps-10">
                <li class="mt-2">
                  Bé trai có thể diện bộ vest nhỏ xinh, sơ mi trắng kết hợp với
                  quần âu và giày da, mang phong cách lịch lãm như một quý ông
                  nhí.
                </li>
                <li class="mt-2">
                  Mẹ có thể chọn đầm suông, đầm ôm body hoặc váy maxi dài để
                  tăng phần sang trọng và thanh lịch.
                </li>
              </ul>
            </li>
            <li class="mt-3">
              <strong>Set jumpsuit đôi:</strong>
              <ul class="list-disc ps-10">
                <li class="mt-2">
                  Nếu mẹ thích phong cách hiện đại, có thể chọn jumpsuit đồng bộ
                  cho cả hai.
                </li>
                <li class="mt-2">
                  Chất liệu lụa, satin giúp jumpsuit thêm phần tinh tế, phù hợp
                  với những bữa tiệc sang trọng.
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="mt-6 leading-7">
          <strong>Chất liệu và màu sắc phù hợp</strong>
          <ul class="list-decimal ps-10">
            <li class="mt-3">
              <strong>Chất liệu:</strong>
              <ul class="list-disc ps-10">
                <li class="mt-2">
                  <strong>Lụa satin, voan, ren:</strong> Mang lại sự mềm mại,
                  sang trọng và tạo hiệu ứng bay bổng.
                </li>
                <li class="mt-2">
                  <strong>Cotton cao cấp:</strong> Nếu bé hiếu động, mẹ nên chọn
                  chất liệu cotton mềm mại, có độ co giãn để bé cảm thấy thoải
                  mái.
                </li>
              </ul>
            </li>
            <li class="mt-3">
              <strong>Màu sắc:</strong>
              <ul class="list-disc ps-10">
                <li class="mt-2">
                  <strong>Tông pastel (hồng, xanh, kem, tím nhạt):</strong> Mang
                  đến vẻ dịu dàng, thanh lịch.
                </li>
                <li class="mt-2">
                  <strong
                    >Gam màu tối (đỏ đô, xanh navy, đen, vàng ánh kim):</strong
                  >
                  Giúp mẹ và bé trông nổi bật và quý phái.
                </li>
                <li class="mt-2">
                  <strong>Tone trắng hoặc be:</strong> Tạo cảm giác trang nhã,
                  sang trọng cho mọi sự kiện.
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="mt-6 leading-7">
          <strong> Bí quyết lựa chọn set đồ đôi dự tiệc</strong>
          <ul class="list-disc ps-10">
            <li class="mt-3">
              <p>
                <strong>Ưu tiên sự thoải mái cho bé:</strong> Dù là đồ dự tiệc
                nhưng bé vẫn cần dễ dàng di chuyển, chạy nhảy. Hãy chọn những
                thiết kế không quá rườm rà, khó chịu.
              </p>
            </li>
            <li class="mt-3">
              <p>
                <strong>Phối phụ kiện tinh tế:</strong> Một đôi giày lấp lánh,
                băng đô xinh xắn hoặc chiếc nơ nhỏ sẽ giúp set đồ thêm hoàn hảo.
              </p>
            </li>
            <li class="mt-3">
              <p>
                <strong>Đồng điệu nhưng không cần giống hệt:</strong> Nếu mẹ
                không thích diện đồ giống y hệt bé, có thể chọn cùng tông màu
                hoặc họa tiết tương đồng để vẫn tạo sự liên kết.
              </p>
            </li>
            <li class="mt-3">
              <p>
                <strong>Chọn kiểu dáng phù hợp với sự kiện:</strong> Đối với
                tiệc ngoài trời, mẹ nên chọn váy maxi hoặc váy xòe nhẹ. Nếu là
                sự kiện trang trọng, có thể chọn váy dạ hội hoặc vest thanh
                lịch.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <BrandComponent />
  <FooterComponent />
</template>

<script setup>
import { ref } from "vue";
import BrandComponent from "../components/Brand.vue";
import FooterComponent from "../components/Footer.vue";

import bg_blog from "../assets/img/bg/bg-blog.jpg";
// import blog1_img1 from "../assets/img/bg/blog1.jpg";
import blog1_img1 from "../assets/img/bg/1.jpg";
import blog1_img2 from "../assets/img/bg/2.jpg";
import blog1_img3 from "../assets/img/bg/3.jpg";
import blog1_img4 from "../assets/img/bg/4.jpg";
// import blog1_img2 from "../assets/img/bg/blog1_img2.jpg";
// import blog1_img3 from "../assets/img/bg/blog1_img3.jpg";
// import blog1_img4 from "../assets/img/bg/blog1_img4.jpg";
</script>

<style scoped>
.bg-blog {
  width: 100%;
  height: auto;
  background-image: url("../assets/img/bg/cta-banner.jpg");
  background-size: cover;
  background-position: center;
}

@media (max-width: 1024px) {
  .bg-blog {
    background-attachment: scroll;
  }
}

@media (max-width: 768px) {
  .blog-container {
    width: 85%;
  }
}
</style>
