<template>
  <div>
    <a-button @click="changeColor">测试</a-button>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "Index",
  setup() {
    const changeColor = () => {
      window.less
        .modifyVars({
          "@primary-color": "red",
          "@link-color": "red",
          "@btn-primary-bg": "red"
        })
        .then(() => {
          console.log("成功");
        })
        .catch(() => {
          console.log("失败");
        });
    };
    return {
      changeColor
    };
  }
});
</script>

<style scoped></style>
