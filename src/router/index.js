import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login'
import Home from '@/views/Home'
import AGCFrequencyModulation from '@/views/PerformanceIndicators/AGCFrequencyModulation'
import AGCAdjustVolume from '@/views/PerformanceIndicators/AGCAdjustVolume'
import OneTimeFrequencyModulation from '@/views/PerformanceIndicators/OneTimeFrequencyModulation'
import AncillaryServices from '@/views/TwoRules/AncillaryServices'
import TheDeepMonthly from '@/views/TwoRules/TheDeepMonthly'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Login',
		component: Login,
	},
	{
		path: '/Home',
		name: 'Home',
		component: Home,
		children: [
			{
				path: 'AGCFrequencyModulation',
				name: 'AGC性能指标',
				component: AGCFrequencyModulation,
			},
			{
				path: 'AGCAdjustVolume',
				name: 'AGC调节容量',
				component: AGCAdjustVolume,
			},
			{
				path: 'OneTimeFrequencyModulation',
				name: '一次性调频性能指标',
				component: OneTimeFrequencyModulation,
			},
			{
				path: 'AncillaryServices',
				name: '辅助服务对标分析',
				component: AncillaryServices,
			},
			{
				path: 'TheDeepMonthly',
				name: '月度深调收益信息表',
				component: TheDeepMonthly,
			},
		],
	},
]

const router = new VueRouter({
	routes,
})

export default router
