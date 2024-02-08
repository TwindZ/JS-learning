let answer = prompt("Entré votre réponse")
console.log(wordTester(answer))
let test = {
}
test.wordTester = wordTester(answer)
test.bonjour()
test.wordTester()
function wordTester(answer){
if(answer === "salut")
	return "oui cest ca"
else
	return "non cest pas ca"
}