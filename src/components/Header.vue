<template>
	<div id="block-10000" class="block relative z-20 bg-transparent fo-header">
		<div class="relative text-gray-700 pt-0 pb-0">
			<div class="container m-auto">
				<section class="relative text-gray-700">
					<div class="flex items-center justify-between mx-auto max-w-full h-16 lg:h-24 py-2 lg:py-3 ">
						<div class="top-logo-wrapper flex flex-shrink image-wrap max-w-[130px]">
							<a href="#" target="_self" class="flex">
								<img src="/images/daiseiko-logo-black.webp" loading="lazy"
									class="block max-h-full w-auto !important">
							</a>

						</div>
						<div class="flex items-center justify-end w-100 space-x-2 lg:space-x-8">
							<nav class="items-center justify-center hidden lg:flex space-x-8">
								<div class="py-5 repeater-list-item">
									<div for="repeater" class="block-button-wrap relative cursor-pointer">

										<!-- <a
												href="/professionalnayaLiniya" target="_self"
												class="relative text-base font-bold inline-block whitespace-nowrap text-gray-700 hover:text-gray-900">
												<span contenteditable="false" class="text">
													БРЕНДЫ
												</span>
												<div class="link-control z-10"></div>
											</a>  -->

									</div>
									<router-link to="/kompaniya"
										class="relative text-base font-bold inline-block whitespace-nowrap text-gray-700 hover:text-gray-900">БРЕНДЫ</router-link>
								</div>
								<div class="py-5 repeater-list-item">
									<div for="repeater" class="block-button-wrap relative cursor-pointer"><a
											href="/novosti/?tab=list" target="_self"
											class="relative text-base font-bold inline-block whitespace-nowrap text-gray-700 hover:text-gray-900">
											<span contenteditable="false" class="text">
												НОВОСТИ
											</span>
											<div class="link-control z-10">
											</div>
										</a> </div>
								</div>
								<div class="py-5 repeater-list-item">
									<div for="repeater" class="block-button-wrap relative cursor-pointer"><a
											href="/partners/" target="_self"
											class="relative text-base font-bold inline-block whitespace-nowrap text-gray-700 hover:text-gray-900">
											<span contenteditable="false" class="text">
												ЛОКАЦИИ
											</span>
											<div class="link-control z-10">
											</div>
										</a> </div>
								</div>
								<div class="py-5 repeater-list-item">
									<div for="repeater" class="block-button-wrap relative cursor-pointer"><a
											href="/akademiya-daiseiko/" target="_self"
											class="relative text-base font-bold inline-block whitespace-nowrap text-gray-700 hover:text-gray-900">
											<span contenteditable="false" class="text">
												АКАДЕМИЯ
											</span>
											<div class="link-control z-10">
											</div>
										</a> </div>
								</div>
								<div class="py-5 repeater-list-item">
									<div for="repeater" class="block-button-wrap relative cursor-pointer"><a
											href="/professionalnayaLiniya" target="_self"
											class="relative text-base font-bold inline-block whitespace-nowrap text-gray-700 hover:text-gray-900">
											<span contenteditable="false" class="text">
												ПРОДУКЦИЯ
											</span>
											<div class="link-control z-10">
											</div>
										</a> </div>
								</div>
							</nav>
							<div class="w-0 h-8 border-r border-gray-200 hidden lg:block"></div>
							<div class="flex items-center">
								<button @click="toggleSearch()" class="flex items-center text-xl icon-search">
								</button>
								<div class="flex flex-shrink-0 ml-5 image-wrap">
									<a href="/novosti/meropriyatiya/?tab=calendar" target="_self" class="">
										<img src="/images/icon-tabler-calendar-time.png" loading="lazy" class="">
									</a>

								</div>
								<div class="flex items-center justify-center h-full lg:hidden ml-6"
									@click="toggleMenu()">
									<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg" class="w-6 h-6">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
											d="M4 8h16M4 16h16"></path>
									</svg>
								</div>
							</div>
						</div>
					</div>
				</section>
				<div v-if="isMenuOpen" class="mobile-menu">
					<div class="container py-3">
						<div class="py-3 repeater-list-item">
							<div>
								<div for="repeater" class="block-button-wrap relative cursor-pointer">
									<!-- <a
											href="/professionalnayaLiniya" target="_self"
											class="relative text-base font-bold inline-block whitespace-nowrap "> <span
												contenteditable="false" class="text">
												БРЕНДЫ
											</span>
											<div class="link-control z-10">
											</div>
										</a>  -->
									<router-link to="/kompaniya"
										class="relative text-base font-bold inline-block whitespace-nowrap ">БРЕНДЫ</router-link>
								</div>
							</div>
						</div>
						<div class="py-3 repeater-list-item">
							<div>
								<div for="repeater" class="block-button-wrap relative cursor-pointer"><a
										href="/novosti/?tab=list" target="_self"
										class="relative text-base font-bold inline-block whitespace-nowrap "> <span
											contenteditable="false" class="text">
											НОВОСТИ
										</span>
										<div class="link-control z-10">
										</div>
									</a> </div>
							</div>
						</div>
						<div class="py-3 repeater-list-item">
							<div>
								<div for="repeater" class="block-button-wrap relative cursor-pointer"><a
										href="/partners/" target="_self"
										class="relative text-base font-bold inline-block whitespace-nowrap "> <span
											contenteditable="false" class="text">
											ЛОКАЦИИ
										</span>
										<div class="link-control z-10">
										</div>
									</a> </div>
							</div>
						</div>
						<div class="py-3 repeater-list-item">
							<div>
								<div for="repeater" class="block-button-wrap relative cursor-pointer"><a
										href="/akademiya-daiseiko/" target="_self"
										class="relative text-base font-bold inline-block whitespace-nowrap "> <span
											contenteditable="false" class="text">
											АКАДЕМИЯ
										</span>
										<div class="link-control z-10">
										</div>
									</a> </div>
							</div>
						</div>
						<div class="py-3 repeater-list-item">
							<div>
								<div for="repeater" class="block-button-wrap relative cursor-pointer"><a
										href="/professionalnayaLiniya" target="_self"
										class="relative text-base font-bold inline-block whitespace-nowrap "> <span
											contenteditable="false" class="text">
											ПРОДУКЦИЯ
										</span>
										<div class="link-control z-10">
										</div>
									</a> </div>
							</div>
						</div>
					</div>
				</div>
				<div v-if="isSearchOpen" class="search-block z-20 bg-transparent">
					<div class="container flex items-center h-16 lg:h-24 py-2 lg:py-3 ">
						<div class="top-logo-wrapper hidden sm:flex image-wrap max-w-[130px]">
							<a href="/" target="_self" class="">
								<img src="/images/daiseiko-logo-black.webp" loading="lazy" class=""></a>

						</div>
						<div class="w-0 h-8 ml-4 mr-3 lg:ml-5 border-r border-gray-200 hidden sm:flex">
						</div>
						<div class="flex-grow w-100 mr-4">
							<form>
								<div class="search"><button disabled="disabled" type="submit" size="lg"
										class="icon-search flex items-center text-xl block px-4 py-2 transition duration-100 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed "></button>
									<input type="text" name="q" placeholder="Поиск по сайту" class="search__field">
								</div>
							</form>
						</div> <button class="flex align-center icon-close text-xl" @click="toggleSearch()"></button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		const isMenuOpen = ref(false);
		const isSearchOpen = ref(false);

		const toggleMenu = () => {
			isMenuOpen.value = !isMenuOpen.value;
		};

		const toggleSearch = () => {
			isSearchOpen.value = !isSearchOpen.value;
		};

		return {
			isMenuOpen,
			isSearchOpen,
			toggleMenu,
			toggleSearch,
		};
	},
};
</script>

<style scoped></style>
