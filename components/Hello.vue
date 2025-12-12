<template>
  <el-card class="hello-component">
    <template #header>
      <div class="card-header">
        <span>{{ title }}</span>
      </div>
    </template>
    <p>{{ message }}</p>
    <el-button type="primary" @click="handleClick">点击我</el-button>
  </el-card>
</template>

<script setup lang="ts">
import { ElMessage } from 'element-plus'

interface Props {
  title?: string
  message?: string
}

const props = withDefaults(defineProps<Props>(), {
  title: '示例组件',
  message: '这是一个示例组件'
})

const handleClick = () => {
  ElMessage.success('组件按钮被点击了！')
}
</script>

<style scoped lang="scss">
.hello-component {
  margin: 20px 0;
  
  .card-header {
    font-weight: bold;
    color: $primary-color;
  }
}
</style>
