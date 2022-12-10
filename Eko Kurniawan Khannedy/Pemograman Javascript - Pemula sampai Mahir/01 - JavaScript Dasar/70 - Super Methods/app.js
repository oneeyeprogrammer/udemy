class Shape {
    paint() {
        return `Paint Shape`
    }
}

class Circle extends Shape {
    paint = () => {
        const x = super.paint()
        return `Paint Circle + ${x}`
    }
}

const circle = new Circle()
console.log(circle.paint())