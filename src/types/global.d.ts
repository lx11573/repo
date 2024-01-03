export { }
declare global {
  /** null 与 void  */
  type Nil = null | void
  type RoutePath = `/${NavigateToOptions['url']}`
}
