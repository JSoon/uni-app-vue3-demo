Component({
  data: {
    selected: 0,
    color: '#7A7E83',
    selectedColor: '#3cc51f',
    borderStyle: 'black',
    backgroundColor: '#ffffff',
    list: [{
      pagePath: '/pages/index/index',
      iconPath: '/static/logo.png',
      selectedIconPath: '/static/logo.png',
      text: '首页'
    }, {
      pagePath: '/pages/scan/index',
      iconPath: '/static/logo.png',
      selectedIconPath: '/static/logo.png',
      text: '扫码'
    }, {
      pagePath: '/pages/my/index',
      iconPath: '/static/logo.png',
      selectedIconPath: '/static/logo.png',
      text: '我的'
    }],
  },
  attached() {},
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      // 若点击了扫码, 则直接调用扫码功能, 不进行tab页切换
      if (data.index === 1) {
        // 允许从相机和相册扫码
        wx.scanCode({
          success(res) {
            wx.showModal({
              title: `条码类型：${res.scanType}`,
              content: `${res.result}`
            })
          },
          fail(res) {
            wx.showModal({
              title: `条码错误`,
              content: `${res.errMsg}`
            })
          }
        });
        return
      }
      // 若点击的其他tab页, 则进行页面切换
      wx.switchTab({
        url
      })
      this.setData({
        selected: data.index
      })
    }
  }
})