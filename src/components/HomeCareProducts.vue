<template>
	<div class="block panel panel-theme-default faq-three-columns-description">

		<div class="panel_background-image absolute inset-0 z-0 bg-no-repeat bg-center bg-auto">
		</div>
		<div class="relative pt-8 pb-16">
			<div data-fetch-key="1">
				<div value="" class="container mb-4">
					<div class="mx-auto"> </div>
				</div>
				<div class="container">
					<div class="mx-auto max-w-full">
						<div class="mb-8 text-center">
							<div class="mb-4 fs-2 font-medium  block-text js_wysiwyg_d20054_t1737099068830_r84">
								<p class="tt-p">Продукты для домашнего ухода</p>
							</div>
						</div>
						<div>
							<div
								class="grid grid-cols-1 gap-y-4 sm:grid-cols-1 sm:gap-x-6 sm:gap-y-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-6 xl:grid-cols-4">
								<div v-for="item in items" :key="items.id"
									class="relative flex flex-col h-full shadow-md hover-shadow theme-white border non-plain">
									<div>
										<div class="w-full px-4 pt-4 image-wrap">
											<img :src="`${item.src}`" loading="lazy"
												class="block h-full object-cover w-full">
										</div>
									</div>
									<div class="flex-1 p-4 space-y-3 flex flex-col">
										<div>
											<h2 class="min-width-10 min-height-10 fs-5 leading-6 font-bold  block-text">
												{{ item.title }}
											</h2>
											<p class="min-width-10 min-height-10 fs-5 font-medium mt-1  block-text">
												Remover for point make-up
											</p>
										</div>
										<div class="fs-6  block-text js_wysiwyg_d20054_t1737099068866_r90">
											<p class="tt-p">Это очищающее средство разработано, в частности, для
												быстрого снятия макияжа, в том числе водостойкого, с кожи вокруг
												глаз и губ.</p>
										</div>
										<div class="flex-1 flex flex-col justify-end">
											<div class="text-sm italic">
												<span class="min-width-10 min-height-10 fs-7 font-medium  block-text">
													Артикул:
												</span>
												<span class="min-width-10 min-height-10 fs-7 font-medium  block-text">
													{{ item.articul }}
												</span>
											</div>
											<div>
												<span class="min-width-10 min-height-10 fs-7 font-medium  block-text">
													{{ item.ml }}
												</span> <span
													class="min-width-10 min-height-10 fs-7 font-medium  block-text">
													ml
												</span>
											</div>
										</div>
										<div class="inline-flex pb-1">
											<div class="block-button-wrap"><a href="#" target="_self"
													class="stretched-link btn btn-primary "> <span class="text">
														О продукте
													</span> </a></div>
										</div>
									</div>
								</div>

							</div>
						</div>
						<div class="mt-12 text-center">
							<div class="footer-button-wrap mt-8">
								<div class="block-button-wrap null">
									<a href="professionalnayaLiniya/" target="_self"
										class="relative inline-flex items-center  btn btn-primary">
										<span class="text">
											Профессиональная линия
										</span>
									</a>
								</div>
								<div class="block-button-wrap">
									<a href="domashnij-uhod/" target="_self"
										class="relative inline-flex items-center  btn btn-primary">
										<span class="text">
											Домашний уход
										</span>
									</a>
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
	</div>
</template>

<script>
// import PrimeButton from '@/views/ui/buttons/PrimeButton.vue';

export default {
	name: 'HomeCareProducts',
	data() {
		return {};
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
