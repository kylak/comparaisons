


//FILE
fs = require('fs');

fsall = require('fs');


//SEBASTIEN
sebastien = require('../../bf/osty-trinquet.json');



//CHECK NB NO STRONG
nb_no_found	=	1;
strong_spec	=	0;

//INDEX 
index_nb_name = {
40:'MATTHIEU',
41:'MARC',
42:'LUC',
43:'JEAN',
44:'ACTES',
45:'ROMAINS',
46:'1 CORINTHIENS',
47:'2 CORINTHIENS',
48:'GALATES',
49:'EPHESIENS',
50:'PHILIPPIENS',
51:'COLOSSIENS',
52:'1 THESSALONICIENS',
53:'2 THESSALONICIENS',
54:'1 TIMOTHEE',
55:'2 TIMOTHEE',
56:'TITE',
57:'PHILEMON',
58:'HEBREUX',
59:'JACQUES',
60:'1 PIERRE',
61:'2 PIERRE',
62:'1 JEAN',
63:'2 JEAN',
64:'3 JEAN',
65:'JUDAS',
66:'APOCALYPSE' }


//HEAD HTML
head_html = `<!DOCTYPE html><html lang="fr">
<head>
<title>BIBLE</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<style type="text/css">
body {
	font-family: Cambria;
}
h2 {
	text-align:center;
}


.c {
	font-size: 28px;
}

.f, .v {
    font-size: 18px;
}



</style>
</head><body>`;

fsall.writeFileSync('all.html',head_html, 'utf8');

//LIVRE
for (let [livre, livre_v] of Object.entries(sebastien)) 
{
	
	body_html = '<h2>'+index_nb_name[livre]+'</h2>';
	console.log(index_nb_name[livre]);
	
	
	
	
	//CHAPITRE
	for (let [chapitre, chapitre_v] of Object.entries(sebastien[livre])) 
	{
		
		//body_html += '\n<span class="c">'+chapitre+'</span>\n<table border="0" cellpadding="0" cellspacing="0">';
		body_html += '\n<table border="0" cellpadding="0" cellspacing="0">';
		
		//VERSET
		for (let [verset, verset_v] of Object.entries(sebastien[livre][chapitre])) 
		{
		
			//body_html_f	= '\n<br><span class="v">'+verset+'</span>&nbsp;&nbsp;&nbsp;';
			body_html_f	= verset_v;
			
			//MOT
			/*
			for (let [key, mot_v] of Object.entries(sebastien[livre][chapitre][verset])) 
			{
			
			
				if (verset == 0)
				{
					//fr = verset_v;
					//body_html_f	+= '<span class="f">'+fr+'</span> ';
				}
				else 
				{
				
				//min
				fr			 = mot_v['f'];
				body_html_f	+= fr+' ';

				
				//CHECK FR
				if (fr == 'undefined'){console.log('1:'+livre+':'+chapitre+':'+verset+':'+key+' '+fr+' '+mot_v['g']+' '+mot_v['s'])}
				if (fr == ''){console.log('2:'+livre+':'+chapitre+':'+verset+':'+key+' '+fr+' '+mot_v['g']+' '+mot_v['s'])}
				if (fr == '--'){console.log('3:'+livre+':'+chapitre+':'+verset+':'+key+' '+fr+' '+mot_v['g']+' '+mot_v['s'])}
				if (!fr){console.log('4:'+livre+':'+chapitre+':'+verset+':'+key+' '+fr+' '+mot_v['g']+' '+mot_v['s'])}
			
				}
			}
			*/
			
			if (verset == 0)
			{
			}
			else if (verset == 1)
			{
			body_html	+= '\n<tr><td width="30" class="v"><span class="c">'+chapitre+'</span></td><td class="f" valign="bottom">'+body_html_f+'</td></tr>';
			}
			else
			{
			body_html	+= '\n<tr><td width="30" class="v" valign="top">'+verset+'</td><td class="f">'+body_html_f+'</td></tr>';
			}

		}
		 body_html +='</table>';
	}
		
		
	//SEND --> N-book - N-chapitre .html
	fs.writeFileSync(livre+'.html',head_html+body_html+'</body></html>', 'utf8');
	fsall.appendFileSync('all.html',body_html, 'utf8');

}

fsall.appendFileSync('all.html','</body></html>', 'utf8');
