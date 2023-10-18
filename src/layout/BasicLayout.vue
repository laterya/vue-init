<template>
  <div id="basicLayout">
    <a-layout style="height: 100vh">
      <a-layout-header class="header">
        <GolbalHeader />
      </a-layout-header>
      <a-layout-content class="content">
        <router-view />
      </a-layout-content>
      <a-layout-footer class="footer">Footer</a-layout-footer>
    </a-layout>
  </div>
</template>

<script setup lang="ts">
import GolbalHeader from "@/components/GolbalHeader.vue";
</script>

<style scoped>
#basic-layout {
}

#basicLayout .header {
  background: green;
  margin-bottom: 16px;
}

#basicLayout .content {
  background: aquamarine;
  margin-bottom: 16px;
}

#basicLayout .footer {
  background: #7b62ff;
  padding: 16px;
  text-align: center;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
