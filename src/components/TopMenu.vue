<template>
	<div class="block panel panel-theme-light he-04">

		<div class="relative pt-0 pb-0">
				<div class="block-overflow-x-auto block-overflow-y w-full">
					<div class="container">
						<div class="mx-auto max-w-full">
							<div class="text-left">
								<div class="sidebar-menu">
									<div class="inline-flex justify-start Item">
										<template v-for="item in menuItems" :key="item.name">
												<router-link 	:to="item.link" 
																@click="selectItem(item)"
																class="btn menu-btn"
												>
													<span class="text">
														{{ item.name }}
													</span>
												</router-link>
										</template>
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
	name: 'TopMenu',
	props: {
		menuItems: {
			type: Array,
			required: true,
		},
		activeItem: {
			type: String,
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
