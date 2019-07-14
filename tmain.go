package main

import (
	"fmt"
)

var iint int = 100;

const PI = 3.1415926;

const (
	INIT = "22"
	INIT2
	ONE = iota
	TWO
)

//结构体
type wx_struct struct {
	ID int
	id int
}

var data wx_struct
//结构体方法
func (this wx_struct) Test1() {
	fmt.Println("值")
}
func (this *wx_struct) Test2() {
	fmt.Println("指针")
}

//map定义
var map_name map[string]wx_struct

func init() {
	//初始化map
	map_name = make(map[string]wx_struct)
}

//切片定义
var slice_name []int
//数组定义：
var arr_name [3]int

func main() {
	//数组定义
	//var arr_name = [2]int{3, 44}
	//结构体赋值1
	data.ID = 100
	data.id = 10
	//结构体赋值2
	dataWX := wx_struct{
		ID: 88,
		id: 66,
	}
	//方法引用
	data.Test1()
	dataWX.Test2()
	//map
	map_name["111"] = dataWX
	map_name["22"] = data
	//切片指定长度
	slice_name = make([]int, 10)
	fmt.Println("长度是：", Arr_func(slice_name))
	//延迟匿名函数
	defer func() {
		fmt.Println("最后执行")
	}()
	//并发匿名函数
	go func() {
		fmt.Println("并发执行匿名函数")
	}()
	//一个带参的匿名函数
	ret := func(a, b int) int {
		return a + b
	}(2, 3)
	fmt.Println("普通的匿名函数的结果：", ret)
	//闭包
	databi := f(1)
	fmt.Println("闭包的结果：", databi())
	//接口的使用
	i1 := I1{}
	R_I_f(&i1)
}

//接口的定义
type i_name interface {
	Func1() //接口的函数
}
//接口的实现函数
func R_I_f(data i_name) {
	data.Func1()
}

//接口的两个结构体
//第一个
type I1 struct {
}
//实现接口
func (this *I1) Func1() {
	fmt.Println("接口函数")
}

//第二个
type I2 struct {
}

func (this *I2) Func1() {
	fmt.Println("接口函数")
}

//闭包
func f(i int) func() int {
	return func() int {
		i++
		return i
	}
}

//函数
func Arr_func(arr []int) int {
	fmt.Println("arr_name: ", arr)
	return len(arr)
}
