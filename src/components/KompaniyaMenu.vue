<template>
		<div class="block panel panel-theme-light he-04">
			<!-- <div class="panel_background-image absolute inset-0 z-0 bg-no-repeat bg-center bg-auto"></div> -->

			<div class="relative pt-0 pb-0">
				<div>
					<div class="block-overflow-x-auto block-overflow-y w-full">
						<div class="container">
							<div class="mx-auto max-w-full">
								<div class="text-left">
									<div class="sidebar-menu">
										<div class="repeater-list inline-flex justify-start Item">
											<div class="repeater-list-item">
												<div for="repeater" class="block-button-wrap active">
													<router-link to="/kompaniya" class="relative btn menu-btn">
														<span contenteditable="false" class="text">
															Forlle’d
														</span>
													</router-link>
												</div>
											</div>
											<div class="repeater-list-item">
												<div for="repeater" class="block-button-wrap">
													<router-link to="/kompaniya/nimue" target="_self"
														class="relative btn menu-btn">
														<span contenteditable="false" class="text">
															Nimue
														</span>
													</router-link>
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
	name: 'KompaniyaMenu',
	props: {},
	methods: {},
	components: {},
};
</script>

<style scoped></style>
