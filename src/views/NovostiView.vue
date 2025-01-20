<template>
	<div>
		<TopMenu
			:menuItems="menuItems" 
			:activeItem="activeItem" 
			@itemSelected="handleItemSelected"
		/>
		<h1>NovostiView</h1>

	</div>
</template>

<script>
import { ref } from 'vue';
import TopMenu from '@/components/TopMenu.vue'



export default {
	name: 'NovostiView',
	data() {
		return {
		menuItems: [
			{ name: 'Новости', link: '/novosti' },
			{ name: 'Обучение', link: '/novosti/events/' },
		],
		activeItem: 'Обучение', 
		};
	},
	methods: {
		handleItemSelected(item) {
			this.activeItem = item.name; 
		},
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
	computed: {},
	components: {
		TopMenu,
	},
}
</script>
