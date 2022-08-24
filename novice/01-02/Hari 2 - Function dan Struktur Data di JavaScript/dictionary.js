let map = new kamusBahasaIndonesia() {
    has(key){
        return key in this.element
    }

    set(key, value){
        return this.element[key] = value
    };

    delete(key){
    if(this.has(key)){
        delete this.element[key]
        return true
        }
    return false
    };

    get(key){
        if(this.has(key)){
            return this.element[key]
        } else {
            return undefined
    };

    values(){
    let values = []
    for(let k in this.element){
        if(this.has(k)){
            values.push(this.element[k])
        }
    }
    return values
    };

    values(){
        return Object.values(this.element)
    };

    Key(){
        return Object.keys(this.element)
    };

    size(){
        return Object.keys(this.element).length
    };

    clear(){
        return this.element = {}
    };

};
