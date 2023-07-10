"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "HelloWorld",
  setup(__props) {
    let name = "John";
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(common_vendor.unref(name))
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-b52b555e"], ["__file", "/Users/soon/projects/uni-app-vue3-demo/components/HelloWorld.vue"]]);
wx.createComponent(Component);
