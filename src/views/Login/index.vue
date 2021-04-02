<template>
  <div class="loggin">
    <div class="login-container">
      <a-form :rules="rules" :model="formState" @finish="handleFinish">
        <a-form-item name="username">
          <a-input v-model:value="formState.username" placeholder="Username">
            <template #prefix
              ><UserOutlined style="color: rgba(0, 0, 0, 0.25)"
            /></template>
          </a-input>
        </a-form-item>
        <a-form-item name="password">
          <a-input
            v-model:value="formState.password"
            type="password"
            placeholder="Password"
          >
            <template #prefix
              ><LockOutlined style="color: rgba(0, 0, 0, 0.25)"
            /></template>
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-button
            type="primary"
            html-type="submit"
            :disabled="formState.username === '' || formState.password === ''"
          >
            Log in
          </a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script lang="ts">
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
import { defineComponent, reactive, UnwrapRef } from 'vue';
import { login } from '../../axios/api';
import sha512 from 'js-sha512';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

interface FormState {
  username: string;
  password: string;
}
export default defineComponent({
  setup() {
    const router = useRouter();
    const store = useStore();
    const rules = {
      username: [{ required: true, trigger: 'blur' }],
      password: [{ required: true, trigger: 'blur' }],
    };
    const formState: UnwrapRef<FormState> = reactive({
      username: '',
      password: '',
      timestamp: new Date().getTime(),
    });
    const handleFinish = async () => {
      try {
        localStorage.setItem('token', 'token');
        store.commit('login');
        router.push({
          name: 'home',
        });
      } catch (error) {}
    };

    return {
      formState,
      handleFinish,
      rules,
    };
  },
  components: {
    UserOutlined,
    LockOutlined,
  },
});
</script>

<style lang="less" scoped>
@import './index.less';
</style>
