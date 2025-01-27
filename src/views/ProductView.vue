<template>
	<div>

		<div class="block panel panel-theme-image ec-split-image">
			<div class="panel_background-image absolute inset-0 z-0 bg-no-repeat bg-center bg-cover bg-fixed" style="background-image:url('/public/images/stop-42.webp');"></div>
			<div class="panel_mask gradient" style="background:linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%);opacity:0.6;"></div>
			<div class="relative block-overflow  pt-16 pb-16">
				<div class="container">

					<BreadCrumbs 	:menuItems="menuItems" :activeItem="activeItem" 
									:textColor="textColor" :textHoverColor="textHoverColor"
					/>
					<ProductDescription/>
					
				</div>
			</div>
		</div>
		
		<ProductFeatures/>
		<ProductFeedbackForm/>

	</div>

</template>

<script>
import BreadCrumbs from '@/components/BreadCrumbs.vue';
import ProductDescription from '@/components/ProductDescription.vue';
import ProductFeatures from '@/components/ProductFeatures.vue';
import ProductFeedbackForm from '@/components/ProductFeedbackForm.vue';


export default {
	name: 'ProductView',
	data() {
		return {
			menuItems: [
				{ name: 'Главная', link: '/' },
				{ name: 'Профессиональная линия', link: '/professionalnaya-liniya' },
				{ name: 'Продукт', link: '/professionalnaya-liniya/product' },
			],
			textColor:'text-white',
			textHoverColor:'hover:!text-black',
		};
	},
	computed: {},
	components: { 
		BreadCrumbs,
		ProductDescription, 
		ProductFeatures,
		ProductFeedbackForm,
	},
}
</script>
