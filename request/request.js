let requestCount = 0

export const api = {
    async get(url, data = {}, header = {}){
        let token = tt.getStorageSync('token')
        header = Object.assign({token}, header)
		header = Object.assign({hospitalId: 1}, header)
        console.log('token', header)
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
                        tt.hideLoading()
                    }

                    if(res.data.code == 200){
                        resolve(res.data)
                    }
                },
                fail(){
                    requestCount -- 
                    if (!requestCount) {
                        tt.hideLoading()
                    }

                    reject(res)
                }
            })
        })	
    },
    async post(url, data = {}, header = {}){
        let token = tt.getStorageSync('token')
        header = Object.assign({token}, header)
		header = Object.assign({hospitalId: 1}, header)
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
                    console.log('resss', res)
                    requestCount -- 
                    if (!requestCount) {
                        tt.hideLoading()
                    }
                    resolve(res.data)

                    // if(res.data.code == 200){
                    // }
                },
                fail(err){
                    console.log('errrr', err)

                    requestCount -- 
                    if (!requestCount) {
                        tt.hideLoading()
                    }

                    reject(res)
                }
            })
        })	
    }
}