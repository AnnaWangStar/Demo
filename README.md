## WXexercise

###### 系统定位
用于go语言的练习

#### 语法

1.变量
```
1、var name 变量类型 = value
2、var name = value 省略变量类型
3、name := value 必须是局部变量
```
`go语言中所有变量都被初始化为零值：`
`int = 0 
string ="" 
*int = nil (指针)
bool = false`

2.常量
```$xslt
1、const name type = value
2、数据初始化递增 与 iota连用，常用于枚举定义
```
3.控制语句
```$xslt
//条件语句
if 判断语句1{
    语句一
}else if 判断语句2{
    语句二
}else{
    语句三
}
```
```$xslt
//循环
for i:=0;i<10;i++{
    fmt.Println(i)
    continue //继续下次循环
    break //跳出循环
    goto
}
```
```$xslt
//选择
switch 变量{
    case value1:
        语句一
     default:
        语句二
}      
```
4.结构体
```
结构体：用户自定义的一种抽象的数据结构
1、结构体概念：
type name_struct struct{
    ID int
    id int //小写，只能在本包package内使用
}
2、定义结构体变量：
var data name_struct
3.1、结构体赋值一：
data.ID = 100
data.id = 10
3.2、结构体赋值二：
dataWX  := name_struct{
    ID :88,
    id : 66,
}
4、结构体方法：
 fun(this name_struct) TEST1(){//接收值}
 fun(this *name_struct) TEST2(){//接收指针}
```
5.map
```$xslt
map定义
var map_name map[key的类型]value的类型 //全局定义
或 map_name := make(map[key的类型]value的类型) //在函数中的定义，使用make函数
注意点：map使用之前要初始化
//map初始化
map_name = make(map[key的类型]value的类型) 
//map赋值
map_name [key1] = value1
注意点2：map存储数据是无序的
注意点3：map并发是不安全的
```
6.数组与切片
 ```$xslt
 数组特点：1内存连续的数据集合；2数组下标取值从0开始
 //数组定义：
 var arr_name [数组长度]数据类型
 ```
 ```$xslt
切片：1.动态增加(数组是固定大小)；2.切片底层是数据 3.函数参数属于引用传递
```
**7.函数**
```$xslt
入口函数main，程序执行的入口
初始化函数init 可以有多个
程序执行顺序：变量->init函数->main函数
```
**8.匿名函数**
```$xslt
匿名函数的主要作用是封装一段一次性执行的代码
```
**9.闭包**
```$xslt 
示例：
func f(i int) func() int{
    return func() int{
        i++
        return i
    }
}
func main(){
    data := f(2)
    fmt.Println(data())
}
```
**10.接口**
```$xslt
go为了实现多态
定义接口：
type i_name interface{
    func1 //接口的函数
}
实现接口方法:

```