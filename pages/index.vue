<template>
  <div class="home-page">
    <el-container>
      <el-header>
        <h1>欢迎使用 Nuxt 3 + Element Plus</h1>
      </el-header>
      
      <el-main>
        <el-card class="welcome-card">
          <template #header>
            <div class="card-header">
              <span>快速开始</span>
            </div>
          </template>
          
          <el-space direction="vertical" :size="20" style="width: 100%">
            <el-alert
              title="项目已成功初始化"
              type="success"
              description="您的 Nuxt 3 + Vue 3 + Element Plus 项目已经准备就绪！"
              :closable="false"
            />
            
            <div class="demo-section">
              <h3>Element Plus 组件演示</h3>
              <el-row :gutter="20">
                <el-col :span="12">
                  <el-button type="primary" @click="handleClick">主要按钮</el-button>
                  <el-button type="success">成功按钮</el-button>
                  <el-button type="info">信息按钮</el-button>
                </el-col>
                <el-col :span="12">
                  <el-input v-model="inputValue" placeholder="请输入内容" />
                </el-col>
              </el-row>
            </div>

            <div class="counter-demo">
              <h3>响应式数据演示</h3>
              <el-space>
                <el-button @click="count--" :icon="Minus">减少</el-button>
                <el-tag size="large">计数: {{ count }}</el-tag>
                <el-button @click="count++" :icon="Plus">增加</el-button>
              </el-space>
            </div>

            <el-divider />

            <div class="info-section">
              <h3>项目信息</h3>
              <ul>
                <li>📦 Nuxt 3 - 现代化全栈框架</li>
                <li>⚡️ Vue 3 - 渐进式 JavaScript 框架</li>
                <li>🎨 Element Plus - Vue 3 组件库</li>
                <li>💪 TypeScript - 类型安全</li>
                <li>🎯 Vite - 下一代前端构建工具</li>
              </ul>
            </div>
          </el-space>
        </el-card>
      </el-main>
      
      <el-footer>
        <p>&copy; 2025 Nuxt 3 Project</p>
      </el-footer>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { Plus, Minus } from '@element-plus/icons-vue'

const count = ref(0)
const inputValue = ref('')

const handleClick = () => {
  ElMessage({
    message: '按钮点击成功！',
    type: 'success',
  })
}
</script>

<style scoped lang="scss">
.home-page {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  padding: 20px;
}

.el-header {
  background-color: rgba(255, 255, 255, 0.95);
  color: #333;
  text-align: center;
  line-height: 60px;
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);

  h1 {
    margin: 0;
    font-size: 28px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}

.el-main {
  padding: 0;
}

.welcome-card {
  max-width: 1000px;
  margin: 0 auto;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.card-header {
  font-size: 18px;
  font-weight: bold;
}

.demo-section,
.counter-demo,
.info-section {
  h3 {
    margin-bottom: 15px;
    color: #409eff;
  }
}

.info-section ul {
  list-style: none;
  padding: 0;
  
  li {
    padding: 8px 0;
    font-size: 16px;
    color: #606266;
  }
}

.el-footer {
  background-color: rgba(255, 255, 255, 0.95);
  color: #333;
  text-align: center;
  line-height: 60px;
  border-radius: 8px;
  margin-top: 20px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  
  p {
    margin: 0;
  }
}
</style>
