const install = function(Vue) {
    const storage = new Vue({
        methods: {
            get(name) {
                return window.localStorage.getItem(name);
            },
            add(name,val) {
                let stroage= [val];
                this.get(name) == null ?
                window.localStorage.setItem(name,JSON.stringify(stroage)) : this.push(name,val);
                return;
            },
            push(name,val) {
                // window.localStorage.setItem(name,JSON.stringify(stroage)) : this.push(name,val);
                // console.log('storange push val*****',val);
                let auditionList = [];
                auditionList = JSON.parse(this.get(name));    
                if(!auditionList) {
                    auditionList = [];
                }           
                auditionList.push(val);
                window.localStorage.setItem(name,JSON.stringify(auditionList))
                return;
            },
            is_exist(name,id) {
                let auditionList = JSON.parse(this.get(name));
                if(auditionList) {
                    for(let i=0;i<auditionList.length;i++) {
                        if(auditionList[i].id == id) {
                            return true;
                        } 
                    }
                    return false;
                } else {
                    return false;
                }
            }
        }
    })

    Vue.prototype.$storage = storage;
}


export default install;

