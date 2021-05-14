

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
13:'1 TESSALONICIENS',
14:'2 TESSALONICIENS',
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


biblos = {
1:'ΚΑΤΑ ΜΑΘΘΑΙΟΝ',
2:'ΚΑΤΑ ΜΑΡΚΟΝ',
3:'ΚΑΤΑ ΛΟΥΚΑΝ',
4:'ΚΑΤΑ ΙΩΑΝΝΗΝ',
5:'ΠΡΑΞΕΙΣ ΑΠΟΣΤΟΛΩΝ',
6:'ΠΡΟΣ ΡΩΜΑΙΟΥΣ',
7:'ΠΡΟΣ ΚΟΡΙΝΘΙΟΥΣ Α',
8:'ΠΡΟΣ ΚΟΡΙΝΘΙΟΥΣ Β',
9:'ΠΡΟΣ ΓΑΛΑΤΑΣ',
10:'ΠΡΟΣ ΕΦΕΣΙΟΥΣ',
11:'ΠΡΟΣ ΦΙΛΙΠΠΗΣΙΟΥΣ',
12:'ΠΡΟΣ ΚΟΛΟΣΣΑΕΙΣ',
13:'ΠΡΟΣ ΘΕΣΣΑΛΟΝΙΚΕΙΣ Α',
14:'ΠΡΟΣ ΘΕΣΣΑΛΟΝΙΚΕΙΣ Β',
15:'ΠΡΟΣ ΤΙΜΟΘΕΟΝ Α',
16:'ΠΡΟΣ ΤΙΜΟΘΕΟΝ Β',
17:'ΠΡΟΣ ΤΙΤΟΝ',
18:'ΠΡΟΣ ΦΙΛΗΜΟΝΑ',
19:'ΠΡΟΣ ΕΒΡΑΙΟΥΣ',
20:'ΙΑΚΩΒΟΥ',
21:'ΠΕΤΡΟΥ Α',
22:'ΠΕΤΡΟΥ Β',
23:'ΙΩΑΝΝΟΥ Α',
24:'ΙΩΑΝΝΟΥ Β',
25:'ΙΩΑΝΝΟΥ Γ',
26:'ΙΟΥΔΑ',
27:'ΑΠΟΚΑΛΥΨΙΣ ΙΩΑΝΝΟΥ'
}


function filtre(mo)
{
	mo=mo.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
	mo=mo.toLowerCase();
	mo=mo.replace(/¶|⋄|\?|!|\(|\)|–|:|;|,|\.|\·|“|”|‘|’|᾽|ʼ|\*|\[|\]|…|\|/gi,'');

	return mo;
}



//HEAD HTML
head_html = `<!DOCTYPE html><html lang="fr">
<head>
<title>BIBLE</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<style type="text/css">
/* CSS PAPIER
html {
	margin:0px;
}


body {
	margin:0px;
	font-family: Serif;
	font-size:11px;
}


.chap {
	font-size:14px;
}

.ver {
	font-size:11px;
	font-weight:bold;
}

.text {
	font-size:11px;
}

*/

html {
	margin:30px;
}


body {
	font-family: sans-serif;
	font-size:17px;
}


.chap {
	font-size:20px;
	float:left;
	margin:10px;
}

.ver {
	font-size:17px;
	font-weight:bold;
}

.text {
	font-size:17px;
}

</style></head><body>`;

tail_html ='</body></html>';



fs		= require('fs');
fs2		= require('fs');



require('../database/bible/grec/seb/sebastien_lemme.js');

body_html_all = '';



//livre
for (livre = 1 ; livre != 28 ; livre++)
{


	console.log(biblos[livre]);
	body_html		=  '\n<h3><center>'+biblos[livre]+'</center></h3>\n';
	body_html_all	+= '\n<h3><center>'+biblos[livre]+'</center></h3>\n';

	//chapitre
	for (chapitre = 1 ; chapitre != sebastien_lemme[livre].length ; chapitre++)
	{


		body_html		+= '<br><br><div class="chap">'+biblos[livre]+' &ensp;'+chapitre+'</div>\n';
		body_html_all	+= '<br><br><div class="chap">'+biblos[livre]+' &ensp;'+chapitre+'</div>\n';


		//verset
		for (verset = 1 ; verset != sebastien_lemme[livre][chapitre].length; verset++)
		{

			body_html		+= '<span class="ver"><b>'+verset+'</b></span> ';
			body_html_all	+= '<span class="ver"><b>'+verset+'</b></span> ';

			lcv=livre+':'+chapitre+':'+verset;
			cv=chapitre+':'+verset;


			verset_sebastien	= sebastien_lemme[livre][chapitre][verset].split(' ');
			verset_seb_grec		= '';

  			if (verset_sebastien != "" && verset_sebastien)
	 		{
	 			for (mot = 0 ; mot != verset_sebastien.length ; mot++)
				{
					verset_seb_grec += verset_sebastien[mot].split('=')[0]+' ';

				}
  			}

			verset_seb_grec = verset_seb_grec.replace(/\s+$/,'');
			verset_seb_grec = verset_seb_grec.replace(/\./g,'.&nbsp;&nbsp;');
			verset_seb_grec = verset_seb_grec.replace(/\·/g,'·&nbsp;&nbsp;');
			verset_seb_grec = verset_seb_grec.replace(/\;/g,';&nbsp;&nbsp;');


			body_html		+= '<span class="text">'+verset_seb_grec+'</span>\n';
			body_html_all	+= '<span class="text">'+verset_seb_grec+'</span>\n';

		}


	}


	//livre grec
	fs.writeFileSync(livre+'.html',head_html+body_html+'</body></html>', 'utf8');

}


fs2.writeFileSync('all.html',head_html+body_html_all+'</body></html>', 'utf8');
