<template>
	<div>
		<TopMenu :menuItems="menuItems" :activeItem="activeItem" @itemSelected="handleItemSelected" />

		<UsloviyaObucheniyaFirstBlock />
		<UsloviyaObucheniyaContent :items="cardStore.UsloviyaObucheniyaContent"/>
		<UsloviyaObucheniyaPersonalCertificate />
		<UsloviyaObucheniyaEducationalMaterials  :items="cardStore.UsloviyaObucheniyaEducationalMaterials"/>
		<UsloviyaObucheniyaAccessories  :items="cardStore.UsloviyaObucheniyaAccessories"/>
		<!-- Обратная связь c формой справа -->
		<NimueFeedback :items="dataFeedback" :class="bgPanelClass" />


	</div>
</template>

<script>
import TopMenu from '@/components/TopMenu.vue'
import UsloviyaObucheniyaFirstBlock from '@/components/UsloviyaObucheniyaFirstBlock.vue'
import UsloviyaObucheniyaContent from '@/components/UsloviyaObucheniyaContent.vue'
import UsloviyaObucheniyaPersonalCertificate from '@/components/UsloviyaObucheniyaPersonalCertificate.vue'
import NimueFeedback from '@/components/NimueFeedback.vue'
import UsloviyaObucheniyaEducationalMaterials from '@/components/UsloviyaObucheniyaEducationalMaterials.vue'
import UsloviyaObucheniyaAccessories from '@/components/UsloviyaObucheniyaAccessories.vue'

import { useCardStore } from '@/store/store.js';



export default {
	name: 'UsloviyaObucheniya',
	data() {
		return {
			menuItems: [
				{ name: 'Академия Дайсэйко', link: '/akademiya-daiseiko' },
				{ name: 'Условия обучения', link: '/akademiya-daiseiko/usloviya-obucheniya' },
				{ name: 'Процедуры', link: '/procedury' },
			],
			activeItem: 'Условия обучения',
			bgPanelClass: 'panel-theme-inverse',
			dataFeedback: [
				{
					id: 1,
					content: '<div class="fs-2 mb-4  block-text">Форма обратной связи</div> <div class="fs-5  block-text" ><p class="tt-p">Чтобы связаться с менеджерами нашего офиса, оставьте контактные данные и ваш вопрос. <br>Мы свяжемся с вами в течение 3 рабочих дней.</p></div>'
				}
			]			
		};
	},
	methods: {
		handleItemSelected(item) {
			this.activeItem = item.name;
		},
	},
	setup() {
		const cardStore = useCardStore();

		return {
			cardStore
		};
	},
	components: {
		TopMenu,
		UsloviyaObucheniyaFirstBlock,
		UsloviyaObucheniyaContent,
		UsloviyaObucheniyaPersonalCertificate,
		NimueFeedback,
		UsloviyaObucheniyaEducationalMaterials,
		UsloviyaObucheniyaAccessories,
	}
};
</script>

<style scoped></style>
