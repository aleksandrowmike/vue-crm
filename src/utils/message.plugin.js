export default {
  install(Vue, options) {
    Vue.prototype.$message = (html) => {
      M.toast({html: html});
    };

    Vue.prototype.$error = (html) => {
      M.toast({ html: `[Ошибка] ${html}` });
    };
  },
};
