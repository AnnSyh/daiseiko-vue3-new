<template>
	<div class="block panel panel-theme-white">
		<div class="panel_background-image absolute inset-0 z-0 bg-no-repeat bg-center bg-auto" >
		</div>      
		<div class="relative pt-16 pb-16" >
			<div class="container" >
				<div class="relative lg:grid lg:grid-cols-5">
					<div class="lg:col-span-3 lg:pr-12 mb-10 lg:mb-0">
						<div class="fs-2 mb-4  block-text " >
							<p class="tt-p">Форма обратной связи</p>
						</div>
						<div class="fs-5  block-text " >
							<p class="tt-p">
								Чтобы связаться с менеджерами нашего офиса, оставьте контактные данные и ваш
								вопрос.<br>Мы свяжемся с вами в течение 3 рабочих дней.
							</p>
						</div>  
					</div>
					<div class="lg:col-span-2 xl:pl-12">
						<form name="feedbackFrom" class="grid grid-cols-1 gap-y-6">
							<div>
								<div class="repeater-list-item">
									<div class="mt-3" >
										<div >
											<label  for="name" class="sr-only"></label> 
											<input  id="name" name="name" placeholder="ФИО" type="text" class="form-control block w-full"> 
											<span  class="validate-error"></span>
										</div>
									</div>
								</div>
								<div class="repeater-list-item">
									<div class="mt-3" >
										<div>
											<label  for="email" class="sr-only"></label> 
											<input  id="email" name="email" placeholder="Email" class="form-control block w-full">
											<span  class="validate-error"></span>
										</div>
									</div>
								</div>
								<div class="repeater-list-item">
									<div class="mt-3" >
										<div>
											<label  for="phone" class="sr-only"></label> 
											<input  id="phone" name="phone" placeholder="Телефон" class="form-control block w-full">
											<span  class="validate-error"></span>
										</div>
									</div>
								</div>
								<div class="repeater-list-item">
									<div class="mt-3" >
										<div>
											<label  for="company" class="sr-only"></label> 
											<input  id="company" name="company" placeholder="Компания" class="form-control block w-full">
											<span  class="validate-error"></span>
										</div>
									</div>
								</div>
								<div class="repeater-list-item">
									<div class="mt-3" >
										<div >
											<label  for="comment" class="sr-only"></label>  
											<textarea  id="comment" name="comment" type="text" rows="5" placeholder="Сообщение" class="form-control block w-full"></textarea> 
											<span class="validate-error"></span>
										</div>
									</div>
								</div>  
							</div>
							<div class="fragment-area direction-ltr">
								<div class="inner-wrap flex items-center gap-2">
									<input id="fb-01-terms" type="checkbox"> 
									<label for="fb-01-terms" class="block-text " >
										Я даю
										согласие на обработку моих персональных данных
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
// import { ref } from 'vue';

export default {
	name: 'ProductFeedbackForm',
	props: {},
	methods: {},
	components: {},
};
</script>

<style scoped></style>
