<template>
	<div>
		<TopMenu :menuItems="menuItems" :activeItem="activeItem" @itemSelected="handleItemSelected" />
		<!-- <NovostiList :items="dataArrayNews" /> -->
	</div>
</template>

<script>
import { ref } from 'vue';
import TopMenu from '@/components/TopMenu.vue'
// import NovostiList from '@/components/NovostiList.vue'


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
			dataArrayNews: [
				{
					id: 1,
					data: '14.11.2024',
					title: 'Новогодние Наборы Forlle’d и Nimue',
					imgSrc: '/images/forlled-anons-bez-ceny_resize_w400_h400.webp',
					content: 'Эксклюзивные новинки юбилейного года, которые поступят в продажу в конце года, и бестселлеры брендов.',
					btnhref: '/article/novost/'
				},
				{
					id: 2,
					data: '25.09.2024',
					title: 'Празднуем 30 лет бренда Nimue и дарим подарки',
					imgSrc: '/images/4ce89d76-6e24-4064-a10e-c8e2d95977fe_resize_w400_h400.webp',
					content: 'Осень — идеальное время для заботы о коже! Пилинги Nimue— это smart-технологии, mix & match, и в каждой из них: Effective & Intelligent. Love your skin!',
					btnhref: '/article/novost/'
				},
				{
					id: 3,
					data: '17.09.2024',
					title: 'Старт специальных предложений',
					imgSrc: '/images/9c93b929-8a87-4bf2-8c03-845f19050a06_resize_w400_h400.webp',
					content: 'С сегодняшнего дня! ЮБИЛЕЙНОЕ предложение',
					btnhref: '/article/novost/'
				},
				{
					id: 4,
					data: '14.11.2024',
					title: 'Новогодние Наборы Forlle’d и Nimue',
					imgSrc: '/images/forlled-anons-bez-ceny_resize_w400_h400.webp',
					content: 'Эксклюзивные новинки юбилейного года, которые поступят в продажу в конце года, и бестселлеры брендов.',
					btnhref: '/article/novost/'
				},
				{
					id: 5,
					data: '25.09.2024',
					title: 'Празднуем 30 лет бренда Nimue и дарим подарки',
					imgSrc: '/images/4ce89d76-6e24-4064-a10e-c8e2d95977fe_resize_w400_h400.webp',
					content: 'Осень — идеальное время для заботы о коже! Пилинги Nimue— это smart-технологии, mix & match, и в каждой из них: Effective & Intelligent. Love your skin!',
					btnhref: '/article/novost/'
				},
				{
					id: 6,
					data: '17.09.2024',
					title: 'Старт специальных предложений',
					imgSrc: '/images/9c93b929-8a87-4bf2-8c03-845f19050a06_resize_w400_h400.webp',
					content: 'С сегодняшнего дня! ЮБИЛЕЙНОЕ предложение',
					btnhref: '/article/novost/'
				},

			]
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
		TopMenu,
		// NovostiList,
	}
};
</script>

<style scoped></style>
