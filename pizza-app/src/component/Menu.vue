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
        <!-- v-bind 缩写成: -->
        <tbody v-for="(item,index) in getMenuItems" :key="index">
          <tr>
            <td>
              <strong>{{item.name}}</strong>
            </td>
          </tr>
          <tr v-for="(option,index) in item.options" :key="index">
            <td>{{option.size}}</td>
            <td>{{option.price}}</td>
            <td>
              <!-- v-on缩写@ -->
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
              <th>尺寸</th>
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
              <td>{{item.name}}</td>
              <td>{{item.size}}</td>
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
// import axios from "axios"
export default {
  // 菜单
  data() {
    return {
      // 定义一个空数组，来接收传给购物车的值
      baskets: [],
      // 购物车为空时
      basketText: "购物车没有任何产品",
      getMenuItems: {}
    };
  },
  //总价的计算
  computed: {
    total() {
      let totalCost = 0;

      for (let index in this.baskets) {
        let indiviualItem = this.baskets[index];
        totalCost += indiviualItem.quantity * indiviualItem.price;
      }

      return totalCost;
    }
  },
  // 钩子,进入购物车页面就请求数据
  created() {
    this.fetchData();
  },

  // 添加到购物车
  methods: {
    fetchData() {
      // 使用es6的fetch函数，展示数据
      // fetch("https://wd6846125205vdfnry.wilddogio.com/menu.json")
      //   .then(res => {
      //     return res.json();
      //   })
      //   .then(data => {
      //     this.getMenuItems = data;
      //   });

      // 使用axios的默认路径展示数据库中的数据
      // axios.get("menu.json")
      // .then(res => this.getMenuItems = res.data)

      // 使用全局的axios
      this.http.get("menu.json")
      .then(res => this.getMenuItems = res.data)
      
    },
    addToBasket(item, option) {
      let basket = {
        name: item.name,
        size: option.size,
        price: option.price,
        quantity: 1
      };

      if (this.baskets.length > 0) {
        // 过滤-说明已经存在了
        let result = this.baskets.filter(basket => {
          // name和price相同时，就是同一个产品
          return basket.name === item.name && basket.price === option.price;
        });

        if (result != null && result.length > 0) {
          result[0].quantity++;
        } else {
          this.baskets.push(basket);
        }
      } else {
        //  购物车什么都没有
        this.baskets.push(basket);
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
