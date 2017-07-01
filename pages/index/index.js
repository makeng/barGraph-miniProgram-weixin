//index.js
//获取应用实例
var app = getApp();

Page({
	/*-------------------------------------------- 数据 ----------------------------------------------*/
	data: {
		//步数列表
		stepList: {
			step: [2000,5000,3000,2563,125,22521,621],	//字符串
			barHeight: [],
			barTop: 300,
			stepTop: 20000,
			showingStepIdx: 6,	//显示步数的index
			todayStep: 621,	//今天步数
			date: [24,25,26,27,28,29,30]	//字符串
		}
	},
	/*-------------------------------------------- 自定义函数 ----------------------------------------------*/
	/*	设置柱状图
	* */
	setGraph: function () {
		var that = this;
		that.data.stepList.step.forEach(function(item,idx){
			if ( item > that.data.stepList.stepTop ){	//防止超出
				that.data.stepList.barHeight[idx] = that.data.stepList.barTop;
			}else{
				var scale = that.data.stepList.barTop / that.data.stepList.stepTop;	//转换比例
				that.data.stepList.barHeight[idx] = parseInt(item * scale);
			}
		});
		that.setData({
			stepList: that.data.stepList
		});
	},
	/*-------------------------------------------- 绑定函数 ----------------------------------------------*/
	/*  加载完成
	 * */
	onLoad: function () {
		this.setGraph();
	},

	/*	点击日期显示步数
	*	@param e对应的事件
	* */
	showStepTap: function (e) {
		let that = this;
		that.data.stepList.showingStepIdx = e.currentTarget.dataset.idx;	//idx:wxml中绑定的序号,显示的数据变动
		that.setData({
			stepList: that.data.stepList
		});
	}
});
