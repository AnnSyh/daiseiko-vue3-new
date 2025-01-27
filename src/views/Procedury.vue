<template>
	<div>
		<TopMenu :menuItems="menuItems" :activeItem="activeItem" @itemSelected="handleItemSelected" />

		<ProceduryAbout />
		
		<ProceduryFilter :items="cardStore.ProceduryDaiseko"/>

	</div>
</template>

<script>
import { ref } from 'vue';
import TopMenu from '@/components/TopMenu.vue'
import ProceduryAbout from '@/components/ProceduryAbout.vue'
import UsloviyaObucheniyaFirstBlock from '@/components/UsloviyaObucheniyaFirstBlock.vue'
import ProceduryFilter from '@/components/ProceduryFilter.vue'

import { useCardStore } from '@/store/store.js';



export default {
	name: 'Procedury',
	data() {
		return {
			menuItems: [
				{ name: 'Академия Дайсэйко', link: '/akademiya-daiseiko' },
				{ name: 'Условия обучения', link: '/akademiya-daiseiko/usloviya-obucheniya' },
				{ name: 'Процедуры', link: '/procedury' },
			],
			activeItem: 'Процедуры',
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
		ProceduryAbout,
		UsloviyaObucheniyaFirstBlock,
		ProceduryFilter,
	}
};
</script>

<style scoped></style>
