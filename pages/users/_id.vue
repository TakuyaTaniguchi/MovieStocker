<template>
	<div>
		 <div class="container">
			<h1>{{ user.id }}</h1>
			<img :src="user.profile_image_url" width="120">
			<p>{{ user.description || '' }}</p>
			<nuxt-link to="/">
				<small><b>トップに戻る。</b></small>
			</nuxt-link>
			<h3>{{ user.id }}さんの投稿一覧</h3>
			<ul>
				<li v-for="item in items" :key="item.id">
					<h4>
						<span>{{ item.title }}</span>
					</h4>
					<div>
						{{ item.body.slice(0,130) }}.....
					</div>
				</li>
			</ul>
		 </div>
	</div>
</template>

<script>
	export default {
		async asyncData({ route,app }){
			const user = await app.$axios.$get(`https://qiita.com/api/v2/users/${route.params.id}`)
			const items = await app.$axios.$get(`https://qiita.com/api/v2/items?query=user:${route.params.id}`)
			return {user,items};
		}
	}
</script>