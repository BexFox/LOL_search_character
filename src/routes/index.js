import { createRouter, createWebHashHistory } from "vue-router";
import GameInfo from "./GameInfo";
import Champion from "./Champion";
import News from "./News";
import FecthNote from "./FecthNote";

export default createRouter({
  // Hash, History
  // https://google.com/#/search : 해시모드 사용 : 특정페이지에서 새로고침 하였을때, 페이지를 찾을 수 없다 메세지 방지
  // pages
  // https://google.com/about
  history: createWebHashHistory(),
  routes: [
    {
      path: "/gameinfo",
      component: GameInfo
    },
    {
      path: "/",
      component: Champion
    },
    {
      path: "/news",
      component: News
    },
    {
      path: "/fecthnote",
      component: FecthNote
    }
  ]
});
