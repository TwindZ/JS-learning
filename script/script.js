// let balise_to_write = document.getElementById("to_write")
// console.log(balise_to_write.clientHeight)
// let balise_to_write2 = document.querySelector("#to_write span")
// console.log(balise_to_write2)
// let balise_radio = document.querySelectorAll(".zoneChoix input")
// console.log(balise_radio)
// for (let i = 0; i < balise_radio.length; i++)
// 	console.log(balise_radio[i])

// let answer = prompt("Entré votre réponse")
// console.log(wordTester(answer))
// let test = {
// }
// test.wordTester = wordTester(answer)
// test.bonjour()
// test.wordTester()
// function wordTester(answer){
// if(answer === "salut")
// 	return "oui cest ca"
// else
// 	return "non cest pas ca"
// }

// console.log(answer_field)
// // bt_submit.value = "SALUT"
// bt_submit.classList.add("new")
// let textReponse = "Réponse la la la"
// let bterase = `
// 	<div id="answerField">
// 		<h2>${textReponse}</h2>
// 		<input id="answer" type="text" name="answer">
// 		<input id="btSubmit" type="submit" name="answer" value="GO">
// 	</div>
// `
// // bterase.type = "submit"
// // bterase.value = "RESET"
// // bterase.name = "asnwer"
// body.innerHTML = bterase
bt_start.addEventListener("click", () => {
	if(mode[0].checked)
		to_write_list = word_list;
	else
		to_write_list = sentence_list;
	level = 0
	succescount = 0
	score_count.textContent = succescount + "/" + level
	to_write.textContent = to_write_list[level]
	bt_submit.disabled = false
	answer.focus();
})

bt_submit.addEventListener("submit", (event) =>{
	event.preventDefault()
})

bt_submit.addEventListener("click", () =>{
	if(answer.value.includes(to_write_list[level])){
		succescount++
	}
	console.log(succescount)
	level++;
	answer.value = ""
	to_write.textContent = to_write_list[level]
	if(level === sentence_list.length){
		to_write.textContent = "Jeu terminer! Score :" + (succescount / level * 100) + "%"
		level = 0
		succescount = 0
		bt_submit.disabled = true
	}
	score_count.textContent = succescount + "/" + level
	answer.focus()
})

document.addEventListener("keypress", (event) => {
	if(event.key === "Enter")
		bt_submit.click()
})

function launchWord(){
	

}

function waitValidating(){

}

function launchSentence(){
	
}
// document.addEventListener("keypress", (event) => {
// 	if(event.key === "w")
// 	{
// 		if(button.value === "GO")
// 			button.value = "ALLER"
// 		else
// 			button.value = "GO"
// 	}
// })
