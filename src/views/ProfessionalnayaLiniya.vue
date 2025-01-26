<template>
	<div>
		<TopMenu
			:menuItems="menuItems" 
			:activeItem="activeItem" 
			@itemSelected="handleItemSelected"
		/>
		<ProfessionalnayaAbout/>
		<ProfessionalnayaFilter :items="cardStore.professionalnayaCards"/>
	</div>
</template>


<script>
import { ref } from 'vue';
import TopMenu from '@/components/TopMenu.vue';
import ProfessionalnayaAbout from '@/components/ProfessionalnayaAbout.vue';
import ProfessionalnayaFilter from '@/components/ProfessionalnayaFilter.vue';

import { useCardStore } from '@/store/store.js';

export default {
	name:'ProfessionalnayaLiniya',
	data() {
		return {
			menuItems: [
				{ name: 'Профессиональная линия', link: '/professionalnayaLiniya' },
				{ name: 'Домашний уход', link: '/domashnijUhod' },
			],
			activeItem: 'Профессиональная линия', 
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
			cardStore
		};
	},
	components: { 
		TopMenu,
		ProfessionalnayaAbout,
		ProfessionalnayaFilter,
	}
};
</script>

<style scoped></style>
