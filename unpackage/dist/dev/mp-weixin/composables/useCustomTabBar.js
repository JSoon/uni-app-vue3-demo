"use strict";
const common_vendor = require("../common/vendor.js");
function useCustomTabBar(props) {
  common_vendor.onShow(() => {
    const curPage = getCurrentPages()[0];
    if (typeof curPage.getTabBar === "function" && curPage.getTabBar()) {
      curPage.getTabBar().setData({
        selected: props.selected
      });
    }
  });
}
exports.useCustomTabBar = useCustomTabBar;
