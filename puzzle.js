// Задача 0
// А сказал: "Я и лжец и рыцарь."
знания0 = new И()
знания0.добавить(new Эквивалентность(АРыцарь, new Не(АЛжец)))
знания0.добавить(new Эквивалентность(new И(АРыцарь, АЛжец), АРыцарь))
// Добавьте

// Задача 1
// А сказал: "Мы оба лжецы."
// Б ни чего не сказал.
знания1 = new И()
знания1.добавить(new Эквивалентность(АРыцарь, new Не(АЛжец)))
знания1.добавить(new Эквивалентность(БЛжец, new Не(БРыцарь)))
знания1.добавить(new Эквивалентность(new И(АЛжец, БЛжец), АРыцарь))
// Добавьте

// Задача 2
// А сказал: "Мы одинаковые."
// Б сказал: "Мы разного вида."
знания2 = new И()
знания2.добавить(new Эквивалентность(АЛжец, new Не(АРыцарь)))
знания2.добавить(new Эквивалентность(БРыцарь, new Не(БЛжец)))
знания2.добавить(new Эквивалентность(new И(АЛжец, БЛжец), АРыцарь))
знания2.добавить(new Эквивалентность(new И(АЛжец, БРыцарь), БРыцарь))
// Добавьте

// Задача 3
// А сказал, но мы вы не услышали.
// Б сказал: "А сказал 'Я лжец'."
// Б сказал: "В - лжец."
// В сказал: "А - рыцарь."
знания3 = new И()
знания3.добавить(new Эквивалентность(АРыцарь, new Не(АЛжец)))
знания3.добавить(БЛжец)
знания3.добавить(new Эквивалентность(ВРыцарь, new Не(ВЛжец)))
знания3.добавить(new Импликация(АЛжец, new Не(АЛжец)))
знания3.добавить(new Импликация(АРыцарь, new Не(ВЛжец)))
знания3.добавить(new Эквивалентность(new И(АЛжец, ВЛжец), БРыцарь))
// Добавьте