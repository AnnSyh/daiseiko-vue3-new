import { createPinia, defineStore } from 'pinia';

export const useCardStore = defineStore('card', {
	state: () => ({
		indexCards: [
			{
				id:'1',
				title:'ДАЙСЭЙКО',
				imgSrc:'/images/group-12-1.png',
				content:'Эксклюзивный дистрибьютор на территории России профессиональных космецевтических брендов</p><h3 class="tt-h"><a rel="noopener noreferrer nofollow" href="https://daiseiko.ru/kompaniya/"><em>Forlle’d</em></a> - Нано-космецевтика. Япония</h3><h3 class="tt-h"><a rel="noopener noreferrer nofollow" href="https://daiseiko.ru/kompaniya/nimue/"><em>Nimue</em></a><em> </em>- Дерма-космецевтика. ЮАР</h3>',
				btnhref:'#',
				btnText:'Перейти',
				direction:''
			},
			{
				id:'2',
				title:'Академия Дайсэйко',
				imgSrc:'/images/group-14.png',
				content:'– непрерывная система обучения от базовых программ до массажных техник. Полноценный пакет учебных материалов и дипломов. Возможны форматы: выездное, в Академия Дайсэйко, онлайн тренинги.',
				btnhref:'#',
				btnText:'Перейти',
				direction:'direction-rtl'
			},
			{
				id:'3',
				title:'',
				imgSrc:'/images/group-15.png',
				content:'<div  data-aos="slide-right" class="mb-4 text-xl sm:text-2xl font-medium block-text js_wysiwyg_d24_t1737275093653_r28 aos-init aos-animate" data-v-4e89a358=""><h4 class="tt-h"><a rel="noopener noreferrer nofollow" href="https://daiseiko.ru/kompaniya/"><em>Forlled</em> </a><br>Японский Нано- космецевтический бренд №1</h4></div><div  data-aos="slide-right" class="description mb-6 block-text js_wysiwyg_d24_t1737275093654_r57 aos-init aos-animate" data-v-4e89a358=""><h4 class="tt-h"><a target="_blank" rel="noopener noreferrer nofollow" href="https://daiseiko.ru/kompaniya/nimue/"><em>Nimue</em></a><em> </em>- </h4><h4 class="tt-h"><strong>Дерма-космецевтика. ЮАР</strong></h4></div>',
				btnhref:'#',
				btnText:'Подробно о брендах',
				direction:''
			},
			{
				id:'4',
				title:'Сервис',
				imgSrc:'/images/group-16.png',
				content:'Клиентоориентированная компания, способная подстраиваться под запросы региона и аудитории. Расширенная маркетинговая и мотивационные программы.  Бонусы, Дни бренда, кабинет косметолога и витрина «под ключ».',
				btnhref:'#',
				btnText:'Подробно',
				direction:'direction-rtl'
			},
			{
				id:'5',
				title:'Эффективность',
				imgSrc:'/images/group-17.png',
				content:'<h4 class="tt-h">ДАЙСЭЙКО<strong>&nbsp;</strong></h4><p class="tt-p" style="text-align: right">‣ работают на уровне дермы без инъекций<br>‣ нет «синдрома отмены»<br>‣ стабильно высокое качество и безопасность продукции<br>‣ высокая результативность и экономичность расходования<br>‣ низкий расход и себестоимость<br>‣ гарантированный результат, что обеспечивает возврат клиентов и рост бизнеса<br>‣ WOW эффекты от первой процедуры</p>',
				btnhref:'#',
				btnText:'Перейти',
				direction:''
			},	
			{
				id:'6',
				title:'ДАЙСЭЙКО',
				imgSrc:'/images/group-18.png',
				content:'<p class="tt-p">от создания формулы до полного цикла производства с запатентованными технологиями</p><h3 class="tt-h"><a target="_blank" rel="noopener noreferrer nofollow" href="https://daiseiko.ru/kompaniya/"><em>Forlle’d</em></a> - Нано-космецевтика. Япония</h3><h3 class="tt-h"><a target="_blank" rel="noopener noreferrer nofollow" href="https://daiseiko.ru/kompaniya/nimue/"><em>Nimue</em></a> - Дерма-космецевтика. ЮАР</h3>',
				btnhref:'#',
				btnText:'Перейти',
				direction:'direction-rtl'
			},	
			{
				id:'7',
				title:'Каталог продукции',
				imgSrc:'/images/group-19.png',
				content:'<p class="tt-p">Forlle’d – современные наукоёмкие составы продукции и традиционные японские рецепты.&nbsp;</p><p class="tt-p">Универсальный кейс профессиональных процедур для салонов, клиник и Спа, идеально работающий с массажными и аппаратными технологиями.&nbsp;&nbsp;</p><p class="tt-p">Полноценная линейка препаратов для домашнего ухода.</p>',
				btnhref:'#',
				btnText:'Перейти',
				direction:''
			},										
			{
				id:'8',
				title:'Офисы',
				subtitle:'*мы работаем только с юридическими лицами',
				imgSrc:'/images/group-20.png',
				content:'<div for="repeater" data-aos="slide-left" class="description mb-6 block-text js_wysiwyg_d24_t1737275093670_r19 aos-init aos-animate"><h4 class="tt-h">Москва&nbsp;</h4><p class="tt-p">Улица Большая Полянка 50/1 строение 4<br><a target="_blank" rel="noopener noreferrer nofollow" href="tel:+7(495)225-94-57">+7(495)225-94-57</a>, <a target="_blank" rel="noopener noreferrer nofollow" href="tel:+7(495)225-94-58">+7(495)225-94-58</a><br></p><h5 class="tt-h">Санкт-Петербург&nbsp;</h5><p class="tt-p">Набережная канала Грибоедова 56-58<br><a target="_blank" rel="noopener noreferrer nofollow" href="tel:+7(812)244-79-19">+7(812)244-79-19</a>, <a target="_blank" rel="noopener noreferrer nofollow" href="tel:+7(812)644-42-12">+7(812)644-42-12</a></p></div>',
				btnhref:'#',
				direction:'direction-rtl'
			},
		],
		kompaniyaNewsCards:[
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
		kompaniyaDaisekoCards:[
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
		homeCareProducts:[
			{
				id: 1,
				title: 'Лосьон для удаления макияжа',
				subtitle: 'Remover for point make-up',
				src: '/images/forlled-hyalogy-remover-for-point-make-up-2-1.webp',
				description: 'Это очищающее средство разработано, в частности, для быстрого снятия макияжа, в том числе водостойкого, с кожи вокруг глаз и губ.',
				articul: '421257',
				ml: '150',
			},
			{
				id: 2,
				title: 'Лосьон для удаления макияжа',
				subtitle: 'Remover for point make-up',
				src: '/images/forlled-hyalogy-remover-for-point-make-up-2-1.webp',
				description: 'Это очищающее средство разработано, в частности, для быстрого снятия макияжа, в том числе водостойкого, с кожи вокруг глаз и губ.',
				articul: '421257',
				ml: '150',
			},
			{
				id: 3,
				title: 'Лосьон для удаления макияжа',
				subtitle: 'Remover for point make-up',
				src: '/images/forlled-hyalogy-remover-for-point-make-up-2-1.webp',
				description: 'Это очищающее средство разработано, в частности, для быстрого снятия макияжа, в том числе водостойкого, с кожи вокруг глаз и губ.',
				articul: '421257',
				ml: '150',
			},
			{
				id: 4,
				title: 'Лосьон для удаления макияжа',
				subtitle: 'Remover for point make-up',
				src: '/images/forlled-hyalogy-remover-for-point-make-up-2-1.webp',
				description: 'Это очищающее средство разработано, в частности, для быстрого снятия макияжа, в том числе водостойкого, с кожи вокруг глаз и губ.',
				articul: '421257',
				ml: '150',
			},			

		],
		kompaniyaWeeksPopularLocations:[
			{
				id: 1,
				title: 'Health & Else',
				src: '/images/dsc-2841-1.webp',
				description: 'Все необходимое для жительницы мегаполиса – в одном месте: бьюти-услуги, косметология, спа, фитнес и ателье.',
				address: 'Леонтьевский пер., 2АС1',
				metro: 'м. Тверская',
			},
			{
				id: 2,
				title: 'Мечты Виктории',
				src: '/images/21-b.webp',
				description: 'С самого первого дня «Мечты Виктории» — это редкое место, где и взрослые, и дети чувствуют себя одинаково желанными гостями, потому что в нашей концепции заложена совершенная формула: пока родители ухаживают за собой, дети весело проводят время в специально оборудованной детской комнате под присмотром заботливой няни',
				address: 'ул. Гиляровского д.44',
				metro: 'м. Проспект мира',
			},
			{
				id: 3,
				title: 'Курорт красоты Biarritz',
				src: '/images/85ab291f.webp',
				description: 'Открывая двери курорта красоты «Biarritz» в Волгограде, вы сможете забыть о проблемах и получить уход самого высокого профессионального уровня.',
				address: 'ул. Мира, д.12',
			},
		],
		dataArrayNews:[
			{
				id:1,
				data:'14.11.2024',
				title:'Новогодние Наборы Forlle’d и Nimue',
				imgSrc:'/images/forlled-anons-bez-ceny_resize_w400_h400.webp',
				content:'Эксклюзивные новинки юбилейного года, которые поступят в продажу в конце года, и бестселлеры брендов.',
				btnhref:'/article/novost/'
			},
			{
				id:2,
				data:'25.09.2024',
				title:'Празднуем 30 лет бренда Nimue и дарим подарки',
				imgSrc:'/images/4ce89d76-6e24-4064-a10e-c8e2d95977fe_resize_w400_h400.webp',
				content:'Осень — идеальное время для заботы о коже! Пилинги Nimue— это smart-технологии, mix & match, и в каждой из них: Effective & Intelligent. Love your skin!',
				btnhref:'/article/novost/'
			},
			{
				id:3,
				data:'17.09.2024',
				title:'Старт специальных предложений',
				imgSrc:'/images/9c93b929-8a87-4bf2-8c03-845f19050a06_resize_w400_h400.webp',
				content:'С сегодняшнего дня! ЮБИЛЕЙНОЕ предложение',
				btnhref:'/article/novost/'
			},
			{
				id:4,
				data:'14.11.2024',
				title:'Новогодние Наборы Forlle’d и Nimue',
				imgSrc:'/images/forlled-anons-bez-ceny_resize_w400_h400.webp',
				content:'Эксклюзивные новинки юбилейного года, которые поступят в продажу в конце года, и бестселлеры брендов.',
				btnhref:'/article/novost/'
			},
			{
				id:5,
				data:'25.09.2024',
				title:'Празднуем 30 лет бренда Nimue и дарим подарки',
				imgSrc:'/images/4ce89d76-6e24-4064-a10e-c8e2d95977fe_resize_w400_h400.webp',
				content:'Осень — идеальное время для заботы о коже! Пилинги Nimue— это smart-технологии, mix & match, и в каждой из них: Effective & Intelligent. Love your skin!',
				btnhref:'/article/novost/'
			},
			{
				id:6,
				data:'17.09.2024',
				title:'Старт специальных предложений',
				imgSrc:'/images/9c93b929-8a87-4bf2-8c03-845f19050a06_resize_w400_h400.webp',
				content:'С сегодняшнего дня! ЮБИЛЕЙНОЕ предложение',
				btnhref:'/article/novost/'
			},
		],
		professionalnayaCards:[
			{
				id:1,
				title:'Очищающая эмульсия',
				subtitle:'P-effect clearance cleansing',
				imgSrc:'/images/forlled-hyalogy-p-effect-clearance-cleansing-200g_resize_w200_h.webp',
				text:'Очищающее средство первой ступени, разработанное специально для кожи, подверженной стрессам и загрязнениям современной городской жизни.',
				articul:'426092',
				gramm:'200',
				btnName:'Подробнее',
				btnHref:'/professionalnaya-liniya/product'
			},
			{
				id:2,
				title:'Очищающая эмульсия',
				subtitle:'P-effect re-purerance wash',
				imgSrc:'/images/forlled-hyalogy-p-effect-clearance-cleansing-200g_resize_w200_h.webp',
				text:'Очищающее средство первой ступени, разработанное специально для кожи, подверженной стрессам и загрязнениям современной городской жизни.',
				articul:'426092',
				gramm:'200',
				btnName:'Подробнее',
				btnHref:'/professionalnaya-liniya/product'
			},
			{
				id:3,
				title:'Лосьон для удаления макияжа',
				subtitle:'P-effect re-purerance wash',
				imgSrc:'/images/forlled-hyalogy-remover-for-point-make-up-2-1.webp',
				text:'Очищающее средство первой ступени, разработанное специально для кожи, подверженной стрессам и загрязнениям современной городской жизни.',
				articul:'426092',
				gramm:'200',
				btnName:'Подробнее',
				btnHref:'/professionalnaya-liniya/product'
			},
			{
				id:4,
				title:'Лосьон для удаления макияжа',
				subtitle:'P-effect re-purerance wash',
				imgSrc:'/images/forlled-hyalogy-p-effect-washing-foam-for-men_resize_w200_h.webp',
				text:'Очищающее средство первой ступени, разработанное специально для кожи, подверженной стрессам и загрязнениям современной городской жизни.',
				articul:'426092',
				gramm:'200',
				btnName:'Подробнее',
				btnHref:'/professionalnaya-liniya/product'
			},
			
		],
		ADTypesOfTraiding:[
			{
				id:'1',
				title:'Формы обучения для профессионалов:',
				icon:'ic ic-icon-2865757',
				content:'<ul class="tt-ul"><li><p class="tt-p">очная (на территории Академии)</p></li><li><p class="tt-p">выездная (на территории партнера: салон, клиника, спа)</p></li><li><p class="tt-p">дистанционная (вебинары)</p></li></ul>',
			},
			{
				id:'2',
				title:'Виды обучения в Академии Дайсэйко:',
				icon:'ic ic-uniE969',
				content:'<ul class="tt-ul"><li><p class="tt-p">базовый курс</p></li><li><p class="tt-p">повышение квалификации</p></li><li><p class="tt-p">тематические семинары</p></li><li><p class="tt-p">public talk</p></li><li><p class="tt-p">вебинары</p></li><li><p class="tt-p">частные консультации</p></li></ul>',
			},
			{
				id:'3',
				title:'Категории обучающихся:',
				icon:'ic ic-bioengineering-1',
				content:'<ul class="tt-ul"><li><p class="tt-p">косметологи (врачи и эстетисты, в том числе частные косметологи)</p></li><li><p class="tt-p">администраторы&nbsp;</p></li></ul>',
			},

		],
		ADTeachers:[
			{
				id:'1',
				city:'Санкт-Петербург',
				img:'/images/20220314-151618-02_resize_w200_h200.webp',
				name:'Оксана Печёнкина',
				content:'<ul class="tt-ul"><li><p class="tt-p">руководитель Академия Дайсэйко Россия</p></li><li><p class="tt-p">врач- косметолог</p></li></ul>',
			},
			{
				id:'2',
				city:'Москва',
				img:'/images/529marina_resize_w200_h200.webp',
				name:'Марина Маркова',
				content:'<ul class="tt-ul"><li><p class="tt-p">тренер -технолог Академия Дайсэйко Россия</p></li><li><p class="tt-p">косметолог-эстетист, практикующий специалист</p></li></ul>',
			},
			{
				id:'3',
				city:'Москва',
				img:'/images/svetlana-400x350_resize_w200_h200.webp',
				name:'Светлана Минакова',
				content:'<ul class="tt-ul"><li><p class="tt-p">тренер Академия Дайсэйко Россия</p></li><li><p class="tt-p">врач- косметолог, дерматовенеролог</p></li></ul>',
			},
		

		],
		UsloviyaObucheniyaContent:[
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
		UsloviyaObucheniyaEducationalMaterials:[
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
		UsloviyaObucheniyaAccessories:[
			{
				id:'1',
				icon:'ic ic-treatment',
				content:'<ul class="tt-ul"><li><p class="tt-p">Хлопковые полотенца для лица и рук</p></li><li><p class="tt-p">Плед</p></li><li><p class="tt-p">Рукавички для умывания</p></li><li><p class="tt-p">Бланк назначений</p></li></ul>',
				text:'незаменимы для процедуры',
			},
			{
				id:'2',
				icon:'ic ic-feather',
				content:'<ul class="tt-ul"><li><p class="tt-p">Хлопковая повязка на голову</p></li><li><p class="tt-p">Плед</p></li><li><p class="tt-p">Сумка-шоппер</p></li><li><p class="tt-p">Гуаша</p></li></ul>',
				text:'порадовать себя',
			},
			{
				id:'3',
				icon:'ic ic-candle',
				content:'<ul class="tt-ul"><li><p class="tt-p">Складное зеркало с подсветкой</p></li><li><p class="tt-p">Кисти</p></li><li><p class="tt-p">Пиала для аксессуаров и смешивания коктейлей-сывороток</p></li></ul>',
				text:'многократное использование',
			},
		],
		ProceduryDaiseko:[
			{
				id: 1,
				title: 'Гидродепонирование и послойное восстановление кожи',
				src: '/images/stop-9_resize_w800_h.webp',
				description: 'Программа, основанная на высокотехнологичной профессиональной косметике Forlle’d, обеспечивает естественную регенерацию кожи, создавая и поддерживая ее здоровье.',
				btnName:'Подробнее о процедуре',
			},
			{
				id: 2,
				title: 'Лифтинг-программа объемного 3D-моделирования',
				src: '/images/stop-38.webp',
				description: 'Комплексное воздействие на признаки старения кожи. Процедура применяется в борьбе с признаками птоза.',
				btnName:'Подробнее о процедуре',
			},
			{
				id: 3,
				title: 'Антиоксидантная защита на основе микронизированной платины',
				src: '/images/stop-15.webp',
				description: 'Рекомендуется для устранения негативного воздействия инсоляции, курения,  употребления алкоголя, длительного приема медикаментов, сильных эмоциональных  стрессов, диет, длительного проживания в регионах с загрязненной окружающей средой. ',
				btnName:'Подробнее о процедуре',
			},
			{
				id: 4,
				title: 'Кислородная терапия и активация тканевого дыхания',
				src: '/images/stop-15.webp',
				description: 'Косметическая процедура направлена на существенное омоложение кожи лица, устранение и коррекцию морщин.',
				btnName:'Подробнее о процедуре',
			},
		],
		LineSalonsClinics:[
			{
				id: 1,
				title: 'Международные ТОП локации бренда Forlle’d',
				src1: '/images/917ecedbad2148a48293a5fb7c01e5bc_resize_w400_h400.webp',
				src2: '/images/3997ab7ff26c4f389bcad5ec58e95c71_resize_w400_h400.webp',
				src3: '/images/7b28fd1d81e84fa0951d4615fba65ecc_resize_w400_h400.webp',
				src4: '/images/f3a7a06ded8c4413811127d846aeaa25_resize_w400_h400.webp',
				text: 'размещены на официальном сайте бренда Forlle’d',
				btnName:'Искать на сайте Forlled',
				btnHref:'https://forlled.com/find-a-salon',
			},
		],
		Kompaniya:[
			{
				id: 1,
				title: 'Линия для салонов и клиник',
				src1: '/images/dsc07303_resize_w400_h400.webp',
				src2: '/images/dsc07388_resize_w400_h400.webp',
				src3: '/images/dsc07357_resize_w400_h400.webp',
				src4: '/images/stop-35-1_resize_w400_h400.webp',
				text: 'профессиональное использование',
				btnName:'Перейти в каталог',
				btnHref:'/catalog/professionalnaya-liniya/',
			},
		],
		PartnersFilter:[
			{
				id: 1,
				title: 'Белый Сад',
				text: 'Городской формат центра красоты, где всё, к чему вы привыкли, делается быстро и с искренней доброжелательностью гостеприимного дома',
				imgSrc: '/images/xxxl-9.webp',
				address: '<strong>Зубовский проезд, д.1<br>м. Парк Культуры</strong>',
				btnName:'Контакты',
				btnHref:'/partners/partner',
				logoSrc:'/images/logo_resize_w120_h.webp',
			},
			{
				id: 2,
				title: 'Белый Сад',
				text: 'Городской формат центра красоты, где всё, к чему вы привыкли, делается быстро и с искренней доброжелательностью гостеприимного дома',
				imgSrc: '/images/xxxl-8.webp',
				address: '<strong>Театральный проезд, д.2<br>м. Площадь Революции</strong>',
				btnName:'Контакты',
				btnHref:'/partners/partner',
				logoSrc:'/images/logo_resize_w120_h.webp',
			},
		],

	}),

});




const pinia = createPinia();
export default pinia;