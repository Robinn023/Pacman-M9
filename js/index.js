const canvas = document.querySelector ('canvas')
const c = canvas.getContext('2d')

    canvas.width = innerWidth
    canvas.height = innerHeight 

class Boundary {
    constructor({position}) {
        this.position = position
        this.position = position
        this.width = 40
        this.height = 40
    }

    draw(){
        c.fillStyle = 'blue'
        c.fillRect(thus.position.x, this.
            position.y, this.width, 
            this.height)
        }
    } 

    const map = [
        ['-', '-', '-', '-', '-', '-',],
        ['-', '-', '-', '-', '-', '-',],
        ['-', '-', '-', '-', '-', '-',],
        ['-', '-', '-', '-', '-', '-',]

      ]
    const boundaries = []

    map.forEach((row, i) => {
        row.forEach((symbol) => {
            switch (symbol) {
                case '-':
                    boundaries.push(
                        new Boundary({
                            position: {
                                x: 40,
                                y: 40 * 1
                            }
                        })
                    )
                break
            }
        })
    })

boundaries.forEach((boundary) => {
    boundary.draw()
})

    new Boundary({
        position: {
            x: 0,
            y: 0
        }
    }),
    new Boundary({
        position: {
            x: 41,
            y: 0
        }
}),
new Boundary({
    position: {
        x: 41,
        y: 0
    }
}),
new Boundary({
    position: {
        x: 41,
        y: 0
    }
}),
    new Boundary({
        position: {
            x: 41,
            y: 0
        }
})