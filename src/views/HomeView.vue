<template>
	<div>
		<!-- <h1>Добро пожаловать на главную страницу!</h1> -->

		<!-- <h1>Count: {{ counter.count }}</h1>
		<button @click="counter.increment">Increment</button> -->

		<IndexDaiseiko />


		<div class="block panel panel-theme-default">
			<div class="relative block-overflow  pt-16 pb-16">
				<div class="container">
					<div class="mx-auto max-w-full">
						<div class="panel_body">
							<div class="relative">

								<!-- <p>cardStore.cards = {{cardStore.indexCards}}</p> -->
								<IndexContent :items="cardStore.indexCards" />

							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

	</div>

</template>

<script>
import IndexDaiseiko from '@/components/IndexDaiseiko.vue';
import IndexContent from '@/components/IndexContent.vue';

import { useCardStore } from '@/store/store.js';

export default {
	data() {
		return {};
	},
	setup() {
		const cardStore = useCardStore();
		return { cardStore };
	},
	computed: {},
	components: { IndexDaiseiko, IndexContent },
	name: 'HomeView'
}
</script>
