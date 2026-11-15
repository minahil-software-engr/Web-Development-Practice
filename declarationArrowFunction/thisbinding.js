const user = {
    userName: "Zeeshan",
    greetDeclaration: function(name) {  //this.username say chly ga
        if (name) {
            return "Hello, " + name + "! I am " + this.userName;
        } else {
            return "Hello, Guest! I am " + this.userName;
        }
    },
    greetArrow: (name) => {
        if (name) {  //user.username say chala ga this.username say nahi
            return "Hello, " + name + "! I am " + user.userName;
        } else {
            return "Hello, Guest! I am " + user.userName;
        }
    }
};
console.log(user.greetDeclaration("Ali"));
console.log(user.greetDeclaration());
console.log(user.greetArrow("Usman"));
console.log(user.greetArrow());