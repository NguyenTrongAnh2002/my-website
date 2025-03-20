<template>
  <Blog_bg />

  <div class="relative w-full h-auto mx-auto my-16 px-4">
    <div class="blog-container relative w-2/3 h-auto mx-auto">
      <div v-for="(item, index) in hero" :key="index">
        <div class="blog-item my-5">
          <div class="text-center mb-5">
            <strong class="text-2xl md:text-3xl"> {{ item.title }}</strong>
          </div>
          <div class="bg-white shadow-lg rounded-lg overflow-hidden my-10">
            <img :src="item.bg" class="w-full object-cover" />
          </div>
          <p class="mt-5 leading-7">
            {{ item.desc }}
          </p>
        </div>
      </div>

      <div v-for="(info, index2) in infos" :key="index2">
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
              thật phong cách mà còn thể hiện sự đồng điệu, gắn kết đặc biệt
              giữa hai mẹ con. Đây cũng là cách để lưu giữ những khoảnh khắc
              đáng nhớ qua những bức ảnh kỷ niệm đầy yêu thương.
            </p>
          </div>
          <div class="mt-6 leading-7">
            <strong>Gợi ý các kiểu set đồ đôi đi chơi</strong>
            <ul class="list-disc ps-10">
              <li class="mt-3">
                <p>
                  <strong>Váy maxi thướt tha:</strong> Một lựa chọn hoàn hảo cho
                  những ngày dạo phố hay du lịch. Váy maxi giúp mẹ trở nên duyên
                  dáng và bé trông thật đáng yêu. Các gam màu pastel hoặc họa
                  tiết hoa nhí sẽ tạo nên phong cách dịu dàng, nữ tính.
                </p>
              </li>
              <li class="mt-3">
                <p>
                  <strong>Áo thun + chân váy đồng điệu:</strong> Phong cách trẻ
                  trung, năng động nhưng không kém phần thời trang. Mẹ có thể
                  diện áo thun trắng kết hợp chân váy xếp ly hoặc jean, bé cũng
                  có một bộ y hệt giúp cả hai trông cực kỳ dễ thương.
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
                  <strong>Mũ rộng vành:</strong> Giúp mẹ và bé vừa thời trang
                  vừa bảo vệ làn da khỏi ánh nắng.
                </p>
              </li>
              <li class="mt-3">
                <p>
                  <strong>Túi xách mini:</strong> Mẹ có thể chọn một chiếc túi
                  nhỏ xinh cho bé để tạo sự đồng bộ.
                </p>
              </li>
              <li class="mt-3">
                <p>
                  <strong>Giày sneaker hoặc sandal:</strong> Sự lựa chọn hoàn
                  hảo giúp mẹ và bé di chuyển dễ dàng hơn khi dạo phố.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  <BrandComponent />
  <FooterComponent />
</template>

<script setup>
import { ref } from "vue";
import Blog_bg from "../components/Blog_bg.vue";
import BrandComponent from "../components/Brand.vue";
import FooterComponent from "../components/Footer.vue";

import blog1_img1 from "../assets/img/bg/blog1-img1.jpg";
import blog1_img2 from "../assets/img/bg/blog1-img2.jpg";
import blog1_img3 from "../assets/img/bg/blog1-img3.jpg";
import blog1_img4 from "../assets/img/bg/blog1-img4.jpg";

const hero = ref([
  {
    title: "Quần áo gia công – Giải pháp tối ưu cho thương hiệu thời trang",
    bg: blog1_img1,
    desc: "Trong xu hướng thời trang hiện đại, việc gia công quần áo đang trở thành giải pháp tối ưu cho nhiều doanh nghiệp, shop thời trang và startup. Nhờ có các xưởng may chuyên nghiệp, các thương hiệu có thể dễ dàng đầu tư vào thiết kế, marketing mà không lo lắng về quy trình  xuất. Vậy quần áo gia công là gì? Làm sao để chọn được xưởng may uy tín? Hãy cùng tìm hiểu!",
  },
]);
const infos = ref([
  {
    title: "",
  },
]);
</script>

<style scoped>
@media (max-width: 768px) {
  .blog-container {
    width: 85%;
  }
}
</style>
