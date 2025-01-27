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
