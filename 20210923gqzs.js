//  压缩 解压
// https://c.runoob.com/front-end/51/
// https://www.sojson.com/yasuojs.html
// 透明图 https://vipcdn.mgtv.com/lego/20210922/lego/3f1ba0261b9911ec8be16c92bf1519bc.png

function __findCompsById(id) {
  var comps = window.$bus.tpl.comps;
  for (var i = 0; i < comps.length; i++) {
    if (comps[i].id == id) {
      return comps[i];
    }
  }
}

var __GROUP_MAP = {
  A: '519',
  B: '520',
  C: '521',
  D: '522',
};

window.$bus.$on('USER_GROUPS_CHECK_DONE', function () {
  var group_info = window.$bus.user_group_check_info;
  console.log('USER_GROUPS_CHECK_DONE', group_info);
  if (group_info[__GROUP_MAP.C]) {
    __findCompsById(27).hide = false;
    __findCompsById(30).hide = false;
    __findCompsById(25).hide = true;
    __findCompsById(26).hide = true;
    __findCompsById(28).hide = true;
    __findCompsById(31).hide = true;
  }
});
