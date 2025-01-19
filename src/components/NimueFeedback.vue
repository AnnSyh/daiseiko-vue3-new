<template>
	<div id="block-6" class="block panel panel-theme-light fb-01"  >
		<div class="panel_background-image absolute inset-0 z-0 bg-no-repeat bg-center bg-auto" >
		</div>      
		<div class="relative pt-16 pb-16" >
			<div class="container" >
				<div class="relative lg:grid lg:grid-cols-5">
					<div class="lg:col-span-3 lg:pr-12 mb-10 lg:mb-0">
						<div class="fs-2 mb-4  block-text " >
							<h2 class="tt-h">Обратная связь</h2>
						</div>
						<div class="fs-5  block-text " >
							<p class="tt-p">Чтобы связаться с менеджерами нашего офиса, оставьте контактные данные и ваш
								вопрос.<br>Мы свяжемся с вами в течение 3 рабочих дней.</p>
						</div> 
						<div class="fragment-area direction-ltr mt-4" >
							<div class="inner-wrap mt-4" >
								<div class="grid grid-cols-1 gap-x-6 lg:mr-6 lg:grid-cols-2" >
									<div >
										<div class="mt-3 flex gap-2">
											<div class="icon-wrap" >  
												<div class="ic icon-face-rounded flex items-center justify-center"
													></div>
											</div>
											<div class="block-text " >
												<p class="tt-p">переходи на международный сайт бренда, нажмите для
													перехода на международный сайт <a target="true"
														rel="noopener noreferrer nofollow"
														href="https://nimueskin.com/">Nimue</a></p>
											</div>
										</div>
									</div>  
								</div>
							</div> 
						</div>
					</div>
					<div class="lg:col-span-2 xl:pl-12">
						<form name="feedbackFrom" class="grid grid-cols-1 gap-y-6">
							<div>
								<div class="mt-3" >
									<div ><label  for="name"
											class="sr-only"></label> <input  id="name" name="name"
											placeholder="Как к вам обращаться" type="text"
											class="form-control block w-full">  <span 
											class="validate-error"></span></div>
								</div>
						
								<div class="mt-3" >
									<div ><label  for="email"
											class="sr-only"></label> <input  id="email"
											name="email" placeholder="e-mail" type="email"
											class="form-control block w-full">  <span 
											class="validate-error"></span></div>
								</div>
						
								<div class="mt-3" >
									<div ><label  for="phone"
											class="sr-only"></label> <input  id="phone"
											name="phone" placeholder="Телефон" type="text"
											class="form-control block w-full">  <span 
											class="validate-error"></span></div>
								</div>
							
								<div class="mt-3" >
									<div ><label  for="Vopos_ili_commentarii"
											class="sr-only"></label>  <textarea 
											id="Vopos_ili_commentarii" name="Vopos_ili_commentarii" type="text"
											rows="5" placeholder="Ваш вопрос"
											class="form-control block w-full"></textarea> <span 
											class="validate-error"></span></div>
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
	props: {},
	methods: {},
	components: {},
};
</script>

<style scoped></style>
