<script setup lang="ts">
import { checkUpdate, listenerNetworkStatus } from '@/utils'

onLaunch(() => {
  plus.screen.lockOrientation('portrait-primary')
  listenerNetworkStatus()
  checkUpdate()
})
</script>

<style lang="scss">
@import './styles/main.css';
</style>
