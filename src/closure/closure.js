const greeting = () => { 
    let userName = 'oscar'

    const displayUserName = () => { 
        return `hello ${userName}`
    }
        return displayUserName;
}

const g = greeting();
console.log(g);
console.log(g());