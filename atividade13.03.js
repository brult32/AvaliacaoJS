class Student {
	constructor(name, age, birthyear, job, seclang) {
		this.name = name;
		this.age = age;
		this.birthyear = birthyear;
		this.job = job;
		this.seclang = seclang;
	}
}

const myNames = ['Adriano', 'Bruno', 'Danilo', 'Jasa', 'Julia', 'Kevin', 'Mari', 'Paulino', 'Schiffel'];
const myAges = ['25', '39', '17', '17', '17', '17', '17', '32', '17'];
const myJob = ['Contrução Civil', 'Professor', 'Estudante', 'Estudante', 'Estudante', 'Estudante', 'Estudante', 'Marido Troféu', 'Estudante'];
const mySecLang = ['Espanhol', 'Inglês', 'Russo', 'Japones', 'Francês', 'Espanhol', 'Koreano', 'Inglês', 'Alemão'];

let myStudents = [];

function getBirthYear(age){
	let thisYear = new Date().getFullYear();
	// console.log(thisYear - myAges[index]);
	return thisYear - age;
}
function populateMyStudents(){
	for (let index in myNames){
		myStudents.push(new Student(myNames[index], myAges[index], getBirthYear(myAges[index]), myJob[index], mySecLang[index]))
		// console.log(myStudents[index].name);
	}
}
populateMyStudents();

function checkIfStudent(job){
	if (job == 'Estudante'){
		return `é estudante\ndo E.M.`;
	} else {
		return `tem formação\nanterior como ${job} e`;
	}
}
function printCurriculum(obj){
	console.log(`${obj.name}, ${obj.age} anos, estudante de informática\npara internet, nasceu no ano ${obj.birthyear}, ${checkIfStudent(obj.job)}, e tem ${obj.seclang} como segundo idioma.\n`);
}
function printAll(){
	for(let person of myStudents){
		printCurriculum(person);
	}
}
printAll();

// let mySorted = myNames.sort();
// console.log(mySorted);

/*
para esta atividade não vi dificuldades, apenas na hora de usar loop 'for in'-'for of', 
normalmente tenho que testar para lembrar qual usa o indice, qual o valor.
*/
