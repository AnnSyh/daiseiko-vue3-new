import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ProfessionalnayaLiniya from '@/views/ProfessionalnayaLiniya.vue'
import DomashnijUhod from '@/views/DomashnijUhod.vue'
import Kompaniya from '@/views/Kompaniya.vue'
import Nimue from '@/views/Nimue.vue'


const routes = [
	{ path: '/', component: HomeView },
	{ path: '/professionalnayaLiniya', component: ProfessionalnayaLiniya},
	{ path: '/domashnijUhod', component: DomashnijUhod},
	{ path: '/kompaniya', component: Kompaniya},
	{ path: '/kompaniya/nimue', component: Nimue}
  ];
  
  const router = createRouter({
	history: createWebHistory(),
	routes
  });

export default router
