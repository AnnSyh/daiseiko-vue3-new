<template>
	<div class="block panel panel-theme-default se-09" :class="bgPanelClass">
		<div class="panel_background-image absolute inset-0 z-0 bg-no-repeat bg-center bg-auto">
		</div>
		<div class="relative block-overflow  pt-16 pb-4">
			<div class="container relative sm:py-4 lg:py-6 xl:py-10">
				<div class="fragment-area direction-ltr rounded container theme-inverse border">
					<div class="inner-wrap">
						<div  v-for="item in items" :key="item.id"
							class="relative z-1 w-full grid grid-cols-1 lg:grid-cols-12 py-8 lg:py-10 gap-x-4"
						>
							<div
								class="flex space-x-6 lg:ml-3 lg:space-x-8 justify-center lg:justify-start lg:col-start-7 lg:col-span-6">
								<div class="flex flex-col lg:-mb-16 xl:-mb-20 space-y-6 lg:space-y-8 w-1/2">
									<div data-aos="flip-right"
										class="flex-shrink-0 z-10 image-wrap decoration-cover-3 aos-init aos-animate">
										<img :src="`${item.src1}`" loading="eager"
											class="w-full theme-light rounded-lg object-cover aspect-[1/1]">
									</div>
									<div data-aos="flip-left"
										class="flex-shrink-0 z-10 image-wrap aos-init aos-animate"> <img
										:src="`${item.src2}`" loading="eager"
										class="w-full theme-light rounded-lg object-cover aspect-[1/1]">
									</div>
								</div>
								<div class="flex flex-col -mt-12 sm:-mt-16 xl:-mt-20 space-y-6 lg:space-y-8 w-1/2">
									<div data-aos="flip-left"
										class="flex-shrink-0 z-10 image-wrap aos-init aos-animate"> <img
										:src="`${item.src3}`" loading="eager"
										class="w-full theme-light rounded-lg object-cover aspect-[1/1]">
									</div>
									<div data-aos="flip-left"
										class="flex-shrink-0 z-10 image-wrap decoration-cover-3 aos-init aos-animate">
										<img :src="`${item.src4}`" loading="eager"
										class="w-full theme-light rounded-lg object-cover aspect-[1/1]">
									</div>
								</div>
							</div>
							<div
								class="relative pt-8 pb-0 lg:col-start-1 lg:row-start-1 lg:col-span-6 xl:col-span-5 self-center">
								<div class="lg:pr-4">
									<div
										class="text-current test font-extrabold text-4xl lg:text-5xl sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-xl mb-2  block-text">
										<p class="tt-p">{{ item.title }}</p>
									</div>
									<div class="fs-5  block-text">
										<p class="tt-p">{{ item.text }}</p>
									</div>
									<div class="block-button-wrap mt-6 text-base">
										<a :href="`${items.btnHref}`" target="_blank" class="relative btn btn-primary"> 
											<span class="text">
												{{ item.btnName }}
											</span>
										</a></div>
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
	name: 'LineSalonsClinics',
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
