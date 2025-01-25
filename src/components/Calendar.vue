<template>
	<!-- Календарь  -->
	<div class="block panel panel-theme-white cr-02">
		<div class="panel_background-image absolute inset-0 z-0 bg-no-repeat bg-center bg-cover">
		</div>
		<div class="relative pt-20 pb-16">
			<div data-fetch-key="Calendar:0">
				<div class="panel_header mb-8 text-center">
					<div class="container">
						<div class="mb-4 fs-2 font-medium  block-text ">
							<h2 class="tt-h">{{title}}</h2>
						</div>
					</div>
				</div>
				<div class="panel_body">
					<div class="container">
						<div class="calendar-body">
							<nav id="calendarTabs" role="tablist" class="flex justify-end space-x-4 mb-6 mt-6"><a
									class="text-gray-500 cursor-pointer hover:text-gray-700 px-3 py-2 font-medium text-sm rounded-md bg-gray-100 shadow"><span>Календарь</span></a>
								<a
									class="text-gray-500 cursor-pointer hover:text-gray-700 px-3 py-2 font-medium text-sm rounded-md"><span>Темы</span></a>
								<a
									class="text-gray-500 cursor-pointer hover:text-gray-700 px-3 py-2 font-medium text-sm rounded-md"><span>Список</span></a>
							</nav>
							<div id="calendarTabsContent" class="tab-content">
								<div>
									<div>
										<div class="calendar-views">
											<div id="pills-tabContent" class="tab-content">
												<div>
													<div class="bg-theme-white overflow-hidden">
														<div
															class="flex items-center justify-between py-2 pl-6 pr-4 bg-theme-light">
															<div class="calendar-date-indicator">
																январь 2025
															</div>
															<div class="calendar-date-selector">
																<div class="flex items-center p-1">
																	<button type="button"
																		class="leading-none rounded-lg transition ease-in-out duration-100 inline-flex items-center cursor-pointer hover:bg-gray-200 p-1 mr-2"><svg
																			fill="none" viewBox="0 0 24 24"
																			stroke="currentColor"
																			class="h-6 w-6 text-gray-500 inline-flex leading-none">
																			<path stroke-linecap="round"
																				stroke-linejoin="round" stroke-width="2"
																				d="M15 19l-7-7 7-7">
																			</path>
																		</svg></button>
																	<div class="border-r inline-flex h-6"></div> <button
																		type="button"
																		class="leading-none rounded-lg transition ease-in-out duration-100 inline-flex items-center cursor-pointer hover:bg-gray-200 p-1 ml-2"><svg
																			fill="none" viewBox="0 0 24 24"
																			stroke="currentColor"
																			class="h-6 w-6 text-gray-500 inline-flex leading-none">
																			<path stroke-linecap="round"
																				stroke-linejoin="round" stroke-width="2"
																				d="M9 5l7 7-7 7">
																			</path>
																		</svg></button>
																</div>
															</div>
														</div>
														<div>
															<div class="lg:hidden">
																<ol class="grid grid-cols-7 relative">
																	<li
																		class="flex justify-center items-center border-b relative py-6 text-sm">
																		ПН
																	</li>
																	<li
																		class="flex justify-center items-center border-b relative py-6 text-sm">
																		ВТ
																	</li>
																	<li
																		class="flex justify-center items-center border-b relative py-6 text-sm">
																		СР
																	</li>
																	<li
																		class="flex justify-center items-center border-b relative py-6 text-sm">
																		ЧТ
																	</li>
																	<li
																		class="flex justify-center items-center border-b relative py-6 text-sm">
																		ПТ
																	</li>
																	<li
																		class="flex justify-center items-center border-b relative py-6 text-sm">
																		СБ
																	</li>
																	<li
																		class="flex justify-center items-center border-b relative py-6 text-sm">
																		ВС
																	</li>
																</ol>
															</div>
															<div class="hidden lg:block">
																<ol class="grid grid-cols-7 relative">
																	<li
																		class="flex justify-center items-center border-b relative py-6 text-sm">
																		Понедельник
																	</li>
																	<li
																		class="flex justify-center items-center border-b relative py-6 text-sm">
																		Вторник
																	</li>
																	<li
																		class="flex justify-center items-center border-b relative py-6 text-sm">
																		Среда
																	</li>
																	<li
																		class="flex justify-center items-center border-b relative py-6 text-sm">
																		Четверг
																	</li>
																	<li
																		class="flex justify-center items-center border-b relative py-6 text-sm">
																		Пятница
																	</li>
																	<li
																		class="flex justify-center items-center border-b relative py-6 text-sm">
																		Суббота
																	</li>
																	<li
																		class="flex justify-center items-center border-b relative py-6 text-sm">
																		Воскресенье
																	</li>
																</ol>
															</div>
														</div>
														<ol class="grid grid-cols-7 gap-1 px-1">
															<li
																class="border-b relative calendar-day calendar-day--not-current">
																<div class="absolute z-20 top-2 left-1.5 sm:left-2">
																	<div
																		class="inline-flex w-8 h-8 items-center justify-center cursor-pointer text-center leading-none rounded-full font-medium bg-white text-gray-300">
																		30
																	</div>
																</div>
																<div class="events leading-5">
																</div>
															</li>
															<li
																class="border-b relative calendar-day calendar-day--not-current">
																<div class="absolute z-20 top-2 left-1.5 sm:left-2">
																	<div
																		class="inline-flex w-8 h-8 items-center justify-center cursor-pointer text-center leading-none rounded-full font-medium bg-white text-gray-300">
																		31
																	</div>
																</div>
																<div class="events leading-5">
																</div>
															</li>
															<li class="border-b relative calendar-day">
																<div class="absolute z-20 top-2 left-1.5 sm:left-2">
																	<div
																		class="inline-flex w-8 h-8 items-center justify-center cursor-pointer text-center leading-none rounded-full font-medium bg-white">
																		1
																	</div>
																</div>
																<div class="events leading-5">
																</div>
															</li>
															<li class="border-b relative calendar-day">
																<div class="absolute z-20 top-2 left-1.5 sm:left-2">
																	<div
																		class="inline-flex w-8 h-8 items-center justify-center cursor-pointer text-center leading-none rounded-full font-medium bg-white">
																		2
																	</div>
																</div>
																<div class="events leading-5">
																</div>
															</li>
															<li class="border-b relative calendar-day">
																<div class="absolute z-20 top-2 left-1.5 sm:left-2">
																	<div
																		class="inline-flex w-8 h-8 items-center justify-center cursor-pointer text-center leading-none rounded-full font-medium bg-white">
																		3
																	</div>
																</div>
																<div class="events leading-5">
																</div>
															</li>
															<li class="border-b relative calendar-day">
																<div class="absolute z-20 top-2 left-1.5 sm:left-2">
																	<div
																		class="inline-flex w-8 h-8 items-center justify-center cursor-pointer text-center leading-none rounded-full font-medium bg-white">
																		4
																	</div>
																</div>
																<div class="events leading-5">
																</div>
															</li>
															<li class="border-b relative calendar-day">
																<div class="absolute z-20 top-2 left-1.5 sm:left-2">
																	<div
																		class="inline-flex w-8 h-8 items-center justify-center cursor-pointer text-center leading-none rounded-full font-medium bg-white">
																		5
																	</div>
																</div>
																<div class="events leading-5">
																</div>
															</li>
															<li class="border-b relative calendar-day">
																<div class="absolute z-20 top-2 left-1.5 sm:left-2">
																	<div
																		class="inline-flex w-8 h-8 items-center justify-center cursor-pointer text-center leading-none rounded-full font-medium bg-white">
																		6
																	</div>
																</div>
																<div class="events leading-5">
																</div>
															</li>
															<li class="border-b relative calendar-day">
																<div class="absolute z-20 top-2 left-1.5 sm:left-2">
																	<div
																		class="inline-flex w-8 h-8 items-center justify-center cursor-pointer text-center leading-none rounded-full font-medium bg-white">
																		7
																	</div>
																</div>
																<div class="events leading-5">
																</div>
															</li>
															<li class="border-b relative calendar-day">
																<div class="absolute z-20 top-2 left-1.5 sm:left-2">
																	<div
																		class="inline-flex w-8 h-8 items-center justify-center cursor-pointer text-center leading-none rounded-full font-medium bg-white">
																		8
																	</div>
																</div>
																<div class="events leading-5">
																</div>
															</li>
															<li class="border-b relative calendar-day">
																<div class="absolute z-20 top-2 left-1.5 sm:left-2">
																	<div
																		class="inline-flex w-8 h-8 items-center justify-center cursor-pointer text-center leading-none rounded-full font-medium bg-white active ">
																		9
																	</div>
																</div>
																<div class="events leading-5">
																	<div class="event-inner card mb-1 theme-2"><a
																			href="/events/seminar-bazovyj-base-nimue-moskva/?date=2025-01-09"
																			class="unstyled stretched-link"
																			style="right:0;"><span
																				class="hidden lg:inline">Семинар
																				базовый: BASE
																				Nimue Москва</span></a></div>
																</div>
															</li>
															<li class="border-b relative calendar-day">
																<div class="absolute z-20 top-2 left-1.5 sm:left-2">
																	<div
																		class="inline-flex w-8 h-8 items-center justify-center cursor-pointer text-center leading-none rounded-full font-medium bg-white active ">
																		10
																	</div>
																</div>
																<div class="events leading-5">
																	<div class="event-inner card mb-1 theme-inverse"><a
																			href="/events/seminar-bazovyj-base/?date=2025-01-10"
																			class="unstyled stretched-link"
																			style="right:0;"><span
																				class="hidden lg:inline">Семинар
																				базовый: BASE
																				Forlle'd Москва</span></a></div>
																</div>
															</li>
															<li class="border-b relative calendar-day">
																<div class="absolute z-20 top-2 left-1.5 sm:left-2">
																	<div
																		class="inline-flex w-8 h-8 items-center justify-center cursor-pointer text-center leading-none rounded-full font-medium bg-white">
																		11
																	</div>
																</div>
																<div class="events leading-5">
																</div>
															</li>
															<li class="border-b relative calendar-day">
																<div class="absolute z-20 top-2 left-1.5 sm:left-2">
																	<div
																		class="inline-flex w-8 h-8 items-center justify-center cursor-pointer text-center leading-none rounded-full font-medium bg-white">
																		12
																	</div>
																</div>
																<div class="events leading-5">
																</div>
															</li>
															<li class="border-b relative calendar-day">
																<div class="absolute z-20 top-2 left-1.5 sm:left-2">
																	<div
																		class="inline-flex w-8 h-8 items-center justify-center cursor-pointer text-center leading-none rounded-full font-medium bg-white active ">
																		13
																	</div>
																</div>
																<div class="events leading-5">
																	<div class="event-inner card mb-1 theme-2"><a
																			href="/events/seminar-bazovyj-base-nimue-moskva/?date=2025-01-13"
																			class="unstyled stretched-link"
																			style="right:0;"><span
																				class="hidden lg:inline">Семинар
																				базовый: BASE
																				Nimue Москва</span></a></div>
																</div>
															</li>
															<li class="border-b relative calendar-day">
																<div class="absolute z-20 top-2 left-1.5 sm:left-2">
																	<div
																		class="inline-flex w-8 h-8 items-center justify-center cursor-pointer text-center leading-none rounded-full font-medium bg-white active ">
																		14
																	</div>
																</div>
																<div class="events leading-5">
																	<div class="event-inner card mb-1 theme-2"><a
																			href="/events/seminar-bazovyj-base-nimue-sankt-peterburg/?date=2025-01-14"
																			class="unstyled stretched-link"
																			style="right:0;"><span
																				class="hidden lg:inline">Семинар
																				базовый: BASE
																				Nimue Санкт-Петербург</span></a></div>

																	<div class="event-inner card mb-1 theme-inverse"><a
																			href="/events/seminar-bazovyj-base/?date=2025-01-14"
																			class="unstyled stretched-link"
																			style="right:0;"><span
																				class="hidden lg:inline">Семинар
																				базовый: BASE
																				Forlle'd Москва</span></a></div>
																</div>
															</li>
															<li class="border-b relative calendar-day">
																<div class="absolute z-20 top-2 left-1.5 sm:left-2">
																	<div
																		class="inline-flex w-8 h-8 items-center justify-center cursor-pointer text-center leading-none rounded-full font-medium bg-white">
																		15
																	</div>
																</div>
																<div class="events leading-5">
																</div>
															</li>
															<li class="border-b relative calendar-day">
																<div class="absolute z-20 top-2 left-1.5 sm:left-2">
																	<div
																		class="inline-flex w-8 h-8 items-center justify-center cursor-pointer text-center leading-none rounded-full font-medium bg-white active ">
																		16
																	</div>
																</div>
																<div class="events leading-5">
																	<div class="event-inner card mb-1 theme-2"><a
																			href="/events/seminar-bazovyj-base-nimue-moskva/?date=2025-01-16"
																			class="unstyled stretched-link"
																			style="right:0;"><span
																				class="hidden lg:inline">Семинар
																				базовый: BASE
																				Nimue Москва</span></a></div>
																	<div class="event-inner card mb-1 theme-inverse"><a
																			href="/events/seminar-bazovyj-base-sankt-pererburg/?date=2025-01-16"
																			class="unstyled stretched-link"
																			style="right:0;"><span
																				class="hidden lg:inline">Семинар
																				базовый: BASE
																				Forlle'd Санкт-Петербург</span></a>
																	</div>
																</div>
															</li>
															<li class="border-b relative calendar-day">
																<div class="absolute z-20 top-2 left-1.5 sm:left-2">
																	<div
																		class="inline-flex w-8 h-8 items-center justify-center cursor-pointer text-center leading-none rounded-full font-medium bg-white active ">
																		17
																	</div>
																</div>
																<div class="events leading-5">
																	<div class="event-inner card mb-1 theme-inverse"><a
																			href="/events/seminar-bazovyj-base/?date=2025-01-17"
																			class="unstyled stretched-link"
																			style="right:0;"><span
																				class="hidden lg:inline">Семинар
																				базовый: BASE
																				Forlle'd Москва</span></a></div>
																</div>
															</li>
															<li class="border-b relative calendar-day">
																<div class="absolute z-20 top-2 left-1.5 sm:left-2">
																	<div
																		class="inline-flex w-8 h-8 items-center justify-center cursor-pointer text-center leading-none rounded-full font-medium bg-white">
																		18
																	</div>
																</div>
																<div class="events leading-5">
																</div>
															</li>
															<li class="border-b relative calendar-day">
																<div class="absolute z-20 top-2 left-1.5 sm:left-2">
																	<div
																		class="inline-flex w-8 h-8 items-center justify-center cursor-pointer text-center leading-none rounded-full font-medium bg-white">
																		19
																	</div>
																</div>
																<div class="events leading-5">
																</div>
															</li>
															<li class="border-b relative calendar-day">
																<div class="absolute z-20 top-2 left-1.5 sm:left-2">
																	<div
																		class="inline-flex w-8 h-8 items-center justify-center cursor-pointer text-center leading-none rounded-full font-medium bg-white active ">
																		20
																	</div>
																</div>
																<div class="events leading-5">
																	<div class="event-inner card mb-1 theme-2"><a
																			href="/events/seminar-bazovyj-base-nimue-sankt-peterburg/?date=2025-01-20"
																			class="unstyled stretched-link"
																			style="right:0;"><span
																				class="hidden lg:inline">Семинар
																				базовый: BASE
																				Nimue Санкт-Петербург</span></a></div>

																	<div class="event-inner card mb-1 theme-2"><a
																			href="/events/seminar-bazovyj-base-nimue-moskva/?date=2025-01-20"
																			class="unstyled stretched-link"
																			style="right:0;"><span
																				class="hidden lg:inline">Семинар
																				базовый: BASE
																				Nimue Москва</span></a></div>
																</div>
															</li>
															<li
																class="border-b relative calendar-day calendar-day--today">
																<div class="absolute z-20 top-2 left-1.5 sm:left-2">
																	<div
																		class="inline-flex w-8 h-8 items-center justify-center cursor-pointer text-center leading-none rounded-full font-medium bg-white active  theme-dark">
																		21
																	</div>
																</div>
																<div class="events leading-5">
																	<div class="event-inner card mb-1 theme-inverse"><a
																			href="/events/seminar-bazovyj-base/?date=2025-01-21"
																			class="unstyled stretched-link"
																			style="right:0;"><span
																				class="hidden lg:inline">Семинар
																				базовый: BASE
																				Forlle'd Москва</span></a></div>
																</div>
															</li>
															<li class="border-b relative calendar-day">
																<div class="absolute z-20 top-2 left-1.5 sm:left-2">
																	<div
																		class="inline-flex w-8 h-8 items-center justify-center cursor-pointer text-center leading-none rounded-full font-medium bg-white active ">
																		22
																	</div>
																</div>
																<div class="events leading-5">
																	<div class="event-inner card mb-1 theme-inverse"><a
																			href="/events/seminar-bazovyj-base-sankt-pererburg/?date=2025-01-22"
																			class="unstyled stretched-link"
																			style="right:0;"><span
																				class="hidden lg:inline">Семинар
																				базовый: BASE
																				Forlle'd Санкт-Петербург</span></a>
																	</div>
																</div>
															</li>
															<li class="border-b relative calendar-day">
																<div class="absolute z-20 top-2 left-1.5 sm:left-2">
																	<div
																		class="inline-flex w-8 h-8 items-center justify-center cursor-pointer text-center leading-none rounded-full font-medium bg-white active ">
																		23
																	</div>
																</div>
																<div class="events leading-5">
																	<div class="event-inner card mb-1 theme-2"><a
																			href="/events/seminar-bazovyj-base-nimue-moskva/?date=2025-01-23"
																			class="unstyled stretched-link"
																			style="right:0;"><span
																				class="hidden lg:inline">Семинар
																				базовый: BASE
																				Nimue Москва</span></a></div>
																</div>
															</li>
															<li class="border-b relative calendar-day">
																<div class="absolute z-20 top-2 left-1.5 sm:left-2">
																	<div
																		class="inline-flex w-8 h-8 items-center justify-center cursor-pointer text-center leading-none rounded-full font-medium bg-white active ">
																		24
																	</div>
																</div>
																<div class="events leading-5">
																	<div class="event-inner card mb-1 theme-2"><a
																			href="/events/seminar-bazovyj-base-nimue-sankt-peterburg/?date=2025-01-24"
																			class="unstyled stretched-link"
																			style="right:0;"><span
																				class="hidden lg:inline">Семинар
																				базовый: BASE
																				Nimue Санкт-Петербург</span></a></div>

																	<div class="event-inner card mb-1 theme-inverse"><a
																			href="/events/seminar-bazovyj-base/?date=2025-01-24"
																			class="unstyled stretched-link"
																			style="right:0;"><span
																				class="hidden lg:inline">Семинар
																				базовый: BASE
																				Forlle'd Москва</span></a></div>
																</div>
															</li>
															<li class="border-b relative calendar-day">
																<div class="absolute z-20 top-2 left-1.5 sm:left-2">
																	<div
																		class="inline-flex w-8 h-8 items-center justify-center cursor-pointer text-center leading-none rounded-full font-medium bg-white">
																		25
																	</div>
																</div>
																<div class="events leading-5">
																</div>
															</li>
															<li class="border-b relative calendar-day">
																<div class="absolute z-20 top-2 left-1.5 sm:left-2">
																	<div
																		class="inline-flex w-8 h-8 items-center justify-center cursor-pointer text-center leading-none rounded-full font-medium bg-white">
																		26
																	</div>
																</div>
																<div class="events leading-5">
																</div>
															</li>
															<li class="border-b relative calendar-day">
																<div class="absolute z-20 top-2 left-1.5 sm:left-2">
																	<div
																		class="inline-flex w-8 h-8 items-center justify-center cursor-pointer text-center leading-none rounded-full font-medium bg-white active ">
																		27
																	</div>
																</div>
																<div class="events leading-5">
																	<div class="event-inner card mb-1 theme-2"><a
																			href="/events/seminar-bazovyj-base-nimue-moskva/?date=2025-01-27"
																			class="unstyled stretched-link"
																			style="right:0;"><span
																				class="hidden lg:inline">Семинар
																				базовый: BASE
																				Nimue Москва</span></a></div>
																	<div class="event-inner card mb-1 theme-inverse"><a
																			href="/events/seminar-bazovyj-base-sankt-pererburg/?date=2025-01-27"
																			class="unstyled stretched-link"
																			style="right:0;"><span
																				class="hidden lg:inline">Семинар
																				базовый: BASE
																				Forlle'd Санкт-Петербург</span></a>
																	</div>
																</div>
															</li>
															<li class="border-b relative calendar-day">
																<div class="absolute z-20 top-2 left-1.5 sm:left-2">
																	<div
																		class="inline-flex w-8 h-8 items-center justify-center cursor-pointer text-center leading-none rounded-full font-medium bg-white active ">
																		28
																	</div>
																</div>
																<div class="events leading-5">
																	<div class="event-inner card mb-1 theme-inverse"><a
																			href="/events/seminar-bazovyj-base/?date=2025-01-28"
																			class="unstyled stretched-link"
																			style="right:0;"><span
																				class="hidden lg:inline">Семинар
																				базовый: BASE
																				Forlle'd Москва</span></a></div>
																</div>
															</li>
															<li class="border-b relative calendar-day">
																<div class="absolute z-20 top-2 left-1.5 sm:left-2">
																	<div
																		class="inline-flex w-8 h-8 items-center justify-center cursor-pointer text-center leading-none rounded-full font-medium bg-white active ">
																		29
																	</div>
																</div>
																<div class="events leading-5">
																	<div class="event-inner card mb-1 theme-2"><a
																			href="/events/seminar-bazovyj-base-nimue-sankt-peterburg/?date=2025-01-29"
																			class="unstyled stretched-link"
																			style="right:0;"><span
																				class="hidden lg:inline">Семинар
																				базовый: BASE
																				Nimue Санкт-Петербург</span></a></div>
																</div>
															</li>
															<li class="border-b relative calendar-day">
																<div class="absolute z-20 top-2 left-1.5 sm:left-2">
																	<div
																		class="inline-flex w-8 h-8 items-center justify-center cursor-pointer text-center leading-none rounded-full font-medium bg-white active ">
																		30
																	</div>
																</div>
																<div class="events leading-5">
																	<div class="event-inner card mb-1 theme-2"><a
																			href="/events/seminar-bazovyj-base-nimue-moskva/?date=2025-01-30"
																			class="unstyled stretched-link"
																			style="right:0;"><span
																				class="hidden lg:inline">Семинар
																				базовый: BASE
																				Nimue Москва</span></a></div>
																</div>
															</li>
															<li class="border-b relative calendar-day">
																<div class="absolute z-20 top-2 left-1.5 sm:left-2">
																	<div
																		class="inline-flex w-8 h-8 items-center justify-center cursor-pointer text-center leading-none rounded-full font-medium bg-white active ">
																		31
																	</div>
																</div>
																<div class="events leading-5">
																	<div class="event-inner card mb-1 theme-inverse"><a
																			href="/events/seminar-bazovyj-base-sankt-pererburg/?date=2025-01-31"
																			class="unstyled stretched-link"
																			style="right:0;"><span
																				class="hidden lg:inline">Семинар
																				базовый: BASE
																				Forlle'd Санкт-Петербург</span></a>
																	</div>
																	<div class="event-inner card mb-1 theme-inverse"><a
																			href="/events/seminar-bazovyj-base/?date=2025-01-31"
																			class="unstyled stretched-link"
																			style="right:0;"><span
																				class="hidden lg:inline">Семинар
																				базовый: BASE
																				Forlle'd Москва</span></a></div>
																</div>
															</li>
															<li
																class="border-b relative calendar-day calendar-day--not-current">
																<div class="absolute z-20 top-2 left-1.5 sm:left-2">
																	<div
																		class="inline-flex w-8 h-8 items-center justify-center cursor-pointer text-center leading-none rounded-full font-medium bg-white text-gray-300">
																		1
																	</div>
																</div>
																<div class="events leading-5">
																</div>
															</li>
															<li
																class="border-b relative calendar-day calendar-day--not-current">
																<div class="absolute z-20 top-2 left-1.5 sm:left-2">
																	<div
																		class="inline-flex w-8 h-8 items-center justify-center cursor-pointer text-center leading-none rounded-full font-medium bg-white text-gray-300">
																		2
																	</div>
																</div>
																<div class="events leading-5">
																</div>
															</li>
														</ol>
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
			</div>
		</div>
	</div>
</template>

<script>
// import PrimeButton from '@/views/ui/buttons/PrimeButton.vue';

export default {
	name: 'Calendar',
	props: {
		title: {
			type: String,
			// required: true,
		},
	},
	methods: {},
	components: {},
};
</script>

<style scoped></style>
