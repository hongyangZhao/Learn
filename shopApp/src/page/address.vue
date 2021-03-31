<template>
  <div class="addr">
    <nav-header></nav-header>
    <el-tabs v-model="activeName"
             @tab-click="handleClick">
      <el-tab-pane label="确认地址"
                   name="first">
        <h2>配送地址</h2>
        <el-row type='flex'
                justify='left'>
          <el-col :span='6'>
            <el-card class="box-card">

              <div>
                <ul>
                  <li class="check"
                      @>
                    <dl>
                      <dt>五子</dt>
                      <dd class="address">北京市石景山区</dd>
                      <dd>16666666666</dd>
                    </dl>
                  </li>
                </ul>
                <el-button style="float: right; padding: 3px 0"
                           type="text"><i class="el-icon-delete"></i></el-button>
              </div>
            </el-card>
          </el-col>
          <el-col :span='6'>
            <el-card class="box-card">

              <div>
                <ul class="addbox">
                  <li class="addTo">
                    <i class="el-icon-plus"></i>
                    <span>添加地址</span>
                  </li>
                </ul>

              </div>
            </el-card>
          </el-col>
        </el-row>

      </el-tab-pane>
      <el-tab-pane label="查看订单"
                   name="second">查看订单</el-tab-pane>
      <el-tab-pane label="支付"
                   name="third">支付</el-tab-pane>
      <el-tab-pane label="订单确认"
                   name="fourth">订单确认</el-tab-pane>
    </el-tabs>
    <div class="wp">
      <div class="box">12312312</div>
    </div>
    <nav-footer></nav-footer>
  </div>
</template>
<script>
import NavHeader from './../components/header.vue'
import modal from './../components/modal.vue'
import NavFooter from './../components/footer.vue'
export default ({
  name: 'addr',
  props: {},
  data() {
    return {
      activeName: 'first',
      treeData: [
        {
          label: "乐园",
          children: [
            {
              id: '1',
              label: "雪世界",
              children: [
                {
                  id: '1',
                  label: "滑雪",
                  children: [
                    {
                      id: '1',
                      label: "卡",
                    },
                    {
                      id: '1',
                      label: "门票",
                    },
                    {
                      id: '1',
                      label: "教学",
                    },
                  ],
                },
                {
                  id: '1',
                  label: "游泳",
                  children: [
                    {
                      id: '1',
                      label: "卡",
                    },
                    {
                      id: '1',
                      label: "门票",
                    },
                    {
                      id: '1',
                      label: "教学",
                    },
                  ],
                },
              ],
            },
            {
              id: '1',
              label: "水世界",
              children: [
                {
                  id: '1',
                  label: "滑雪",
                  children: [
                    {
                      id: '1',
                      label: "卡",
                    },
                    {
                      id: '1',
                      label: "门票",
                    },
                    {
                      id: '1',
                      label: "教学",
                    },
                  ],
                },
              ],
            }
          ],
        },
        {
          label: "酒店",
          children: [
            {
              label: "店名",
              children: [
                {
                  label: "住宿",
                  children: [
                    {
                      label: "大床房",
                    },
                    {
                      label: "小床房",
                    },
                    {
                      label: "单人床",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: "酒景套票",
          children: [
            {
              label: "景区",
              children: [
                {
                  label: "景点",
                  children: [
                    {
                      label: "门票价格",
                    },
                    {
                      label: "地理位置",
                    },
                    {
                      label: "主要景观",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
      arr: [1, 2, 3, 4, 1, 2, 5]
    }
  },
  components: {
    NavHeader,
    modal,
    NavFooter
  },
  mounted() {
    // console.log(this.treeData);
    this.tree(this.treeData)
    console.log(this.unique(this.arr));
    // console.log(this.treeData);
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    unique(arr) {
      // return Array.from(new Set(arr)) //set方法去重
      // for (let i = 0; i < arr.length; i++) {
      //   for (let j = i + 1; j < arr.length; j++) {
      //     if (arr[i] == arr[j]) {
      //       arr.splice(j, 1);
      //       j--;
      //     }
      //   }
      // }
      // return arr;  //双层for循环嵌套splice删除重复元素
    },
    tree(value) {
      let list = {}
      let childList = []
      let childRenList = []
      value.forEach((item, index) => {

        list = JSON.parse(JSON.stringify(item))
        for (let j = 0; j < list.children.length; j++) {
          childList.push(list.children[j].children)
        }
      })
      console.log(childList);
      childList.forEach((item, index) => {

        for (let i = 0; i < item.length; i++) {
          childRenList.push(item[i].children)
        }
      })
      console.log(childRenList);
      // console.log(childRenList);
    }
  }
})
</script>
<style lang="less"scoped>
/* 公共代码 */
.wp {
  border: 1px solid red;
  width: 300px;
  height: 300px;
  line-height: 300px;
  font-size: 0px;
  text-align: center;
}

.box {
  background: green;
  font-size: 16px;
  display: inline-block;
  vertical-align: middle;
  line-height: initial;
  text-align: left;
}

.box.size {
  width: 100px;
  height: 100px;
}
/* 公共代码 */

/deep/ .el-tabs--top {
  width: 1200px;
  margin: 0 auto;
  .el-tabs__header {
    .el-tabs__nav-wrap {
      .el-tabs__nav-scroll {
        .el-tabs__nav {
          .el-tabs__active-bar {
            background: #d1434a;
          }

          .el-tabs__item {
            width: 300px;
            text-align: center;
            color: #999;
          }
          .el-tabs__item.is-active {
            color: #d1434a;
          }
        }
      }
    }
  }
}
/deep/ .el-tabs__content {
  .el-tab-pane {
    h2 {
    }
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

    .box-card {
      width: 280px;
      height: 180px;
    }
    .el-card__header {
      padding: 9px 10px;
    }
    .el-card__body {
      padding: 10px;
      padding-top: 0;
    }
    .el-button--text {
      color: #999;
    }
    .addbox {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 180px;
    }
    ul {
      height: 140px;
      .addTo {
        vertical-align: middle;
        text-align: center;

        span {
          display: block;
        }
        i {
          font-size: 72px;
        }
      }
      li {
        dt {
          margin-inline-start: 10px;
        }
        dd {
          margin-inline-start: 10px;
        }
        .address {
          height: 40px;
        }
      }
    }
  }
}
</style>