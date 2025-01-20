<template>
	<!-- Kompaniya / новости -->
	<div id="block-20046" class="block panel block-overflow-x-clip panel-theme-default ca-03">

		<div class="panel_background-image absolute inset-0 z-0 bg-no-repeat bg-center bg-auto bg-fixed"></div>
		<div class="relative pt-16 pb-16">
			<div data-fetch-key="data-v-41201dd3:0">
				<div class="panel_filters">
					<div value="" class="container mb-4">
						<div class="mx-auto max-w-full"> </div>
					</div>
				</div>
				<div>
					<div class="panel_body block-overflow pb-10">
						<div class="container">
							<div class="mx-auto max-w-full">
								<div class="cards-holder-non-grid">
									<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 cell-location-2-3">
										
										<div v-for="item in items" :key="item.id" data-aos="slide-up" class="repeater-list-item aos-init aos-animate">

											<div
												class="card h-full flex flex-col theme-light text-center border-0 hover-shadow p-0 non-plain">
												<div class="flex-1">
													<div class="card-body clear-both">
														<div 
															class="text-secondary font-medium tracking-widest mb-1  block-text">
															{{ item.data }}
														</div>
														<div 
															class="min-width-10 min-height-10 fs-4 font-medium mb-3  block-text">															
															{{ item.title }}
														</div>
														<div 
															class="fs-5 text-secondary  block-text ">
															<p class="tt-p">{{ item.description }}</p>
														</div>
														<div  class="block-button-wrap mt-5">
															<a href="#" target="_self" class="stretched-link btn "> 
																<span class="text">Подробно</span>
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
					<div class="panel_footer">
						<div class="container">
							<div class="mx-auto max-w-full text-center">
								<div class="footer-button-wrap">
									<div class="block-button-wrap">
										<a href="#" target="_self" class="relative btn btn-primary"> 
											<span class="text">Еще новости</span> 
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div>
						<ul class="pagination flex w-max mx-auto mt-10 ">
							<li class="w-9 opacity-50 "><a disabled="disabled" href="#" class="btn btn-sm btn-primary cursor-default w-full ">«</a></li>
							<li class="w-9 opacity-50 "><a disabled="disabled" class="btn btn-sm btn-primary cursor-default w-full ">‹</a></li>
							<li class="w-9 "><a href="#" class="btn btn-sm btn-inverse w-full ">1</a></li>
							<li class="w-9 "><a href="#" class="btn btn-sm btn-primary w-full ">2</a></li>
							<li class="w-9 "><a href="#" class="btn btn-sm btn-primary w-full ">›</a></li>
							<li class="w-9 "><a href="#" class="btn btn-sm btn-primary w-full ">»</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
// import PrimeButton from '@/views/ui/buttons/PrimeButton.vue';

export default {
	name: 'KompaniyaNews',
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
