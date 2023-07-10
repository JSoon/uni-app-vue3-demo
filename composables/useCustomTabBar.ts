import { onShow } from '@dcloudio/uni-app'

interface Props {
  // 当前选中tab页签索引号
  selected : number
}

// 自定义导航高亮逻辑
export default function useCustomTabBar(props : Props) {
  // #ifdef MP-WEIXIN 
  onShow(() => {
    const curPage = getCurrentPages()[0];  // 获取当前页面实例
    if (typeof curPage.getTabBar === 'function' &&
      curPage.getTabBar()) {
      // console.log('curPage', curPage.getTabBar())
      curPage.getTabBar().setData({
        selected: props.selected
      })
    }
  })
  // #endif
}