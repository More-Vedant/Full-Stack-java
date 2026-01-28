const parentFunc = () => {
    let name = 'vedant';

    let childFunc = () => {

        let subChildFunc = () => {
            return name;
        };
        
        return subChildFunc;
    };
    return childFunc;
};

console.log(parentFunc()()());