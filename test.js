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

function __onGroupInfoLoad(cb) {
  var __timer = setInterval(function () {
    if (Object.keys(window.$bus.user_group_check_info).length) {
      clearInterval(__timer);
      cb && cb();
    }
  }, 10);
}
__onGroupInfoLoad(function () {
  var group_info = window.$bus.user_group_check_info;
  console.log('USER_GROUPS_CHECK_DONE', group_info);
  if (group_info[__GROUP_MAP.C]) {
    __findCompsById(28).hide = false;
    __findCompsById(25).hide = true;
    __findCompsById(26).hide = true;
    __findCompsById(27).hide = true;
  }
});
if (window.gact.is_iphone) {
  window.addEventListener('pageshow', function (e) {
    if (e.persisted) {
      location.reload();
    }
  });
}
document.addEventListener('visibilitychange', function () {
  if (!document.hidden) {
    window.$bus.$emit('GET_LEGO_COIN_DETAIL');
  }
});
