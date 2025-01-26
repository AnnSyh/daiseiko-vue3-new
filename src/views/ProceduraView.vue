<template>
	<div>

		<div class="block panel panel-theme-image ec-split-image">
			<div class="panel_background-image absolute inset-0 z-0 bg-no-repeat bg-center bg-cover bg-fixed"
				style="background-image:url('/public/images/stop-14-1_resize_w2500_h.webp');"></div>
			<div class="panel_mask gradient"
				style="background:linear-gradient(360deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 40%, rgba(255,255,255,0) 100%);opacity:1;">
			</div>
			<div class="relative block-overflow  pt-16 pb-16">
				<div class="container text-[#000000]">

					<BreadCrumbs 	:menuItems="menuItems" :activeItem="activeItem" 
									:textColor="textColor" :textHoverColor="textHoverColor"
					/>
					<ProceduraDescription />

				</div>
			</div>
		</div>

		<ProceduraFeatures />
		<ProceduraWhatTheySay />
		<ProceduraRecommendedHomeCare />
		<NimueFeedback :items="dataFeedback" :class="bgPanelClass"/>

	</div>

</template>

<script>
import BreadCrumbs from '@/components/BreadCrumbs.vue';
import ProceduraDescription from '@/components/ProceduraDescription.vue';
import ProceduraFeatures from '@/components/ProceduraFeatures.vue';
import NimueFeedback from '@/components/NimueFeedback.vue';
import ProceduraWhatTheySay from '@/components/ProceduraWhatTheySay.vue';
import ProceduraRecommendedHomeCare from '@/components/ProceduraRecommendedHomeCare.vue';



