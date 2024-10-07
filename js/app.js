const canvas =querySelector ('
    canvas')
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
            position.y, this.width, this.height
        )
    } }

    const map = [
        ['-', '-', '-', '-', '-', '-',],
        ['-', '-', '-', '-', '-', '-',],
        ['-', '-', '-', '-', '-', '-',],
        ['-', '-', '-', '-', '-', '-',]
  
      ]
    const boundaries = [
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
}),
]

boundaries.forEach(boundary => {
    boundary.draw()
})