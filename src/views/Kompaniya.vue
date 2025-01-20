<template>
	<div class="about">
		<!-- <h1>Kompaniya page</h1> -->
		<TopMenu
			:menuItems="menuItems" 
			:activeItem="activeItem" 
			@itemSelected="handleItemSelected"
		/>
		<KompaniyaBrend1/>
		<KompaniyaNews :items="cardsNews"/>
		<DaiseikoAcademy :items="cardsDaiseko"/>
		<LineSalonsClinics/>
		<HomeCareProducts/>
		<WeeksPopularLocations/>
		<FeedbackWithMap/>
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

export default {
	name:'Kompaniya',
	data() {
		return {
		menuItems: [
			{ name: 'Forlle’d', link: '/kompaniya' },
			{ name: 'Nimue', link: '/kompaniya/nimue' },
		],
		activeItem: 'Forlle’d', 
		cardsNews: [
				{ 
					id: 1, 
					data:'14.11.2024',
					title: 'Новогодние Наборы Forlle’d и Nimue', 
					description: 'Эксклюзивные новинки юбилейного года, которые поступят в продажу в конце года, и бестселлеры брендов.',
				},
				{ 
					id: 2, 
					data:'25.09.2024',
					title: 'Празднуем 30 лет бренда Nimue и дарим подарки', 
					description: 'Осень — идеальное время для заботы о коже! Пилинги Nimue— это smart-технологии, mix & match, и в каждой из них: Effective & Intelligent. Love your skin!',
				},
				{ 
					id: 3, 
					data:'17.09.2024',
					title: 'Старт специальных предложений', 
					description: 'С сегодняшнего дня! ЮБИЛЕЙНОЕ предложение',
				},
			],
			cardsDaiseko:[
				{
					id: 1,
					title: 'Процедуры',
					src: '/images/stop-14.webp',
					description: 'Салонные и клинические процедуры восстанавливают структуру кожи, стимулируют синтез коллагена и эластина, обеспечивают непревзойденную антиоксидантную защиту.',
				},
				{
					id: 2,
					title: 'Расписание Академии Дайсэйко',
					src: '/images/stop-38.webp',
					description: 'Обучение проводится на препаратах Forlle’d. Профессиональная линейка препаратов Forlle’d уникальная и единственная в мире, основанная на разработке, удостоенной Нобелевской Премии.',
				},
				{
					id: 3,
					title: 'Аксессуары косметолога',
					src: '/images/stop-15.webp',
					description: 'Брендированные аксессуары для комплектации и работы в кабинете косметолога и для домашнего применения.',
				},
				{
					id: 4,
					title: 'Аксессуары косметолога',
					src: '/images/stop-15.webp',
					description: 'Брендированные аксессуары для комплектации и работы в кабинете косметолога и для домашнего применения.',
				},
			],
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