export default {
	name: 'ProceduraView',
	data() {
		return {
			dataArray: [
				{
					id: '1',
					title: 'ДАЙСЭЙКО',
					imgSrc: '/images/group-12-1.png',
					content: 'Эксклюзивный дистрибьютор на территории России профессиональных космецевтических брендов</p><h3 class="tt-h"><a rel="noopener noreferrer nofollow" href="https://daiseiko.ru/kompaniya/"><em>Forlle’d</em></a> - Нано-космецевтика. Япония</h3><h3 class="tt-h"><a rel="noopener noreferrer nofollow" href="https://daiseiko.ru/kompaniya/nimue/"><em>Nimue</em></a><em> </em>- Дерма-космецевтика. ЮАР</h3>',
					btnhref: '#',
					btnText: 'Перейти',
					direction: ''
				},
				{
					id: '2',
					title: 'Академия Дайсэйко',
					imgSrc: '/images/group-14.png',
					content: '– непрерывная система обучения от базовых программ до массажных техник. Полноценный пакет учебных материалов и дипломов. Возможны форматы: выездное, в Академия Дайсэйко, онлайн тренинги.',
					btnhref: '#',
					btnText: 'Перейти',
					direction: 'direction-rtl'
				},
				{
					id: '3',
					title: '',
					imgSrc: '/images/group-15.png',
					content: '<div  data-aos="slide-right" class="mb-4 text-xl sm:text-2xl font-medium block-text js_wysiwyg_d24_t1737275093653_r28 aos-init aos-animate" ><h4 class="tt-h"><a rel="noopener noreferrer nofollow" href="https://daiseiko.ru/kompaniya/"><em>Forlled</em> </a><br>Японский Нано- космецевтический бренд №1</h4></div><div  data-aos="slide-right" class="description mb-6 block-text js_wysiwyg_d24_t1737275093654_r57 aos-init aos-animate" ><h4 class="tt-h"><a target="_blank" rel="noopener noreferrer nofollow" href="https://daiseiko.ru/kompaniya/nimue/"><em>Nimue</em></a><em> </em>- </h4><h4 class="tt-h"><strong>Дерма-космецевтика. ЮАР</strong></h4></div>',
					btnhref: '#',
					btnText: 'Подробно о брендах',
					direction: ''
				},
				{
					id: '4',
					title: 'Сервис',
					imgSrc: '/images/group-16.png',
					content: 'Клиентоориентированная компания, способная подстраиваться под запросы региона и аудитории. Расширенная маркетинговая и мотивационные программы.  Бонусы, Дни бренда, кабинет косметолога и витрина «под ключ».',
					btnhref: '#',
					btnText: 'Подробно',
					direction: 'direction-rtl'
				},
				{
					id: '5',
					title: 'Эффективность',
					imgSrc: '/images/group-17.png',
					content: '<h4 class="tt-h">ДАЙСЭЙКО<strong>&nbsp;</strong></h4><p class="tt-p" style="text-align: right">‣ работают на уровне дермы без инъекций<br>‣ нет «синдрома отмены»<br>‣ стабильно высокое качество и безопасность продукции<br>‣ высокая результативность и экономичность расходования<br>‣ низкий расход и себестоимость<br>‣ гарантированный результат, что обеспечивает возврат клиентов и рост бизнеса<br>‣ WOW эффекты от первой процедуры</p>',
					btnhref: '#',
					btnText: 'Перейти',
					direction: ''
				},
				{
					id: '6',
					title: 'ДАЙСЭЙКО',
					imgSrc: '/images/group-18.png',
					content: '<p class="tt-p">от создания формулы до полного цикла производства с запатентованными технологиями</p><h3 class="tt-h"><a target="_blank" rel="noopener noreferrer nofollow" href="https://daiseiko.ru/kompaniya/"><em>Forlle’d</em></a> - Нано-космецевтика. Япония</h3><h3 class="tt-h"><a target="_blank" rel="noopener noreferrer nofollow" href="https://daiseiko.ru/kompaniya/nimue/"><em>Nimue</em></a> - Дерма-космецевтика. ЮАР</h3>',
					btnhref: '#',
					btnText: 'Перейти',
					direction: 'direction-rtl'
				},
				{
					id: '7',
					title: 'Каталог продукции',
					imgSrc: '/images/group-19.png',
					content: '<p class="tt-p">Forlle’d – современные наукоёмкие составы продукции и традиционные японские рецепты.&nbsp;</p><p class="tt-p">Универсальный кейс профессиональных процедур для салонов, клиник и Спа, идеально работающий с массажными и аппаратными технологиями.&nbsp;&nbsp;</p><p class="tt-p">Полноценная линейка препаратов для домашнего ухода.</p>',
					btnhref: '#',
					btnText: 'Перейти',
					direction: ''
				},
				{
					id: '8',
					title: 'Офисы',
					subtitle: '*мы работаем только с юридическими лицами',
					imgSrc: '/images/group-20.png',
					content: '<div for="repeater" data-aos="slide-left" class="description mb-6 block-text js_wysiwyg_d24_t1737275093670_r19 aos-init aos-animate"><h4 class="tt-h">Москва&nbsp;</h4><p class="tt-p">Улица Большая Полянка 50/1 строение 4<br><a target="_blank" rel="noopener noreferrer nofollow" href="tel:+7(495)225-94-57">+7(495)225-94-57</a>, <a target="_blank" rel="noopener noreferrer nofollow" href="tel:+7(495)225-94-58">+7(495)225-94-58</a><br></p><h5 class="tt-h">Санкт-Петербург&nbsp;</h5><p class="tt-p">Набережная канала Грибоедова 56-58<br><a target="_blank" rel="noopener noreferrer nofollow" href="tel:+7(812)244-79-19">+7(812)244-79-19</a>, <a target="_blank" rel="noopener noreferrer nofollow" href="tel:+7(812)644-42-12">+7(812)644-42-12</a></p></div>',
					btnhref: '#',
					direction: 'direction-rtl'
				},
			],
			menuItems: [
				{ name: 'Главная', link: '/' },
				{ name: 'Академия', link: '/akademiya-daiseiko' },
				{ name: 'Процедуры', link: '/procedury' },
			],
			textColor:'text-[#6b7280]',
			textHoverColor:'hover:!text-black',
			bgPanelClass: 'panel-theme-white',
			dataFeedback: [
				{
					id: 1,
					content: '<div class="fs-2 mb-4  block-text"><p class="tt-p">Обратная связь</p></div> <div class="fs-5  block-text js_wysiwyg_d80_t1737643700612_r38" ><p class="tt-p">Мы вас приглашаем на процедуры в наши салоны-партнеры. Выбрать удобный для вас салон вы можете в разделе Локации</p>'
				}
			]
		};
	},
	computed: {},
	components: {
		BreadCrumbs,
		ProceduraDescription,
		ProceduraFeatures,
		NimueFeedback,
		ProceduraWhatTheySay,
		ProceduraRecommendedHomeCare
	},
}
</script>
