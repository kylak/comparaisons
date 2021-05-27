



//FILE
fs	= require('fs');
read	= require('fs');
write	= require('fs');



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



//-- BIBLES --


require('../database/bible/grec/seb/sebastien_lemme.js');

require('../database/bible/francais/sebastien/sebastien.js');
require('../database/bible/francais/dumont/dumont.js');
require('../database/bible/francais/jacqueline/jacqueline.js');
require('../database/bible/francais/osty/osty.js');
require('../database/bible/francais/nbs/nbs.js');
require('../database/bible/francais/grosjean/grosjean.js');
/*
require('../database/bible/francais/oecumenique/oecumenique.js');
require('../database/bible/francais/liturgie/liturgie.js');
require('../database/bible/francais/jerusalem/jerusalem.js');
require('../database/bible/francais/rilliet/rilliet.js');
require('../database/bible/francais/darby/darby.js');
require('../database/bible/francais/darby/darby_rev.js');
require('../database/bible/francais/chouraqui/chouraqui.js');
require('../database/bible/francais/pirotclamer/pirotclamer.js');
require('../database/bible/francais/lausanne/lausanne.js');
require('../database/bible/francais/geneve/geneve1669.js');
require('../database/bible/francais/crampon/crampon.js');
require('../database/bible/francais/kuetu/kuetu.js');
require('../database/bible/francais/martin/martin.js');
require('../database/bible/francais/kingjames/kingjames.js');
require('../database/bible/francais/peuples/peuples.js');
require('../database/bible/francais/ostervald/ostervald.js');
require('../database/bible/francais/segond/segond21.js');
require('../database/bible/francais/segond/segond1910.js');
require('../database/bible/francais/mondenouveau/mondenouveau2018.js');
require('../database/bible/francais/mondenouveau/mondenouveau1995.js');
require('../database/bible/francais/edmondstapfer/edmondstapfer.js');
require('../database/bible/francais/huguesoltramare/huguesoltramare.js');
require('../database/bible/francais/fillion/fillion.js');
require('../database/bible/francais/neufchatel/neufchatel.js');
require('../database/bible/francais/paroledevie/paroledevie.js');
require('../database/bible/francais/sacy/sacy.js');
require('../database/bible/francais/nfc/nfc.js');
require('../database/bible/francais/francaiscourant/francaiscourant.js');
require('../database/bible/francais/semeur/semeur.js');
require('../database/bible/francais/parolevivante/parolevivante.js');


*/



