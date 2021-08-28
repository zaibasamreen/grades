function marks(m){
    switch(true){
        case m<35:
            console.log("fail");
            break;
        
        case m>=35 && m<60:
            console.log("second class");
            break;
            case m>=60 && m<85:
                console.log("first class");
                break;
                case m>=85:
                    console.log("distinction");
                    break;
                    default:console.log("invalid");
        }
}
marks(78);