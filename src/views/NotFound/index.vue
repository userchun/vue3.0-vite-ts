<template>
  <a-result
    status="404"
    title="404"
    sub-title="Sorry, the page you visited does not exist."
  >
    <template #extra>
      <a-button @click="goBack" type="primary">Back Home</a-button>
    </template>
  </a-result>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
export default defineComponent({
  name: 'NotFound',
  setup() {
    const router = useRouter();
    const goBack = () => {
      router.go(-1);
    };
    return { goBack };
  },
});
</script>

<style></style>
