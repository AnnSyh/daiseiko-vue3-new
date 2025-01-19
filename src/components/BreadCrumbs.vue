<template>
	<nav class="mb-4">
		<ol class="flex flex-wrap items-center gap-2">
			<li>
				<div class="flex items-center text-sm border-r">
					<div class="block-button-wrap">
						<a href="/" target="_self" class="relative font-medium mr-2 text-secondary hover:!text-current "> 
							<span  class="text">
								Главная
							</span> 
						</a>
					</div>
				</div>
			</li>
			<li>
				<div class="flex items-center text-sm border-r">
					<div class="block-button-wrap">
						<a href="#" target="_self" class="relative font-medium mr-2 text-secondary hover:!text-current "> 
							<span  class="text">
								Профессиональная линия
							</span> 
						</a>
					</div>
				</div>
			</li>
			<li>
				<div class="flex items-center text-sm">
					<div class="block-button-wrap">
						<a target="_blank" class="relative font-medium text-secondary hover:!text-current "> 
							<span  class="text">
								Очищение
							</span> 
						</a>
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
	props: {},
	methods: {},
	components: {},
};
</script>

<style scoped></style>
