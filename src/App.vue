<script setup lang="ts">
import { checkUpdate, listenerNetworkStatus } from '@/utils'

onLaunch(() => {
  // #ifdef APP-PLUS
  plus.screen.lockOrientation('portrait-primary')
  listenerNetworkStatus()
  checkUpdate()
  // #endif
})
</script>

<style lang="scss">
@import './styles/main.css';
</style>