//livre
for (livre = 1 ; livre != 28 ; livre++)
{

	//get book name
	book_name=book[livre];

	maxchapitres = Math.max(
	sebastien[livre].length,
	grosjean[livre].length,
	osty[livre].length,
	nbs[livre].length)


	if (jacqueline[livre] == "" || !jacqueline[livre])
		jacqueline[livre] = [];


	//chapitre
	for (chapitre = 1 ; chapitre != maxchapitres; chapitre++)
	{

		body='';

		maxversets = Math.max(
		sebastien[livre][chapitre].length,
		grosjean[livre][chapitre].length,
		osty[livre][chapitre].length,
		nbs[livre][chapitre].length)

		if (jacqueline[livre][chapitre] == "" || !jacqueline[livre][chapitre])
			jacqueline[livre][chapitre] = [];


		//verset
		for (verset = 1 ; verset != maxversets; verset++)
		{



			lch = livre+'-'+chapitre+'.html#v'+verset;



			//SEBASTIEN
			seb_grec	= '';
			seb_lem		= '';
			seb_morph	= '';
			seb_fr		= '';

			if (sebastien_lemme[livre][chapitre][verset] && sebastien_lemme[livre][chapitre][verset] != "")
			{
				sebastien_a = sebastien_lemme[livre][chapitre][verset].match(/\S+/g);
				sebastien_b = sebastien[livre][chapitre][verset].split('#');

				//Check
				if (sebastien_a.length != sebastien_b.length)
					console.log('SEB FR LENGTH != SEB GR LENGTH  --> '+sebastien_a.length+' '+sebastien_b.length)

				for (s = 0 ; s != sebastien_a.length ; s++)
				{

					seb_lem += sebastien_a[s].split('=')[1]+' ';

					//new morph
					sgsm = sebastien_a[s].split('=')[2].split(',');
					newmorph = '';
					for (nbnas = 0 ; nbnas != sgsm.length ; nbnas++)
					{
						if (!sgsm[nbnas][1])
						{
							//console.log(sgsm[nbnas])
						}
						newmorph += sgsm[nbnas][0]+sgsm[nbnas][1]
					}

					seb_grec += '<a title="'+sebastien_a[s].split('=')[2]+'" target="_blank" href="../lemme/'+sebastien_a[s].split('=')[1]+'.html">'+sebastien_a[s].split('=')[0]+'</a> ';

				}



				for (s = 0 ; s != sebastien_b.length ; s++)
				{
					seb_fr += sebastien_b[s].replace(/ +/g,'-')+' ';
				}



			}

			if (sebastien[livre][chapitre][verset] && sebastien[livre][chapitre][verset] != "")
				sebastien[livre][chapitre][verset] = sebastien[livre][chapitre][verset].replace(/#/g,' ');





		//	console.log(book[livre]+':'+chapitre+':'+verset+' '+dumont[livre][chapitre][verset]);

body+=`\
<div id="v`+verset+`"></div>
<a href="#a">Δ </a><span class="b">VERSET `+verset+`</span>

<table cellspacing="0"><tbody>
<tr><td class="td1">Sébastien GREC</td>
<td class="td2">2021</td><td class="td3">`+seb_grec+`</td></tr>
<tr><td class="td1">Sébastien FR</td>
<td class="td2">2021</td><td class="td3">`+sebastien[livre][chapitre][verset]+`</td></tr>
<tr><td class="td1">Alain Dumont</td>
<td class="td2">2020</td><td class="td3">`+dumont[livre][chapitre][verset]+`</td></tr>
<tr><td class="td1">Jacqueline</td>
<td class="td2">1992</td><td class="td3">`+jacqueline[livre][chapitre][verset]+`</td></tr>
<tr><td class="td1">Osty et Trinquet</td>
<td class="td2">1973</td><td class="td3">`+osty[livre][chapitre][verset]+`</td></tr>
<tr><td class="td1">Segond NBS</a></td>
<td class="td2">2002</td><td class="td3">`+nbs[livre][chapitre][verset]+`</td></tr>
<tr><td class="td1">Jean Grosjean</td>
<td class="td2">1971</td><td class="td3">`+grosjean[livre][chapitre][verset]+`</td></tr>



</tbody></table><br>`;


}


//clean regex
body = body.replace(
/<tr><td class="td1">\S+(?: \S+){0,4}<\/td>\s<td class="td2">[0-9]+<\/td><td class="td3">(undefined|null|)<\/td><\/tr>/sgi
,'');



//add intro
intro_book=`<?xml version='1.0' encoding='utf-8'?><html id="a" xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>BIBLE</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<link href="style.css" rel="stylesheet">
</head><body><center>
<a href="1-1.html">MATTHIEU</a>&ensp;
<a href="2-1.html">MARC</a>&ensp;
<a href="3-1.html">LUC</a>&ensp;
<a href="4-1.html">JEAN</a>&ensp;
<a href="5-1.html">ACTES</a>&ensp;
<a href="6-1.html">ROMAINS</a>&ensp;
<a href="7-1.html">1 CORINTHIENS</a>&ensp;
<a href="8-1.html">2 CORINTHIENS</a>&ensp;
<a href="9-1.html">GALATES</a>&ensp;
<a href="10-1.html">EPHESIENS</a>&ensp;
<a href="11-1.html">PHILIPPIENS</a>&ensp;
<a href="12-1.html">COLOSSIENS</a>&ensp;
<a href="13-1.html">1 THESSALONICIENS</a>&ensp;
<a href="14-1.html">2 THESSALONICIENS</a>&ensp;
<a href="15-1.html">1 TIMOTHEE</a>&ensp;
<a href="16-1.html">2 TIMOTHEE</a>&ensp;
<a href="17-1.html">TITE</a>&ensp;
<a href="18-1.html">PHILEMON</a>&ensp;
<a href="19-1.html">HEBREUX</a>&ensp;
<a href="20-1.html">JACQUES</a>&ensp;
<a href="21-1.html">1 PIERRE</a>&ensp;
<a href="22-1.html">2 PIERRE</a>&ensp;
<a href="23-1.html">1 JEAN</a>&ensp;
<a href="24-1.html">2 JEAN</a>&ensp;
<a href="25-1.html">3 JEAN</a>&ensp;
<a href="26-1.html">JUDAS</a>&ensp;
<a href="27-1.html">APOCALYPSE</a></center><br><br>
<!-- Vous scrutez les écritures parce que vous pensez dans elles avoir la vie éternelle  -->
<!-- et celles-là sont les témoignantes d'autour de moi -->
<!-- et vous ne voulez pas venir vers moi afin que vous ayez la vie -->`;



	//change actual book
	intro_book=intro_book.replace(book_name,'<font color="red">[\\ '+book_name+' /]</font>');


	//intro chap
	nb_chap=maxchapitres-1;
	intro_chap='';
	for (nb=0;nb!=nb_chap;nb++)
	{
		nb_for=nb+1;
		intro_chap+='<a href="'+livre+'-'+nb_for+'.html">CH.'+nb_for+'</a>&ensp;';
	}

	//change actual chapter
	intro_chap=intro_chap.replace('CH.'+chapitre,'<font color="red">[\\ CH. '+chapitre+' /]</font>')
	intro_chap+='<br><br>';


	//intro ver
	nb_ver=maxversets-1;
	intro_ver='';
	for (nb=0;nb!=nb_ver;nb++)
	{
		nb_for=nb+1;
		intro_ver+='<a href="#v'+nb_for+'">V.'+nb_for+'</a>&ensp;';
	}
	intro_ver+='<br><br>';

/*
//find...

	if (body.match(/s.est fait chair/gi))
	{
		console.log('yes '+lch)
	}
*/

	//SEND --> N-book - N-chapitre .html
	fs.writeFileSync(livre+'-'+chapitre+'.html',intro_book+intro_chap+intro_ver+body+'</body></html>', 'utf8');

	}

}
