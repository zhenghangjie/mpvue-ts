<template>
  <div>
    <p class="card">
      props: {{text}}<br />
      card2 TS value: {{ ver }}
    </p>
  </div>
</template>
<!-- 必须指定为ts -->
<script lang="ts" src="./card2.ts">
</script>

<style>
  .card {
    padding: 10px;
  }
</style>
