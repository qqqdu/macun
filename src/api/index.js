export let saveLock = function(payload){
	let lockList = wx.getStorageSync('lockList')
	if(!lockList){
		lockList = [];
	}
	try {
		if(!payload.id){
			let random = Math.random().toString(36).substr(2);
    		lockList.push(Object.assign(payload,{id:random}))
    	} else {
    		let num = null;
    		lockList.find(function(val,index){
    			if(val.id===payload.id)
					num = index
			})
			lockList.splice(num,1,payload);
    	}
    	wx.setStorageSync("lockList", lockList)
	} catch (e) {    
		alert("出错了")
	}
}
export let getLockList = function(payload){
	let lockList = wx.getStorageSync('lockList');
	return lockList
}
export let getIdLock = function(id){
	let lockList = wx.getStorageSync('lockList');
	return lockList.find(function(val){
		return (val.id===id)&&val
	})
}
export let deleteLock = function(id){
	let lockList = wx.getStorageSync('lockList')
	let num = null;
	lockList.find(function(val,index){
		if(val.id===id)
			num = index
	})
	lockList.splice(num,1);
	wx.setStorageSync("lockList", lockList)
}

export let saveBoxPassword = function(payload) {
	let boxPassword = wx.getStorageSync("boxPassword")
	if(!boxPassword){
		boxPassword = {}
		boxPassword['boxName'] = payload.boxName
		boxPassword['boxPass'] = payload.boxPass
		wx.setStorageSync("boxPassword",boxPassword)
		return true
	} else {
		wx.showToast({
            image: "../images/cry.png",
            title: "已有密码箱~"
          })
		return false
	}
}
 
export let checkBoxPassword = function(password) {
	let boxPassword = wx.getStorageSync("boxPassword")
	if(boxPassword.boxPass === password)
		return true
	else 
		return false
}

export let getBoxName = function(){
	let boxPassword = wx.getStorageSync("boxPassword")
	return boxPassword["boxName"]
}