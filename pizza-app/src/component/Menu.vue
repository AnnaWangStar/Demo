<template>
    <div class="row">
        <!-- 菜单 -->
        <div class="col-sm-12 col-md-8">
            <table class="table">
                <thead class="thread-default">
                    <tr>
                        <th>尺寸</th>
                        <th>价格</th>
                        <th>加入购物车</th>
                    </tr>
                </thead>
                <!-- 将data中的数据展示出来 -->
                <tbody v-for="(item,index) in getMenuItems" :key="index">
                    <!-- v-for="(item,index) in baskets" :key="index" -->
                    <tr>
                        <td>
                            <strong>{{item.name}}</strong>
                        </td>
                    </tr>
                    <tr v-for="(option,index) in item.options" :key="index">
                        <td>{{option.size}}</td>
                        <td>{{option.price}}</td>
                        <td>
                            <button @click="addToBasket(item,option)" class="btn btn-sm btn-outline-success">
                                +</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- 购物车 -->
        <div class="col-sm-12 col-md-4">
            <div v-if=" baskets.length >0 ">
                <table class="table">
                    <thead class="thead-default">
                        <tr>
                            <th>数量</th>
                            <th>品种</th>
                            <th>单品总价格</th>
                        </tr>
                    </thead>
                    <tbody v-for="(item,index) in baskets" :key="index">
                        <!-- v-for="(item,index) in baskets" :key="index" -->
                        <tr>
                            <td>
                                <button @click="decreaseQuantity(item)" class="btn btn-sm">-</button>
                                <span>{{item.quantity}}</span>
                                <button @click="increaseQuantity(item)" class="btn btn-sm">+</button>
                            </td>
                            <td>{{item.name}}{{item.size}}</td>
                            <td>{{item.price * item.quantity}}</td>
                        </tr>
                    </tbody>
                </table>
                <p>总价:{{total}} RMB</p>
                <button class="btn btn-success btn-block">
                    提交
                </button>
            </div>
            <div v-else>
                {{basketText}}
            </div>
        </div>

    </div>
</template>
<script>
export default {
  // 菜单
  data() {
    return {
      // 定义一个空数组，来接收传给购物车的值
      baskets: [],
      // 购物车为空时
      basketText: "购物车没有任何产品",
      getMenuItems: {
        1: {
          name: "榴莲pizza",
          description: "这是喜欢吃榴莲朋友的最佳选择",
          options: [
            {
              size: 9,
              price: 38
            },
            {
              size: 12,
              price: 48
            }
          ]
        },
        2: {
          name: "芝士pizza",
          description: "芝士杀手,浓浓的芝士丝, 食欲瞬间爆棚",
          options: [
            {
              size: 9,
              price: 38
            },
            {
              size: 12,
              price: 48
            }
          ]
        },
        3: {
          name: "夏威夷pizza",
          description: "众多人的默认选择",
          options: [
            {
              size: 9,
              price: 36
            },
            {
              size: 12,
              price: 46
            }
          ]
        },
      }
    }
  },
  //总价的计算
  computed: {
    total() {
      let totalCost = 0;

      for (let index in this.baskets) {
        let indiviualItem = this.baskets[index];
        totalCost += indiviualItem.quantity * indiviualItem.price;
      }

      return totalCost
    }
  },
  // 添加到购物车
  methods: {
    addToBasket(item, option) {
      let basket = {
        name: item.name,
        size: option.size,
        price: option.price,
        quantity: 1
      };

      if (this.baskets.length > 0) {
        // 过滤-说明已经存在了
        let result = this.baskets.filter((basket) => {
            // name和price相同时，就是同一个产品
          return (basket.name === item.name && basket.price === option.price)
        })

        if (result != null && result.length > 0) {
          result[0].quantity++
        } else {
          this.baskets.push(basket)
        }

      } else {
        //  购物车什么都没有
        this.baskets.push(basket)
      }
    },
    decreaseQuantity(item) {
      item.quantity--;
      if (item.quantity <= 0) {
        this.removeFromBasket(item);
      }
    },
    increaseQuantity(item) {
      item.quantity++;
    },
    // 处理异常场景：数量减为0时，该商品从购物车里消失
    removeFromBasket(item) {
      this.baskets.splice(this.baskets.indexOf(item), 1);
    }
  },

  // 组件内的守卫--离开组件之前
  beforeRouteLeave(to, from, next) {
    if (confirm("确定离开点餐页面") == true) {
      next();
    } else {
      next(false);
    }
  }
};
</script>
