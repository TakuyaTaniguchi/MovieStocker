<template>
  <div>
    <section class="section is-medium">
      <div class="container">
        <h2 class="title">最新映画情報</h2>
        <ul>
          <li>
            <div class="icon">
              <img :src="`https://image.tmdb.org/t/p/w185/${items.backdrop_path}`" >
            </div>
            <!-- <h4>
              <span>{{ item.title }}</span>
              <nuxt-link :to="`/users/${item.user.id}`">by {{item.user.id}}</nuxt-link>
            </h4>
            <div>{{item.body.slice(0,130)}}....</div>
            <p><a :href="item.url">{{ item.url }}</a></p> -->
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
	export default {
    async asyncData({app}){
      const items = await app.$axios.$get(`https://api.themoviedb.org/3/movie/550?api_key=${process.env.TMDB_KEY}&language=ja-JP`)
      console.dir(items,'API');
       console.dir('API');
			return {
        items
			}
		}
	}
</script>

<style>
.container {
  min-height: 20vh;
  padding: 16px;
}

h3{
  margin: 16px 0;
  padding: 8px 0;
  border-bottom: solid 1px #e5e5e5;
}
ul{
  margin-top: 45px;
}
li{
    border-radius: 10px;
    border: solid 3px #ffb3b3;
    padding: 15px;
    word-break: break-all;
}
li + li {
  margin-top: 60px;
}

p {
  margin: 8px 0;
}

a{
  word-break: break-all;
}
</style>

