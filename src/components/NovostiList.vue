<template>
	<div id="block-17" class="block panel block-overflow-x-clip panel-theme-image ca-03" >
		<div class="panel_background-image absolute inset-0 z-0 bg-no-repeat bg-center bg-auto" >
		</div>  
		<div class="panel_mask gradient-white"
			style="background:linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 70%, rgba(255,255,255,0) 100%);opacity:0.8;"
			></div>   
		<div class="relative pt-4 pb-16" >
			<div data-fetch-key="data-v-41201dd3:0"  >
				<div class="panel_filters" >
					<div value="" class="container mb-4" >
						<div class="mx-auto max-w-full"> </div>
					</div>
				</div>
				<div >
					<div class="panel_body block-overflow pb-10" >
						<div class="container" >
							<div class="mx-auto max-w-full" >
								<div class="cards-holder-non-grid" >
									<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 cell-location-2-3"
										>
										<div v-for="item in items" :key="item.id">
											<div class="card h-full flex flex-col theme-light text-center border-0 hover-none hover-transition hover-shadow p-0 non-plain"
												 >
												<div class="flex-1" > 
													<div class="card-image px-4 mt-5" >
														<div for="repeater"
															class="image-wrap float-center bg-theme-none"
															 >  
															 <img :src="`${item.imgSrc}`" 
																loading="eager"  class="max-w-[400px]"> 
															
															<div style="display:none;" ></div>
														</div>
													</div>
													<div class="card-body clear-both" >
														<div for="repeater"
															class="text-secondary font-medium tracking-widest mb-1  block-text js_wysiwyg_d17_t1737399450040_r76"
															>{{ item.data }}</div>
														<div contenteditable="false"
															class="min-width-10 min-height-10 fs-4 font-medium mb-3  block-text"
															>
															{{ item.title }}
														</div> 
														<div for="repeater"
															class="fs-5 text-secondary  block-text js_wysiwyg_d17_t1737399450041_r84"
															>
															<p class="tt-p">{{ item.content }}</p>
														</div>
														<div for="repeater" class="block-button-wrap mt-5"
															 >
															 <a :href="`${item.btnhref}`" target="_self" class="relative btn  link"> 
																<span contenteditable="false" class="text" >
																	Подробнее
																</span> 
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
</template>

<script>
import { ref } from 'vue';

export default {
	name: 'NovostiList',
	props: {
		menuItems: {
			type: Array,
			required: true,
		},
		activeItem: {
			type: String,
			required: true,
		},
		items: {
			type: Array,
			required: true,
		},		
	},
	methods: {
		selectItem(item) {
			this.$emit('itemSelected', item); // Извлекаем выбранный пункт меню
		},
	},
	components: {},
};
</script>

<style scoped>
.router-link-active {
	background-color: #111827;
	color: #f5f8fa;
}
</style>
