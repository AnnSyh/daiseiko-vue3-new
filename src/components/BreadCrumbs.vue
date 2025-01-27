<template>
	<nav class="mb-4">
		<ol class="flex flex-wrap items-center gap-2">
			<li v-for="item in menuItems" :key="item.name">
				<div class="flex items-center text-sm border-r">
					<div class="block-button-wrap">
						<router-link :to="item.link" @click="selectItem(item)" target="_self" 
							class="relative font-medium mr-2"
							:class="`${textColor} ${textHoverColor}`"
						> 
							<span  class="text">
								{{ item.name }}
							</span> 
						</router-link>
					</div>
				</div>
			</li>
		</ol>
	</nav>
</template>

<script>
// import { ref } from 'vue';

export default {
	name: 'BreadCrumbs',
	props: {
		menuItems: {
			type: Array,
			required: true,
		},
		activeItem: {
			type: String,
			required: true,
		},
		textColor:'',
		textHoverColor:'',

	},
	methods: {
    selectItem(item) {
      this.$emit('itemSelected', item); // Извлекаем выбранный пункт меню
    },
  },
	methods: {},
	components: {},
};
</script>

<style scoped></style>
