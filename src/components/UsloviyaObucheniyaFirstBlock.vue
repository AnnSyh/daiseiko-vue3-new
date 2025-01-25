<template>
		<div class="block panel panel-theme-image fo-picture-btn-gray"
			>
			<div class="panel_background-image absolute inset-0 z-0 bg-no-repeat bg-center bg-auto">
			</div>  
			<div class="panel_mask solid" style="opacity:1;"></div>   
			<div class="relative block-overflow  pt-16 pb-16">
				<div class="container px-4 sm:px-6 lg:px-8 mx-auto">
					<section>
						<div class="mx-auto text-left max-w-full">
							<div class="flex flex-wrap items-center justify-between gap-y-6">
								<div class="w-full lg:w-1/2 lg:max-w-lg">
									<div><span contenteditable="false"
											class="min-width-10 min-height-10 fs-2 font-medium  block-text"
											>
											Порядок обучения в Академии Дайсэйко
										</span>  
										<div>
											<div class="repeater-list-item">
												<div class="mt-4">
													<div for="repeater"
														class="fs-6 mb-2 mt-2  block-text js_wysiwyg_d20012_t1737546796956_r87"
														>
														<p class="tt-p">По окончании обучения выдается именной
															сертификат</p>
													</div>
												</div>
											</div>  
										</div>
									</div>
								</div>
								<div class="w-full mt-8 lg:mt-0 lg:w-1/2">
									<div class="relative w-full h-auto">
										<div class="video-wrap rounded-lg">
											<div class="relative m-0 max-w-full rounded-lg hidden lg:block"
												style="margin: auto; overflow: hidden; width: 100%; height: 360px;"
											>
												<div class="fwdevp">
													<div class="video-screen-holder">
														<!-- <video playsinline="" webkit-playsinline=""
															style="position: absolute; left: 0px; top: 0px; width: 100%; height: 100%; margin: 0px; padding: 0px; max-width: none; max-height: none; border: none; line-height: 0; visibility: visible;"
															src="https://app.daiseiko.ru/storage/759/video-17-11-22-12-01.mp4#t=0.1">
														</video> -->
														<video controls width="600" @play="onPlay" @pause="onPause"
															@ended="onEnded">
															<source
																src="https://app.daiseiko.ru/storage/680/bezboleznennaya-massaznaya-texnika-remodelirovaniya-lica.mp4#t=0.1"
																type="video/mp4" />
															Ваш браузер не поддерживает видео.
														</video>
													</div>
													<!-- <div
														style="position: absolute; overflow: visible; left: 277px; top: 150px; margin: 0px; padding: 0px; max-width: none; max-height: none; border: none; line-height: 1; backface-visibility: hidden; width: 85px; height: 59px; cursor: pointer; visibility: visible;">
														<img src="/images/large-play.png"
															width="85" height="59"
															style="position: absolute; overflow: hidden; left: 0px; top: 0px; margin: 0px; padding: 0px; max-width: none; max-height: none; border: none; line-height: 1; backface-visibility: hidden; width: 85px; height: 59px; opacity: 1;"><img
															src="/images/large-play-over.png"
															width="85" height="59"
															style="position: absolute; overflow: hidden; left: 0px; top: 0px; margin: 0px; padding: 0px; max-width: none; max-height: none; border: none; line-height: 1; backface-visibility: hidden; width: 85px; height: 59px; opacity: 0;">
													</div> -->
													<!-- <div class="fwdevp-autoplay-text"
														style="position: absolute; overflow: hidden; left: 0px; top: 0px; margin: 0px; padding: 0px; max-width: none; max-height: none; border: none; line-height: 1; backface-visibility: hidden; cursor: pointer;">
														Нажмите, чтобы включить звук<svg width="12" height="12"
															viewBox="0 0 12 12" fill="none"
															xmlns="http://www.w3.org/2000/svg">
															<g clip-path="url(#clip0)">
																<path
																	d="M9.4272 0.430497C9.4272 0.267667 9.33293 0.113407 9.18724 0.0448468C9.03298 -0.0322832 8.86158 -0.00657319 8.73303 0.0962667L4.93652 3.12147L9.4272 7.61215V0.430497Z"
																	fill="black"></path>
																<path
																	d="M11.8742 11.2702L0.733188 0.129242C0.566073 -0.0378725 0.294404 -0.0378725 0.127289 0.129242C-0.0398256 0.296357 -0.0398256 0.568026 0.127289 0.735141L2.82341 3.43212H2.57231C2.30664 3.43212 2.07525 3.5521 1.92099 3.74064C1.79244 3.88633 1.71531 4.08344 1.71531 4.28912V7.71712C1.71531 8.18847 2.10096 8.57412 2.57231 8.57412H4.56055L8.73413 11.9078C8.81126 11.9678 8.90553 12.0021 8.9998 12.0021C9.05979 12.0021 9.12835 11.985 9.18834 11.9593C9.33403 11.8907 9.4283 11.7364 9.4283 11.5736V10.037L11.2674 11.8761C11.3514 11.9601 11.4611 12.0021 11.5708 12.0021C11.6805 12.0021 11.7902 11.9601 11.8742 11.877C12.0413 11.709 12.0413 11.4382 11.8742 11.2702Z"
																	fill="black"></path>
															</g>
														</svg>
													</div> -->
												</div>
											</div>
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
// import PrimeButton from '@/views/ui/buttons/PrimeButton.vue';

export default {
	name: 'UsloviyaObucheniyaFirstBlock',
	props: {},
	methods: {},
	components: {},
};
</script>

<style scoped>
.fwdevp-autoplay-text {
	@apply absolute left-[30px] top-[30px] m-0 p-0 max-w-none max-h-none border-none bg-black bg-opacity-40 rounded-[14px] text-white font-medium text-[12px] leading-[14px] cursor-pointer transition-colors duration-300 ease-out;
}
</style>
