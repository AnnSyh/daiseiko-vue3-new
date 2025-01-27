<template>
	<div>
		<TopMenu :menuItems="menuItems" :activeItem="activeItem" @itemSelected="handleItemSelected" />
		<ADFirstBlock />
		<AkademiyaDaiseikoTypesOfTraiding :items="cardStore.ADTypesOfTraiding" />
		<AkademiyaDaiseikoTeachers :items="cardStore.ADTeachers" />
		<Calendar :title="title"/>
		<ADSpecialConditions />

		<!-- Обратная связь c формой справа -->
		<NimueFeedback :items="dataFeedback" :class="bgPanelClass" />


	</div>
</template>

<script>
import { ref } from 'vue';
import TopMenu from '@/components/TopMenu.vue'
import ADFirstBlock from '@/components/ADFirstBlock.vue'
import AkademiyaDaiseikoTypesOfTraiding from '@/components/ADTypesOfTraiding.vue'
import AkademiyaDaiseikoTeachers from '@/components/ADTeachers.vue'
import Calendar from '@/components/Calendar.vue'
import NimueFeedback from '@/components/NimueFeedback.vue'
import ADSpecialConditions from '@/components/ADSpecialConditions.vue'

import { useCardStore } from '@/store/store.js';


export default {
	name: 'AkademiyaDaiseiko',
	data() {
		return {
			menuItems: [
				{ name: 'Академия Дайсэйко', link: '/akademiya-daiseiko' },
				{ name: 'Условия обучения', link: '/akademiya-daiseiko/usloviya-obucheniya' },
				{ name: 'Процедуры', link: '/procedury' },
			],
			activeItem: 'Академия Дайсэйко',
			title:'Расписание семинаров и мастерклассов',
			bgPanelClass: 'panel-theme-inverse',
			dataFeedback: [
				{
					id: 1,
					content: '<div class="fs-2 mb-4  block-text" ><h2 class="tt-h">Обратная связь с Академией Daiseiko</h2></div> <div class="fs-5  block-text" ><p class="tt-p">если у вас есть вопросы по работе академии или программам, пожалуйста воспользуйтесь контактными данными или заполните форму  обратной связи</p><ul class="tt-ul"><li><p class="tt-p">&nbsp;&nbsp;Москва <a target="true" rel="noopener noreferrer nofollow" href="tel:+7(495)225-94-57">+7(495)225-94-57</a></p></li><li><p class="tt-p">&nbsp;&nbsp;Санкт-Петербург<a target="true" rel="noopener noreferrer nofollow" href="tel:+7(812)244-79-19"> +7(812)244-79-19</a></p></li><li><p class="tt-p">&nbsp;&nbsp;базовые клиники субдистрибьюторов</p></li></ul></div>'
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
		const isFilterOpen = ref(false);
		const cardStore = useCardStore();

		const toggleFilter = () => {
			isFilterOpen.value = !isFilterOpen.value;
		};


		return {
			isFilterOpen,
			toggleFilter,
			cardStore
		};
	},
	components: {
		TopMenu,
		ADFirstBlock,
		AkademiyaDaiseikoTypesOfTraiding,
		AkademiyaDaiseikoTeachers,
		Calendar,
		NimueFeedback,
		ADSpecialConditions,
	}
};
</script>

<style scoped></style>
