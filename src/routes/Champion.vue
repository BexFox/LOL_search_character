<template>
  <Headline />
  <Search />
  <ChampionList />
</template>

<script>
import ChampionList from "../components/ChampionList";
import Headline from "../components/Headline";
import Search from "../components/Search";

export default {
  components: {
    ChampionList,
    Headline,
    Search,
  },
};
</script>