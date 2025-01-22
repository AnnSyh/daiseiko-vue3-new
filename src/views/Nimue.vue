<template>
	<div class="about">
		<!-- <h1>Nimue page</h1> -->
		<TopMenu
			:menuItems="menuItems" 
			:activeItem="activeItem" 
			@itemSelected="handleItemSelected"
		/>
		<KompaniyaNimue/>
		<NimueVideo/>
		<NimueFeedback :items="dataFeedback" />
	</div>
</template>


<script>
import TopMenu from '@/components/TopMenu.vue'
import KompaniyaNimue from '@/components/KompaniyaNimue.vue'
import NimueVideo from '@/components/NimueVideo.vue'
import NimueFeedback from '@/components/NimueFeedback.vue'

export default {
	name:'Nimue',
	data() {
		return {
		menuItems: [
			{ name: 'Forlle’d', link: '/kompaniya' },
			{ name: 'Nimue', link: '/kompaniya/nimue' },
		],
		activeItem: 'Nimue', 
		dataFeedback:[
				{
					id: 1,
					content: '<div class="fs-2 mb-4  block-text" ><h2 class="tt-h">Обратная связь</h2></div><div class="fs-5  block-text"><p class="tt-p">Чтобы связаться с менеджерами нашего офиса, оставьте контактные данные и ваш вопрос.<br>Мы свяжемся с вами в течение 3 рабочих дней.</p> </div> <div class="fragment-area direction-ltr mt-4" ><div class="inner-wrap mt-4" ><div class="grid grid-cols-1 gap-x-6 lg:mr-6 lg:grid-cols-2" ><div ><div class="mt-3 flex gap-2"><div class="icon-wrap" ><div class="ic icon-face-rounded flex items-center justify-center"></div></div><div class="block-text " ><p class="tt-p">переходи на международный сайт бренда, нажмите для перехода на международный сайт <a target="true" rel="noopener noreferrer nofollow" href="https://nimueskin.com/">Nimue</a></p></div></div></div></div></div></div>'
				}
			]
		};
	},
	components: { 
		KompaniyaNimue,
		NimueVideo,
		TopMenu,
		NimueFeedback
	}
};
</script>

<style scoped></style>
