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

			],
			// cardsDaiseko:[
			// 	{
			// 		id: 1,
			// 		title: 'Гидродепонирование и послойное восстановление кожи',
			// 		src: '/images/stop-9_resize_w800_h.webp',
			// 		description: 'Программа, основанная на высокотехнологичной профессиональной косметике Forlle’d, обеспечивает естественную регенерацию кожи, создавая и поддерживая ее здоровье.',
			// 		btnName:'Подробнее о процедуре',
			// 	},
			// 	{
			// 		id: 2,
			// 		title: 'Лифтинг-программа объемного 3D-моделирования',
			// 		src: '/images/stop-38.webp',
			// 		description: 'Комплексное воздействие на признаки старения кожи. Процедура применяется в борьбе с признаками птоза.',
			// 		btnName:'Подробнее о процедуре',
			// 	},
			// 	{
			// 		id: 3,
			// 		title: 'Антиоксидантная защита на основе микронизированной платины',
			// 		src: '/images/stop-15.webp',
			// 		description: 'Рекомендуется для устранения негативного воздействия инсоляции, курения,  употребления алкоголя, длительного приема медикаментов, сильных эмоциональных  стрессов, диет, длительного проживания в регионах с загрязненной окружающей средой. ',
			// 		btnName:'Подробнее о процедуре',
			// 	},
			// 	{
			// 		id: 4,
			// 		title: 'Кислородная терапия и активация тканевого дыхания',
			// 		src: '/images/stop-15.webp',
			// 		description: 'Косметическая процедура направлена на существенное омоложение кожи лица, устранение и коррекцию морщин.',
			// 		btnName:'Подробнее о процедуре',
			// 	},
			// ],

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
