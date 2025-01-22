<template>
	<div id="block-6" class="block panel fb-01" :class="bgPanelClass">
		<div class="panel_background-image absolute inset-0 z-0 bg-no-repeat bg-center bg-auto" >
		</div>      
		<div class="relative pt-16 pb-16" >
			<div class="container" >
				<div class="relative lg:grid lg:grid-cols-5">
					<div class="lg:col-span-3 lg:pr-12 mb-10 lg:mb-0">
						<div v-for="item in items" :key="item.id">
							<div v-html="item.content"></div>
						</div>
					</div>
					<div class="lg:col-span-2 xl:pl-12">
						<form name="feedbackFrom" class="grid grid-cols-1 gap-y-6">
							<div>
								<div class="mt-3" >
									<div >
										<label  for="name" class="sr-only"></label> 
										<input  id="name" name="name"
												placeholder="Как к вам обращаться" 
												type="text"
												class="form-control block w-full"
											>  
										<span class="validate-error"></span>
									</div>
								</div>
						
								<div class="mt-3" >
									<div >
										<label  for="email" class="sr-only"></label> 
										<input  id="email" name="email" placeholder="e-mail" type="email"
											class="form-control block w-full">  
										<span class="validate-error"></span>
									</div>
								</div>
						
								<div class="mt-3" >
									<div >
										<label  for="phone" class="sr-only"></label> 
										<input  id="phone" name="phone" placeholder="Телефон" type="text"
											class="form-control block w-full">  
										<span  class="validate-error"></span>
									</div>
								</div>
							
								<div class="mt-3" >
									<div >
										<label  for="Vopos_ili_commentarii" class="sr-only"></label>  
										<textarea  id="Vopos_ili_commentarii" name="Vopos_ili_commentarii" 
													type="text"
													rows="5" placeholder="Ваш вопрос"
													class="form-control block w-full">
										</textarea> 
										<span  class="validate-error"></span>
									</div>
								</div>
							</div>
							<div class="fragment-area direction-ltr" >
								<div class="inner-wrap flex items-center gap-2" >
									<input id="fb-01-terms" type="checkbox"> 
									<label for="fb-01-terms" class="block-text">
										Я даю согласие на обработку моих персональных данных
									</label>
								</div> 
							</div>
							<div class="flex gap-2">
								<div class="block-button-wrap" >
									<a target="_blank" class="disabled relative inline-flex items-center btn btn-primary"> 
										<span contenteditable="false" class="text">
											Отправить
										</span> 
									</a>
								</div>
							</div>
						</form>
					</div>
				</div>    
			</div>
		</div>  
	</div>
</template>

<script>
// import PrimeButton from '@/views/ui/buttons/PrimeButton.vue';

export default {
	name: 'NimueFeedback',
	props: {
		bgPanelClass: {
			type: String,
			default:"panel-theme-light"
		},
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
