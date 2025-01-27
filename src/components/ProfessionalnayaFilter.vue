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
								<div class="mb-8 grid grid-cols-1 md:grid-cols-3 gap-6">
									<fieldset class="form-group article-search__input mb-4 mb-md-0">
										<div>
											<div class="multiselect-wrapper">
												<div class="dropdown" variant="selector" no-flip="true">
													<div>
														<div>
															<div id="dropdown-6" data-after="▼"
																class="dropdown-selector cursor-pointer relaive flex justify-between items-center w-full border-b pr-6 pb-1 pt-2">
																<span class="label">Серия</span><span
																	class="note">Выбрано:
																	0</span>
															</div>
														</div>
													</div>
													<div class="dropdown-list" style="display: none;"><input
															type="search"
															class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
														<hr class="dropdown-divider my-2">
														<fieldset class="form-group"
															style="overflow-y: scroll; max-height: 400px;">
															<div>
																<div stacked="">
																	<div class="custom-control custom-checkbox"><input
																			id="option-ac-line" type="checkbox"
																			class="custom-control-input" value="41">
																		<label for="option-ac-line"
																			class="custom-control-label"><span>AC
																				line</span></label>
																	</div>
																	<div class="custom-control custom-checkbox"><input
																			id="option-biopure-for-professional"
																			type="checkbox" class="custom-control-input"
																			value="36"> <label
																			for="option-biopure-for-professional"
																			class="custom-control-label"><span>Biopure
																				for
																				professional</span></label></div>
																	<div class="custom-control custom-checkbox"><input
																			id="option-bw-line" type="checkbox"
																			class="custom-control-input" value="35">
																		<label for="option-bw-line"
																			class="custom-control-label"><span>BW
																				Line</span></label>
																	</div>
																	<div class="custom-control custom-checkbox"><input
																			id="option-deep-line" type="checkbox"
																			class="custom-control-input" value="39">
																		<label for="option-deep-line"
																			class="custom-control-label"><span>Deep
																				line</span></label>
																	</div>
																	<div class="custom-control custom-checkbox"><input
																			id="option-forlled-for-men" type="checkbox"
																			class="custom-control-input" value="32">
																		<label for="option-forlled-for-men"
																			class="custom-control-label"><span>Forlle'd
																				for
																				MEN</span></label>
																	</div>
																	<div class="custom-control custom-checkbox"><input
																			id="option-hyalogy-platinum" type="checkbox"
																			class="custom-control-input" value="33">
																		<label for="option-hyalogy-platinum"
																			class="custom-control-label"><span>Hyalogy
																				Platinum</span></label>
																	</div>
																	<div class="custom-control custom-checkbox"><input
																			id="option-Hyalogy Re-Dify" type="checkbox"
																			class="custom-control-input" value="111">
																		<label for="option-Hyalogy Re-Dify"
																			class="custom-control-label"><span>Hyalogy
																				Re-Dify</span></label>
																	</div>
																	<div class="custom-control custom-checkbox"><input
																			id="option-lift-line" type="checkbox"
																			class="custom-control-input" value="38">
																		<label for="option-lift-line"
																			class="custom-control-label"><span>Lift
																				line</span></label>
																	</div>
																	<div class="custom-control custom-checkbox"><input
																			id="option-p-effect" type="checkbox"
																			class="custom-control-input" value="31">
																		<label for="option-p-effect"
																			class="custom-control-label"><span>P-effect</span></label>
																	</div>
																	<div class="custom-control custom-checkbox"><input
																			id="option-sensiskin" type="checkbox"
																			class="custom-control-input" value="37">
																		<label for="option-sensiskin"
																			class="custom-control-label"><span>SensiSkin</span></label>
																	</div>
																	<div style="display: none;">
																		Фильтров не найдено
																	</div>
																</div>
															</div>
														</fieldset>
														<div class="text-center underline text-xs cursor-pointer">
															Принять
														</div>
													</div>
												</div>
											</div>
										</div>
									</fieldset>
									<fieldset class="form-group article-search__input mb-4 mb-md-0">
										<div>
											<div class="multiselect-wrapper">
												<div class="dropdown" variant="selector" no-flip="true">
													<div>
														<div>
															<div id="dropdown-1" data-after="▼"
																class="dropdown-selector cursor-pointer relaive flex justify-between items-center w-full border-b pr-6 pb-1 pt-2">
																<span class="label">Тип продукта</span><span
																	class="note">Выбрано: 0</span>
															</div>
														</div>
													</div>
													<div class="dropdown-list" style="display: none;"><input
															type="search"
															class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
														<hr class="dropdown-divider my-2">
														<fieldset class="form-group"
															style="overflow-y: scroll; max-height: 400px;">
															<div>
																<div stacked="">
																	<div class="custom-control custom-checkbox"><input
																			id="option-gel" type="checkbox"
																			class="custom-control-input" value="9">
																		<label for="option-gel"
																			class="custom-control-label"><span>гель</span></label>
																	</div>
																	<div class="custom-control custom-checkbox"><input
																			id="option-krem" type="checkbox"
																			class="custom-control-input" value="6">
																		<label for="option-krem"
																			class="custom-control-label"><span>крем</span></label>
																	</div>
																	<div class="custom-control custom-checkbox"><input
																			id="option-лосьон" type="checkbox"
																			class="custom-control-input" value="3">
																		<label for="option-лосьон"
																			class="custom-control-label"><span>лосьон</span></label>
																	</div>
																	<div class="custom-control custom-checkbox"><input
																			id="option-maska" type="checkbox"
																			class="custom-control-input" value="7">
																		<label for="option-maska"
																			class="custom-control-label"><span>маска</span></label>
																	</div>
																	<div
																		class="custom-control custom-checkbox disabled">
																		<input id="option-набор" type="checkbox"
																			disabled="disabled"
																			class="custom-control-input" value="98">
																		<label for="option-набор"
																			class="custom-control-label"><span>набор</span></label>
																	</div>
																	<div class="custom-control custom-checkbox"><input
																			id="option-очищение" type="checkbox"
																			class="custom-control-input" value="2">
																		<label for="option-очищение"
																			class="custom-control-label"><span>очищение</span></label>
																	</div>
																	<div class="custom-control custom-checkbox"><input
																			id="option-syvorotka" type="checkbox"
																			class="custom-control-input" value="4">
																		<label for="option-syvorotka"
																			class="custom-control-label"><span>сыворотка</span></label>
																	</div>
																	<div style="display: none;">
																		Фильтров не найдено
																	</div>
																</div>
															</div>
														</fieldset>
														<div class="text-center underline text-xs cursor-pointer">
															Принять
														</div>
													</div>
												</div>
											</div>
										</div>
									</fieldset>
									<fieldset class="form-group article-search__input mb-4 mb-md-0">
										<div>
											<div class="multiselect-wrapper">
												<div class="dropdown" variant="selector" no-flip="true">
													<div>
														<div>
															<div id="dropdown-5" data-after="▼"
																class="dropdown-selector cursor-pointer relaive flex justify-between items-center w-full border-b pr-6 pb-1 pt-2">
																<span class="label">Тип кожи</span><span
																	class="note">Выбрано:
																	0</span>
															</div>
														</div>
													</div>
													<div class="dropdown-list" style="display: none;"><input
															type="search"
															class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
														<hr class="dropdown-divider my-2">
														<fieldset class="form-group"
															style="overflow-y: scroll; max-height: 400px;">
															<div>
																<div stacked="">
																	<div class="custom-control custom-checkbox"><input
																			id="option-dlya-vozrastnoi-kozi"
																			type="checkbox" class="custom-control-input"
																			value="26"> <label
																			for="option-dlya-vozrastnoi-kozi"
																			class="custom-control-label"><span>для
																				возрастной
																				кожи</span></label></div>
																	<div class="custom-control custom-checkbox"><input
																			id="option-dlya-vsex-tipov-kozi"
																			type="checkbox" class="custom-control-input"
																			value="23"> <label
																			for="option-dlya-vsex-tipov-kozi"
																			class="custom-control-label"><span>для всех
																				типов
																				кожи</span></label></div>
																	<div class="custom-control custom-checkbox"><input
																			id="option-dlya-zirnoi-kozi" type="checkbox"
																			class="custom-control-input" value="30">
																		<label for="option-dlya-zirnoi-kozi"
																			class="custom-control-label"><span>для
																				жирной
																				кожи</span></label>
																	</div>
																	<div class="custom-control custom-checkbox"><input
																			id="option-dlya-suxoi-kozi" type="checkbox"
																			class="custom-control-input" value="29">
																		<label for="option-dlya-suxoi-kozi"
																			class="custom-control-label"><span>для сухой
																				кожи</span></label>
																	</div>
																	<div class="custom-control custom-checkbox"><input
																			id="option-dlya-cuvstvitelnoi-kozi"
																			type="checkbox" class="custom-control-input"
																			value="25"> <label
																			for="option-dlya-cuvstvitelnoi-kozi"
																			class="custom-control-label"><span>для
																				чувствительной
																				кожи</span></label></div>
																	<div class="custom-control custom-checkbox"><input
																			id="option-kuperoz" type="checkbox"
																			class="custom-control-input" value="27">
																		<label for="option-kuperoz"
																			class="custom-control-label"><span>купероз</span></label>
																	</div>
																	<div class="custom-control custom-checkbox"><input
																			id="option-pigment" type="checkbox"
																			class="custom-control-input" value="28">
																		<label for="option-pigment"
																			class="custom-control-label"><span>пигмент</span></label>
																	</div>
																	<div class="custom-control custom-checkbox"><input
																			id="option-fotostarenie" type="checkbox"
																			class="custom-control-input" value="24">
																		<label for="option-fotostarenie"
																			class="custom-control-label"><span>фотостарение</span></label>
																	</div>
																	<div style="display: none;">
																		Фильтров не найдено
																	</div>
																</div>
															</div>
														</fieldset>
														<div class="text-center underline text-xs cursor-pointer">
															Принять
														</div>
													</div>
												</div>
											</div>
										</div>
									</fieldset>
								</div>
								<div class="flex flex-wrap mt-4">
									<div class="flex items-center text-red-500 underline cursor-pointer px-2 py-1 mr-2 mb-2"
										style="display:none;">
										Очистить всё
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="container">
						<div class="mx-auto max-w-full">
							<div
								class="grid grid-cols-1 gap-y-4 sm:grid-cols-1 sm:gap-x-6 sm:gap-y-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-6 xl:grid-cols-4">

								<div v-for="item in items" :key="item.id"
									class="relative flex flex-col h-full shadow-md hover-shadow theme-white border non-plain">
									<div>
										<div class="w-full px-4 pt-4 image-wrap animation-none">
											<img :src="`${item.imgSrc}`"
												loading="lazy" class="!max-w-[200px]">
										</div>
									</div>
									<div class="flex-1 p-4 space-y-3 flex flex-col">
										<div>
											<h2 
												class="min-width-10 min-height-10 fs-5 leading-6 font-bold  block-text">
												{{ item.title }}
											</h2>
											<p v-if="item.subtitle"
												class="min-width-10 min-height-10 fs-5 font-medium mt-1  block-text">
												{{ item.subtitle }}
											</p>
										</div>
										<div class="fs-6  block-text ">
											<p class="tt-p">{{item.text}}</p>
										</div>
										<div class="flex-1 flex flex-col justify-end">
											<div class="text-sm italic"><span 
													class="min-width-10 min-height-10 fs-7 font-medium  block-text">
													Артикул:
												</span> <span 
													class="min-width-10 min-height-10 fs-7 font-medium  block-text">
													{{item.articul}}
												</span> </div>
											<div><span 
													class="min-width-10 min-height-10 fs-7 font-medium  block-text">
													{{item.gramm}}
												</span> <span 
													class="min-width-10 min-height-10 fs-7 font-medium  block-text">
													g
												</span> </div>
										</div>
										<div class="inline-flex pb-1">
											<div  class="block-button-wrap">
												<a :href="`${item.btnHref}`" target="_self" class="stretched-link btn btn-primary "> 
													<span  class="text">
														{{ item.btnName }}
													</span> 
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
		</div>
</template>

<script>
import { ref } from 'vue';

export default {
	name: 'ProfessionalnayaFilter',
	setup() {
		const isFilterOpen = ref(false);
		const isTextButtonOpen = ref(false);

		const toggleFilter = () => {
			isFilterOpen.value = !isFilterOpen.value;
			isTextButtonOpen.value = !isTextButtonOpen.value;
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
