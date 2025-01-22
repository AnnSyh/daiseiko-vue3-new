<template>
	<div id="block-19" class="block panel block-overflow-x-clip panel-theme-white">
		<div class="panel_background-image absolute inset-0 z-0 bg-no-repeat bg-center bg-cover bg-fixed"></div>  
		<div class="panel_mask gradient-white"
			style="background:linear-gradient(244deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 100%, rgba(255,255,255,0) 100%);opacity:0.7;"
			>
		</div>   
		<div class="relative pt-16 pb-16" >
			<div data-fetch-key="1" >
				<div class="panel_filters">
					<div value="" class="container mb-4">
						<div class="mx-auto max-w-full"> </div>
					</div>
				</div>
				<div>
					<div class="panel_header mb-8">
						<div class="container">
							<div class="mx-auto max-w-full text-center">
								<div class="mb-4 fs-2 font-medium  block-text">
									<p class="tt-p">Учебные материалы Академии Дайсэйко</p>
								</div>  
							</div>
						</div>
					</div>
					<div class="panel_body">
						<div class="container">
							<div class="mx-auto max-w-full">
								<div class="cards-holder-non-grid">
									<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 cell-location-2-3  gap-4 gap-y-8 lg:gap-8">
										
										<div  	v-for="item in items" :key="item.id" 
												data-aos="slide-up" class="repeater-list-item aos-init aos-animate"
											>
											
											<div class="card h-full flex flex-col theme-white border hover-transition hover-shadow non-plain">
												<div class="flex-1" > 
													<div class="card-image px-4 mt-5">
														<div  class="image-wrap float-center bg-theme-none"> 
															<img :src="`${item.imgSrc}`" loading="eager"  class=""> 
														</div>
													</div>
													<div class="clear-both  p-4" >
														<div class="min-width-10 min-height-10 fs-4 font-medium mb-3  block-text">
															{{ item.title }}
														</div> 
														<div class="text-secondary block-text">
															<div v-html="item.content"></div>
														</div>
													</div>
												</div>
												<div class="card-footer mx-4 py-4 border-t" >
													<div class="flex justify-between items-center">
														<div  class="block-button-wrap">
															<a :href="`${item.btnhref}`" target="_self" class="relative btn">
																<span  class="text">
																	{{ item.btnName }}
																</span> 
															</a>
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
	</div>

</template>

<script>
// import PrimeButton from '@/views/ui/buttons/PrimeButton.vue';

export default {
	name: 'UsloviyaObucheniyaEducationalMaterials',
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
