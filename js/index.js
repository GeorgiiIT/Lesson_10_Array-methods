var users = [
	["john","red",5,["ball", "book", "pen"]],
	["becky","blue",10,["tape", "backpack", "pen"]],
	["susy","red",55,["ball", "eraser", "pen"]],
	["tyson","green",1,["book", "pen"]],
  ];
let usersWithExclamation = JSON.parse( JSON.stringify(users))
.forEach(
	  function(item) {
		item[0] += `!`
		  console.log(item)
  });
let usersWithquestion = JSON.parse( JSON.stringify(users))
.map(function(element){
element[0] += `?`
console.log(element);
return element +=`?`
});
let usersColor = users
.filter(color => color.includes(`red`))
let tootalScore = 0;
let trs = usersColor
.map(product => {
	tootalScore += product[2];
	return `<tr>${product.map((item) => {
	return `<td> ${Array.isArray(item) ? item.join(`; `) : capitalize (item.toString())} </td>` 
	}).join(``)}</tr>`;
})
.join(``);

function capitalize(word) {
	return word.charAt(0).toUpperCase() + word.slice(1)
 };


document.write(`<table border="1">
<thead>
	<tr>
		<th>Name</th>
		<th>Comand</th>
		<th>Score</th>
		<th>Data</th>
	</tr>
</thead>
<tbody>${trs}</tbody>
<tfoot>
        <tr>
            <td colspan="4">Total score: ${tootalScore}</td>
        </tr>
    </tfoot>
</table>`);