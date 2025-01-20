<template>
	<!-- Kompaniya / Академия Дайсэйко -->
	<div class="block panel block-overflow-x-clip panel-theme-white ca-03">

		<div class="panel_background-image absolute inset-0 z-0 bg-no-repeat bg-center bg-auto">
		</div>
		<div class="panel_mask gradient-white"
			style="background:linear-gradient(360deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 30%, rgba(255,255,255,0) 100%);opacity:0.7;">
		</div>
		<div class="relative pt-16 pb-16">
			<div data-fetch-key="data-v-41201dd3:1">
				<div class="panel_filters">
					<div value="" class="container mb-4">
						<div class="mx-auto max-w-full"> </div>
					</div>
				</div>
				<div>
					<div class="panel_header mb-10">
						<div class="container">
							<div class="mx-auto max-w-full text-center">
								<div class="mb-4 fs-2 font-medium  block-text">
									<p class="tt-p">Академия Дайсэйко</p>
								</div>
								<div class="fs-5 mt-2  block-text">
									<p class="tt-p">Салонные и клинические процедуры восстанавливают структуру кожи,
										стимулируют синтез коллагена и эластина, обеспечивают непревзойденную
										антиоксидантную защиту. Средства Forlle’d поддерживают и улучшают состояние
										микрофлоры кожи, тем самым оптимизируя иммунитет.</p>
								</div>
							</div>
						</div>
					</div>
					<div class="panel_body block-overflow pb-10">
						<div class="container">
							<div class="mx-auto max-w-full">
								<div class="cards-holder-non-grid">
									<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 cell-location-2-3">

										<div v-for="item in items" :key="item.id" data-aos="slide-up" class="aos-init aos-animate">
											<div class="card h-full flex flex-col theme-white border-0 hover-shadow hover-transition p-0 plain-wide">
												<div class="flex-1">
													<div class="card-image">
														<div class="image-wrap float-center bg-theme-none">
															<img :src="`${item.src}`" loading="eager" class="block h-full object-cover w-full">
														</div>
													</div>
													<div class="card-body clear-both">
														<div class="min-width-10 min-height-10 fs-4 font-medium mb-3  block-text">
															{{ item.title }}
														</div>
														<div  class="fs-5 text-secondary  block-text">
															<p class="tt-p">{{ item.description }}</p>
														</div>
													</div>
												</div>
												<div class="card-footer mx-4 py-5">
													<div class="flex justify-between items-center">
														<div  class="block-button-wrap">
															<a href="/catalog/procedury/" target="_self"
																class="stretched-link btn ">
																<span class="text">Ознакомиться</span>
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
					<div>
						<ul class="pagination flex w-max mx-auto mt-10 ">
							<li class="w-9 opacity-50 "><a disabled="disabled" href="#"
									class="btn btn-sm btn-primary cursor-default w-full ">«</a></li>
							<li class="w-9 opacity-50 "><a disabled="disabled"
									class="btn btn-sm btn-primary cursor-default w-full ">‹</a></li>
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
	name: 'DaiseikoAcademy',
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
