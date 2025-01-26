<template>
	<!-- -------------------Наши преподаватели----------------- -->
	<div id="block-57" class="block panel block-overflow-x-clip panel-theme-light ca-01">
		<div class="panel_background-image absolute inset-0 z-0 bg-no-repeat bg-center bg-cover bg-fixed"
			style="background-image:url('../../public/images/depositphotos-138090318-xl-new_resize_w2500_h.jpg');">
		</div>
		<div class="panel_mask solid-white" style="opacity:0.5;"></div>
		<div class="relative pt-16 pb-16">
			<div data-fetch-key="1">
				<div class="panel_filters">
					<div value="" class="container mb-4">
						<div class="mx-auto max-w-full"> </div>
					</div>
				</div>
				<div>
					<div class="panel_header mb-8">
						<div class="container">
							<div class="mx-auto max-w-full text-center">
								<div class="mb-4 fs-2 font-medium  block-text ">
									<p class="tt-p">Наши преподаватели&nbsp;&nbsp;</p>
								</div>
								<div class="fs-5 mt-2  block-text ">
									<p class="tt-p">Научную, технологическую и преподавательскую основу Академии
										Дайсэйко возглавляют ведущие врачи-дерматовенерологи, косметологи, эстетисты и
										преподаватели из лучших российских медицинских вузов и клиник.</p>
								</div>
							</div>
						</div>
					</div>
					<div class="panel_body">
						<div class="container">
							<div class="mx-auto max-w-full">
								<div class="cards-holder-non-grid">
									<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 cell-location-2-3">
										<div v-for="item in items" :key="item.id"
											data-aos="slide-up" class="repeater-list-item aos-init aos-animate"
										>
											<div class="card h-full flex flex-col theme-default border text-center hover-shadow non-plain">
												<div class="flex-1">
													<div
														class="card-header theme-none  pb-5 border-b border-b-1 ml-4 mr-4">
														<div
															class="icon-box pt-4 flex items-center gap-x-4 non-reverse justify-center">
															<div>
																<div for="repeater" class="block-text ">
																	<p class="tt-p"><strong>{{ item.city }}</strong></p>
																</div>
															</div>
														</div>
													</div>
													<div class="card-image px-4 mt-5">
														<div for="repeater"
															class="image-wrap rounded-full float-center bg-theme-none">
															<img :src="`${item.img}`" loading="eager" class="rounded-full" />
														</div>

													</div>
													<div class="card-body clear-both  p-4">
														<div class="min-width-10 min-height-10 fs-4 font-medium mb-3  block-text">
															{{ item.name }}
														</div>
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
					<div class="panel_footer mt-16">
						<div class="container">
							<div class="mx-auto max-w-full text-center">
								<div class="footer-button-wrap">
									<div class="block-button-wrap"><a href="#block-20028" target="_blank"
											class="relative btn btn-primary ">
											<span class="text">
												Есть вопросы
											</span> </a></div>
									<div class="block-button-wrap" style="display:none;">
									</div>
									<div class="block-button-wrap" style="display:none;">
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

export default {
	name: 'AkademiyaDaiseikoTeachers',
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
