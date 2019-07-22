<template>
  <div>
    <section class="l-section -is-medium">
      <div class="l-container">
        <h2 class="c-articleTitle">Favorite</h2>
        <ul class="c-card">
          <li v-for="favorit in favorites" :key="favorit.id" class="c-card_item">
            <nuxt-link :to="`/page/${favorit.id}`">
               <div class="c-card_inner">
                <img v-if="!favorit.backdrop_path" src="/dummy.jpg">
                <img v-else :src="`https://image.tmdb.org/t/p/w780/${favorit.backdrop_path}`" >
                <div class="c-card_desc">
                    <div class="c-card_desc_inner">
                      <h3 class="c-card_desc_title">{{favorit.title}}</h3>
                      <p v-if="!favorit.overview" class="c-card_desc_text">Sorry No OverView</p>
                      <p v-else class="c-card_desc_text">{{ favorit.overview.slice(0,100)}}...</p>
                    </div>
                </div>
              </div>
            </nuxt-link>
          </li>
        </ul>
      </div>
      <div class="l-container">
        <h2 class="c-articleTitle">Search</h2>
        <form @submit="checkForm" method="post" class="c-form">
          <input v-model="text" placeholder="Please Input MovieTitle" class="c-form_input"/>
          <input type="image" src="/search-line.svg" class="c-form_submit" />
        </form>
         <ul class="c-card">
          <li v-for="result in resultSearch" :key="result.id" class="c-card_item">
            <nuxt-link :to="`/page/${result.id}`">
               <div class="c-card_inner">
                <img v-if="!result.backdrop_path" src="/dummy.jpg">
                <img v-else :src="`https://image.tmdb.org/t/p/w780/${result.backdrop_path}`" >
                <div class="c-card_desc">
                    <div class="c-card_desc_inner">
                      <h3 class="c-card_desc_title">{{result.title}}</h3>
                      <p v-if="!result.overview" class="c-card_desc_text">Sorry No OverView</p>
                      <p v-else class="c-card_desc_text">{{ result.overview.slice(0,100)}}...</p>
                    </div>
                </div>
              </div>
            </nuxt-link>
          </li>
        </ul>
      </div>
      <div class="l-container">
        <h2 class="c-articleTitle">Most popular movies</h2>
        <ul class="c-card">
          <li v-for="result in results" :key="result.id" class="c-card_item">
            <nuxt-link :to="`/page/${result.id}`">
              <div class="c-card_inner">
                <img v-if="!result.backdrop_path" src="/dummy.jpg">
                <img  v-else :src="`https://image.tmdb.org/t/p/w780/${result.backdrop_path}`" >
                <div class="c-card_desc">
                    <div class="c-card_desc_inner">
                      <h3 class="c-card_desc_title">{{result.title}}</h3>
                      <p v-if="!result.overview" class="c-card_desc_text">Sorry No OverView</p>
                      <p v-else class="c-card_desc_text">{{ result.overview.slice(0,100)}}...</p>
                    </div>
                </div>
              </div>
            </nuxt-link>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex';
  export default {
    async asyncData({app}){
      const data = await app.$axios.$get(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.TMDB_KEY}&language=ja-JA`);
      const results = data.results;
			return {
        results
			}
    },
    data(){
      return{
        resultSearch: '',
        text: '',
        favorites: '',
      }
    },
    computed: {
  
    },
    mounted () {
      this.listFavorites();
    },
    methods: {
      async checkForm(e) {
        e.preventDefault();
        const text = this.text;
        const response = await this.$axios.$get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_KEY}&query=${text}&language=ja-JA`);
        this.resultSearch = response.results;
      },
      async listFavorites(e) {
        const response = [];
        const list = this.$store.state.list;
        for(let i = 0; i < list.length; i++){
              const id =list[i].id
              response.push(await this.$axios.$get(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_KEY}&language=ja-JA`));
        }
        this.favorites  = response;
      },
      // addTodo (e) {
      //   this.$store.commit('add',e.target.value)
      //   e.target.value = ''
      // },
      // ...mapMutations({
      //   toggle: 'todos/toggle'
      // }),
      // removeTodo (todo){
      //   this.$store.commit('remove',todo)
      // }
  },
	}
</script>

<style>

</style>

