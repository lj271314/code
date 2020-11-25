<template>
	<el-card class="AGCAdjustVolume-card">
		<div slot="header" class="clearfix">
			<span>月AGC调节容量</span>
		</div>
		<div class="title">
			<div class="block">
				<span class="demonstration">月份：</span>
				<el-date-picker
					v-model="value2"
					type="month"
					placeholder="选择月"
					disabledDate
					@change="monthChange(val)"
					:picker-options="pickerOptions"
				>
				</el-date-picker>
			</div>
			<div class="tagBox">
				<el-tag
					v-for="item in items"
					:key="item.label"
					:type="item.type"
					@click="toChangeColor"
					effect="dark"
				>
					{{ item.label }}
				</el-tag>
			</div>
			<el-button type="primary" @click="searh">查询</el-button>
			<el-button type="primary" @click="exportExcel()">导出</el-button>
		</div>
		<el-table :data="tableData" border style="width: 100%" id="out-table">
			<el-table-column prop="date" label="机组" width="180">
			</el-table-column>
			<el-table-column prop="name" label="协调投入时长(H)" width="180">
			</el-table-column>
			<el-table-column prop="name" label="AGC投入时长(H)" width="180">
			</el-table-column>
			<el-table-column prop="address" label="机组运行时长(H)">
			</el-table-column>
			<el-table-column prop="address" label="协调投入率(%)">
			</el-table-column>
		</el-table>
		<div class="block">
			<el-pagination
				@size-change="handleSizeChange"
				@current-change="handleCurrentChange"
				:current-page="currentPage4"
				:page-sizes="[5, 10, 15, 20]"
				:page-size="queryInfo.pagesize"
				layout="total, sizes, prev, pager, next, jumper"
				:total="100"
			>
			</el-pagination>
		</div>
	</el-card>
</template>

<script>
import FileSaver from 'file-saver'
import XLSX from 'xlsx'
export default {
	data() {
		return {
			items: [
				{ type: '', label: '1#机组' },
				{ type: '', label: '2#机组' },
				{ type: '', label: '3#机组' },
				{ type: '', label: '4#机组' },
				{ type: '', label: '5#机组' },
				{ type: '', label: '6#机组' },
			],
			// 查询参数对象
			queryInfo: {
				query: '',
				pagenum: 1,
				pagesize: 10,
			},
			total: 0,
			currentPage4: 5,
			value2: '',
			pickerOptions: {
				disabledDate(time) {
					let _now = Date.now(),
						seven = 7 * 24 * 60 * 60 * 1000,
						sevenDays = _now - seven
					return time.getTime() > _now //大于当前的禁止
				},
			},
			tableData: [
				{
					id: 1,
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄',
				},
				{
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1517 弄',
				},
				{
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1519 弄',
				},
				{
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1516 弄',
				},
				{
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄',
				},
				{
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1517 弄',
				},
				{
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1519 弄',
				},
				{
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1516 弄',
				},
				{
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄',
				},
				{
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1517 弄',
				},
				{
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1519 弄',
				},
				{
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1516 弄',
				},
			],
		}
	},
	methods: {
		handleSizeChange(val) {
			console.log(`每页 ${val} 条`)
		},
		handleCurrentChange(val) {
			console.log(`当前页: ${val}`)
		},
		monthChange() {
			console.log(this.value2)
		},
		// 导出
		exportExcel() {
			/* out-table关联导出的dom节点 */
			var wb = XLSX.utils.table_to_book(
				document.querySelector('#out-table')
			)
			/* get binary string as output */
			var wbout = XLSX.write(wb, {
				bookType: 'xlsx',
				bookSST: true,
				type: 'array',
			})
			try {
				FileSaver.saveAs(
					new Blob([wbout], { type: 'application/octet-stream' }),
					'月AGC性能指标.xlsx'
				)
			} catch (e) {
				if (typeof console !== 'undefined') console.log(e, wbout)
			}
			return wbout
		},
		searh() {},
		toChangeColor(val) {
			console.log(val)
		},
	},
}
</script>

<style>
.clearfix:before,
.clearfix:after {
	display: table;
	content: '';
}
.clearfix:after {
	clear: both;
}
.AGCAdjustVolume-card .title {
	display: flex;
	justify-content: space-between;
}
.el-button {
	background-color: blue;
}
.title {
	margin-bottom: 20px;
}
.el-tag {
	margin-left: 10px;
}
</style>
