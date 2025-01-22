import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ProfessionalnayaLiniya from '@/views/ProfessionalnayaLiniya.vue'
import DomashnijUhod from '@/views/DomashnijUhod.vue'
import Kompaniya from '@/views/Kompaniya.vue'
import Nimue from '@/views/Nimue.vue'
import ProductView from '@/views/ProductView.vue'
import Novosti from '@/views/Novosti.vue'
import NovostiView from '@/views/NovostiView.vue'
import NovostView from '@/views/NovostView.vue'
import AkademiyaDaiseiko from '@/views/AkademiyaDaiseiko.vue'
import UsloviyaObucheniya from '@/views/UsloviyaObucheniya.vue'
import Procedury from '@/views/Procedury.vue'


const routes = [
	{ path: '/', component: HomeView },
	{ path: '/professionalnayaLiniya', component: ProfessionalnayaLiniya},
	{ path: '/domashnijUhod', component: DomashnijUhod},
	{ path: '/kompaniya', component: Kompaniya},
	{ path: '/kompaniya/nimue', component: Nimue},
	{ path: '/professionalnaya-liniya/product', component: ProductView},
	{ path: '/novosti', component: Novosti},
	{ path: '/novosti/events/', component: NovostiView},
	{ path: '/article/novost/', component: NovostView},
	{ path: '/akademiya-daiseiko', component: AkademiyaDaiseiko},
	{ path: '/akademiya-daiseiko/usloviya-obucheniya', component: UsloviyaObucheniya},
	{ path: '/procedury', component: Procedury}
  ];
  
  const router = createRouter({
	history: createWebHistory(),
	routes
  });

export default router
