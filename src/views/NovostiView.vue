<template>
	<div>
		<TopMenu :menuItems="menuItems" :activeItem="activeItem" @itemSelected="handleItemSelected" />
		<!-- <h1>NovostiView</h1> -->
		<div class="block panel panel-theme-dark mb-16">
			<div class="panel_background-image absolute inset-0 z-0 bg-no-repeat bg-center bg-cover bg-fixed"></div>  
			<div class="panel_mask gradient"
				style="background:linear-gradient(191deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%);opacity:0.3;"
				>
			</div>   
			<div class="relative pt-16 pb-4">
				<div class="container mx-auto px-4 sm:px-6 lg:px-8 relative">
					<div class="mx-auto text-center max-w-full">
						<div class="mb-4">
							<div class="mb-4 fs-2 font-medium block-text">
								<p class="tt-p">Обучение</p>
							</div> 
							<div class="fs-5 text-secondary block-text">
								<p class="tt-p">
									В разделе представлены даты и содержание мастер-классов и вебинаров
								</p>
							</div>
						</div>  
					</div>
				</div>
			</div>  
		</div>

		<Calendar :title="title"/>

	</div>
</template>

<script>
import { ref } from 'vue';
import TopMenu from '@/components/TopMenu.vue'
import Calendar from '@/components/Calendar.vue'



export default {
	name: 'NovostiView',
	data() {
		return {
		menuItems: [
			{ name: 'Новости', link: '/novosti' },
			{ name: 'Обучение', link: '/novosti/events/' },
		],
		activeItem: 'Обучение', 
		title:'Календарь',
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
		Calendar,
	},
}
</script>
