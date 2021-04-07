<template>
  <div class="loggin">
    <div class="login-container">
      <div class="top">
        <div class="header">
          <a href="/">
            <img
              src="../../assets/logo.png"
              class="logo"
              alt="logo"
              data-v-7f4a88ba=""
            />
            <span class="title" data-v-7f4a88ba="">WinLive</span></a
          >
        </div>
        <div class="desc">
          以全人教育为目标，融合线上线下教育优势培养具备核心竞争力和全方位胜任力的
          <span style="font-size: 20px; color: black"> 21世纪创新人才!</span>
        </div>
      </div>
      <div class="main">
        <a-tabs v-model:activeKey="activeKey" size="large">
          <a-tab-pane key="1" tab="邮箱登录">
            <a-form
              :rules="rules"
              :wrapperCol="{ span: 24, offset: 0 }"
              :model="emailFormState"
              ref="emailFormRef"
            >
              <a-form-item name="username">
                <a-input
                  v-model:value="emailFormState.username"
                  size="large"
                  placeholder=" Username"
                >
                  <template #prefix
                    ><UserOutlined style="color: #1890ff"
                  /></template>
                </a-input>
              </a-form-item>
              <a-form-item name="password">
                <a-input-password
                  v-model:value="emailFormState.password"
                  type="password"
                  placeholder=" Password"
                  size="large"
                >
                  <template #prefix
                    ><LockOutlined style="color: #1890ff"
                  /></template>
                </a-input-password>
              </a-form-item> </a-form
          ></a-tab-pane>
          <a-tab-pane key="2" tab="验证码登录" force-render>
            <a-form
              :wrapperCol="{ span: 24, offset: 0 }"
              :model="emailFormState"
              :rules="rules"
              ref="codeFormRef"
            >
              <a-form-item name="phone">
                <a-input
                  v-model:value="emailFormState.phone"
                  size="large"
                  placeholder=" 手机号"
                >
                  <template #prefix
                    ><TabletOutlined style="color: #1890ff"
                  /></template>
                </a-input>
              </a-form-item>
              <a-form-item name="code">
                <a-input
                  v-model:value="emailFormState.code"
                  placeholder=" 验证码"
                  size="large"
                  style="width: 235px; margin-right: 20px"
                >
                  <template #prefix
                    ><MailOutlined style="color: #1890ff"
                  /></template>
                </a-input>
                <a-button size="large" @click="getCode"> 验证码 </a-button>
              </a-form-item>
            </a-form>
          </a-tab-pane>
        </a-tabs>
        <a-button
          type="primary"
          html-type="submit"
          size="large"
          style="width: 338px"
          @click="submit"
          :loading="btnLoading"
        >
          确定
        </a-button>
      </div>
      <div class="footer">
        <div class="links" data-v-7f4a88ba="">
          <a href="_self" data-v-7f4a88ba="">帮助</a
          ><a href="_self" data-v-7f4a88ba="">隐私</a
          ><a href="_self" data-v-7f4a88ba="">条款</a>
        </div>
        <div class="copyright" data-v-7f4a88ba="">
          Copyright © 2021 上海爱贝教育集团
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  UserOutlined,
  LockOutlined,
  TabletOutlined,
  MailOutlined,
} from '@ant-design/icons-vue';
import { defineComponent, reactive, UnwrapRef, ref, toRaw } from 'vue';
import sha512 from 'js-sha512';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { setItem } from '../../utils';
interface EmailFormState {
  username: string;
  password: string;
}
interface CodeFormState {
  phone: string;
  code: string;
}

export default defineComponent({
  components: {
    UserOutlined,
    LockOutlined,
    TabletOutlined,
    MailOutlined,
  },
  setup() {
    const router = useRouter();
    const store = useStore();
    const emailFormRef = ref();
    const codeFormRef = ref();
    const activeKey = ref('1');
    const btnLoading = ref(false);
    const rules = reactive({
      username: [
        {
          type: 'email',
          message: '请输入正确的邮箱!',
        },
        {
          required: true,
          message: '请输入用户名!',
          trigger: 'blur',
        },
      ],
      password: [
        {
          required: true,
          trigger: 'blur',
          message: '请输入密码!',
        },
      ],
      phone: [
        {
          required: true,
          trigger: 'blur',
          message: '请输入手机号!',
        },
      ],
      code: [
        {
          required: true,
          trigger: 'blur',
          message: '请输入验证码!',
        },
      ],
    });
    const emailFormState: UnwrapRef<EmailFormState> = reactive({
      username: '',
      password: '',
      timestamp: new Date().getTime(),
    });
    const codeFormState: UnwrapRef<CodeFormState> = reactive({
      phone: '',
      code: '',
      timestamp: new Date().getTime(),
    });

    const useEmailLogin = async () => {
      try {
        await emailFormRef.value.validate();
        console.log('values', emailFormState, toRaw(emailFormState));
        localStorage.setItem('token', 'token');
        btnLoading.value = false;
        store.commit('login');
        router.push({
          name: 'home',
        });
      } catch (error) {}
    };
    const useCodeLogin = async () => {
      try {
        await codeFormRef.value.validate();
        console.log('values', codeFormState, toRaw(codeFormState));
        setItem('token', 'token');
        store.commit('login');
        btnLoading.value = false;
        router.push({
          name: 'home',
        });
      } catch (error) {}
    };
    const getCode = () => {
      console.log('getCode');
    };
    const submit = () => {
      btnLoading.value = true;
      activeKey.value === '1' ? useEmailLogin() : useCodeLogin();
    };
    return {
      emailFormState,
      codeFormState,
      useEmailLogin,
      useCodeLogin,
      rules,
      activeKey,
      getCode,
      emailFormRef,
      codeFormRef,
      submit,
      btnLoading,
    };
  },
});
</script>

<style lang="less" scoped>
@import './index.less';
</style>
