<template>
  <div class="carts">
    <nav-header></nav-header>
    <el-button @click="btn">点我</el-button>
    <el-main>
      <el-row type='flex'
              justify='center'>
        <el-col :span='20'
                class="cart-h2">
          <h2>
            我的购物车
          </h2>
        </el-col>
      </el-row>
      <el-table :data="cartList"
                class="table-item"
                :header-cell-style="{background:'#ccccc',color:'#606266'}"
                :cell-style="{background:'#f5f5f5'}"
                :cell-class-name="message">
        <el-table-column prop="checked"
                         label=""
                         width="50">
          <template slot-scope="scope">
            <el-checkbox-group v-model="commoditys"
                               @change="handleCheckedCitiesChange">
              <el-checkbox :label="scope.row.productId"
                           :key='scope.row.productId'>
                <br>
              </el-checkbox>

            </el-checkbox-group>
          </template>
        </el-table-column>
        <el-table-column label="商品信息"
                         width="400">
          <template slot-scope="scope">

            <img :src="require('@/assets/imgs/'+scope.row.productImage)"
                 alt=""
                 class="des-img">
            <span>{{scope.row.productName}}</span>

          </template>
        </el-table-column>
        <el-table-column prop="productPrice"
                         label="商品金额"
                         width="200">
        </el-table-column>
        <el-table-column label="商品数量"
                         width="200">
          <template slot-scope="scope">
            <el-input-number v-model="scope.row.productNum"
                             @change="handleChange"
                             :min="1"
                             :max="99"
                             label="描述文字"
                             size="small"></el-input-number>
          </template>
        </el-table-column>
        <el-table-column label="总金额"
                         width="200">
          <template slot-scope="scope">
            <span class="rednumber">￥{{scope.row.productNum*scope.row.productPrice}}元</span>
          </template>
        </el-table-column>
        <el-table-column prop=""
                         label="编辑"
                         width="150">
          <template>
            <i class="el-icon-delete"
               @click="delCartConfirm(item)"></i>
          </template>
        </el-table-column>
      </el-table>
      <el-table :data="tableData2"
                class="table-item table-settlement"
                :header-cell-style="{background:'#ccccc',color:'#606266'}"
                :cell-style="{background:'#f5f5f5'}"
                :cell-class-name="buttonset">
        <el-table-column>
          <template slot-scope="scope">
            <el-checkbox :indeterminate="isIndeterminate"
                         v-model="checkAll"
                         @change="handleCheckAllChange">{{scope.row.selectall}}</el-checkbox>
          </template>
        </el-table-column>
        <el-table-column width="100">总价：</el-table-column>
        <el-table-column prop="money"
                         width="100">
          <template>
            <span class="rednumber">{{price}}</span>

          </template>
        </el-table-column>
        <el-table-column prop=""
                         width="100">
          <template>
            <el-button type="primary"
                       @click="endCount">结算</el-button>
          </template>

        </el-table-column>
      </el-table>
    </el-main>
    <div>{{$store.state.name}}</div>
    <nav-footer></nav-footer>
    <modal :mdShow='modalConfirm'>
      <p slot="message"> 确认要删除吗</p>
      <div slot="btnGroup">
        <a slot="btnGroup"
           class="btn btn--m"
           href="javascript:;">确认</a>
        <a slot="btnGroup"
           class="btn btn--m btn--red"
           href="javascript:;">关闭</a>
      </div>
    </modal>
  </div>
