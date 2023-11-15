<script setup lang="tsx">
defineOptions({ name: 'SubPage' })
let msg = $ref('新的页面')
function handleClick() {
  msg = Math.random().toString()
}
defineRender(() => {
  return (
    <div onClick={handleClick}>
      <div>{msg}</div>
    </div>
  )
})
</script>
