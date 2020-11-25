<template>
  <el-card class="AncillaryServices_card">
    <div
      slot="header"
      class="clearfix"
    >
      <span>辅助服务对标分析</span>
    </div>
    <div class="upload">
      <span>上传文件:</span>
      <el-upload
        class="upload-demo"
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :before-remove="beforeRemove"
        multiple
        :limit="3"
        :on-exceed="handleExceed"
        :file-list="fileList"
      >
        <el-button type="primary">点击上传</el-button>
      </el-upload>
    </div>
    <div class="search">
      <div class="name">
        <span>名称:</span>
        <el-input
          v-model="input"
          placeholder="请输入内容"
          style="width:200px"
        ></el-input>
      </div>
      <div class="select"> <span>类型:</span>
        <el-select
          v-model="value"
          placeholder="请选择"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            style="width:200px"
          >
          </el-option>
        </el-select>
      </div>
      <el-button
        type="primary"
        icon="el-icon-search"
      >查询</el-button>
    </div>
    <el-table
      :data="tableData"
      style="width: 100%"
      border=true
    >
      <el-table-column
        label="上传时间"
        width="180"
      >
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="文件名称"
        width="180"
      >
        <template slot-scope="scope">
            <p>{{ scope.row.name }}</p>
        </template>
      </el-table-column>
      <el-table-column
        label="类型"
        width="180"
      >
        <template slot-scope="scope">
            <p>{{ scope.row.type}}</p>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
          >删除</el-button>
          <el-button
            size="mini"
            class="el-icon-download"
            type='success'
            @click="handleEdit(scope.$index, scope.row)"
          >下载</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      options: [
        {
          value: "选项1",
          label: ".xlsx",
        },
        {
          value: "选项2",
          label: ".doc",
        },
        {
          value: "选项3",
          label: ".docx",
        },
        {
          value: "选项4",
          label: ".xls",
        },
        {
          value: "选项5",
          label: ".ppt",
        },
      ],
      value: "",
      tableData: [
        {
          date: "2016-05-02",
          name: "计算机中各种文件",
          type: ".doc",
        },
        {
          date: "2016-06-02",
          name: "计算机中各种文件",
          type: ".doc",
        },
        {
          date: "2016-07-02",
          name: "计算机中各种文件",
          type: ".doc",
        },
        {
          date: "2016-07-02",
          name: "计算机中各种文件",
          type: ".doc",
        },
        {
          date: "2016-09-02",
          name: "计算机中各种文件",
          type: ".doc",
        },
        {
          date: "2016-05-02",
          name: "WORD文档的保存类型",
          type: ".doc",
        },
      ],
    };
  },
  created() {},
  mounted() {},
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
  },
};
</script>

<style scoped lang="scss">
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
.clearfix {
  margin-bottom: 10px;
  margin-top: 10px;
}
.upload {
  display: flex;
  border-bottom: 1px solid #ccc;
  align-items: center;
  margin: 0 auto;
  padding-bottom: 20px;
}
.search {
  display: flex;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
  .name {
    margin-right: 20px;
  }
  .select {
    margin-right: 20px;
  }
}
</style>
