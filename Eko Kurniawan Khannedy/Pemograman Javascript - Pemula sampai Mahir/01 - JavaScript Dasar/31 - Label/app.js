loppi:
    for (let i = 0; i < 3; i++) {
        loppj: for (let j = 0; j < 100; j++) {
            if (j > 10) {
                continue loppi
            }
            console.log(`${i} - ${j}`)
        }
    }