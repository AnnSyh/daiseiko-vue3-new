<template>
	<div>
		<TopMenu
			:menuItems="menuItems" 
			:activeItem="activeItem" 
			@itemSelected="handleItemSelected"
		/>
		<ProfessionalnayaAbout/>
		<ProfessionalnayaFilter/>
	</div>
</template>


<script>
import { ref } from 'vue';
import TopMenu from '@/components/TopMenu.vue';
import ProfessionalnayaAbout from '@/components/ProfessionalnayaAbout.vue';
import ProfessionalnayaFilter from '@/components/ProfessionalnayaFilter.vue';

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
		TopMenu,
		ProfessionalnayaAbout,
		ProfessionalnayaFilter,
	}
};
</script>

<style scoped></style>
