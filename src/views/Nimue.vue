<template>
	<div class="about">
		<!-- <h1>Nimue page</h1> -->
		<TopMenu
			:menuItems="menuItems" 
			:activeItem="activeItem" 
			@itemSelected="handleItemSelected"
		/>
		<KompaniyaNimue/>
		<NimueVideo/>
		<NimueFeedback />
	</div>
</template>


<script>
import TopMenu from '@/components/TopMenu.vue'
import KompaniyaNimue from '@/components/KompaniyaNimue.vue'
import NimueVideo from '@/components/NimueVideo.vue'
import NimueFeedback from '@/components/NimueFeedback.vue'

export default {
	name:'Nimue',
	data() {
		return {
		menuItems: [
			{ name: 'Forlle’d', link: '/kompaniya' },
			{ name: 'Nimue', link: '/kompaniya/nimue' },
		],
		activeItem: 'Nimue', 
		};
	},
	components: { 
		KompaniyaNimue,
		NimueVideo,
		TopMenu,
		NimueFeedback
	}
};
</script>

<style scoped></style>
