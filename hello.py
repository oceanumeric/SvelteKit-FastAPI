class LaundryPerson:
    def __init__(self, name, age, is_experienced=False):
        self.name = name
        self.age = age
        self.is_experienced = is_experienced
        self.laundry_basket = []

    def add_to_laundry_basket(self, item):
        self.laundry_basket.append(item)
        print(f"{self.name} added {item} to the laundry basket.")

    def do_laundry(self):
        if self.is_experienced:
            print(f"{self.name} is doing the laundry efficiently.")
        else:
            print(f"{self.name} is learning how to do the laundry.")

        if self.laundry_basket:
            print(f"{self.name} is washing the following items:")
            for item in self.laundry_basket:
                print(item)
            print(f"{self.name} has finished washing the laundry.")
            self.laundry_basket = []
        else:
            print(f"{self.name}'s laundry basket is empty.")

    def set_experience(self, is_experienced):
        self.is_experienced = is_experienced
        if is_experienced:
            print(f"{self.name} is now an experienced laundry person.")
        else:
            print(f"{self.name} is still learning.")

# Example usage:
if __name__ == "__main__":
    # object instantiation
    person1 = LaundryPerson("Alice", 30)
    person1.add_to_laundry_basket("Shirt")
    person1.add_to_laundry_basket("Jeans")
    person1.do_laundry()
    # after washing many times
    person1.set_experience(True)

    print(person1.is_experienced)