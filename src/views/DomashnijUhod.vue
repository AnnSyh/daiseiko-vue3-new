<template>
	<div class="about">
		<DomashnijUhodMenu/>
		<DomashnijUhodAbout/>
		<DomashnijUhodFilter/>
	</div>
</template>


<script>
import DomashnijUhodAbout from '@/components/DomashnijUhodAbout.vue';
import DomashnijUhodFilter from '@/components/DomashnijUhodFilter.vue';
import DomashnijUhodMenu from '@/components/DomashnijUhodMenu.vue';

export default {

	components: { 
		DomashnijUhodAbout,
		DomashnijUhodFilter,
		DomashnijUhodMenu,
	},
};
</script>

<style scoped></style>
