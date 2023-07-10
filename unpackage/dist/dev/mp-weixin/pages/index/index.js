"use strict";
const common_vendor = require("../../common/vendor.js");
const composables_useCustomTabBar = require("../../composables/useCustomTabBar.js");
if (!Array) {
  const _easycom_uni_link2 = common_vendor.resolveComponent("uni-link");
  const _easycom_uni_countdown2 = common_vendor.resolveComponent("uni-countdown");
  const _easycom_uni_section2 = common_vendor.resolveComponent("uni-section");
  (_easycom_uni_link2 + _easycom_uni_countdown2 + _easycom_uni_section2)();
}
const _easycom_uni_link = () => "../../uni_modules/uni-link/components/uni-link/uni-link.js";
const _easycom_uni_countdown = () => "../../uni_modules/uni-countdown/components/uni-countdown/uni-countdown.js";
const _easycom_uni_section = () => "../../uni_modules/uni-section/components/uni-section/uni-section.js";
if (!Math) {
  (_easycom_uni_link + HelloWorld + _easycom_uni_countdown + _easycom_uni_section)();
}
const HelloWorld = () => "../../components/HelloWorld.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    composables_useCustomTabBar.useCustomTabBar({ selected: 0 });
    const href = "https://uniapp.dcloud.io/component/README?id=uniui";
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          href,
          text: href
        }),
        b: common_vendor.p({
          ["font-size"]: 30,
          day: 1,
          hour: 2,
          minute: 30,
          second: 0,
          color: "#FFFFFF",
          ["background-color"]: "#007AFF"
        }),
        c: common_vendor.p({
          title: "修改颜色 + 字体大小",
          type: "line",
          padding: true
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/soon/projects/uni-app-vue3-demo/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
