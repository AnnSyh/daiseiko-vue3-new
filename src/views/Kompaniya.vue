<template>
	<div class="about">
		<!-- <h1>Kompaniya page</h1> -->
		<KompaniyaMenu/>
		<KompaniyaBrend1/>
		<KompaniyaNews/>
		<DaiseikoAcademy/>
		<LineSalonsClinics/>
		<HomeCareProducts/>
		<WeeksPopularLocations/>
		<FeedbackWithMap/>
	</div>
</template>


<script>
import { ref } from 'vue';
import KompaniyaMenu from '@/components/KompaniyaMenu.vue'
import KompaniyaBrend1 from '@/components/KompaniyaBrend1.vue'
import KompaniyaNews from '@/components/KompaniyaNews.vue'
import DaiseikoAcademy from '@/components/DaiseikoAcademy.vue'
import LineSalonsClinics from '@/components/LineSalonsClinics.vue'
import HomeCareProducts from '@/components/HomeCareProducts.vue'
import WeeksPopularLocations from '@/components/WeeksPopularLocations.vue'
import FeedbackWithMap from '@/components/FeedbackWithMap.vue'

export default {
	setup() {
		const isFilterOpen = ref(false);

		const toggleFilter = () => {
			isFilterOpen.value = !isFilterOpen.value;
		};


		return {
			isFilterOpen,
			toggleFilter,
		};
	},
	components: { 
		KompaniyaBrend1, 
		KompaniyaMenu,
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
