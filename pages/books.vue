<template>
  <div class="card-wrap">
    <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img :src=" items['items'][0]['volumeInfo']['imageLinks'].thumbnail">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">{{ items['items'][0]['volumeInfo'].title }}</p>
        </div>
      </div>

      <div class="content">
        {{ items['items'][0]['volumeInfo'].description }}
      </div>
    </div>
  </div>
</div>
</template>

<script>
	export default {
		async asyncData({app}){
			const items = await app.$axios.$get('https://www.googleapis.com/books/v1/volumes?q=isbn:4041002877')
			return {
				items
			}
		}
	}
</script>

<style>
.card-wrap{
  width: 980px;
  max-width: 100%;
  margin: 0 auto;
  padding-top: 150px;
}
.card{
  width: 33%;
}
.card-image img{
      object-fit: contain;
}
</style>

