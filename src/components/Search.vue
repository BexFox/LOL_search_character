<template>
  <div class="container">
    <input
      v-model="title"
      class="form-control"
      type="text"
      placeholder="Search for Champions"
      @keyup.enter="apply"
    />
    <button class="btn" @click="apply">Apply</button>
    <div class="list">
      <div v-for="item in items" v-bind:key="item" class="champion">
        <p>{{ item.name }}</p>
        <img
          :src="`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${item.id}_0.jpg`"
          alt="테스트"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      items: [],
    };
  },
  mounted() {
    // movieItem 컴포넌트가 연결된 직후 (html 연결된 직후 created는 html연결 X)
    this.init();
  },

  methods: {
    async init() {
      await axios
        .get(
          "https://ddragon.leagueoflegends.com/cdn/11.3.1/data/ko_KR/champion.json"
        )
        .then((response) => {
          this.items = response.data.data;
        });
    },
  },
};
</script>
<style scoped>
.container {
  width: 1275px;
  margin: 0 auto;
}

.list {
  display: flex;
  flex-wrap: wrap;
}
.list > div {
  margin: 10px;
}
.list img {
  height: 350px;
}
.list .champion {
  position: relative;
}
.list p {
  height: 50px;
  line-height: 50px;
  font-weight: 700;
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #111;
  opacity: 0.7;
  color: #fff;
}
</style>