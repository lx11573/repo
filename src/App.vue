<script setup lang="ts">
onLaunch(() => {
  // #ifdef APP-PLUS
  plus.screen.lockOrientation('portrait-primary')

  // #endif
})
</script>

<style lang="scss">
@import './styles/main.css';
</style>
