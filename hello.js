function LaundryPerson(name, age, is_experienced=false) {
    this.name = name;
    this.age = age;
    this.is_experienced = is_experienced;

    function add_to_laundry_basket() {
        console.log("Added to laundry basket");
    }

    function wash() {
        console.log("Washing");
    }

    function dry() {
        console.log("Drying");
    }

    function deliver() {
        console.log("Delivering");
    }

    // change the value of is_experienced
    function change_experience() {
        this.is_experienced = !this.is_experienced;
    }

    return {
        name,
        age,
        is_experienced,
        add_to_laundry_basket,
        wash,
        dry,
        deliver,
        change_experience,
    }
}

// Path: hello.js
const foo = LaundryPerson("John", 20, true);
console.log(foo.name);
foo.add_to_laundry_basket();
foo.wash();
foo.dry();
