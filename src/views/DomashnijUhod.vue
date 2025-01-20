<template>
	<div>
		<TopMenu
			:menuItems="menuItems" 
			:activeItem="activeItem" 
			@itemSelected="handleItemSelected"
		/>
		<DomashnijUhodAbout/>
		<DomashnijUhodFilter/>
	</div>
</template>


<script>
import DomashnijUhodAbout from '@/components/DomashnijUhodAbout.vue';
import DomashnijUhodFilter from '@/components/DomashnijUhodFilter.vue';
import TopMenu from '@/components/TopMenu.vue';

export default {
	name:'DomashnijUhod',
	data() {
		return {
		menuItems: [
			{ name: 'Профессиональная линия', link: '/professionalnayaLiniya' },
			{ name: 'Домашний уход', link: '/domashnijUhod' },
		],
		activeItem: 'Домашний уход', 
		};
	},
	
	components: { 
		DomashnijUhodAbout,
		DomashnijUhodFilter,
		TopMenu,
	},
};
</script>

<style scoped></style>
