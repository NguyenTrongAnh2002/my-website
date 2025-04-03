<template>
  <div>
    <Navbar />
    <router-view></router-view>
    <!-- Nút Scroll To Top -->
    <button
      v-show="showScrollButton"
      @click="scrollToTop"
      class="fixed z-50 bottom-6 right-6 bg-gray-600 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg transition-opacity duration-1000"
    >
      <i class="fa-solid fa-arrow-up text-xl"></i>
    </button>
    <!-- Box chat -->
    <div class="fixed z-50 bottom-4 left-4">
      <div
        v-if="isOpen"
        class="w-96 h-[500px] bg-white shadow-lg rounded-lg flex flex-col"
      >
        <div
          class="bg-blue-500 text-white p-3 flex justify-between items-center rounded-t-lg"
        >
          <div class="flex items-center gap-3">
            <img :src="logo" alt="" class="w-10 h-5 rounded-full" />
            <span class="font-semibold">Chat with Us</span>
          </div>
          <button @click="toggleChat" class="text-white">✖</button>
        </div>
        <div
          ref="messageContainer"
          class="flex-1 p-3 overflow-y-auto space-y-2"
        >
          <div
            v-for="(msg, index) in messages"
            :key="index"
            class="p-2 rounded-lg"
            :class="
              msg.sender === 'user'
                ? 'bg-blue-100 self-end w-auto max-w-max ms-auto'
                : 'bg-gray-200 self-start w-auto max-w-max me-auto '
            "
          >
            {{ msg.text }}
          </div>
        </div>
        <div class="p-3 border-t flex">
          <input
            v-model="newMessage"
            @keyup.enter="sendMessage"
            class="flex-1 p-2 border rounded-lg"
            placeholder="Enter message..."
          />
          <button
            @click="sendMessage"
            class="bg-blue-500 text-white px-3 py-1 ml-2 rounded-lg"
          >
            Send
          </button>
        </div>
      </div>
      <button
        v-else
        @click="toggleChat"
        class="bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg"
      >
        <i class="fa-solid fa-comment"></i>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick, onMounted, onUnmounted } from "vue";
import Navbar from "./components/Header.vue";
import logo from "./assets/img/logo/logo.png";

const showScrollButton = ref(false);
let scrollTimeout = null;

const handleScroll = () => {
  showScrollButton.value = true;

  // Nếu người dùng không cuộn trong 2 giây => Ẩn nút
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    showScrollButton.value = false;
  }, 2000);
};

// Hàm cuộn lên đầu trang
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Gắn sự kiện khi component được tạo
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

// Xóa sự kiện khi component bị hủy
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

// Box chat
const isOpen = ref(false);
const messages = ref([]);
const newMessage = ref("");
const messageContainer = ref(null);

const toggleChat = () => {
  isOpen.value = !isOpen.value;
};

// const sendMessage = async () => {
//   if (newMessage.value.trim()) {
//     messages.value.push({ text: newMessage.value, sender: "user" });
//     newMessage.value = "";
//     setTimeout(() => {
//       messages.value.push({
//         text: "Xin chào! Tôi có thể giúp gì cho bạn. ",
//         sender: "bot",
//       });
//       nextTick(() => {
//         scrollToBottom();
//       });
//     }, 1000);
//     nextTick(() => {
//       scrollToBottom();
//     });
//   }
// };

const sendMessage = async () => {
  if (newMessage.value.trim()) {
    const userMessage = newMessage.value;
    const messageID = messages.value.length;
    console.log(messageID);
    // Thêm tin nhắn của người dùng vào chatbox
    messages.value.push({ text: newMessage.value, sender: "user" });
    newMessage.value = "";

    await nextTick(); // Chờ DOM cập nhật xong
    scrollToBottom();

    // Gửi tin nhắn đến Webhook
    try {
      const response = await fetch(
        "https://tronganh.app.n8n.cloud/webhook/chatbox-lishin",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            messageID: messageID,
            sender: "user",
            message: userMessage,
            href: "https://www.lishinglobal.net",
          }),
        }
      );

      const data = await response.json();

      if (data.reply) {
        // Hiển thị tin nhắn trả lời từ bot (WebHook)
        messages.value.push({ text: data.reply, sender: "bot" });
      } else {
        // Trường hợp không có trả lời
        messages.value.push({
          text: "Sorry, I can't answer right now.",
          sender: "bot",
        });
      }
    } catch (error) {
      if (messages.value.length == 1) {
        setTimeout(() => {
          messages.value.push({
            text: "Hello, thank you for messaging us, if you have any requests, just tell us, we will reply as soon as possible.",
            sender: "bot",
          });
        }, 2000);
      }
      // console.error("Lỗi khi gửi tin nhắn:", error);
      // messages.value.push({
      //   text: "An error occurred, please try again.",
      //   sender: "bot",
      // });
    }

    // Cuộn xuống dưới cùng sau khi nhận được tin nhắn trả lời
    await nextTick(); // Chờ Vue cập nhật DOM
    scrollToBottom(); // Cuộn xuống cuối
  }
};

const scrollToBottom = () => {
  if (messageContainer.value) {
    messageContainer.value.scrollTop = messageContainer.value.scrollHeight;
  }
};
</script>

<style scoped>
.self-end {
  align-self: flex-end;
}
.self-start {
  align-self: flex-start;
}
</style>
