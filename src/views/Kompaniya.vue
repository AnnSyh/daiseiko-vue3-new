<template>
	<div class="about">
		<!-- <h1>Kompaniya page</h1> -->
		<TopMenu :menuItems="menuItems" :activeItem="activeItem" @itemSelected="handleItemSelected" />
		<KompaniyaBrend1 />
		<KompaniyaNews :items="cardStore.kompaniyaNewsCards" />
		<DaiseikoAcademy :items="cardStore.kompaniyaDaisekoCards" />
		<LineSalonsClinics :items="cardStore.Kompaniya" :class="bgPanelClass"/>
		<HomeCareProducts :items="cardStore.homeCareProducts" />
		<WeeksPopularLocations :items="cardStore.kompaniyaWeeksPopularLocations" />
		<FeedbackWithMap />
	</div>
</template>


<script>
import { ref } from 'vue';
import TopMenu from '@/components/TopMenu.vue'
import KompaniyaBrend1 from '@/components/KompaniyaBrend1.vue'
import KompaniyaNews from '@/components/KompaniyaNews.vue'
import DaiseikoAcademy from '@/components/DaiseikoAcademy.vue'
import LineSalonsClinics from '@/components/LineSalonsClinics.vue'
import HomeCareProducts from '@/components/HomeCareProducts.vue'
import WeeksPopularLocations from '@/components/WeeksPopularLocations.vue'
import FeedbackWithMap from '@/components/FeedbackWithMap.vue'

import { useCardStore } from '@/store/store.js';

export default {
	name: 'Kompaniya',
	data() {
		return {
			menuItems: [
				{ name: 'Forlle’d', link: '/kompaniya' },
				{ name: 'Nimue', link: '/kompaniya/nimue' },
			],
			activeItem: 'Forlle’d',
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
		KompaniyaBrend1,
		TopMenu,
		KompaniyaNews,
		DaiseikoAcademy,
		LineSalonsClinics,
		HomeCareProducts,
		WeeksPopularLocations,
		FeedbackWithMap,
	}
};
</script>

<style scoped></style>
