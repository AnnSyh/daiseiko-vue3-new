<template>
	<div class="block panel panel-theme-default panel-theme-light fb-02">
		<div class="panel_background-image absolute inset-0 z-0 bg-no-repeat bg-center bg-cover"
			style="background-image:url('/images/ekrana-2022-03-11-v-214650.webp');"></div>
		<div class="panel_mask solid-white" style="opacity:0.4;"></div>
		<div class="relative pt-16 pb-16">
			<div class="container py-6 flex md:flex-nowrap flex-wrap">
				<div
					class="contacts-image-container w-full md:w-1/2 xl:w-2/3 bg-gray-300 bg-opacity-80 md:mr-10 p-10 flex items-end justify-start relative">
					<div class="absolute inset-0 overflow-hidden z-0 image-wrap">
						<img src="/images/stop-1.webp" loading="lazy" class="object-cover w-full h-full">
						<div style="display:none;"></div>
					</div>
					<div class="fragment-area direction-ltr relative w-full shadow-md theme-white p-8">
						<div class="inner-wrap flex flex-wrap w-full">
							<div class="w-full xl:w-1/2 xl:pr-4 xl:pl-0">
								<div class="fs-6  block-text ">
									<h5 class="tt-h">Москва</h5>
									<p class="tt-p">ул. Большая Полянка 50/1 строение 4<br><a
											rel="noopener noreferrer nofollow"
											href="tel:+74952259457">+7(495)225-94-57</a>, <a
											rel="noopener noreferrer nofollow"
											href="tel:+74952259458">+7(495)225-94-58</a></p>
								</div>
							</div>
							<div class="w-full xl:w-1/2 xl:pl-4 mt-4 xl:mt-0">
								<div class="fs-6  block-text ">
									<h5 class="tt-h">Санкт-Петербург</h5>
									<p class="tt-p">Набережная канала Грибоедова 56-58<br><a target="false"
											rel="noopener noreferrer nofollow"
											href="tel:+78122447919">+7(812)244-79-19</a>, <a target="false"
											rel="noopener noreferrer nofollow"
											href="tel:+78126444212">+7(812)644-42-12</a></p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div
					class="xl:w-1/3 md:w-1/2 theme-white flex flex-col md:ml-auto w-full px-6 py-8 mt-8 md:mt-0 shadow-md">
					<h2 class="min-width-10 min-height-10 text-2xl leading-5 font-medium mb-2  block-text">
						Обратная связь
					</h2>
					<div class="fs-6  block-text">
						<p class="tt-p">Чтобы связаться с менеджерами нашего офиса, оставьте контактные данные и ваш
							вопрос. <br>Мы свяжемся с вами в течение 3 рабочих дней.</p>
					</div>
					<form name="feedbackFrom" class="mt-6">
						<input type="hidden" name="user_answers" value="[]">
						<div class="grid grid-cols-1 gap-y-4">
							<div class="repeater-list-item">
								<div>
									<div>
										<label for="name" class="sr-only"></label>
										<input id="name" name="name" placeholder="ФИО" type="text"
											class="form-control block w-full">
										<span class="validate-error"></span>
									</div>
								</div>
							</div>
							<div class="repeater-list-item">
								<div>
									<div>
										<label for="email" class="sr-only"></label>
										<input id="email" name="email" placeholder="Email" type="email"
											class="form-control block w-full">
										<span class="validate-error"></span>
									</div>
								</div>
							</div>
							<div class="repeater-list-item">
								<div>
									<div>
										<label for="phone" class="sr-only"></label>
										<input id="phone" name="phone" placeholder="Телефон" type="text"
											class="form-control block w-full">
										<span class="validate-error"></span>
									</div>
								</div>
							</div>
							<div class="repeater-list-item">
								<div>
									<div>
										<label for="Vopos_ili_commentarii" class="sr-only"></label>
										<textarea id="Vopos_ili_commentarii" name="Vopos_ili_commentarii" type="text"
											placeholder="Вопрос или комментарий" class="form-control block w-full">
										</textarea>
										<span class="validate-error"></span>
									</div>
								</div>
							</div>
						</div>
						<div class="mt-3">
							<input type="checkbox" name="user-agreement" id="fb-02-terms">
							<label for="fb-02-terms">
								Я согласен с пользовательским соглашением и политикой по обработке персональных данных
							</label>
						</div>
						<div class="mt-6">
							<button type="button" disabled="disabled" class="inline-flex items-center btn btn-primary">
								Отправить
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
// import PrimeButton from '@/views/ui/buttons/PrimeButton.vue';

export default {
	name: 'FeedbackWithMap',
	props: {},
	methods: {},
	components: {},
};
</script>

<style scoped></style>
