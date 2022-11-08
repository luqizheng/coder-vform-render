<template>
  <a-menu
    theme="dark"
    v-model:selectedKeys="selectedKeys"
    mode="inline"
    @click="handelClick"
  >
    <a-menu-item key="/example1">
      <pie-chart-outlined />
      <span>example1</span>
    </a-menu-item>


  </a-menu>
</template>

<script setup>
import {
  PieChartOutlined,
  DesktopOutlined,
  UserOutlined,
  TeamOutlined,
  FileOutlined,
} from "@ant-design/icons-vue";
import { useRouter } from "vue-router";
import { ref } from "vue";
const selectedKeys = ref([]);
const router = useRouter();
const handelClick = (item) => {
  if (item.key !== router.path) {
    router.push(item.key);
  }
};
</script>
