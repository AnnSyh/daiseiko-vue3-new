<template>
	<div class="about">
		<!-- <h1>Nimue page</h1> -->
		<NimueMenu/>
		<KompaniyaNimue/>
		<NimueVideo/>
	</div>
</template>


<script>
import NimueMenu from '@/components/NimueMenu.vue'
import KompaniyaNimue from '@/components/KompaniyaNimue.vue'
import NimueVideo from '@/components/NimueVideo.vue'

export default {
	components: { 
		KompaniyaNimue,
		NimueVideo,
		NimueMenu
	}
};
</script>

<style scoped></style>
