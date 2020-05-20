export default function (name) {
  if (window.singleSpaNavigate && window.System) {
    window.SystemjsWebapckInterop.setPublicPath(name)
  }
}
