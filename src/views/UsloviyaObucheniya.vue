<template>
	<div>
		<TopMenu :menuItems="menuItems" :activeItem="activeItem" @itemSelected="handleItemSelected" />

		<UsloviyaObucheniyaFirstBlock />
		<UsloviyaObucheniyaContent  :items="dataArray"/>
		<UsloviyaObucheniyaPersonalCertificate />
		<UsloviyaObucheniyaEducationalMaterials :items="dataEducationalMaterials"/>
		<UsloviyaObucheniyaAccessories/>
		<!-- Обратная связь c формой справа -->
		<NimueFeedback :items="dataFeedback" :class="bgPanelClass" />


	</div>
</template>

<script>
import TopMenu from '@/components/TopMenu.vue'
import UsloviyaObucheniyaFirstBlock from '@/components/UsloviyaObucheniyaFirstBlock.vue'
import UsloviyaObucheniyaContent from '@/components/UsloviyaObucheniyaContent.vue'
import UsloviyaObucheniyaPersonalCertificate from '@/components/UsloviyaObucheniyaPersonalCertificate.vue'
import NimueFeedback from '@/components/NimueFeedback.vue'
import UsloviyaObucheniyaEducationalMaterials from '@/components/UsloviyaObucheniyaEducationalMaterials.vue'
import UsloviyaObucheniyaAccessories from '@/components/UsloviyaObucheniyaAccessories.vue'



export default {
	name: 'UsloviyaObucheniya',
	data() {
		return {
			menuItems: [
				{ name: 'Академия Дайсэйко', link: '/akademiya-daiseiko' },
				{ name: 'Условия обучения', link: '/akademiya-daiseiko/usloviya-obucheniya' },
				{ name: 'Процедуры', link: '/procedury' },
			],
			activeItem: 'Условия обучения',
			dataArray: [
				{
					id:'1',
					title:'Обучение косметологов, врачей и эстетистов',
					imgSrc:'../../public/images/stop-38_resize_w927_h556.jpg',
					content:'<ul class="tt-ul"><li><p class="tt-p">обучение проводится по предварительной записи&nbsp;</p></li><li><p class="tt-p">обучение делится на две части: теоретическую и практическую</p></li><li><p class="tt-p">теоретическая часть проводится с использованием базовой презентации и длится 2,5 -3,0 часа</p></li><li><p class="tt-p">обучение тематическим семинарам и практикам проводится на платной основе</p></li><li><p class="tt-p">по окончании обучения выдается сертификат</p></li></ul>',
					direction:''
				},
				{
					id:'2',
					title:'Практическая часть',
					imgSrc:'../../public/images/stop-1_resize_w927_h556.webp',
					content:'<ul class="tt-ul"><li><p class="tt-p">проводится интерактивно с отработкой процедур</p></li><li><p class="tt-p">с вовлечением в процесс обучающихся</p></li><li><p class="tt-p">в рамках практической части мастер-класса и отработки процедур у специалистов есть возможность самостоятельно под руководством технолога отработать все этапы процедуры и максимально погрузиться в текстуры, расход, техники и методики космецевтики, а также побывать в роли клиента, наслаждаясь уходом и почувствовать на себе эффект от препаратов и салонных программ</p></li></ul>',
					direction:'direction-rtl'
				},
				{
					id:'3',
					title:'Обучение администраторов',
					imgSrc:'../../public/images/dessange1-1_resize_w927_h556.webp',
					content:'<ul class="tt-ul"><li><p class="tt-p">проводится на территории Академии Дайсэйко</p></li><li><p class="tt-p">обучение администраторов проводят клиентские менеджеры</p></li><li><p class="tt-p">в ходе обучения администраторы получают общие знания о марке, знакомятся с ассортиментом для домашнего ухода, обучаются навыкам продаж продукции, знакомятся с системой мотивации</p></li></ul>',
					direction:''
				},
				{
					id:'4',
					title:'Обучение конечных потребителей',
					subtitle:'*в формате индивидуальных консультаций по подбору средств домашнего ухода при приобретении продукции в официальном интернет-магазине по записи через менеджера магазина',
					imgSrc:'../../public/images/stop-24_resize_w800_h.webp',
					content:'<div  class="description mb-6  block-text " ><ul class="tt-ul"><li><p class="tt-p">бьюти блогеры</p></li><li><p class="tt-p">публичные личности</p></li><li><p class="tt-p">агенты влияния</p></li><li><p class="tt-p">байеры сетевых салонов и клиник</p></li></ul><p class="tt-p"></p><h4 class="tt-h">В ходе обучения:</h4><ul class="tt-ul"><li><p class="tt-p">проводится диагностика</p></li><li><p class="tt-p">делается показательная процедура по типу кожи</p></li><li><p class="tt-p">выдается лист назначения</p></li><li><p class="tt-p">проводится знакомство с маркой, ее конкурентными преимуществами</p></li><li><p class="tt-p">обсуждаются условия сотрудничества</p></li></ul></div>',
					direction:'direction-rtl'
				},
			],
			dataEducationalMaterials: [
				{
					id:'1',
					title:'Учебные материалы для базового обучения',
					content:'<ul class="tt-ul"><li><p class="tt-p">Учебник</p></li><li><p class="tt-p">Базовая обучающая видео-презентация</p></li><li><p class="tt-p">Процедурная книга</p></li><li><p class="tt-p">Каталог продукции</p></li><li><p class="tt-p">Прайс-лист + расчет окупаемости</p></li><li><p class="tt-p">Расходные материалы для практической части семинара</p></li><li><p class="tt-p">Буклеты/фото/видеоматериалы/пробники</p></li></ul>',
					imgSrc:'../../public/images/stop-20_resize_w400_h400.webp',
					btnName:'Оставить заявку',
					btnhref:'#block-6'
				},
				{
					id:'2',
					title:'Кейсы для повышения квалификации',
					content:'<ul class="tt-ul"><li><p class="tt-p">Обучение новинкам</p></li><li><p class="tt-p">Обучающие семинары с привлечением сторонних экспертов</p></li></ul>',
					imgSrc:'../../public/images/stop-18_resize_w400_h400.webp',
					btnName:'Оставить заявку',
					btnhref:'#block-6'
				},
				{
					id:'3',
					title:'Тематические семинары',
					content:'<ul class="tt-ul"><li><p class="tt-p">Обучение технике массажа GuaSha на препаратах Forlle"d</p></li><li><p class="tt-p">Техника японского массажа ре-моделирования лица</p></li></ul>',
					imgSrc:'../../public/images/stop-16_resize_w400_h400.webp',
					btnName:'Оставить заявку',
					btnhref:'#block-6'
				},
			
			],
			bgPanelClass: 'panel-theme-inverse',
			dataFeedback: [
				{
					id: 1,
					content: '<div class="fs-2 mb-4  block-text">Форма обратной связи</div> <div class="fs-5  block-text" ><p class="tt-p">Чтобы связаться с менеджерами нашего офиса, оставьте контактные данные и ваш вопрос. <br>Мы свяжемся с вами в течение 3 рабочих дней.</p></div>'
				}
			]			
		};
	},
	methods: {
		handleItemSelected(item) {
			this.activeItem = item.name;
		},
	},
	components: {
		TopMenu,
		UsloviyaObucheniyaFirstBlock,
		UsloviyaObucheniyaContent,
		UsloviyaObucheniyaPersonalCertificate,
		NimueFeedback,
		UsloviyaObucheniyaEducationalMaterials,
		UsloviyaObucheniyaAccessories,
	}
};
</script>

<style scoped></style>
