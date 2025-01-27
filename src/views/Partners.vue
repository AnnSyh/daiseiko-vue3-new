<template>
	<div>
		<PartnersAbout />
		<LineSalonsClinics :items="cardStore.LineSalonsClinics" :class="bgPanelClass" />
		<PartnersFilter :items="cardStore.PartnersFilter"/>
	</div>
</template>


<script>
import { ref } from 'vue';
import TopMenu from '@/components/TopMenu.vue';
import PartnersAbout from '@/components/PartnersAbout.vue';
import PartnersFilter from '@/components/PartnersFilter.vue';
import ProfessionalnayaFilter from '@/components/ProfessionalnayaFilter.vue';
import LineSalonsClinics from '@/components/LineSalonsClinics.vue';

import { useCardStore } from '@/store/store.js';

export default {
	name: 'Partners',
	data() {
		return {
			bgPanelClass: 'panel-theme-inverse',
		};
	},
	methods: {},
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
		PartnersAbout,
		PartnersFilter,
		ProfessionalnayaFilter,
		LineSalonsClinics,
	}
};
</script>

<style scoped></style>
