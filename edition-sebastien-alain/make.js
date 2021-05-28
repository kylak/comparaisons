


//FILE
fs = require('fs');
fsall = require('fs');


require('../database/bible/francais/sebastien/sebastien.js');
require('../database/bible/francais/dumont/dumont.js');



//CHECK NB NO STRONG
nb_no_found	=	1;
strong_spec	=	0;

//INDEX 
book = {
1:'MATTHIEU',
2:'MARC',
3:'LUC',
4:'JEAN',
5:'ACTES',
6:'ROMAINS',
7:'1 CORINTHIENS',
8:'2 CORINTHIENS',
9:'GALATES',
10:'EPHESIENS',
11:'PHILIPPIENS',
12:'COLOSSIENS',
13:'1 THESSALONICIENS',
14:'2 THESSALONICIENS',
15:'1 TIMOTHEE',
16:'2 TIMOTHEE',
17:'TITE',
18:'PHILEMON',
19:'HEBREUX',
20:'JACQUES',
21:'1 PIERRE',
22:'2 PIERRE',
23:'1 JEAN',
24:'2 JEAN',
25:'3 JEAN',
26:'JUDAS',
27:'APOCALYPSE'
}


//HEAD HTML
head_html = `<!DOCTYPE html><html lang="fr">
<head>
<title>BIBLE</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<style type="text/css">
html {
	/* margin:0px; */
	margin:30px;
}


body {
	margin:0px;
	font-family: Serif;
	/* font-size: 11px; */
	font-size: 17px;
}

h1 {
	text-align:center;
}

h2 {
	width:100%;
	text-align:center;
	margin:0;
	padding:0;
	/*font-size:14px;*/
	/*font-size:20px;*/
}

.v b {
    /* font-size: 11px; */
	font-size: 15px;
	font-family: sans-serif;
}



</style>
</head><body>`;

fsall.writeFileSync('all.html',head_html, 'utf8');

//LIVRE
for (livre = 1 ; livre != 28 ; livre++)
{

	//get book name
	book_name=book[livre];

	maxchapitres = Math.max(
	sebastien[livre].length,
	dumont[livre].length)
	
	body_html = '<h1>'+book[livre]+'</h1>';
	console.log(book[livre]);
	
	
	
	
	//CHAPITRE
	for (chapitre = 1 ; chapitre != maxchapitres; chapitre++)
	{
		
		body_html += '\n<h2>'+book[livre]+' '+chapitre+'</h2>\
		<table width="100%" cellpadding="0" cellspacing="0">';
		
		
		maxversets = Math.max(
		sebastien[livre][chapitre].length,
		dumont[livre][chapitre].length)
		
		if (dumont[livre][chapitre].length > sebastien[livre][chapitre].length || dumont[livre][chapitre].length < sebastien[livre][chapitre].length)
			console.log('!! MAXXX !!')
		
		
		//VERSET
		for (verset = 1 ; verset != maxversets; verset++)
		{
			
			if (sebastien[livre][chapitre][verset] && sebastien[livre][chapitre][verset] != "")
				sebastien[livre][chapitre][verset] = sebastien[livre][chapitre][verset].replace(/#/g,' ');

			body_html	+= '\n<tr>\
			<td style="border: none; padding: 0cm" width="48%" class="l" valign="top"><span class="v"><b>'+verset+'</b>\
			'+sebastien[livre][chapitre][verset]+'</span>\
			<td width="2%"> </td>\
			<td style="border: none; padding: 0cm" width="48%" class="r" valign="top"><span class="v"><b>'+verset+'</b>\
			'+dumont[livre][chapitre][verset]+'</span>\
			</tr>';
			

		}
		 body_html +='</table>';
	}
		
		
	//SEND --> N-book - N-chapitre .html
	fs.writeFileSync(livre+'.html',head_html+body_html+'</body></html>', 'utf8');
	fsall.appendFileSync('all.html',body_html, 'utf8');

}

fsall.appendFileSync('all.html','</body></html>', 'utf8');
