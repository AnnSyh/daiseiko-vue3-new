<template>
	<div>
		<TopMenu
			:menuItems="menuItems" 
			:activeItem="activeItem" 
			@itemSelected="handleItemSelected"
		/>
		<DomashnijUhodAbout/>
		<DomashnijUhodFilter :items="cardStore.professionalnayaCards"/>
	</div>
</template>


<script>
import DomashnijUhodAbout from '@/components/DomashnijUhodAbout.vue';
import DomashnijUhodFilter from '@/components/DomashnijUhodFilter.vue';
import TopMenu from '@/components/TopMenu.vue';

import { useCardStore } from '@/store/store.js';

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
	setup() {
		const cardStore = useCardStore();

		return {
			cardStore
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
