<template>
	<div class="block panel block-overflow-x-clip panel-theme-default ca-01">
		<div class="panel_background-image absolute inset-0 z-0 bg-no-repeat bg-center bg-auto">
		</div>
		<div class="relative pt-16 pb-16">
			<div data-fetch-key="2">
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
									<p class="tt-p">Популярные <em>локации недели</em></p>
								</div>
							</div>
						</div>
					</div>
					<div class="panel_body">
						<div class="container">
							<div class="mx-auto max-w-full">
								<div class="cards-holder-non-grid">
									<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 cell-location-2-3">

										<div v-for="item in cards" :key="cards.id" data-aos="slide-up"
											class="repeater-list-item aos-init aos-animate">
											<div
												class="card h-full flex flex-col theme-white border border-0 hover-shadow hover-transition plain-wide !border-0">
												<div class="flex-1">
													<div class="card-image">
														<div
															class="image-wrap square float-center bg-theme-none  h-[300px]">
															<img :src="`${item.src}`" loading="eager"
																class="block h-full object-cover w-full">
														</div>
													</div>
													<div class="p-4 clear-both">
														<div
															class="min-width-10 min-height-10 fs-4 font-medium mb-3  block-text">
															{{ item.title }}
														</div>
														<div class="text-secondary  block-text ">
															<p class="tt-p">{{ item.description }}</p>
														</div>
													</div>
												</div>
												<div class="my-4 px-4">
													<div class="block-text">
														<p class="tt-p">
															{{ item.address }}
															<br>
															<strong>{{ item.metro }}</strong>
														</p>
													</div>
												</div>
												<div class="card-footer mx-4 py-4 border-t">
													<div class="flex justify-between items-center">
														<div class="block-button-wrap">
															<a href="#" target="_self" class="relative btn">
																<span class="text">Подробнее</span>
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
					<div class="panel_footer mt-8">
						<div class="container">
							<div class="mx-auto max-w-full text-center">
								<div class="fs-5 mb-4  block-text ">
									<p class="tt-p">Более 200 партнеров в нашем каталоге авторизованных Локаций</p>
								</div>
								<div class="footer-button-wrap">
									<div class="block-button-wrap">
										<a href="/catalog/partners/" target="_blank" class="relative btn btn-primary">
											<span class="text">
												В раздел
											</span>
										</a>
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
	name: 'WeeksPopularLocations',
	data() {
		return {
			cards: [
				{
					id: 1,
					title: 'Health & Else',
					src: '/images/dsc-2841-1.webp',
					description: 'Все необходимое для жительницы мегаполиса – в одном месте: бьюти-услуги, косметология, спа, фитнес и ателье.',
					address: 'Леонтьевский пер., 2АС1',
					metro: 'м. Тверская',
				},
				{
					id: 2,
					title: 'Мечты Виктории',
					src: '/images/21-b.webp',
					description: 'С самого первого дня «Мечты Виктории» — это редкое место, где и взрослые, и дети чувствуют себя одинаково желанными гостями, потому что в нашей концепции заложена совершенная формула: пока родители ухаживают за собой, дети весело проводят время в специально оборудованной детской комнате под присмотром заботливой няни',
					address: 'ул. Гиляровского д.44',
					metro: 'м. Проспект мира',
				},
				{
					id: 3,
					title: 'Курорт красоты Biarritz',
					src: '/images/85ab291f.webp',
					description: 'Открывая двери курорта красоты «Biarritz» в Волгограде, вы сможете забыть о проблемах и получить уход самого высокого профессионального уровня.',
					address: 'ул. Мира, д.12',
				},

			],
		};
	},
	props: {},
	methods: {},
	components: {},
};
</script>

<style scoped></style>
