<template>
	<!-- UsloviyaObucheniyaContent -->
	<div class="block panel panel-theme-default">
		<div class="relative block-overflow  pt-16 pb-16">
			<div class="container">
				<div class="mx-auto max-w-full">
					<div class="panel_body">
						<div class="relative">

							<div v-for="item in items" :key="item.id">
								<div class="relative">
									<div 
										class="pb-12 lg:pt-12 lg:pb-20 lg:mx-auto lg:max-w-7xl lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24"
										:class="item.direction"
									>
										<div class="mt-12 sm:mt-16 lg:mt-0 mb-12 sm:mb-16 lg:mb-0 self-center">
											<div class="relative lg:h-full">
												<div :data-aos="item.direction ? 'slide-right': 'slide-left'" 
													class="relative max-w-xl mx-auto image-wrap decoration-cover-3 animation-none rounded-lg aos-init aos-animate"
												>  
													<img
														:src="`${item.imgSrc}`"
														loading="eager" class="relative filter grayscale-50  rounded-lg"
													>  
												</div>
											</div>
										</div>
										<div class="max-w-xl mx-auto self-center lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-1">
											<div class="self-center direction-ltr text-left">
												<div class="mt-6">
													<div class="mb-4 text-xl sm:text-2xl font-medium  block-text">
														<p class="tt-p">{{ item.title }}</p>
														<h5>{{ item.subtitle }}</h5>
													</div>
													<div class="description mb-6 block-text" >
														<div v-html="item.content"></div>
													</div>
													
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>

						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
// import PrimeButton from '@/views/ui/buttons/PrimeButton.vue';

export default {
	name: 'UsloviyaObucheniyaContent',
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

<style scoped>

</style>
