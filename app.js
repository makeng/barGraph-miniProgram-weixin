//app.js
App({
    onLaunch: function () {
    },
    getUserInfo: function (cb) {
        var that = this;
/*        if (this.globalData.userInfo) {
            typeof cb === "function" && cb(this.globalData.userInfo)
        } else {*/
            //调用登录接口
            wx.login({
                success: function (res) {
                    that.globalData.code = res.code;
                    console.log(res.code);
                    wx.getUserInfo({
                        success: function (res) {
							that.globalData.userInfo = res.userInfo;    //获取用户信息
							that.globalData.userEncryptedData = res.encryptedData;  //加密的用户重要信息
							that.globalData.iv = res.iv;    //获取iv值
                            typeof cb === "function" && cb(that.globalData.userInfo)
                        }
                    })
                }
            })
        //}
    },
    globalData: {
        userInfo: null, //用户基本信息
    }
});