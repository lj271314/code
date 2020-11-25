<template>
	<el-card class="oneTime-card">
		<div slot="header" class="clearfix">
			<div class="title"><span>一次性调频性能指标</span></div>
			<div class="edit_box" style="border-top:1px solid #ccc">
				<!-- 时间选择 -->
				<div class="date-picker_box">
					<div class="block" style="padding-right:10px">
						<span class="demonstration">开始时间:</span>
						<el-date-picker
							v-model="value1"
							type="datetime"
							placeholder="选择日期时间"
							size="mini"
							:picker-options="pickerOptions"
						>
						</el-date-picker>
					</div>
					<div class="block" style="padding-right:10px">
						<span class="demonstration">结束时间:</span>
						<el-date-picker
							v-model="value1"
							type="datetime"
							placeholder="选择日期时间"
							size="mini"
							:picker-options="pickerOptions"
						>
						</el-date-picker>
					</div>
				</div>
				<span>机组:</span>
				<el-select
					v-model="value"
					placeholder="请选择"
					style="width:100px"
					size="mini"
				>
					<el-option
						v-for="item in options"
						:key="item.value"
						:label="item.label"
						:value="item.value"
					>
					</el-option>
				</el-select>
				<el-button type="primary" size="mini">查询</el-button>
				<el-button type="primary" size="mini">转速修正</el-button>
				<el-button type="primary" size="mini">导出</el-button>
			</div>
		</div>
		<!-- 图表 -->
		<div class="charts_container">
			<div class="box_title" style="padding-right:10px;">
				<span>数据曲线图</span>
			</div>
			<div class="block" style="margin-left:-290px">
				<span class="demonstration">开始时间:</span>
				<el-date-picker
					v-model="value2"
					type="datetime"
					placeholder="选择日期时间"
					size="mini"
					:picker-options="pickerOptions"
				>
				</el-date-picker>
			</div>
			<div class="block" style="padding-right:10px;">
				<span class="demonstration">结束时间:</span>
				<el-date-picker
					v-model="value2"
					type="datetime"
					placeholder="选择日期时间"
					size="mini"
					:picker-options="pickerOptions"
				>
				</el-date-picker>
			</div>
		</div>
		<div class="text item">
			<div
				id="myChart"
				:style="{ width: '1000px', height: '300px' }"
			></div>
		</div>
		<el-card class="list-card">
			<div class="list">
				<el-table
					:data="tableData"
					style="width: 100%"
				>
					<el-table-column prop="date" label="日期" width="180">
					</el-table-column>
					<el-table-column prop="name" label="姓名" width="180">
					</el-table-column>
					<el-table-column prop="address" label="地址">
					</el-table-column>
				</el-table>
			</div>
		</el-card>
	</el-card>
</template>

<script src="echarts.min.js"></script>
<script>
export default {
	data() {
		return {
			value1: '',
			value2: '',
			options: [
				{
					value: '选项1',
					label: '1#机组',
				},
				{
					value: '选项2',
					label: '2#机组',
				},
				{
					value: '选项3',
					label: '3#机组',
				},
				{
					value: '选项4',
					label: '4#机组',
				},
				{
					value: '选项5',
					label: '5#机组',
				},
			],
			value: '',
			// 时间选择器
			pickerOptions: {
				disabledDate(time) {
					let _now = Date.now(),
						seven = 7 * 24 * 60 * 60 * 1000,
						sevenDays = _now - seven
					return time.getTime() > _now //大于当前的禁止
				},
			},
			// 表格数据
			tableData: [
				{
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄',
				},
				{
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄',
				},
				{
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄',
				},
				{
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄',
				},
			],
		}
	},
	mounted() {
		this.drawLine()
	},
	methods: {
		// 图报表
		drawLine() {
			// 基于准备好的dom，初始化echarts实例
			let myChart = this.$echarts.init(document.getElementById('myChart'))
			// 绘制图表
			myChart.setOption({
				tooltip: {
					trigger: 'axis',
				},
				legend: {
					data: ['实际负荷曲线', '理论功率曲线', '转速', '修正转速'],
				},
				grid: {
					left: '3%',
					right: '4%',
					bottom: '3%',
					containLabel: true,
				},
				toolbox: {
					feature: {
						saveAsImage: {},
					},
				},
				xAxis: {
					type: 'category',
					boundaryGap: false,
					data: [
						'周一',
						'周二',
						'周三',
						'周四',
						'周五',
						'周六',
						'周日',
					],
				},
				yAxis: {
					type: 'value',
				},
				series: [
					{
						name: '实际负荷曲线',
						type: 'line',
						stack: '总量',
						data: [120, 132, 101, 134, 90, 230, 210],
					},
					{
						name: '理论功率曲线',
						type: 'line',
						stack: '总量',
						data: [220, 182, 191, 234, 290, 330, 310],
					},
					{
						name: '转速',
						type: 'line',
						stack: '总量',
						data: [150, 232, 201, 154, 190, 330, 410],
					},
					{
						name: '修正转速',
						type: 'line',
						stack: '总量',
						data: [320, 332, 301, 334, 390, 330, 320],
					},
				],
			})
		},
	},
}
</script>

<style lang="scss" scoped>
.text {
	font-size: 14px;
}

.item {
	margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
	display: table;
	content: '';
}
.clearfix:after {
	clear: both;
}

.edit_box {
	display: flex;
	// justify-content: space-between;
	align-items: center;
	.date-picker_box {
		display: flex;
		margin-top: 5px;
		margin-bottom: 5px;
		margin-left: 10px;
	}
}
.title {
	display: flex;
	justify-content: center;
	align-items: center;
	padding-top: 10px;
	padding-bottom: 10px;
	margin: auto;
}
span {
	font-weight: bold;
	font-size: 14px;
}
.el-button {
	margin-right: 10px;
	margin-left: 10px;
}
.charts_container {
	display: flex;
	justify-content: space-between;
	// text-align: center;
	border-bottom: 1px solid #ccc;
	padding-bottom: 15px;
	margin: auto;
}
</style>
