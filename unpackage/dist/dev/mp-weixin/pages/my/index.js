"use strict";
const common_vendor = require("../../common/vendor.js");
const composables_useCustomTabBar = require("../../composables/useCustomTabBar.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    composables_useCustomTabBar.useCustomTabBar({ selected: 2 });
    return (_ctx, _cache) => {
      return {};
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/soon/projects/uni-app-vue3-demo/pages/my/index.vue"]]);
wx.createPage(MiniProgramPage);
