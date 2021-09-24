//  压缩 解压
// https://c.runoob.com/front-end/51/
// https://www.sojson.com/yasuojs.html

function __onUseInfoLoad(cb) {
  if (!cb) {
    return;
  }
  if (window.$bus.user.ticket) {
    cb()
  } else {
    window.$bus.$on('USRE_INFO_LOAD', cb);
  }
}

function __findCompsById(id) {
  var comps = window.$bus.tpl.comps;
  for(var i=0;i<comps.length;i++){
    if(comps[i].id == id) {
      return comps[i];
    }
  }
};




// work here!

function __findCompsById(id) {
  var comps = window.$bus.tpl.comps;
  for(var i=0;i<comps.length;i++){
    if(comps[i].id == id) {
      return comps[i];
    }
  }
};

var __GROUP_MAP = {
  A: '519',
  B: '520',
  C: '521',
  D: '522'
};

window.$bus.$on("USER_GROUPS_CHECK_DONE", function(){
  var group_info = window.$bus.user_group_check_info;
  console.log("USER_GROUPS_CHECK_DONE", group_info);
  if(group_info[__GROUP_MAP.D]){
    __findCompsById(31).hide = false;
    __findCompsById(25).hide = true;
  } else if(group_info[__GROUP_MAP.B]) {
    __findCompsById(35).hide = false;
    __findCompsById(25).hide = true;
  } else if(group_info[__GROUP_MAP.A]) {
    __findCompsById(34).hide = false;
    __findCompsById(30).hide = false;
    __findCompsById(25).hide = true;
  }
});

function __onUseInfoLoad(cb) {
  if (!cb) {
    return;
  }
  if (window.$bus.user.ticket) {
    cb()
  } else {
    window.$bus.$on('USRE_INFO_LOAD', cb);
  }
};

__onUseInfoLoad(function(){
  __REQUEST__.getJSON("https://vipact3.api.mgtv.com/api/v1/act/share/laxin/helper/list?&act_name=20210922gqyy&offset=0&count=1000&ticket=" + window.$bus.user.ticket).then(function(res){
    if(res && res.ret === 0 && res.data && res.data.helper_list && res.data.helper_list.length){
      var data = res.data.helper_list[res.data.helper_list.length - 1];
      document.querySelector("#ship_14 .act-text >div").innerHTML="<img style='border-radius:0.3rem;background:gray;height:0.88rem;width:0.88rem' src='" + data.avatar + "'/>";
      document.querySelector("#ship_15 .act-text >div").innerHTML="<div style='color:#c34c36;font-size:0.24rem;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;'>" + data.nickname +"</div>";
    }
  })
});
