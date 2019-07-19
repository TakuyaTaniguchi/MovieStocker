<template>
  <div>
    <section class="l-section -is-medium">
      <div class="container">
        <h2 class="c-articleTitle">Search</h2>
        <form @submit="checkForm" method="post" class="c-form">
          <input v-model="text" placeholder="Please Input MovieTitle" class="c-form_input"/>
          <input type="image" src="/search-line.svg" class="c-form_submit" />
        </form>
         <ul class="c-card">
          <li v-for="result in resultSearch" :key="result.id" class="c-card_item">
            <div class="c-card_inner">
              <img :src="`https://image.tmdb.org/t/p/w780/${result.backdrop_path}`" >
              <div class="c-card_desc">
                  <div class="c-card_desc_inner">
                    <h3>{{result.title}}</h3>
                    <p>{{ result.overview.slice(0,100)}}...</p>
                  </div>
              </div>
            </div>
          </li>
        </ul>
        <h2 class="c-articleTitle">Most popular movies</h2>
        <ul class="c-card">
          <li v-for="result in results" :key="result.id" class="c-card_item">
            <div class="c-card_inner">
              <img :src="`https://image.tmdb.org/t/p/w780/${result.backdrop_path}`" >
              <div class="c-card_desc">
                  <div class="c-card_desc_inner">
                    <h3>{{result.title}}</h3>
                    <p>{{ result.overview.slice(0,100)}}...</p>
                  </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
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
        text: ''
      }
    },
    methods: {
      async checkForm(e) {
        e.preventDefault();
        const text = this.text;
        const response = await this.$axios.$get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_KEY}&query=${text}&language=ja-JA`);
        this.resultSearch = response.results;
      }
  },
	}
</script>

<style>

</style>