</template>
<script>
import NavHeader from './../components/header.vue'
import modal from './../components/modal.vue'
import NavFooter from './../components/footer.vue'
import Vue from 'vue'
// import imgUrl from '@/assets/imgs/1.jpg'
// const cityOptions = ['上海', '北京', '广州', '深圳'];
export default ({
  name: 'carts',
  props: {},
  data() {
    return {
      checkAll: false,
      _this: this,
      isIndeterminate: false,
      commoditys: [],
      cartList: [],
      cities: [],
      price: 0,
      modalConfirm: false,
      delItem: '',
      tableData2: [{
        check: false,
        selectall: '全选',
        money: '188￥',
        settlement: <el-button type="warning">结算</el-button>
      }],

    }

  },
  updated() {
    // this.add(this.commoditys)

  },
  mounted() {
    // for (let i = 0; i < this.tableData.length; i++) {
    //   let commodity = this.tableData
    //   console.log('commodity:', commodity.length)
    //   console.log(this.tableData[i])
    // }

    // console.log(this.commoditys)
    this.init();
    this.add(this.commoditys)
    // this.toarr();
    // console.log(this.cartList);
  },

  components: {
    NavHeader,
    modal,
    NavFooter,

  },
  computed: {
    // cities() {
    //   let newData = []
    //   newData = this.tableData.map(item => {
    //     return item.des
    //   })
    //   return newData
    // }
  },
  methods: {
    message({ row, column, rowIndex, columnIndex }) {
      if (columnIndex == 1) {
        return 'messageimg'
      }
    },
    btn() {
      // this.$store.commit('arr', 15)
      // Vue.set(this.$store.state, "age", 15)
      this.$store.commit('del')
      // this.$store.commit('edit', { age: 15 })
      this.$store.dispatch('aEdit', { age: 15 })
      // Vue.delete(this.$store.state, 'name')
      console.log(this.$store.getters.fullInfo);
      console.log(this.$store.state);

    },
    //删除数据
    delCartConfirm(item) {
      this.delItem = item
      this.modalConfirm = true
    },
    buttonset({ row, column, rowIndex, columnIndex }) {
      if (columnIndex == 3) {
        return 'buttonset'
      }
      if (columnIndex == 2) {
        return 'rednumber'
      }
    },
    handleChange(value) {
      console.log(value);
      console.log(this.commoditys);
      this.add(this.commoditys);
    },
    getSum() {
      let sum = 0;
      // for (let i = 0; i <= this.cartList.)
    },
    init() {
      this.axios.get("/static/mock/cart.json").then((Response) => {
        // console.log(Response)
        let res = Response.data;
        // const list = Object.keys(res.data).map((item, index) => ({ key: res.data, value: res.data[item] }))
        let cartArr = []
        cartArr.push(res.data)
        // console.log(res);
        // this.cartList = list
        // console.log(list);
        // console.log(cartArr[0])
        this.cartList = cartArr[0]
        for (let i = 0; i < this.cartList.length; i++) {
          if (this.cartList[i].checked == true) {
            this.commoditys.push(this.cartList[i].productId)

          }
          this.cities.push(this.cartList[i].productId)

        }
        // console.log(this.commoditys);
      })
    },
    handleCheckAllChange(val) {
      // console.log(val)
      this.commoditys = val ? this.cities : [];
      this.isIndeterminate = false;
      if (val == false) {
        this.price = 0;
        console.log(this.price);
      } else {
        this.add(this.cities);

      }
      //把json数组变成json字符串
      // arr1 = JSON.stringify(arr1)
      // sessionStorage.setItem('key', arr1);

    },
    add(value) {
      this.price = 0;
      if (Array.isArray(value)) {
        console.log(value);
      }
      if (value !== undefined) {
        console.log(value);
        value.forEach(item => {
          for (let i = 0; i < this.cartList.length; i++) {
            if (item == this.cartList[i].productId) {
              this.price += this.cartList[i].productPrice * this.cartList[i].productNum
              // console.log(this.cartList[i].productPrice);
            }
          }
        })
      }
      console.log(this.price);
    },
    endCount() {
      // let arr2 = sessionStorage.getItem('key');
      // //把json字符串转成json数组
      // arr2 = JSON.parse(arr2)
      // console.log(arr2)
      // console.log(arr2[0].name)
      // arr2.forEach(item => {
      //   console.log(item.name)
      //   if (item.name == '二萌') {
      //     console.log(item.age)
      //   }
      // })

      // let arr3 = arr2.filter(item => {

      //   console.log(item)
      //   return item.id == '1'
      // })
      // console.log(arr3)
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
      this.add(value);
      // console.log(value[0]);

      // console.log(price);
      // if (value == '') {

      // } else {
      //   for (let i = 0; i <= value.length; i++) {
      //     for (let j = 0; j <= this.cartList.length; j++) {

      //       if (value[i] == this.cartList[j].productId) {

      //         price = price + Number(this.cartList[j].productPrice)
      //       }
      //     }


      //   }
      // }




    },
    // toarr() {
    //   var newData = this.cartList.map(item => {
    //     return item.productName
    //   })
    //   this.cities = newData
    // }
  }
})
</script>
<style lang='less' scoped>
.el-table tbody tr:hover > td {
  background-color: transparent;
}
.cart-h2 {
  padding: 20px 0 20px 0;
  font-size: 22px;
  text-transform: uppercase;
  letter-spacing: 0.25em;
  font-weight: bold;
}

/deep/ .messageimg {
  .cell {
    height: 80px;
    width: 100%;
    vertical-align: middle;

    img {
      max-width: 80px;
      max-height: 80px;
      display: inline-block;
    }
    span {
      width: 80px;
      height: 80px;
      display: inline-block;
      vertical-align: middle;
      overflow: hidden;
    }
  }
}

.table-item {
  margin: 0 auto;
  width: 1200px;
}

.checked {
  display: inline-block;
  background: #ee7a23;
  border-color: #ee7a23;
  vertical-align: middle;
  text-align: center;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  font-size: 16px;
  color: aliceblue;
  cursor: pointer;
}
.rednumber {
  color: red;
}
/deep/ .table-settlement {
  .el-table__body-wrapper {
    padding: 0;
    margin: 0;
    .el-table__body {
      padding: 0;
      margin: 0;
      .el-table__row {
        height: 40px;
        padding: 0;
        margin: 0;

        .buttonset {
          padding: 0;
          margin: 0;
          border: 0;
          .cell {
            padding: 0;
            margin: 0;
            button {
              width: 100%;
              height: 100%;
              padding: 16px 16px;
            }
          }
        }
      }
    }
  }
}
</style>