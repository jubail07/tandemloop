
exports.getHome = async (req, res) => {
    try {
        return res.render("home",{result:null})
    } catch (error) {
        console.log(error, 'error in calculator')
    }
}

exports.calculate = async (req, res) => {
    try {
        const a = parseFloat(req.body.a)
        const b = parseFloat(req.body.b)
        const operation = req.body.operation

        let result

        if (operation === "add") {
            result = a + b
        } else if (operation === "sub") {
            result = a - b
        } else if (operation === "mul") {
            result = a * b
        } else if (operation === "div") {
            if (b === 0) {
                result = "cannot divide by zero"
            } else {
                result = a / b
            }
        }else{
            result = 'invalid'
        }
        return res.render("home",{result})
    } catch (error) {
        console.log(error, 'error in calculate')
    }
}