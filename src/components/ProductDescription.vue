<template>
	<div class="relative direction-ltr">
		<div class="inner-wrap">
			<div class="lg:grid lg:grid-cols-2 lg:gap-x-8">
				<div class="lg:max-w-lg lg:self-end">
					<div class="mt-4 mb-5">
						<h1 contenteditable="false"
							class="min-width-10 min-height-10 tracking-tight fs-1  block-text">
							Очищающая эмульсия
						</h1>
						<h2 contenteditable="false"
							class="min-width-10 min-height-10 tracking-tight mt-2 fs-4  block-text">
							P-effect clearance cleansing
						</h2>
					</div>
					<section aria-labelledby="information-heading" class="mt-2">
						<div class="flex items-center">
							<p contenteditable="false"
								class="min-width-10 min-height-10 text-lg sm:text-xl block-text">
								200
							</p> <span contenteditable="false"
								class="min-width-10 min-height-10 text-lg sm:text-xl block-text">
								g
							</span>
							<div class="ml-4 pl-4 border-l border-gray-300">
								<div class="flex flex-wrap items-center text-sm">
									<span contenteditable="false"
										class="min-width-10 min-height-10 mr-2 block-text">
										Артикул:
									</span>
									<p contenteditable="false" class="min-width-10 min-height-10 block-text">
										426092
									</p>
								</div>
							</div>
						</div>
						<div class="mt-4 space-y-6">
							<div class="fs-5  block-text">Очищающее
								средство первой ступени, разработанное
								специально для кожи, подверженной стрессам и загрязнениям современной
								городской жизни. Оно очень эффективен для растворения жирных
								поверхностных загрязнений, таких как те, которые содержатся в макияже и
								образуются самой кожей. Используется только в сочетании с очищающим
								средством второй ступени.</div>
						</div>
					</section>
				</div>
				<div class="relative mt-10 lg:mt-0 lg:col-start-2 lg:row-span-2 lg:self-center">
					<div>
						<div class="image-wrap decoration-cover-3">
							<img src="../../public/images/forlled-hyalogy-p-effect-clearance-cleansing-200g.webp"
								loading="lazy" class="relative filter grayscale-50 !max-w-[400px]">

							<div style="display:none;"></div>
						</div>
					</div>
				</div>
				<div class="lg:max-w-lg lg:col-start-1 lg:row-start-2 lg:self-start">
					<section aria-labelledby="options-heading" class="relative">
						<div class="sm:flex sm:justify-between mb-8 mt-12 lg:mt-6">
							<fieldset class="w-full">
								<legend contenteditable="false"
									class="min-width-10 min-height-10 block text-sm font-medium mb-2 block-text">
									Основные характеристики:
								</legend>
								<div class="fragment-area direction-ltr rounded-lg">

									<div class="inner-wrap">
										<div class="mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
											<div
												class="relative block border border-gray-300 rounded-lg p-4 repeater-list-item">

												<div>
													<p contenteditable="false"
														class="min-width-10 min-height-10 block-text">
														Тип продукта
													</p>
													<div for="repeater"
														class="text-secondary  block-text">
														очищение</div>
												</div>
											</div>
											<div
												class="relative block border border-gray-300 rounded-lg p-4 repeater-list-item">

												<div>
													<p contenteditable="false"
														class="min-width-10 min-height-10 block-text">
														Серия
													</p>
													<div for="repeater"
														class="text-secondary  block-text">
														P-effect</div>
												</div>
											</div>
											<div
												class="relative block border border-gray-300 rounded-lg p-4 repeater-list-item">

												<div>
													<p contenteditable="false"
														class="min-width-10 min-height-10 block-text">
														Для кого подходит
													</p>
													<div for="repeater"
														class="text-secondary  block-text">
														для мужчин и для женщин</div>
												</div>
											</div>
											<div
												class="relative block border border-gray-300 rounded-lg p-4 repeater-list-item">

												<div>
													<p contenteditable="false"
														class="min-width-10 min-height-10 block-text">
														Возраст
													</p>
													<div for="repeater"
														class="text-secondary  block-text">
														для любого возраста</div>
												</div>
											</div>
											<div
												class="relative block border border-gray-300 rounded-lg p-4 repeater-list-item">

												<div>
													<p contenteditable="false"
														class="min-width-10 min-height-10 block-text">
														Кожа
													</p>
													<div for="repeater"
														class="text-secondary  block-text">
														для всех типов кожи</div>
												</div>
											</div>
											<div
												class="relative block border border-gray-300 rounded-lg p-4 repeater-list-item">

												<div>
													<p contenteditable="false"
														class="min-width-10 min-height-10 block-text">
														Область
													</p>
													<div for="repeater"
														class="text-secondary  block-text">
														уход за лицом</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</fieldset>
						</div>
						<div class="mb-3">
							<div class="block-button-wrap" style="display:none;"></div>
						</div>
					</section>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
// import { ref } from 'vue';

export default {
	name: 'ProductDescription',
	props: {},
	methods: {},
	components: {},
};
</script>

<style scoped></style>
