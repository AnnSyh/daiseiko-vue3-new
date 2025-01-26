<template>
	<!-- Формы/Виды  обучения---------------- -->
	<div class="block panel panel-theme-default">
		<div class="panel_background-image absolute inset-0 z-0 bg-no-repeat bg-center bg-cover"></div>
		<div class="relative pt-20 pb-16">
			<div class="px-4 sm:px-6 lg:px-8 mx-auto max-w-full">
				<div class="relative pt-0 pb-0">
					<section aria-labelledby="testimonial-heading" class="relative max-w-7xl mx-auto">
						<div class="fragment-area direction-ltr">
							<div class="inner-wrap">
								<div class="max-w-2xl mx-auto lg:max-w-none">
									<div class="mt-16 space-y-16 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
										<div  v-for="item in items" :key="item.name" data-aos="slide-up" class="repeater-list-item aos-init aos-animate">
											<blockquote class="mb-6 sm:flex lg:block">
												<div for="repeater"
													class="w-10 icon-wrap decoration-cover theme-image border-0">
													<div :class="`${item.icon}`"></div>
												</div>
												<div class="mt-2 sm:mt-0 lg:mt-4 sm:ml-6 lg:ml-0">
													<div for="repeater" class="description block-text ">
														<h4 class="tt-h"><strong>{{ item.name }}</strong></h4>
														<div v-html="item.content"></div>
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
// import Calendar from '@/components/Calendar.vue'

export default {
	name: 'ADTypesOfTraiding',
	data() {
		return {}
	},
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
