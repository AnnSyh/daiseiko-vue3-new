<template>
	<div id="block-22" class="block panel panel-theme-light se-08"  >
		<div class="panel_background-image absolute inset-0 z-0 bg-no-repeat bg-center bg-cover"
			style="background-image:url('../../public/images/stop-15_resize_w2500_h.webp');"
			></div>  
		<div class="panel_mask gradient-white"
			style="background:linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 70%, rgba(255,255,255,0) 100%);opacity:0.7;"
			></div>   
		<div class="relative pt-16 pb-16" >
			<div class="px-4 sm:px-6 lg:px-8 mx-auto max-w-full" >
				<div class="relative pt-32 pb-32">
					<section aria-labelledby="sale-heading"
						class="text-center relative max-w-7xl pb-24 mx-auto lg:pb-32 flex flex-col">
						<div class="max-w-2xl mx-auto lg:max-w-none">
							<div class="mb-4 fs-2 font-medium  block-text">
								<p class="tt-p">Аксессуары</p>
							</div>
							<div class="fs-5 text-secondary  block-text">
								<p class="tt-p">Большинство наших продуктов имеет ограниченную серию. Заказывайте ваши
									любимые аксессуары пока они в наличии.</p>
							</div>
							<div class="block-button-wrap mt-6" >
								<a href="#block-6" target="_self" class="relative btn btn-primary"><span class="text">Сделать заказ</span></a>
							</div>
						</div>
					</section>
					<section aria-labelledby="testimonial-heading" class="relative max-w-7xl mx-auto">
						<div class="fragment-area direction-ltr" >
							<div class="inner-wrap" >
								<div class="max-w-2xl mx-auto lg:max-w-none" >
									<div class="mt-16 space-y-16 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8"
										>
										<div v-for="item in items" :key="item.id">
											<blockquote class="mb-6 sm:flex lg:block">
												<div class="w-10 icon-wrap decoration-cover theme-image">  
													<div :class="`${item.icon}`"></div>
												</div>
												<div class="mt-2 sm:mt-0 lg:mt-4 sm:ml-6 lg:ml-0">
													<div v-html="item.content"></div>
													<div class="mt-4 block font-medium not-italic text-current block-text ">
														<p class="tt-p">{{ item.text }}</p>
													</div>
												</div>
											</blockquote>
										</div>
									</div>
								</div>
							</div> 
						</div>
					</section>
				</div>
			</div>
		</div>  
	</div>

</template>

<script>
// import PrimeButton from '@/views/ui/buttons/PrimeButton.vue';

export default {
	name: 'UsloviyaObucheniyaAccessories',
	props: {
		items: {
			type: Array,
			required: true,
		},
	},
	methods: {},
	components: {},
};
</script>

<style scoped></style>
