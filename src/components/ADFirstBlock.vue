<template>
	<!-- ADFirstBlock -->
	<div class="block panel panel-theme-dark fo-description-pictures">
		<div class="panel_background-image absolute inset-0 z-0 bg-no-repeat bg-center bg-cover"
			style="background-image:url('../../public/images/depositphotos-73488859-xl_resize_w2500_h.jpg');"></div>
		<div class="panel_mask gradient"
			style="background:linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%);opacity:0.5;">
		</div>
		<div class="relative block-overflow  pt-16 pb-16">
			<div class="container px-4 sm:px-6 lg:px-8 mx-auto">
				<section class="w-full">
					<div class="text-left mx-auto max-w-full">
						<div class="grid gap-5 lg:grid-cols-2">
							<div class="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
								<div class="max-w-xl mb-6">
									<div class="mb-6 fs-2 font-medium  block-text ">
										<p class="tt-p">Академия Дайсэйко</p>
									</div>
									<div class="fs-5 text-secondary  block-text ">
										<ul class="tt-ul">
											<li>
												<p class="tt-p">центр непрерывного обучения</p>
											</li>
											<li>
												<p class="tt-p">место продвижения и популяризации бренда</p>
											</li>
											<li>
												<p class="tt-p">место укрепления лояльности и приверженности бренду</p>
											</li>
											<li>
												<p class="tt-p">место просветительской деятельности для конечных
													клиентов</p>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div class="flex justify-center w-full items-center">
								<div class="flex flex-col items-end pr-3">
									<div data-aos="flip-right"
										class="relative w-full mb-6 shadow-lg lg:h-72 xl:h-72 lg:w-48 xl:w-56 image-wrap decoration-cover-2 aos-init aos-animate">
										<img src="../../public/images/dsc07303_resize_w230_h300.jpg" loading="eager"
											class="relative object-cover w-full h-full z-10">
										<div style="display:none;"></div>
									</div>
									<div data-aos="flip-right"
										class="relative w-full shadow-lg lg:h-72 xl:h-72 lg:w-48 xl:w-56 image-wrap aos-init">
										<img src="../../public/images/1_resize_w230_h300.jpg" loading="eager"
											class="relative object-cover w-full h-full z-10">
										<div style="display:none;"></div>
									</div>
								</div>
								<div class="pl-3">
									<div data-aos="flip-right"
										class="relative w-full mb-6 shadow-lg lg:h-96 xl:h-96 lg:w-64 xl:w-80 image-wrap aos-init aos-animate">
										<img src="../../public/images/2_resize_w330_h400.jpg" loading="eager"
											class="relative object-cover w-full h-full">
										<div style="display:none;"></div>
									</div>
									<div data-aos="flip-right"
										class="relative w-full shadow-lg lg:h-96 xl:h-96 lg:w-64 xl:w-80 image-wrap decoration-cover-4 aos-init">
										<img src="../../public/images/dsc07357_resize_w330_h400.jpg" loading="eager"
											class="relative object-cover w-full h-full">
										<div style="display:none;"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	</div>










</template>

<script>
import NimueFeedback from '@/components/NimueFeedback.vue'
import Calendar from '@/components/Calendar.vue'

export default {
	name: 'ADFirstBlock',
	data() {
		return {}
	},
	props: {},
	methods: {},
	components: {
		Calendar,
		NimueFeedback
	},
};
</script>

<style scoped></style>
