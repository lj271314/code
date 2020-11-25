<template>
	<el-container class="home_container">
		<el-header>
			<div class="header_title">
				<span>后台管理系统</span>
			</div>
			<div class="app-header-userinfo">
				<el-dropdown trigger="hover" :hide-on-click="false">
					<span class="el-dropdown-link">
						{{ username }}
						<i class="el-icon-arrow-down el-icon--right"></i>
					</span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item @click.native="logout"
							>退出登录</el-dropdown-item
						>
					</el-dropdown-menu>
				</el-dropdown>
			</div>
		</el-header>
		<!-- 页面主体 -->
		<el-container>
			<!-- 侧边栏 -->
			<el-aside>
				<el-row class="tac">
					<el-col :span="12">
						<el-menu
							default-active="2"
							class="el-menu-vertical-demo"
							router
							collapse-transition:false
							style="border-right: none"
						>
							<el-submenu index="1">
								<template slot="title">
									<span>系统管理</span>
								</template>
								<el-menu-item-group>
									<el-menu-item index="1-1"
										>用户管理</el-menu-item
									>
									<el-menu-item index="1-2"
										>角色管理</el-menu-item
									>
									<el-menu-item index="1-3"
										>菜单管理</el-menu-item
									>
									<el-menu-item index="1-4"
										>部门管理</el-menu-item
									>
								</el-menu-item-group>
							</el-submenu>
							<el-submenu index="2">
								<template slot="title">
									<span>性能指标</span>
								</template>
								<el-menu-item-group>
									<el-menu-item
										index="2-1"
										@click="toAGCFrequencyModulation"
										>AGC性能指标</el-menu-item
									>
									<el-menu-item
										index="2-2"
										@click="toAGCAdjustVolume"
										>AGC调节容量</el-menu-item
									>
									<el-menu-item
										index="2-3"
										@click="toOneTimeFrequencyModulation"
										>一次性调频性能指标</el-menu-item
									>
								</el-menu-item-group>
							</el-submenu>
							<el-submenu index="3">
								<template slot="title">
									<span>两个细则</span>
								</template>
								<el-menu-item-group>
									<el-menu-item
										index="3-1"
										@click="toAncillaryServices"
										>辅助服务对标分析
									</el-menu-item>
									<el-menu-item
										index="3-2"
										@click="toTheDeepMonthly"
										>月度深调收益信息表</el-menu-item
									>
								</el-menu-item-group>
							</el-submenu>
						</el-menu>
					</el-col>
				</el-row>
			</el-aside>
			<!-- 右侧内容主体 -->
			<el-main>
				<router-view />
			</el-main>
		</el-container>
	</el-container>
</template>

<script>
export default {
	data() {
		return {
			total: 0,
			currentPage1: 5,
			value2: '',
			username: '',
			isCollapse: false,
		}
	},
	create() {},
	methods: {
		toAGCFrequencyModulation() {
			this.$router.push('/Home/AGCFrequencyModulation')
		},

		toAGCAdjustVolume() {
			this.$router.push('/Home/AGCAdjustVolume')
		},

		toOneTimeFrequencyModulation() {
			this.$router.push('/Home/OneTimeFrequencyModulation')
		},

		toAncillaryServices() {
			this.$router.push('/Home/AncillaryServices')
		},
		toTheDeepMonthly() {
			this.$router.push('/Home/TheDeepMonthly')
		},
		logout: function () {
			this.$confirm('确认退出?', '提示', {})
				.then(() => {
					sessionStorage.removeItem('user')
					this.$router.push('/')
				})
				.catch(() => {})
		},
		handleNodeClick(data) {
			console.log(this.data)
			if (this.data.label == 'AGC性能指标') {
				this.$router.push('/Home/ACFGMacdeeilnnooqrtuuy')
			}
		},
	},

	mounted: function () {
		let user = sessionStorage.getItem('user')
		if (user) {
			this.username = user
		}
	},
}
</script>

<style lang="scss" scoped>
.home_container {
	height: 100%;
}
.el-header {
	background-color: skyblue;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-left: 0;
	color: #fff;
	font-size: 20px;
	div {
		display: flex;
		align-items: center;
	}
	.header_title span {
		margin-left: 20px;
	}
}
.el-main {
	background-color: #fff;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
	width: 200px;
	min-height: 400px;
}
.text {
	font-size: 14px;
}

.item {
	margin-bottom: 18px;
}
</style>
