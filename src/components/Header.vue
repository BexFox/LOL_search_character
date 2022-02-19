<template>
  <header>
    <Logo />
    <div class="nav">
      <div v-for="nav in navigations" :key="nav.name" class="nav-item">
        <RouterLink :to="nav.href" active-class="active" class="nav-link">
          {{ nav.name }}
        </RouterLink>
      </div>
    </div>
    <div class="account">
      <div class="login">
        <a
          href="https://auth.riotgames.com/login#client_id=prod-xsso-leagueoflegends&code_challenge=83foVVlXMd6ZLAdFrnzS6HenTmtVzdb9pIFQdx4XRI4&code_challenge_method=S256&redirect_uri=https%3A%2F%2Fxsso.leagueoflegends.com%2Fredirect&response_type=code&scope=openid%20account&state=2a8ade01fb0d4f0c829a745c92"
          >로그인</a
        >
      </div>
      <div class="join">
        <a
          href="https://signup.kr.riotgames.com/?_gl=1*1xz2sug*_ga*NjU5MzcwMzI4LjE2NDQ3NjA0NTM.*_ga_FXBJE5DEDD*MTY0NDc2MDQ1Mi4xLjEuMTY0NDc2MDY0MC4yNA.."
          >회원가입</a
        >
      </div>
    </div>
  </header>
</template>

<script>
import Logo from "./Logo.vue";
export default {
  components: {
    Logo,
  },
  data() {
    return {
      navigations: [
        {
          name: "게임정보",
          href: "/gameinfo",
        },
        {
          name: "챔피언",
          href: "/",
        },
        {
          name: "새소식",
          href: "/news",
        },
        {
          name: "패치 노트",
          href: "/fecthnote",
        },
      ],
    };
  },
};
</script>
<style scoped>
header {
  height: 80px;
  background: #111;
  display: flex;
  align-items: center;
  color: #fff;
  position: relative;
}
header .logo {
  margin: 0 30px;
}
header .nav {
  display: flex;
  align-items: center;
}
header .nav a {
  text-decoration: none;
  color: #fff;
  padding: 10px;
}
header .account {
  position: absolute;
  right: 15px;
  display: flex;
}
header .account a {
  text-decoration: none;
}
header .account .login {
  margin: 0 10px;
  padding: 10px;
  background: #282828;
  border-radius: 10px;
}
header .account .login a {
  color: #fff;
}
header .account .join {
  margin: 0 10px;
  padding: 10px;
  background: #0bc4e2;
  border-radius: 10px;
}
header .account .join a {
  display: block;
  color: #000;
}
header .account .join:hover {
  background: rgba(0, 178, 207);
}
</style>