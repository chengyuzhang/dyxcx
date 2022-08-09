let requestCount = 0

export const api = {
    async get(url, data = {}, header = {}){
        header = Object.assign({}, header)
        requestCount ++
        tt.showLoading({
            title: '请求中'
        })
        
        return new Promise((resolve, reject) => {
            tt.request({
                url, 
                data,
                header,
                method: 'GET',
                success(res){
                    requestCount -- 
                    if (!requestCount) {
                        wx.hideLoading()
                    }

                    if(res.statusCode == 200){
                        resolve(res.data.body)
                    }
                },
                fail(){
                    requestCount -- 
                    if (!requestCount) {
                        wx.hideLoading()
                    }

                    reject(res)
                }
            })
        })	
    },
    async post(url, data = {}, header = {}){
        header = Object.assign({}, header)
        requestCount ++
        tt.showLoading({
            title: '请求中'
        })
        
        return new Promise((resolve, reject) => {
            tt.request({
                url, 
                data,
                header,
                method: 'POST',
                success(res){
                    requestCount -- 
                    if (!requestCount) {
                        wx.hideLoading()
                    }

                    if(res.statusCode == 200){
                        resolve(res.data.body)
                    }
                },
                fail(){
                    requestCount -- 
                    if (!requestCount) {
                        wx.hideLoading()
                    }

                    reject(res)
                }
            })
        })	
    }
}