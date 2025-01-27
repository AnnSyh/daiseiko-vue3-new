<template>
	<div id="block-46" class="block panel panel-theme-light faq-three-columns-description relative ">
			<div class="panel_background-image absolute inset-0 z-0 bg-no-repeat bg-center bg-cover bg-fixed"
				style="background-image:url('../../public/images/depositphotos-6120148-xl.jpg');">
			</div>
			<div class="panel_mask gradient-white"
				style="background:linear-gradient(360deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 100%, rgba(255,255,255,0) 100%);opacity:0.9;">
			</div>
			<div class="pt-0 pb-16">
				<div data-fetch-key="1">
					<div value="" class="filters-box">
						<div class="relative">
							<button @click="toggleFilter()" class="filters-box-collapse_btn">
								<span v-if="isFilterOpen">+ Показать фильтры </span> 
								<span v-if="!isFilterOpen">- Скрыть фильтры</span>
							</button>
						</div>
						<div v-if="isFilterOpen" class="container mt-12">
							<div class="mx-auto">
								<div class="flex mb-4">
									<input placeholder="Поиск" type="search" value=""
										class="flex-grow mr-2 form-control"> <button class="btn btn-primary">
										Найти
									</button>
								</div>
							</div>
						</div>
					</div>
					<div class="container">
						<div class="mx-auto max-w-full">
							<div
								class="grid grid-cols-1 gap-y-4 sm:grid-cols-1 sm:gap-x-6 sm:gap-y-10 md:grid-cols-2">

								<div v-for="item in items" :key="item.id" data-aos="slide-up" class="aos-init aos-animate">
									
									<div class="card h-full flex flex-col theme-white border-0 hover-shadow hover-transition p-0 plain-wide">
										<div class="flex-1">
											<div class="card-image">
												<div class="image-wrap float-center bg-theme-none">
													<img :src="`${item.src}`" loading="eager" class="block h-full object-cover w-full">
												</div>
											</div>
											<div class="card-body clear-both pt-5 pb-4 px-4">
												<div class="min-width-10 min-height-10 fs-4 font-medium mb-3  block-text">
													{{ item.title }}
												</div>
												<div  class="fs-5 text-secondary  block-text">
													<p class="tt-p">{{ item.description }}</p>
												</div>
											</div>
										</div>
										<div class="card-footer mx-4 py-4 border-t">
											<div class="flex justify-between items-center">
												<div  class="block-button-wrap">
													<a href="/procedury/procedura" target="_self" class="stretched-link btn ">
														<span class="text">{{ item.btnName }}</span>
													</a>
												</div>
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
		</div>
</template>

<script>
import { ref } from 'vue';

export default {
	name: 'ProceduryFilter',
	setup() {
		const isFilterOpen = ref(false);

		const toggleFilter = () => {
			isFilterOpen.value = !isFilterOpen.value;
		};


		return {
			isFilterOpen,
			toggleFilter,
		};
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
