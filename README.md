# Vue Skeleton Loading  ![version](https://img.shields.io/badge/version-1.0.1-brightgreen.svg) ![vue](https://img.shields.io/badge/vue-2.5.2-brightgreen.svg)

[Vue Skeleton Loading ](https://github.com/jiingwang/vue-skeleton-loading) 是一个让我们快速和方便写出自定义 skeleton loading 的插件。

## Demo

[vue-skeleton-loading](https://jiingwang.github.io/vue-skeleton-loading/#/)

## Install

npm

```
npm install vue-skeleton-loading --save 
```



## Dev

```js
// 安装依赖
npm install

// 运行在 localhost:8080
npm run dev
```



## Usage

项目入口文件全局注册

```javascript
import Vue from 'vue';
import VueRouter from 'vue-router';
// 引用组件
import VueSkeletonLoading from 'vue-skeleton-loading';
import App from './app.vue';
import Index from './components';
import Page from './components/page';
import List1 from './components/list1';

// 安装插件
Vue.use(VueSkeletonLoading);
Vue.use(VueRouter);


const routes = [
	{
		name: 'index',
		path: '/',
		component: Index
	},{
		name: 'page',
		path: '/page',
		component: Page
	},{
		name: 'list1',
		path: '/list1',
		component: List1
   }
];

const router = new VueRouter({
	routes
});

new Vue({
	el: '#app',
	router,
	template: '<App />',
	components: {
		App
	}
});
```

使用组件

本插件总共有 5 个组件，两个基础组件（ CircleSkeleton, SquareSkeleton ），两个布局组件（ Column, Row ），一个容器组件（ SkeletonLoading ）。

 例子一：

```vue
<template>
    <div class="list1">
        <skeleton-loading>
            <skeleton-row
                    v-for="i in 6"
                    :key="i"
                    :gutter="{top: '10px', bottom: '10px'}">
                <skeleton-column :span="3" :gutter="10">
                    <skeleton-circle></skeleton-circle>
                </skeleton-column>
                <column :span="20" :gutter="10">
                        <skeleton-square
                            :count="2"
                            :boxProperties="{
                                bottom: '15px',
                                width: '250px',
                                height: '15px'
                            }">
                        </skeleton-square>
                </column>
            </skeleton-row>
        </skeleton-loading>
    </div>
</template>

<script>
    export default {}
</script>

```

效果

![skeleton-loading-demo1](https://jiingwang.github.io/vue-skeleton-loading/skeleton-loading-demo1.gif)



例子二： 

```vue
<template>
    <div class="page">
        <skeleton-loading>
            <skeleton-row 
                :gutter="{
                    bottom: '15px'
                }">
                <skeleton-square 
                    :count="2"
                    :boxProperties="{
                        top: '10px',
                        height: '26px'
                    }">
                </skeleton-square>
            </skeleton-row>
            <skeleton-row>
                <skeleton-column :span="4">
                    <skeleton-circle></skeleton-circle>
                </skeleton-column>
                <skeleton-column :span="20" :gutter="20">
                    <skeleton-square 
                        :boxProperties="{
                            top: '10px',
                            width: '70px',
                            height: '15px'
                        }">
                    </skeleton-square>
                    <skeleton-square 
                        :boxProperties="{
                            width: '100px',
                            height: '15px',
                            top: '10px'
                        }">
                    </skeleton-square>
                </skeleton-column>
            </skeleton-row>
            <skeleton-row :gutter="{top: '20px'}">
                <skeleton-square 
                    :count="4"
                    :boxProperties="{
                        bottom: '10px'
                    }" >
                </skeleton-square>
            </skeleton-row>
            <skeleton-row>
                 <skeleton-square 
                    :boxProperties="{
                        bottom: '10px',
                        height: '200px'
                    }">
                </skeleton-square>
            </skeleton-row>
        </skeleton-loading>
    </div>
</template>

<script>
    export default {}
</script>

<style lang="less">
    .page {
        padding: 15px;
    }
</style>
```

效果

![skeleton-loading-demo1](https://jiingwang.github.io/vue-skeleton-loading/skeleton-loading-demo2.gif)



## Options

### SkeletonLoading

Props

| Props | Type | Default | Description |
| :---- | :--- | :------ | :---------- |
| -     | -    | -       | -           |

Function

| Name | Type | Descrition |
| :--- | :--- | :--------- |
| -    | -    | -          |

### Events

| Name | Type | Description |
| :--- | ---- | ----------- |
| -    | -    | -           |

### Slot

| Name         | Description |
| ------------ | ----------- |
| default slot | -           |



### SkeletonCircle

Props

| Props     | Type   | Default | Description        |
| :-------- | :----- | :------ | :----------------- |
| backColor | String | #e7e7e7 | background color   |
| diameter  | String | 100%    | diameter of circle |

Function

| Name | Type | Descrition |
| :--- | :--- | :--------- |
| -    | -    | -          |

### Events

| Name | Type | Description |
| :--- | ---- | ----------- |
| -    | -    | -           |

### Slot

| Name | Description |
| ---- | ----------- |
| -    | -           |





### SkeletonSquare



Props

| Props         | Type   | Default | Description                       |
| :------------ | :----- | :------ | :-------------------------------- |
| backColor     | String | #e7e7e7 | background color                  |
| boxProperties | Object |         | box properties of square skeleton |
| count         | Number | 1       | count of square skeleton          |

> boxProperties

| Item   | Type   | Default | Description               |
| ------ | ------ | ------- | ------------------------- |
| width  | String | 100%    | 宽度  默认为容器的宽度支持px、em、rem单位 |
| height | String | 16px    | 高度 支持px、em、rem单位          |
| top    | String | 0       | 外上边距 支持px、em、rem单位        |
| bottom | String | 0       | 外下边距 支持px、em、rem单位        |

Function

| Name | Type | Descrition |
| :--- | :--- | :--------- |
| -    | -    | -          |

### Events

| Name | Type | Description |
| :--- | ---- | ----------- |
| -    | -    | -           |

### Slot

| Name | Description |
| ---- | ----------- |
| -    | -           |





### SkeletonColumn

Props

| Props  | Type   | Default | Description                              |
| :----- | :----- | :------ | :--------------------------------------- |
| gutter | Number | 0       | 左右的外边距 相当于 pading: 0 gutter,  单位px。      |
| span   | Number | -       | 一行被等分为24份，span值为一行中占据的份数，[参考这里](https://ant.design/components/grid-cn/) 。 |
| order  | Number | -       | 一行中位置优先级，[参考这里](https://ant.design/components/grid-cn/) 。 |

Function

| Name | Type | Descrition |
| :--- | :--- | :--------- |
| -    | -    | -          |

### Events

| Name | Type | Description |
| :--- | ---- | ----------- |
| -    | -    | -           |

### Slot

| Name | Description |
| ---- | ----------- |
| -    | -           |





### SkeletonRow

Props

| Props   | Type   | Default | Description                              |
| :------ | :----- | :------ | :--------------------------------------- |
| gutter  | Object | -       | 上下的外边距 相当于 pading: gutter.top 0  gutter.bottom 0,  单位px。 |
| align   | String | -       | 值可以为  top, middle,  bottom,  具体可以参考 [flex](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout)。 |
| justify | Number | -       | 值可以为  start, end, center, space-around, space-between,  具体可以参考 [flex](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout) 。 |

> gutter

| Props  | Type   | Default | Description                              |
| :----- | :----- | :------ | :--------------------------------------- |
| top    | String | 0       | 上外边距 相当于 pading-top: top,   需要带上单位， 单位可以是px em rem。 |
| bottom | String | 0       | 下外边距 相当于 pading-bottom: top,   需要带上单位， 单位可以是px em rem。 |

Function

| Name | Type | Descrition |
| :--- | :--- | :--------- |
| -    | -    | -          |

### Events

| Name | Type | Description |
| :--- | ---- | ----------- |
| -    | -    | -           |

### Slot

| Name | Description |
| ---- | ----------- |
| -    | -           |



## Notice

每一个 Skeleton Loading 所有的组件都必须是被 SkeletonLoading 组件包裹使用

e.g

```
<skeleton-loading>
            <skeleton-row 
                :gutter="{
                    bottom: '15px'
                }"
            >
                <skeleton-square 
                    :count="2"
                    :boxProperties="{
                        top: '10px',
                        height: '26px'
                    }"
                >
                </skeleton-square>
            </row>
            <skeleton-row>
                <skeleton-column :span="4">
                    <skeleton-circle></skeleton-circle>
                </skeleton-column>
                <skeleton-column :span="20" :gutter="20">
                    <skeleton-square 
                        :boxProperties="{
                            top: '10px',
                            width: '70px',
                            height: '15px'
                        }"
                    >
                    </skeleton-square>
                    <skeleton-square 
                        :boxProperties="{
                            width: '100px',
                            height: '15px',
                            top: '10px'
                        }"
                    >
                    </skeleton-square>
                </skeleton-column>
            </skeleton-row>
            <skeleton-row :gutter="{top: '20px'}">
                <skeleton-square 
                    :count="4"
                    :boxProperties="{
                        bottom: '10px'
                    }" 
                >
                </skeleton-square>
            </skeleton-row>
            <skeleton-row>
                 <skeleton-square 
                    :boxProperties="{
                        bottom: '10px',
                        height: '200px'
                    }"    
                >
                </skeleton-square>
            </skeleton-row>
        </skeleton-loading>
```



## License

[MIT](https://github.com/NightCatSama/vue-slider-component/blob/master/LICENSE)


