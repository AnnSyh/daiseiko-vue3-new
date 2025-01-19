<template>
	<div class="about">
		<ProfessionalnayaLiniyaMenu/>
		<ProfessionalnayaAbout/>
		<ProfessionalnayaFilter/>
	</div>
</template>


<script>
import { ref } from 'vue';
import ProfessionalnayaLiniyaMenu from '@/components/ProfessionalnayaLiniyaMenu.vue';
import ProfessionalnayaAbout from '@/components/ProfessionalnayaAbout.vue';
import ProfessionalnayaFilter from '@/components/ProfessionalnayaFilter.vue';

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
		ProfessionalnayaLiniyaMenu,
		ProfessionalnayaAbout,
		ProfessionalnayaFilter,
	}
};
</script>

<style scoped></style>
