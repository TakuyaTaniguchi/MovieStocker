<template>
  <div>
    <section class="section is-medium">
      <div class="container">
        <p class="title">JavaScriptのタグがつけられたQiitaの記事一覧</p>
        <ul>
          <li v-for="item in items" :key="item.id">
            <div class="icon">
              <img :src="item.user.profile_image_url" >
            </div>
            <h4>
              <span>{{ item.title }}</span>
              <nuxt-link :to="`/users/${item.user.id}`">by {{item.user.id}}</nuxt-link>
            </h4>
            <div>{{item.body.slice(0,130)}}....</div>
            <p><a :href="item.url">{{ item.url }}</a></p>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
	export default {
		async asyncData({app}){
			const items = await app.$axios.$get('https://qiita.com/api/v2/items?query=tag:javascript')
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
.icon{
  width: 120px;
  height: auto;
}
.icon img{
  width: 100%;
  max-width: 100%;
  object-fit: cover;
}
</style>

