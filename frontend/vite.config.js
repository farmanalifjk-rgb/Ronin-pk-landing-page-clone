import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        register: resolve(__dirname, 'register.html'),
        login: resolve(__dirname, 'login.html'),
        forget_password: resolve(__dirname, 'forget_password.html'),
        password_reset_done: resolve(__dirname, 'password_reset_done.html'),
        password_reset_confirm: resolve(__dirname, 'password_reset_confirm.html'),
        profile: resolve(__dirname, 'profile.html'),
      }
    }
  }
})