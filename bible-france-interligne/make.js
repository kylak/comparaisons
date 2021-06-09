



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



require('../database/bible/francais/sebastien/sebastien.js');
require('../database/bible/francais/dumont/dumont.js');
require('../database/bible/francais/jacqueline/jacqueline.js');
require('../database/bible/francais/osty/osty.js');
require('../database/bible/francais/nbs/nbs.js');
require('../database/bible/francais/grosjean/grosjean.js');
require('../database/bible/francais/bayard/bayard.js');
require('../database/bible/francais/oecumenique/oecumenique.js');
require('../database/bible/francais/liturgie/liturgie.js');
require('../database/bible/francais/jerusalem/jerusalem.js');
require('../database/bible/francais/lienart/lienart.js');
require('../database/bible/francais/rilliet/rilliet.js');
require('../database/bible/francais/darby/darby.js');
require('../database/bible/francais/darby/darby_rev.js');
require('../database/bible/francais/amiot/amiot.js');
require('../database/bible/francais/tresmontant/tresmontant.js');
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






//livre
for (livre = 1 ; livre != 28 ; livre++)
{

	//get book name
	book_name=book[livre];

	maxchapitres = Math.max(
	sebastien[livre].length,
	grosjean[livre].length,
	huguesoltramare[livre].length,
	oecumenique[livre].length,
	fillion[livre].length,
	osty[livre].length,
	segond21[livre].length,
	segond1910[livre].length,
	paroledevie[livre].length,
	liturgie[livre].length,
	amiot[livre].length,
	kuetu[livre].length,
	sacy[livre].length,
	neufchatel[livre].length,
	kingjames[livre].length,
	nbs[livre].length,
	peuples[livre].length,
	darby_rev[livre].length,
	darby[livre].length,
	nfc[livre].length,
	francaiscourant[livre].length,
	parolevivante[livre].length,
	semeur[livre].length,
	mondenouveau2018[livre].length,
	mondenouveau1995[livre].length,
	martin[livre].length,
	edmondstapfer[livre].length,
	ostervald[livre].length,
	jerusalem[livre].length,
	lausanne[livre].length,
	pirotclamer[livre].length,
	chouraqui[livre].length,
	crampon[livre].length,
	rilliet[livre].length,
	dumont[livre].length,
	geneve1669[livre].length)


	if (jacqueline[livre] == "" || !jacqueline[livre])
		jacqueline[livre] = [];
	
	if (tresmontant[livre] == "" || !tresmontant[livre])
		tresmontant[livre] = [];


	//chapitre
	for (chapitre = 1 ; chapitre != maxchapitres; chapitre++)
	{

		
		if (tresmontant[livre][chapitre] == "" || !tresmontant[livre][chapitre])	tresmontant[livre][chapitre] = [];
		if (jacqueline[livre][chapitre] == "" || !jacqueline[livre][chapitre])		jacqueline[livre][chapitre] = [];

		body='';

		maxversets = Math.max(
		sebastien[livre][chapitre].length,
		grosjean[livre][chapitre].length,
		bayard[livre][chapitre].length,
		jacqueline[livre][chapitre].length,
		huguesoltramare[livre][chapitre].length,
		oecumenique[livre][chapitre].length,
		fillion[livre][chapitre].length,
		osty[livre][chapitre].length,
		segond21[livre][chapitre].length,
		segond1910[livre][chapitre].length,
		paroledevie[livre][chapitre].length,
		liturgie[livre][chapitre].length,
		jerusalem[livre][chapitre].length,
		lienart[livre][chapitre].length,
		kuetu[livre][chapitre].length,
		sacy[livre][chapitre].length,
		neufchatel[livre][chapitre].length,
		kingjames[livre][chapitre].length,
		nbs[livre][chapitre].length,
		peuples[livre][chapitre].length,
		darby_rev[livre][chapitre].length,
		darby[livre][chapitre].length,
		amiot[livre][chapitre].length,
		nfc[livre][chapitre].length,
		francaiscourant[livre][chapitre].length,
		parolevivante[livre][chapitre].length,
		semeur[livre][chapitre].length,
		mondenouveau2018[livre][chapitre].length,
		mondenouveau1995[livre][chapitre].length,
		martin[livre][chapitre].length,
		edmondstapfer[livre][chapitre].length,
		ostervald[livre][chapitre].length,
		lausanne[livre][chapitre].length,
		pirotclamer[livre][chapitre].length,
		tresmontant[livre][chapitre].length,
		chouraqui[livre][chapitre].length,
		crampon[livre][chapitre].length,
		rilliet[livre][chapitre].length,
		dumont[livre][chapitre].length,
		geneve1669[livre][chapitre].length)

		


		//verset
		for (verset = 1 ; verset != maxversets; verset++)
		{

			if (sebastien[livre][chapitre][verset] && sebastien[livre][chapitre][verset] != "")
				sebastien[livre][chapitre][verset] = sebastien[livre][chapitre][verset].replace(/#/g,' ');

			lch = livre+'-'+chapitre+'.html#v'+verset;


			
			/*
			if (osty[livre][chapitre][verset] && osty[livre][chapitre][verset] != "")
			{
				llo = osty[livre][chapitre][verset].length;
		
			if (grosjean[livre][chapitre][verset] && grosjean[livre][chapitre][verset] != "")
				{
					lgj = grosjean[livre][chapitre][verset].length;
					
					
					if (lgj+50 < llo)
					{
						console.log('\n\n')
						console.log(book[livre]+':'+chapitre+':'+verset+' '+lgj+' '+llo);
						console.log('OSTY : '+osty[livre][chapitre][verset])
						console.log('')
						console.log('GRJE : '+grosjean[livre][chapitre][verset])
					}
					
				}
			
			}
			*/

body+=`\
<div id="v`+verset+`"></div>
<a href="#a">Δ </a><span class="b">VERSET `+verset+`</span>&ensp;&ensp;<a href="../bible-grec-interligne/`+lch+`">GRE</a>

<table cellspacing="0"><tbody>

<tr><td class="tdg">Sébastien</td>
<td class="td2">2021</td><td class="td3">`+sebastien[livre][chapitre][verset]+`</td></tr>
<tr><td class="tdg">Alain Dumont</td>
<td class="td2">2020</td><td class="td3">`+dumont[livre][chapitre][verset]+`</td></tr>
<tr><td class="tdg">Jacqueline</td>
<td class="td2">1992</td><td class="td3">`+jacqueline[livre][chapitre][verset]+`</td></tr>
<tr><td class="tdg">Osty et Trinquet</td>
<td class="td2">1973</td><td class="td3">`+osty[livre][chapitre][verset]+`</td></tr>
<tr><td class="tdg">Segond NBS</a></td>
<td class="td2">2002</td><td class="td3">`+nbs[livre][chapitre][verset]+`</td></tr>

<tr><td class="tdg">Jean Grosjean</td>
<td class="td2">1971</td><td class="td3">`+grosjean[livre][chapitre][verset]+`</td></tr>

<tr><td class="tdg">Bayard</td>
<td class="td2">2018</td><td class="td3">`+bayard[livre][chapitre][verset]+`</td></tr>

<tr><td class="tdg">Œcuménique</td>
<td class="td2">1976</td><td class="td3">`+oecumenique[livre][chapitre][verset]+`</td></tr>
<tr><td class="tdg">Liturgie</td>
<td class="td2">2013</td><td class="td3">`+liturgie[livre][chapitre][verset]+`</td></tr>
<tr><td class="tdg">Jérusalem</td>
<td class="td2">1973</td><td class="td3">`+jerusalem[livre][chapitre][verset]+`</td></tr>

<tr><td class="tdg">Albert Rilliet</td>
<td class="td2">1858</td><td class="td3">`+rilliet[livre][chapitre][verset]+`</td></tr>

<tr><td class="tdg">AMIOT</td>
<td class="td2">1950</td><td class="td3">`+amiot[livre][chapitre][verset]+`</td></tr>

<tr><td class="tdg">Darby</td>
<td class="td2">1885</td><td class="td3">`+darby[livre][chapitre][verset]+`</td></tr>
<tr><td class="tdg">Darby Rev.</td>
<td class="td2">2006</td><td class="td3">`+darby_rev[livre][chapitre][verset]+`</td></tr>

<tr><td class="tdg">LIENART</td>
<td class="td2">1951</td><td class="td3">`+lienart[livre][chapitre][verset]+`</td></tr>

<tr><td class="tdy">Shora Kuetu</td>
<td class="td2">2021</td><td class="td3">`+kuetu[livre][chapitre][verset]+`</td></tr>

<tr><td class="tdy">Peuples</td>
<td class="td2">2005</td><td class="td3">`+peuples[livre][chapitre][verset]+`</td></tr>

<tr><td class="tdy">Chouraqui</td>
<td class="td2">1977</td><td class="td3">`+chouraqui[livre][chapitre][verset]+`</td></tr>
<tr><td class="tdy">Tresmontant</td>
<td class="td2">2007</td><td class="td3">`+tresmontant[livre][chapitre][verset]+`</td></tr>

<tr><td class="tdy">Pirot et Clamer</td>
<td class="td2">1950</td><td class="td3">`+pirotclamer[livre][chapitre][verset]+`</td></tr>
<tr><td class="tdy">Abbé Crampon</td>
<td class="td2">1923</td><td class="td3">`+crampon[livre][chapitre][verset]+`</td></tr>

<tr><td class="tdy">David Martin</td>
<td class="td2">1744</td><td class="td3">`+martin[livre][chapitre][verset]+`</td></tr>
<tr><td class="tdy">King James</td>
<td class="td2">1611</td><td class="td3">`+kingjames[livre][chapitre][verset]+`</td></tr>
<tr><td class="tdy">Ostervald</td>
<td class="td2">1881</td><td class="td3">`+ostervald[livre][chapitre][verset]+`</td></tr>
<tr><td class="tdy">Abbé Fillion</td>
<td class="td2">1895</td><td class="td3">`+fillion[livre][chapitre][verset]+`</td></tr>

<tr><td class="tdy">Genève</td>
<td class="td2">1669</td><td class="td3">`+geneve1669[livre][chapitre][verset]+`</td></tr>
<tr><td class="tdy">Lausanne</td>
<td class="td2">1872</td><td class="td3">`+lausanne[livre][chapitre][verset]+`</td></tr>

<tr><td class="tdy">Sacy</td>
<td class="td2">1759</td><td class="td3">`+sacy[livre][chapitre][verset]+`</td></tr>

<tr><td class="tdy">Segond 21</td>
<td class="td2">2007</td><td class="td3">`+segond21[livre][chapitre][verset]+`</td></tr>
<tr><td class="tdr">Louis Segond</td>
<td class="td2">1910</td><td class="td3">`+segond1910[livre][chapitre][verset]+`</td></tr>

<tr><td class="tdr">Monde Nouveau</td>
<td class="td2">2018</td><td class="td3">`+mondenouveau2018[livre][chapitre][verset]+`</td></tr>
<tr><td class="tdr">Monde Nouveau</td>
<td class="td2">1995</td><td class="td3">`+mondenouveau1995[livre][chapitre][verset]+`</td></tr>

<tr><td class="tdr">Edmond Stapfer</td>
<td class="td2">1889</td><td class="td3">`+edmondstapfer[livre][chapitre][verset]+`</td></tr>

<tr><td class="tdr">Oltramare</td>
<td class="td2">1874</td><td class="td3">`+huguesoltramare[livre][chapitre][verset]+`</td></tr>

<tr><td class="tdr">Neufchâtel</td>
<td class="td2">1899</td><td class="td3">`+neufchatel[livre][chapitre][verset]+`</td></tr>

<tr><td class="tdr">Parole de vie</td>
<td class="td2">2000</td><td class="td3">`+paroledevie[livre][chapitre][verset]+`</td></tr>

<tr><td class="tdr">Français C. N.</td>
<td class="td2">2019</td><td class="td3">`+nfc[livre][chapitre][verset]+`</td></tr>
<tr><td class="tdr">Français C.</td>
<td class="td2">1982</td><td class="td3">`+francaiscourant[livre][chapitre][verset]+`</td></tr>

<tr><td class="tdr">Semeur</td>
<td class="td2">2000</td><td class="td3">`+semeur[livre][chapitre][verset]+`</td></tr>

<tr><td class="tdr">Parole vivante</td>
<td class="td2">2013</td><td class="td3">`+parolevivante[livre][chapitre][verset]+`</td></tr>

</tbody></table><br>`;


}


//clean regex
body = body.replace(
/<tr><td class="(tdg|tdy|tdr)">\S+(?: \S+){0,4}<\/td>\s<td class="td2">[0-9]+<\/td><td class="td3">(undefined|null|)<\/td><\/tr>/sgi
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
