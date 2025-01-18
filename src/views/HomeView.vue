<template>
	<div>
		<!-- <h1>Добро пожаловать на главную страницу!</h1> -->
		<IndexDaiseiko/>
		<IndexContent/>
	</div>

</template>

<script>
import IndexDaiseiko from '@/components/IndexDaiseiko.vue';
import IndexContent from '@/components/IndexContent.vue';

export default {
  components: { IndexDaiseiko,  IndexContent},
  name: 'HomeView'
}
</script>
