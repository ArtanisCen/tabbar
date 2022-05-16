<template>
  <div>
    <MyTable :arr='list'>
      <template #header>
        <th>#</th>
        <th>商品名称</th>
        <th>价格</th>
        <th>标签</th>
        <th>操作</th>
      </template>
      <template #body="scope">
        <td>{{ scope.row.id }}</td>
        <td>{{ scope.row.goods_name }}</td>
        <td>{{ scope.row.goods_price }}</td>
        <td>
           <span v-for="(str, ind) in scope.row.tags" 
           :key="ind"
          class="badge bg-warning text-dark">
            {{ str }}
          </span>
        </td>
        <td>
            <button class="btn btn-danger btn-sm"
            @click="removeBtn(scope.row.id)">删除</button>
        </td>
      </template>
    </MyTable>
  </div>
</template>

<script>
import MyTable from '../components/MyTable.vue'
import axios from 'axios'
export default {
  data () {
    return {
      list:[]
    }
  },
  components: {
    MyTable
  },
  created () {
    axios({
      url:'/api/goods'
    }).then(res =>{
      this.list = res.data.data
    })
  },
  methods: {
    removeBtn(id){
      let index = this.list.findIndex(obj=>obj.id === id)
      this.list.splice(index,1)
    }
  }

}
</script>

<style >


</style>