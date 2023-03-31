<template>
    <div>
        <sk-card  v-width="394"  title="万能查询" desc="明细查询能手：用户通过拖拉拽自定义查询明细数据，支持过滤、汇总等分析方法。" subTitle="立即分析教学视频"> </sk-card>
        <sk-button @click="open">默认按钮</sk-button>
        <sk-bussiness-card v-width="394" > </sk-bussiness-card>
        <sk-dynamic-card ref="card"  v-width="394"  title="万能查询" desc="明细查询能手：用户通过拖拉拽自定义查询明细数据，支持过滤、汇总等分析方法。" subTitle="立即分析教学视频"></sk-dynamic-card>    

        <el-dialog
        title="动态编辑组件"
        :visible.sync="dialogVisible"
        width="60%"
        :before-close="handleClose">
        <codemirror v-model="dynamicTemplate"></codemirror>
        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="sure">确 定</el-button>
        </span>
        </el-dialog>
    </div>
</template>

<script>
// require component
import { codemirror } from 'vue-codemirror'

// require styles
import 'codemirror/lib/codemirror.css'
export default {
  data () {
    return {  
        test: 1,
        dialogVisible: false,
        code: ''
    }
  },
  components: {
    codemirror
  },
  methods: {
    open () {
        this.dynamicTemplate = this.$refs.card.getDynamicTemplate()
        this.dialogVisible = true
    },
    sure () {
        this.dialogVisible = false
        this.$refs.card.setDynamicTemplate(this.dynamicTemplate)
    }
  }

}
</script>

<style>
</style>
