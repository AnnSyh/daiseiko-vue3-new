<template>
	<div>
		<div v-for="item in items" :key="item.id">
			<div
				class="pb-12 lg:pt-12 lg:pb-20 lg:mx-auto lg:max-w-7xl lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24"
				:class="item.direction"
				>
				<div class="mt-12 sm:mt-16 lg:mt-0 mb-12 sm:mb-16 lg:mb-0 self-center">
					<div class="relative lg:h-full">
						<div data-aos="flip-up" class="relative mx-auto image-wrap flex max-w-[300px] p-0 rounded-full aos-init aos-animate">
							<a :href="`${item.btnhref}`" target="_self" class="stretched-link">
								<img :src="`${item.imgSrc}`" loading="eager"
									class="relative filter grayscale-50  rounded-full"></a>
						</div>
					</div>
				</div>
				<div class="max-w-xl mx-auto self-center lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-1">
					<div class="self-center direction-ltr"
						:class="item.direction ? 'text-left': 'text-right'"
					>
						<div class="mt-6">
							<div :data-aos="item.direction ? 'slide-left': 'slide-right'"
								  class="mb-4 text-xl sm:text-2xl font-medium block-text aos-init aos-animate"
							>
								<h2 class="tt-h"><em>{{ item.title }}</em></h2>
								<p v-if="item.subtitle" class="tt-h">{{ item.subtitle }}</p>
	
							</div>
							<div :data-aos="item.direction ? 'slide-left': 'slide-right'"
								  class="description mb-6 block-text  aos-init aos-animate"
							>
								<p class="tt-p" v-html="item.content"></p>
							</div>
							<div v-if="item.btnText" class="block-button-wrap">
								<a :href="`${item.btnhref}`" target="_self" class="relative btn btn-primary"> 
									<span contenteditable="false" class="text">
										{{ item.btnText }}
									</span> 
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
	
		</div>
	</div>
</template>

<script>
// import { staticPath } from '@/helpers/StaticHelper.js';

export default {
	name: 'IndexContent',
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
