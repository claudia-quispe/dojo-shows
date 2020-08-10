<template>
    <div>
        <img src="@/assets/error.png" class="img-fluid" alt="Responsive image">
    </div>
</template>

<script>
export default {
  name: 'NotFound',
  props: {
    notfound: String
  }
}
</script>
<style>
.img-fluid {
  width: 600px;
  height: 400px;
}

</style>