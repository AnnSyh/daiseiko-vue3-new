<template>
	<div>
		<TopMenu
			:menuItems="menuItems" 
			:activeItem="activeItem" 
			@itemSelected="handleItemSelected"
		/>
		<NovostiList :items="cardStore.dataArrayNews"/>
	</div>
</template>

<script>
import { ref } from 'vue';
import TopMenu from '@/components/TopMenu.vue'
import NovostiList from '@/components/NovostiList.vue'

import { useCardStore } from '@/store/store.js';


export default {
	name: 'Novosti',
	data() {
		return {
			menuItems: [
				{ name: 'Новости', link: '/novosti' },
				{ name: 'Обучение', link: '/novosti/events/' },
			],
			activeItem: 'Новости', 
		};
	},
	methods: {
		handleItemSelected(item) {
			this.activeItem = item.name; 
		},
	},
	setup() {
		const isFilterOpen = ref(false);
		const cardStore = useCardStore();

		const toggleFilter = () => {
			isFilterOpen.value = !isFilterOpen.value;
		};

		return {
			isFilterOpen,
			toggleFilter,
			cardStore,
		};
	},
	components: {
		TopMenu,
		NovostiList,
	}
};
</script>

<style scoped></style>
