export default [
  {
    // 设备监控
    path: '/',
    redirect: '/deviceMoint'
  },
  {
    // 设备监控
    path: '/deviceMoint',
    component: resolve => require(['./pages/deviceMoint/deviceMoint'], resolve)
  }
]
