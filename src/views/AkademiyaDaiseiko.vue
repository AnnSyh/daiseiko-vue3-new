<template>
	<div>
		<TopMenu :menuItems="menuItems" :activeItem="activeItem" @itemSelected="handleItemSelected" />
		<ADFirstBlock />
		<AkademiyaDaiseikoTypesOfTraiding />
		<AkademiyaDaiseikoTeachers />
		<Calendar :title="title"/>
		<ADSpecialConditions />

		<!-- Обратная связь c формой справа -->
		<NimueFeedback :items="dataFeedback" :class="bgPanelClass" />


	</div>
</template>

<script>
import { ref } from 'vue';
import TopMenu from '@/components/TopMenu.vue'
import ADFirstBlock from '@/components/ADFirstBlock.vue'
import AkademiyaDaiseikoTypesOfTraiding from '@/components/ADTypesOfTraiding.vue'
import AkademiyaDaiseikoTeachers from '@/components/ADTeachers.vue'
import Calendar from '@/components/Calendar.vue'
import NimueFeedback from '@/components/NimueFeedback.vue'
import ADSpecialConditions from '@/components/ADSpecialConditions.vue'


export default {
	name: 'AkademiyaDaiseiko',
	data() {
		return {
			menuItems: [
				{ name: 'Академия Дайсэйко', link: '/akademiya-daiseiko' },
				{ name: 'Условия обучения', link: '/akademiya-daiseiko/usloviya-obucheniya' },
				{ name: 'Процедуры', link: '/procedury' },
			],
			activeItem: 'Академия Дайсэйко',
			title:'Расписание семинаров и мастерклассов',
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
			bgPanelClass: 'panel-theme-inverse',
			dataFeedback: [
				{
					id: 1,
					content: '<div class="fs-2 mb-4  block-text" ><h2 class="tt-h">Обратная связь с Академией Daiseiko</h2></div> <div class="fs-5  block-text" ><p class="tt-p">если у вас есть вопросы по работе академии или программам, пожалуйста воспользуйтесь контактными данными или заполните форму  обратной связи</p><ul class="tt-ul"><li><p class="tt-p">&nbsp;&nbsp;Москва <a target="true" rel="noopener noreferrer nofollow" href="tel:+7(495)225-94-57">+7(495)225-94-57</a></p></li><li><p class="tt-p">&nbsp;&nbsp;Санкт-Петербург<a target="true" rel="noopener noreferrer nofollow" href="tel:+7(812)244-79-19"> +7(812)244-79-19</a></p></li><li><p class="tt-p">&nbsp;&nbsp;базовые клиники субдистрибьюторов</p></li></ul></div>'
				}
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
		ADFirstBlock,
		AkademiyaDaiseikoTypesOfTraiding,
		AkademiyaDaiseikoTeachers,
		Calendar,
		NimueFeedback,
		ADSpecialConditions,
	}
};
</script>

<style scoped></style>
