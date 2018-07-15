<template>
  <div class="calc-wrap">
    <div class="calc-in-out">
      <input type="text">
    </div>
    <table class="calc-operation">
      <thead></thead>
      <tbody>
        <!-- 第一行 -->
        <tr>
          <td data-ac="cls" class="cls">
            <input type="button" value="C" @click="">
          </td>
          <td data-ac="del">
            <input type="button" value=" ">
          </td>
          <td data-ac="sq">
            <input type="button" value=" ">
          </td>
          <td data-ac="mul">
            <input type="button" value="*" @click="">
          </td>
        </tr>
        <!-- 第二行 -->
        <tr>
          <td data-val="7">
            <button>
              7
            </button>
          </td>
          <td data-val="8">
            <button>
              8
            </button>
          </td>
          <td data-val="9">
            <button>
              9
            </button>
          </td>
          <td data-ac="div">
            <button>
              &divide;
            </button>
          </td>
        </tr>
        <tr>
          <td data-val="4">
            <button>
              4
            </button>
          </td>
          <td data-val="5">
            <button>
              5
            </button>
          </td>
          <td data-val="6">
            <button>
              6
            </button>
          </td>
          <td data-ac="plus">
            <button>
              +
            </button>
          </td>
        </tr>
        <tr>
          <td data-val="1">
            <button>
              1
            </button>
          </td>
          <td data-val="2">
            <button>
              2
            </button>
          </td>
          <td data-val="3">
            <button>
              3
            </button>
          </td>
          <td data-ac="minus">
            <button>
              -
            </button>
          </td>
        </tr>
        <td data-ac="per">
          <button>
            无
          </button>
        </td>
        <td data-val="0">
          <button>
            0
          </button>
        </td>
        <td data-ac="dot">
          <button>
            无
          </button>
        </td>
        <td data-ac="eq" class="eq">
          <button>
            =
          </button>
        </td>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {};
</script>

