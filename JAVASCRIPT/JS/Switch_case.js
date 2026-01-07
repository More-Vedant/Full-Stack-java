let AGE=45;

switch(true){
    case AGE>=18 && AGE<56:
        console.log("Eligible for vote");
        break;
    case AGE>=56 && AGE<75:
        console.log("NUll for vote");
        break;
    case AGE<18:
        console.log("Not eligible for vote");
        break;
    default:
        console.log("key was not matched");
        break;
}